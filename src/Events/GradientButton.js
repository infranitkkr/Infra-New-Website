import { useEffect, useRef } from "react";
import gsap from "gsap";

const GradientButton = ({ children, onClick }) => {
  const gradientRef = useRef(null);

  useEffect(() => {
    const button = gradientRef.current;
    let ctx = gsap.context(() => {
      gsap.fromTo(
        button,
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
      onClick={onClick}
      className="px-6 text-white w-[300px] md:w-[500px] lg:w-[1000px] h-[35px] lg:h-[40px] font-bold rounded-full 
                 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
      style={{
        background: 
          'linear-gradient(90deg, ' +
          '#282a7a 0%, ' +   // light gray
          '#4043f5 25%, ' +  // medium-light gray
          '#f540da 50%, ' +  // medium gray
          '#4043f5 75%, ' +  // medium-light gray
          '#282a7a 100%)',   // light gray
        //   "#d7d9d9", "#858585", "#ffaa40"
        backgroundSize: '200% 200%',
      }}
    >
      {children}
    </button>
  );
};

export default GradientButton;