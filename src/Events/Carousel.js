import { useState, useEffect } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };


  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 

    return () => clearInterval(interval); 
  }, [current]); 

  return (
    <div className="overflow-hidden relative w-full sm:h-[60vh] mb-4">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s, index) => (
          <img key={index} src={s} alt={`Slide ${index + 1}`} className="w-full" />
        ))}
      </div>


      <div className="absolute top-0 h-full w-full sm:flex justify-between items-center text-white px-5 text-3xl hidden">
        <button onClick={previousSlide} aria-label="Previous Slide">
          <BsFillArrowLeftCircleFill className="hover:opacity-80" />
        </button>
        <button onClick={nextSlide} aria-label="Next Slide">
          <BsFillArrowRightCircleFill className="hover:opacity-80" />
        </button>
      </div>
    </div>
  );
}
