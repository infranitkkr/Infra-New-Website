import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import AboutUs from "./Pages/AboutUs";
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



import MForm from "./Events/Mixcrete/MForm.js";
import AForm from "./Events/Archicapture/AForm.js";
import BForm from "./Events/BuildEmAll/BForm.js";
import CADForm from "./Events/CADPro/CADForm.js";
import CForm from "./Events/Civiera/CForm.js";
import CVForm from "./Events/CVQuiz/CVForm.js";
import GForm from "./Events/GoGate/GForm.js";
import IForm from "./Events/Intervista/IForm.js";
import PForm from "./Events/Planning/PForm.js";


import Archicapture from "./Events/Archicapture/Archicapture.js"
import BuildEmAll from "./Events/BuildEmAll/BuildEmAll"
import CADPro from "./Events/CADPro/CADPro.js"
import Civiera from "./Events/Civiera/Civiera.js"
import CVQuiz from "./Events/CVQuiz/CVQuiz.js"
import GoGate from "./Events/GoGate/GoGate.js"
import Intervista from "./Events/Intervista/Intervista.js"
import Mixcrete from "./Events/Mixcrete/Mixcrete.js";
import Planning from "./Events/Planning/Planning.js"
import Wildflower from "./Events/Wildflower/Wildflower.js"

import Registered from "./Events/Registered.js";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);


  const events = [
    { name: "archicapture", component: Archicapture, form: AForm },
    { name: "build-em-all", component: BuildEmAll, form: BForm },
    { name: "cadpro", component: CADPro, form: CADForm },
    { name: "civiera", component: Civiera, form: CForm },
    { name: "cvquiz", component: CVQuiz, form: CVForm },
    { name: "gogate", component: GoGate, form: GForm },
    { name: "intervista", component: Intervista, form: IForm },
    { name: "mixcrete", component: Mixcrete, form: MForm },
    { name: "planning", component: Planning, form: PForm },
    { name: "wildflower", component: Wildflower, form: null },
  ];

  const EventPage = () => {
    const { eventName } = useParams();
    const event = events.find((e) => e.name === eventName);

    if (!event) {
      return <h1>Event Not Found</h1>;
    }

    const EventComponent = event.component;
    return <EventComponent />;
  };


  const EventForm = () => {
    const { eventName } = useParams();
    const event = events.find((e) => e.name === eventName);

    if (!event || !event.form) {
      return <h1>Form Not Found</h1>;
    }

    const EventFormComponent = event.form;
    return <EventFormComponent />;
  };


  return isLoading ? (
    // <div className="loader place-items-center grid justify-items-center align-middle sm:h-[100vh]  h-[90vh]">
    //   <div>
    //     <img src={logo} className="w-[40vw] sm:w-[20vw]" alt="logo" />
    //   </div>
    // </div>
    <div className="flex items-center justify-center h-screen">
      <img src={logo} className="w-[40vw] sm:w-[20vw] " alt="logo" />
    </div>
  ) : (

    <Router>
      <Navbar />

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

        {/* dynamic routes for events */}
        <Route path="/events/:eventName" element={<EventPage />} />

        {/* dynamic  routes for every form */}
        <Route path="/events/:eventName/form" element={<EventForm />} />
        <Route path="/events/:eventName/form/success" element={<Registered />} />
        <Route path="/success" element={<Registered />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
