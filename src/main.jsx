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
// import BackgroundPage from "./UiComponents/Backgrounds/BackgroundPage.jsx";
import InfiniteScrollpage from "./UiComponents/InfiniteScroll/InfiniteScrollpage.jsx";
import GlobePage from "./UiComponents/Globe/GlobePage.jsx";
import LensPage from "./UiComponents/Lens/LensPage.jsx";
import Floatingcardpage from "./UiComponents/Floatingcard/Floatingcardpage.jsx";
import OrbitLogoPage from "./UiComponents/OrbitLogo/OrbitLogoPage.jsx";
import Gradientlinepage from "./UiComponents/GradientLineBackground/Gradientlinepage.jsx";
import BeamsbackgroundPage from "./UiComponents/BeamsBackground/BeamsbackgroundPage.jsx";
import Cursorpage from "./UiComponents/Cursor/Cursorpage.jsx";
import TiltCardpage from "./UiComponents/TiltCard/TiltCardpage.jsx";
import HoverSwitchCard from "./UiComponents/HoverSwitchCard/HoverSwitchcard.jsx";
import Hoverswitchpage from "./UiComponents/HoverSwitchCard/HoverSwitchcardpage.jsx";
import NeonLambpage from "./UiComponents/Neonlamp/Neonlamppage.jsx";
import PointerGridBackgroundPage from "./UiComponents/PointerGridBackground/PointerGridPage.jsx";
import GridBackgroundPage from "./UiComponents/Gridbackground/Gridbackgroundpage.jsx";
import VideoPopPage from "./UiComponents/VideoOverlay/VideoPopPage.jsx";
import ReactInstall from "./Components/ReactInstall.jsx";
import TailwindInstall from "./Components/TailwindInstall.jsx";
import UIVaultInitGuide from "./Components/uivaultinstall.jsx";
import MeteorBgPage from "./UiComponents/Meteor_Background/MeteorBgPage.jsx";
import SilkBgPage from "./UiComponents/Silk_Background/SilkBgPage.jsx";
import Documentation from './Components/Documentation';
import FeedbackWidget from "./Components/FeedWidget.jsx";
import PinContainerPage from "./UiComponents/3dPinContainer/PinContainerPage.jsx";
import DraggablePage from "./UiComponents/Draggablecard/DraggablePage.jsx";
import ToggleButtonPage from "./UiComponents/Toggle-Buttons/ToggleButtonPage.jsx";
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
        path: "/components/installation",
        element: <ReactInstall />,
      },
      {
        path: "/components/docs/install-react",
        element: <ReactInstall />,
      },
      {
        path: "/components/docs/install-tailwindcss",
        element: <TailwindInstall />,
      },
      {
        path: "/components/docs/install-uivault",
        element: <UIVaultInitGuide />,
      },
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
        path: "/components/Documentation",
        element: <Documentation/>,
      },
      {
        path: "/components/orbitinglogo",
        element: <OrbitLogoPage />,
      },
        {
        path: "/components/draggablecards",
        element: <DraggablePage />,
      },
      //  {
      //   path: "/components/feedbackwidget",
      //   element: <FeedbackWidget />,
      // },
      

      {
        path: "/components/CosmicRayBurst",
        element: <Gradientlinepage />,
      },
      {
        path: "/components/Beamsbackground",
        element: <BeamsbackgroundPage />,
      },
      {
        path: "/components/cursorAura",
        element: <Cursorpage />,
      },
      {
        path: "/components/tiltcard",
        element: <TiltCardpage />,
      },
      {
        path: "/components/hovercard",
        element: <Hoverswitchpage />,
      },
      {
        path: "/components/neonlamb", //add
        element: <NeonLambpage />,
      },
      {
        path: "/components/pointergrid",
        element: <PointerGridBackgroundPage />,
      },
      {
        path: "/components/gridbackground",
        element: <GridBackgroundPage />,
      },
      {
        path: "/components/bentogrid",
        element: <Bentogridpage />,
      },

      {
        path: "/components/orbitinglogo",
        element: <OrbitLogoPage />,
      },
      {
        path: "/components/iframepop",
        element: <VideoPopPage />,
      },
      {
        path: "/components/Meteors",
        element: <MeteorBgPage />,
      },
      {
        path: "/components/Silk",
        element: <SilkBgPage />,
      },
      {
        path: "/components/3dPin",
        element: <PinContainerPage/>,
      },
      {
        path: "/components/ToggleButtons",
        element: <ToggleButtonPage/>,
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
