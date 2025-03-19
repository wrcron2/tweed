import { useEffect, useState } from "react";
import { useRandomQuestion } from "../hooks/useRandomQuestion";
import QuizCreatorService from "../services/quizCreatorService";
import NotificationMessage from "../components/NotificationMessage";
import { on } from "events";
import { error } from "console";
import { useQuiz } from "../context/QuizContext";
import { LOCAL_STORAGE_KEYS } from "../models/quizModel";

interface QuizCreatorProps {}

enum NotificationType {
  SAVE = 1,
  FETCH = 2,
}
const notificationsMessages = {
  [NotificationType.FETCH]: {
    success: "Question fetched successfully!",
    error: "Error fetching question: Server error (500)",
  },
  [NotificationType.SAVE]: {
    success: "Question saved successfully!",
    error: "Error saving question: Duplicate question found",
  },
};

const QuizCreator: React.FC<QuizCreatorProps> = () => {
  const [questionText, setQuestionText] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const { fetchQuestion, isError, isLoading } = useRandomQuestion();
  const [showNotification, setShowNotification] = useState<boolean | null>(
    null
  );
  const [notificationType, setNotificationType] = useState<NotificationType>(
    NotificationType.FETCH
  );

  const { storageQuestions } = useQuiz();

  useEffect(() => {
    if (isError !== null) {
      setNotificationType(NotificationType.FETCH);
    }
    setShowNotification(isError);
  }, [isError]);

  const handleFetchQuestion = async () => {
    const fetchRandomQuestion = QuizCreatorService.fetchRandomQuestion;

    const result = await fetchQuestion(fetchRandomQuestion);
    if (result) {
      setQuestionText(result.question || "");
      setImageUrl(result.imageUrl || "");
    }
  };

  const onSaveQuestion = () => {
    try {
      setNotificationType(NotificationType.SAVE);

      const isDuplicate = storageQuestions.some(
        (q: any) => q.question === questionText
      );
      if (isDuplicate) {
        setShowNotification(true);
        return;
      }
      const questionData = {
        id: storageQuestions.length + 1,
        question: questionText,
        imageUrl: imageUrl,
        timestamp: new Date().getTime(),
        answer: "",
      };
      storageQuestions.push(questionData);
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.SAVED_QUESTIONS,
        JSON.stringify(storageQuestions)
      );
      setShowNotification(false);
    } catch (error) {
      console.error("Error saving question:", error);
      setShowNotification(true);
    } finally {
      setTimeout(() => {
        setShowNotification(null);
      }, 2000);
    }
    // Save the question to the database
    console.log("Saving question...");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 max-w-6xl mx-auto">
      {/* Left Panel - Quiz Creation */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Create Quiz Question
        </h2>

        {/* Notification Area */}
        <NotificationMessage
          isError={showNotification}
          messages={notificationsMessages[notificationType]}
        />

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="questionText"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Question Text
            </label>
            <textarea
              onChange={(e) => setQuestionText(e.target.value)}
              value={questionText}
              id="questionText"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
              placeholder="Enter your question text here..."
              defaultValue=""
            />
          </div>

          <div>
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Image URL (Optional)
            </label>
            <input
              onChange={(e) => setImageUrl(e.target.value)}
              value={imageUrl}
              type="text"
              id="imageUrl"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Image Preview */}
          <div className="border border-gray-200 rounded-md p-3 bg-gray-50">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Image Preview:
            </p>
            <div className="h-48 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500">No image to preview</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleFetchQuestion}
              disabled={isLoading ?? false}
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md flex items-center justify-center disabled:bg-blue-300"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Fetching Question...
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    ></path>
                  </svg>{" "}
                  Fetch Random Question
                </>
              )}
            </button>

            <button
              disabled={isLoading ?? false}
              onClick={onSaveQuestion}
              type="button"
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md flex items-center justify-center disabled:bg-green-300"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                ></path>
              </svg>
              Save Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuizCreator;
