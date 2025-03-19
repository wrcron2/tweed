

export interface Question {
    id: number;
    question: string;
    imageUrl: string;
    timestamp: number;
    answer?: string; 
}


export const LOCAL_STORAGE_KEYS = {
    SAVED_QUESTIONS: "savedQuestions",
};