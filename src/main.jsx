import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import ComponentMainpage from "./Components/ComponentsMainpage.jsx";
import AlertPage from "./UiComponents/Alerts/AlertPage.jsx";
import LoginPage from "./UiComponents/Cards/LoginPage.jsx";

const browserRouter = new createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/components",
    element: <ComponentMainpage />,
    children: [
      {
        path: "/components/alerts",
        element: <AlertPage />,
      },
      {
        path: "/components/card",
        element:<LoginPage/>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={browserRouter}>
      <App />
    </RouterProvider>
  </StrictMode>
);
