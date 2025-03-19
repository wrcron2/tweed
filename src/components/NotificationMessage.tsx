import React from "react";

interface NotificationMessageProps {
  //   showSuccess: boolean;
  //   showError: boolean;
  //   successMessage?: string;
  //   errorMessage?: string;
  isError: boolean | null;
  messages:  { success: string; error: string };
}

const NotificationMessage: React.FC<NotificationMessageProps> = ({
  isError,
  messages
}) => {
  //   if (!showSuccess && !showError) return null;
    //   const message = showSuccess ? successMessage : showError ? errorMessage : "";
  return (
    <div className="h-12">
      {isError === false && isError !== null && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md flex items-center">
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
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          {messages?.success}
        </div>
      )}

      {isError === true && isError !== null && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md flex items-center">
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
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          {messages?.error}
        </div>
      )}
    </div>
  );
};

export default NotificationMessage;
