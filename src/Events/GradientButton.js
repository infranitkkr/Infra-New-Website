import { useEffect, useRef } from "react";
import gsap from "gsap";

const GradientButton = ({ children, onClick }) => {
  const gradientRef = useRef(null);

  useEffect(() => {
    const button = gradientRef.current;
    let ctx = gsap.context(() => {
     
      gsap.fromTo(button,
        { backgroundPosition: "0% 50%" },
        {
          backgroundPosition: "100% 50%",
          duration: 6,
          ease: "none",
          repeat: -1,
        }
      );
    }, button);

    return () => ctx.revert();
  }, []);

  return (
    <button
      ref={gradientRef}
      
      className="px-6 text-white w-[300px] md:w-[500px] lg:w-[1000px] h-[35px] lg:h-[40px] font-bold rounded-full 
               transition-all duration-300 hover:scale-105 
               shadow-lg hover:shadow-xl"
      style={{
        background: 
          'linear-gradient(90deg, ' +
          '#f0abfc 0%, ' +    // pink-300
          '#60a5fa 25%, ' +   // blue-500
          '#c026d3 50%, ' +  // fuchsia-700
          '#60a5fa 75%, ' +   // blue-500
          '#f0abfc 100%)',    // pink-300
        backgroundSize: '200% 200%'
      }}
    >
      {children}
    </button>
  );
};

export default GradientButton;