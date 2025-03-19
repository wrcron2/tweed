import { Avatar } from "@radix-ui/themes";
import { useQuiz } from "../context/QuizContext";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { profileSelector } from "../redux/slices/userProfileSlice";
import { LOCAL_STORAGE_KEYS } from "../models/quizModel";
import { Link } from "react-router";

interface QuizViewerProps {}

const QuizViewer: React.FC<QuizViewerProps> = () => {
  const userData = useSelector(profileSelector);
  const questionsRef = useRef<{ [key: number]: string }>({});
  const [resetKey, setResetKey] = useState<number>(0);
  const { storageQuestions } = useQuiz();

  const resetQuiz = () => {
    questionsRef.current = {};

    setResetKey((prevKey) => prevKey + 1);
  };

  const onAnswerChange = (questionId: number, answer: string) => {
    questionsRef.current[questionId] = answer;
  };

  const onSubmitQuiz = () => {
    // create console table

    const tableData = storageQuestions.map((question) => {
      question.answer = questionsRef.current[question.id];
      return {
        "Question ID": question.id,
        Question: question.question,
        Answer: questionsRef.current[question.id] || "Not answered",
        Characters: (questionsRef.current[question.id] || "").length,
      };
    });
    console.table(tableData);

    try {
      const questionsWithAnswers = JSON.stringify(storageQuestions);
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.SAVED_QUESTIONS,
        questionsWithAnswers
      );
    } catch (e) {
      console.error("failed to insert user answers to localstorage");
    }

    // console.table(tableData);
    resetQuiz();

    alert("Quiz submitted! Check the console for details.");
  };

  return (
    <div className="QuizViewer h-full bg-gray-100 p-12">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8 flex items-center gap-2">
        <Avatar
          size="3"
          src={userData?.imageUrl}
          radius="full"
          fallback="N/A"
        />

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Welcome, {userData.name}!
          </h2>
          <p className="text-gray-600">
            Complete the quiz below by answering all questions.
          </p>
        </div>
      </div>
      <div
        key={resetKey}
        className="questions-list flex flex-col gap-2.5  max-h-3/4 overflow-y-scroll"
      >
        {storageQuestions.map((question) => (
          <div key={question.id} className="bg-white rounded-lg shadow-md">
            <div className="p-6">
              {
                <div className="mb-4 flex items-baseline gap-2">
                  <Link to={`/quiz-details/${question.id}`}>
                    <span className="text-blue-700">View Details</span>
                  </Link>
                  <Avatar
                    size="3"
                    src={question?.imageUrl}
                    radius="full"
                    fallback="N/A"
                  />
                  <h3 className="text-xl font-semibold mb-4">
                    Question {question.id}: {question.question}
                  </h3>
                </div>
              }

              <div>
                <label
                  htmlFor={`answer-${question.id}`}
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Answer:
                </label>
                <textarea
                  id={`answer-${question.id}`}
                  rows={4}
                  onChange={(e) => onAnswerChange(question.id, e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Type your answer here..."
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <footer className="flex justify-center m-4 align-center">
        <button
          type="button"
          role="button"
          className="text-white bg-blue-700  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer"
          onClick={onSubmitQuiz}
        >
          Submit Quiz
        </button>
      </footer>
    </div>
  );
};

export default QuizViewer;
