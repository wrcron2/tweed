import { useState, useRef, useCallback } from "react";

type LoadingStatus = "idle" | "loading" | "error" | "success";

export const useRandomQuestion = () => {
    const [status, setStatus] = useState<LoadingStatus>("idle");
    const [isError, setIsError] = useState<boolean | null>(null);
    const [isLoading, setIsLoading] = useState<boolean | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Function to clear any existing notification timers
    const clearNotificationTimer = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };



    const fetchQuestion = useCallback(async (fn: () => Promise<any>) => {
        try {
        
            clearNotificationTimer();
            setIsError(null)
            setIsLoading(true);
            
            const data = await fn();
            
            setIsError(false);
            
            // Start notification timer to clear after 3 seconds
            // setNotificationTimer();
            
            return data;
        } catch (error) {
        
            setIsError(true);
            console.log("Error in fetchQuestion:", error);
            
            return null;
        } finally {
            timerRef.current = setTimeout(() => {
                setIsError(null);
            }, 2000);
            setIsLoading(false);
        }
    }, []);

    return {
        fetchQuestion,
        status,
        isError,
        isLoading,
        // clearNotifications
    };
};

export default useRandomQuestion;