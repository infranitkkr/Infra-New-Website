import React, { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

const Registered = () => {
  const intervalRef = useRef(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      confetti({
        particleCount: 20, // Fewer particles per burst for a rain effect
        spread: 200, // Keep particles falling nearly straight
        startVelocity: 20, // Slow falling speed
        gravity: 1.5, // Makes particles fall faster
        colors: ["#e3e1e1", "#c7c3c3", "#5e5d5c", "#292828", "#5e5e5e", "#f2f2f2"],
        // colors: ["##2eb01a"],
        origin: { x: Math.random(), y: 0 }, // Randomize starting X position from the top
        ticks: 200,
      },);
    }, 400);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="flex h-96 mb-10 flex-col justify-center items-center">
      <h1 className=" text-3xl text-center mt-10 text-green-400 font-extrabold">
        Congratulations! 
      </h1>
        You have successfully registered for the event.
    </div>
  )
}

export default Registered