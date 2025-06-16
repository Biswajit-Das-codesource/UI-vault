import "./App.css";
import DashboardUI from "./Components/Dashboard";
import WelcomePage from "./Components/Dashboard2";
import Feature from "./Components/Feature";
import Featuretext from "./Components/Featuretext";
import Footer from "./Components/Footer";
import Footer2 from "./Components/Footer2";

import Herosection from "./Components/Herosection";
import Navbar from "./Components/Navbar";
import Quality from "./Components/Quality";
// import Templatehero from "./Components/Templatehero";

function App() {
  return (
    <>
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