import { useState, useEffect } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import image1 from "./zGallery/1.jpg";
import image2 from "./zGallery/2.jpg";
import image3 from "./zGallery/3.jpg";
import image4 from "./zGallery/4.jpg";

export default function Carousel() {

  let slides = [
    // "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    // "https://wallpapercave.com/wp/wp3386769.jpg",
    // "https://wallpaperaccess.com/full/809523.jpg",
    // "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    image3,
    image1,
    image2,
    image4,
];
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
          <img key={index} src={s} alt={`Slide ${index + 1}`} className="w-full h-full object-contain" />
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
