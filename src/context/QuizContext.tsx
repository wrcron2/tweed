import { createContext, useContext, useEffect, useState } from "react";
import { LOCAL_STORAGE_KEYS, Question } from "../models/quizModel";

interface QuizContextType {
  storageQuestions: Question[];
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [storageQuestions, setStorageQuestions] = useState<Question[]>([]);

  useEffect(() => {
    try {
      const storageQuestions = localStorage.getItem(LOCAL_STORAGE_KEYS.SAVED_QUESTIONS);
      if (storageQuestions) {
        const savedQuestions = JSON.parse(storageQuestions);
        setStorageQuestions(savedQuestions);
      }
    } catch (error) {
      console.error("Error loading saved questions:", error);
    }
  }, []);

  return (
    <QuizContext.Provider value={{ storageQuestions }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};
