import "./App.css";
import UiVaultBetaBanner from "./assets/UIvaultbeta";
import DashboardUI from "./Components/Dashboard";
import WelcomePage from "./Components/Dashboard2";
import Feature from "./Components/Feature";
import Featuretext from "./Components/Featuretext";
import FeedbackWidget from "./Components/FeedWidget";
import Footer from "./Components/Footer";
import Footer2 from "./Components/Footer2";

import Herosection from "./Components/Herosection";
import Navbar from "./Components/Navbar"; 
import Quality from "./Components/Quality";
import ScrollToTop from "./Components/ScrollTop";
// import Templatehero from "./Components/Templatehero";
import { useLenis } from "./Components/useLens";


function App() {
  useLenis()
  return (
    <>
      <ScrollToTop/>
      <UiVaultBetaBanner/>
      
      <Navbar />
      <Herosection />
      <Feature/>
      <Quality/>
      <Featuretext/>
      {/* <Templatehero/> */}
      <Footer/>
      <Footer2/>
      
    </>
  );
}

export default App;