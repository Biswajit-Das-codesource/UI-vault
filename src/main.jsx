import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import ComponentMainpage from "./Components/ComponentsMainpage.jsx";
import AlertPage from "./UiComponents/Alerts/AlertPage.jsx";
import LoginPage from "./UiComponents/Cards/LoginPage.jsx";
import React from "react";
import BarchartPage from "./UiComponents/Barcharts/BarchartPage.jsx";
import PricingPage from "./UiComponents/Pricing/PricingPage.jsx";
import AichatPage from "./UiComponents/AIchat/Alchatpage.jsx";
import FeedbackPage from "./UiComponents/FeedBack/FeedbackPage.jsx";
import ProfileCardPage from "./UiComponents/ProfileCards/ProfileCardPage.jsx";
import ButtonPage from "./UiComponents/Button/ButtonPage.jsx";
import PaymentcardPage from "./UiComponents/Paymentcard/PaymentcardPage.jsx";
import AnimatedTextpage from "./UiComponents/TextAnimated/AnimatedTextpage.jsx";
import TweetCardPage from "./UiComponents/TweetCard/TweetCardPage.jsx";
import RatingPage from "./UiComponents/RatingCards/RatingPage.jsx";
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
        element: <LoginPage />,
      },
      {
        path: "/components/barchart",
        element: <BarchartPage />,
      },
      {
        path: "/components/Pricing",
        element: <PricingPage />,
      },
      {
        path: "/components/aichat",
        element: <AichatPage />,
      },
      {
        path: "/components/feedback",
        element: <FeedbackPage />,
      },
      {
        path: "/components/profilecard",
        element: <ProfileCardPage/>,
      },
      {
        path: "/components/button",
        element: <ButtonPage/>,
      },
      {
        path: "/components/paymentcard",
        element: <PaymentcardPage/>,
      },
       {
        path: "/components/shinytext",
        element: <AnimatedTextpage/>,
      },
      {
        path: "/components/tweetcard",
        element:<TweetCardPage/>
      },
      {
        path:"/components/rating",
        element:<RatingPage/>
      }
      
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
