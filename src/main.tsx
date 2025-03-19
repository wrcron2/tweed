import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./blocks/MainLayout.tsx";
import QuizCreator from "./views/quizCreator.tsx";
import QuizViewer from "./views/quizViewer.tsx";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { QuizProvider } from "./context/QuizContext.tsx";
import QuizDetails from "./views/QuizDetails.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Theme>
        <BrowserRouter>
          <QuizProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<QuizCreator />} />
                <Route path="/quiz-creator" element={<QuizCreator />} />
                <Route path="/quiz-viewer" element={<QuizViewer />} />
                <Route path="/quiz-details/:id" element={<QuizDetails />} />
              </Route>
            </Routes>
          </QuizProvider>
        </BrowserRouter>
      </Theme>
    </Provider>
  </StrictMode>
);
