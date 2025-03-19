import { Question } from "../models/quizModel";






class QuizCreatorService {

  fetchRandomQuestion(): Promise<Question | { status: number; message: string }> {
    const randomQuestion: Question = questions[Math.floor(Math.random() * questions.length)];
    // fetch random question from API
    return new Promise((resolve, reject) => {  
        if(Math.random() > 0.5) {
        setTimeout(() => {
            resolve({
            id: randomQuestion.id,
            question: randomQuestion.question,
            imageUrl: randomQuestion.imageUrl,
            timestamp: new Date().getTime(),
            });
        }, 1000);
        } else {
            setTimeout(() => {
                reject({
                    status: 500,
                    message: "Internal Server Error",
                  });
            }, 2000)
          
        }
    });

  }
}

export default new QuizCreatorService();



  const questions: Question[] = [
    {
      id: 1,
      question: "What is React Context used for?",
      imageUrl: "https://example.com/images/react-context.jpg",
      timestamp: new Date().getTime()
    },
    {
      id: 2,
      question: "How do custom hooks differ from regular functions?",
      imageUrl: "",
      timestamp: new Date().getTime()
    },
    {
      id: 3,
      question: "Explain the useEffect cleanup function and when it's called",
      imageUrl: "https://example.com/images/useeffect.jpg",
      timestamp: new Date().getTime()
    },
    {
      id: 4,
      question: "What are the key differences between useState and useReducer?",
      imageUrl: "",
      timestamp: new Date().getTime()
    },
    {
      id: 5,
      question: "Describe the component lifecycle in React functional components",
      imageUrl: "https://example.com/images/component-lifecycle.jpg",
      timestamp: new Date().getTime()
    },
    {
      id: 6,
      question: "What is React.memo and when should you use it?",
      imageUrl: "",
      timestamp: new Date().getTime()
    },
    {
      id: 7,
      question: "Explain the concept of lifting state up in React",
      imageUrl: "https://example.com/images/lifting-state.jpg",
      timestamp: new Date().getTime()
    },
    {
      id: 8,
      question: "How does React's Virtual DOM work?",
      imageUrl: "",
      timestamp: new Date().getTime()
    },
    {
      id: 9,
      question: "What are the different ways to style React components?",
      imageUrl: "https://example.com/images/react-styling.jpg",
      timestamp: new Date().getTime()
    },
    {
      id: 10,
      question: "What is the purpose of the useRef hook?",
      imageUrl: "",
      timestamp: new Date().getTime()
    },
    {
      id: 11,
      question: "What are controlled vs uncontrolled components in React?",
      imageUrl: "https://example.com/images/controlled-components.jpg",
      timestamp: new Date().getTime()
    },
    {
      id: 12,
      question: "Explain how React Router works",
      imageUrl: "",
      timestamp: new Date().getTime()
    },
    {
      id: 13,
      question: "What is prop drilling and how can you avoid it?",
      imageUrl: "https://example.com/images/prop-drilling.jpg",
      timestamp: new Date().getTime()
    },
    {
      id: 14,
      question: "Describe the difference between server-side rendering and client-side rendering",
      imageUrl: "",
      timestamp: new Date().getTime()
    },
    {
      id: 15,
      question: "What is the purpose of useMemo hook?",
      imageUrl: "https://example.com/images/usememo.jpg",
      timestamp: new Date().getTime()
    },
    {
      id: 16,
      question: "How would you optimize React performance?",
      imageUrl: "",
      timestamp: new Date().getTime()
    },
    {
      id: 17,
      question: "What are React fragments and why are they useful?",
      imageUrl: "https://example.com/images/fragments.jpg",
      timestamp: new Date().getTime()
    },
    {
      id: 18,
      question: "How does React handle events?",
      imageUrl: "",
      timestamp: new Date().getTime()
    },
    {
      id: 19,
      question: "Explain the concept of Higher-Order Components (HOCs)",
      imageUrl: "https://example.com/images/hocs.jpg",
      timestamp: new Date().getTime()
    },
    {
      id: 20,
      question: "What is the purpose of useCallback hook?",
      imageUrl: "",
      timestamp: new Date().getTime()
    },
    {
      id: 21,
      question: "How does state batching work in React?",
      imageUrl: "https://example.com/images/state-batching.jpg",
      timestamp: new Date().getTime()
    },
    {
      id: 22,
      question: "What is the React Suspense feature?",
      imageUrl: "",
      timestamp: new Date().getTime()
    },
    {
      id: 23,
      question: "Explain the difference between state and props",
      imageUrl: "https://example.com/images/state-props.jpg",
      timestamp: new Date().getTime()
    },
    {
      id: 24,
      question: "How do you handle forms in React?",
      imageUrl: "",
      timestamp: new Date().getTime()
    },
    {
      id: 25,
      question: "What are React portals and when would you use them?",
      imageUrl: "https://example.com/images/portals.jpg",
      timestamp: new Date().getTime()
    },
    {
      id: 26,
      question: "Explain how to implement error boundaries in React",
      imageUrl: "",
      timestamp: new Date().getTime()
    },
    {
      id: 27,
      question: "What is the difference between React and React Native?",
      imageUrl: "https://example.com/images/react-native.jpg",
      timestamp: new Date().getTime()
    },
    {
      id: 28,
      question: "How does React handle keys in lists?",
      imageUrl: "",
      timestamp: new Date().getTime()
    },
    {
      id: 29,
      question: "What are the limitations of React hooks?",
      imageUrl: "https://example.com/images/hooks-limitations.jpg",
      timestamp: new Date().getTime()
    },
    {
      id: 30,
      question: "How can you integrate TypeScript with React?",
      imageUrl: "",
      timestamp: new Date().getTime()
    },
    {
      id: 31,
      question: "What is the StrictMode component in React?",
      imageUrl: "https://example.com/images/strict-mode.jpg",
      timestamp: new Date().getTime()
    },
    {
      id: 32,
      question: "How would you implement authentication in a React application?",
      imageUrl: "",
      timestamp: new Date().getTime()
    },
    {
      id: 33,
      question: "Explain the concept of code splitting in React",
      imageUrl: "https://example.com/images/code-splitting.jpg",
      timestamp: new Date().getTime()
    },
    {
      id: 34,
      question: "What is the purpose of the useLayoutEffect hook?",
      imageUrl: "",
      timestamp: new Date().getTime()
    },
    {
      id: 35,
      question: "How do you test React components?",
      imageUrl: "https://example.com/images/testing-react.jpg",
      timestamp: new Date().getTime()
    },
    {
      id: 36,
      question: "What are React server components?",
      imageUrl: "",
      timestamp: new Date().getTime()
    },
    {
      id: 37,
      question: "How does React's reconciliation algorithm work?",
      imageUrl: "https://example.com/images/reconciliation.jpg",
      timestamp: new Date().getTime()
    },
    {
      id: 38,
      question: "What is the difference between createElement and cloneElement?",
      imageUrl: "",
      timestamp: new Date().getTime()
    },
    {
      id: 39,
      question: "Explain how to use React with GraphQL",
      imageUrl: "https://example.com/images/react-graphql.jpg",
      timestamp: new Date().getTime()
    },
    {
      id: 40,
      question: "What are the different ways to manage global state in React?",
      imageUrl: "",
      timestamp: new Date().getTime()
    }
  ];




          
                