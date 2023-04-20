import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import PracticeHome from "./components/practice/PracticeHome";
import LoginP from "./components/practice/LoginP";
import RegisterP from "./components/practice/RegisterP";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/practice",
        element: <PracticeHome />,
      },
      {
        path: "practice-login",
        element: <LoginP />,
      },
      {
        path: "practice-register",
        element: <RegisterP />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
