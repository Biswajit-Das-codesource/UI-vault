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

import FeedbackPage from "./UiComponents/FeedBack/FeedbackPage.jsx";
import ProfileCardPage from "./UiComponents/ProfileCards/ProfileCardPage.jsx";
import ButtonPage from "./UiComponents/Button/ButtonPage.jsx";
import PaymentcardPage from "./UiComponents/Paymentcard/PaymentcardPage.jsx";
import AnimatedTextpage from "./UiComponents/TextAnimated/AnimatedTextpage.jsx";
import TweetCardPage from "./UiComponents/TweetCard/TweetCardPage.jsx";
import RatingPage from "./UiComponents/RatingCards/RatingPage.jsx";
import CrouselPage from "./UiComponents/Crousels/CrouselPage.jsx";
import SocialCardPage from "./UiComponents/SocialCards/SocialCardPage.jsx";
import TestimonialPage from "./UiComponents/AnimatedTestimonials/TestimonialPage.jsx";
import Bentogridpage from "./UiComponents/Bentogrid/Bentogridpage.jsx";
import BackgroundPage from "./UiComponents/Backgrounds/BackgroundPage.jsx";
import InfiniteScrollpage from "./UiComponents/InfiniteScroll/InfiniteScrollpage.jsx";
import GlobePage from "./UiComponents/Globe/GlobePage.jsx";
import LensPage from "./UiComponents/Lens/LensPage.jsx";
import Floatingcardpage from "./UiComponents/Floatingcard/Floatingcardpage.jsx";
import Flowingmenupage from "./UiComponents/Flowingmenu/Flowingmenupage.jsx";
import OrbitLogoPage from "./UiComponents/OrbitLogo/OrbitLogoPage.jsx";

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
        path: "/components/feedback",
        element: <FeedbackPage />,
      },
      {
        path: "/components/profilecard",
        element: <ProfileCardPage />,
      },
      {
        path: "/components/button",
        element: <ButtonPage />,
      },
      {
        path: "/components/paymentcard",
        element: <PaymentcardPage />,
      },
      {
        path: "/components/shinytext",
        element: <AnimatedTextpage />,
      },
      {
        path: "/components/tweetcard",
        element: <TweetCardPage />,
      },
      {
        path: "/components/rating",
        element: <RatingPage />,
      },
      {
        path: "/components/carousel",
        element: <CrouselPage />,
      },
      {
        path: "/components/socialcard",
        element: <SocialCardPage />,
      },
      {
        path: "/components/testimonials",
        element: <TestimonialPage />,
      },

      {
        path: "/components/bentogrid",
        element: <Bentogridpage />,
      },
      {
        path: "/components/backgrounds",
        element: <BackgroundPage />,
      },
      {
        path: "/components/marquee",
        element: <InfiniteScrollpage />,
      },
      {
        path: "/components/globe",
        element: <GlobePage />,
      },
      {
        path: "/components/Lens",
        element: <LensPage />,
      },
      {
        path: "/components/Imageeffect",
        element: <Floatingcardpage />,
      },
      {
        path: "/components/orbitinglogo",
        element: <OrbitLogoPage />,
      },
       {
        path: "/components/flowingmenu",
        element: <Flowingmenupage />,
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
