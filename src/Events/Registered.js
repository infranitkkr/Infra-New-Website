import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate,useParams } from "react-router-dom";
import confetti from "canvas-confetti";

const eventWhatsAppLinks = {
  "build-em-all": "https://chat.whatsapp.com/FlCbcXWh4zA5NvVatZh9tf",
  
  "cvquiz": "https://chat.whatsapp.com/G9F3jbvKxLQHtJziQQPZm9",
  "cadpro": "https://chat.whatsapp.com/KIw37E9XzjV41xPnkKgvrO",
  "gogate": "https://chat.whatsapp.com/Jhn3RsvqJ6REKX7Jy2EiOg",
  "mixcrete": "https://chat.whatsapp.com/BEgCI64o8bWCrLJuufBBxE",
  "planning": "https://chat.whatsapp.com/IiNHo1LoOnq0oC45C2RxzL",
};

const Registered = () => {
  const intervalRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Extract event name from query params and trim it
  const queryParams = new useParams();
  const rawEventName = queryParams['eventName'];
  const eventName =  rawEventName;

  console.log("Extracted Event Name:", eventName); // Debugging

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      confetti({
        particleCount: 20,
        spread: 200,
        startVelocity: 20,
        gravity: 1.5,
        colors: ["#e3e1e1", "#c7c3c3", "#5e5d5c", "#292828", "#5e5e5e", "#f2f2f2"],
        origin: { x: Math.random(), y: 0 },
        ticks: 200,
      });
    }, 400);
    
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleWhatsAppRedirect = () => {
    console.log(rawEventName); // Debugging
    console.log("Checking WhatsApp link for event:", eventName); // Debugging

    if (eventName && eventWhatsAppLinks[eventName]) {
      console.log("Redirecting to:", eventWhatsAppLinks[eventName]); // Debugging
      window.location.href = eventWhatsAppLinks[eventName];
    } else {
      alert("WhatsApp link not available for this event.");
    }
  };

  return (
    <div className="flex h-96 mb-10 flex-col justify-center items-center">
      <h1 className="text-3xl text-center mt-10 text-green-400 font-extrabold">
        Congratulations!
      </h1>
      <p className="text-lg text-gray-700 mt-2">
        You have successfully registered for <b>{eventName || "an event"}</b>.
      </p>

      <button
        onClick={handleWhatsAppRedirect}
        className="mt-4 py-2 px-4 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition"
      >
        Join WhatsApp Group
      </button>
    </div>
  );
};

export default Registered;
