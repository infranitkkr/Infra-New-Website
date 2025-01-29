import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AboutUs from "./Pages/AboutUs";
import Banner from "./Components/Banner";
import ComingSoon from "./Pages/ComingSoon";
import Contact from "./Pages/Contact";
import Events from "./Pages/Events";
import Footer from "./Components/Footer";
import Gallery from "./Pages/Gallery";
import Home from "./Home/Home";
import Navbar from "./Components/Navbar";
import Team from "./Pages/Team";
import Workshop from "./Pages/Workshop";
import Explore from "./Pages/Explore";
import logo from "./images/white-logo2.png";
import Dashboard from "./firebase-google-drive-clone/src/components/google-drive/Dashboard";
import EventRegistration from "./Registration/event_model";
import AnimatedSVG from "../src/TechSpardha24/Loader.jsx"
import Mixcrete from "./Form/Mixcrete/Mixcrete.js";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay of 2 seconds for demonstration purposes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    // <div className="loader place-items-center grid justify-items-center align-middle sm:h-[100vh]  h-[90vh]">
    //   <div>
    //     <img src={logo} className="w-[40vw] sm:w-[20vw]" alt="logo" />
    //   </div>
    // </div>
    <div className="flex items-center justify-center h-screen">
      <img src={logo} className="w-[40vw] sm:w-[20vw] " alt="logo" />
    </div>
    // <Mixcrete />
  ) : (
    // Render your actual website content here
    <Router>
      <Navbar />
      {/* <Banner /> */}
      <Routes>
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/our-allies" element={<Team />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/study-material" exact element={<Dashboard />} />
        <Route path="/folder/:folderId" element={<Dashboard />} />
        <Route path="/" exact element={<Home />} />
        <Route
          path="/register/:eventId/:eventName"
          exact
          element={<EventRegistration />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
