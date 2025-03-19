import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useQuiz } from "../context/QuizContext";
import { Question } from "../models/quizModel";
import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";

const QuizDetails = () => {
  const { id } = useParams();
  const { storageQuestions } = useQuiz();
  const [question, setQuestion] = useState<Question>();

  useEffect(() => {
    const q = storageQuestions.find((question) => question.id === Number(id));
    if (q) {
      setQuestion(q);
    }
  }, [id, storageQuestions]);

  return (
    <div className="flex flex-col">
      <h1>Quiz Details for ID: {id}</h1>

      <Box maxWidth="240px">
        <Card className="card w-[36rem] p-2.5">
          <Flex gap="3" align="center">
            <Avatar
              size="3"
              src={question?.imageUrl}
              radius="full"
              fallback="N/A"
            />
            <Box>
              <Text size="3" weight="bold">
                {question?.question || "Unknown Question"}
              </Text>
              <Text as="div" size="2" color="gray">
                {question?.answer || "Unknown Answer"}
              </Text>
            </Box>
          </Flex>
        </Card>
      </Box>
    </div>
  );
};

export default QuizDetails;
