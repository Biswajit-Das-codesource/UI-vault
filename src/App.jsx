import "./App.css";
import DashboardUI from "./Components/Dashboard";
import WelcomePage from "./Components/Dashboard2";
import Footer from "./Components/Footer";
import Footer2 from "./Components/Footer2";

import Herosection from "./Components/Herosection";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Herosection />
      <DashboardUI />
      <WelcomePage/>
      <Footer/>
      <Footer2/>
    </>
  );
}

export default App;
