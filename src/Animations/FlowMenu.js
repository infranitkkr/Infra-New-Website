import React from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import GradientBackground from './GradientBackground';

function FlowingMenu() {
  return (
    <div className="relative w-full h-[10vh] overflow-hidden">
      {/* Background Component */}
      <GradientBackground colors={["#d7d9d9", "#858585", "#ffaa40"]} animationSpeed={8} />
      
      {/* Flowing Text on Top */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <MenuItem text="Registrations are open" image="/path-to-your-image.jpg" link="/events" />
      </div>
    </div>
  );
}

function MenuItem({ text, image, link }) {
  const marqueeRef = React.useRef(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        x: '-50%',
        duration: 10,
        repeat: -1,
        ease: 'linear'
      });
    }
  }, []);

  return (
    <div
      className="relative w-full h-full flex items-center cursor-pointer"
      onClick={() => navigate(link)}
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="h-full w-[200%] flex items-center whitespace-nowrap" ref={marqueeRef}>
          {[...Array(6)].map((_, idx) => (
            <React.Fragment key={idx}>
              <span className="text-black uppercase font-semibold text-base sm:text-xl leading-[1.2] px-4 bg-white rounded-full">
                {text}
              </span>
              <div
                className="w-[200px] h-[7vh] mx-4 rounded-[50px] bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;
