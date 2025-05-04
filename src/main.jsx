import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { TodoProvider } from "./contexts/TodoContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <TodoProvider>
          <App />
          <ToastContainer position="bottom-right" theme="colored" />
        </TodoProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
