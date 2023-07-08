import React , {useState , useEffect} from 'react'
import about2 from "../images/about2.jpg"
import taj from "../images/taj.jpeg"
import howrah from "../images/howrah.jpg"




const images = [
    about2,
    howrah,
  ];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Auto transition every 2 seconds
  
      return () => {
        clearInterval(interval);
      };
    }, []);
    return (
        <div className="relative w-full h-full lg:w-[50vw] lg:flex items-center container mx-auto pt-5 ">
          <div className="absolute w-full h-full lg:pr-10 xl:pr-0 mx-auto ">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="carousel"
                style={{ borderRadius: '15px' }}
                className={` absolute w-full h-full  transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
          {/* <div className="flex justify-center mt-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 mx-1 rounded-full ${
                  index === currentIndex ? 'bg-gray-500' : 'bg-gray-300'
                }`}
              ></div>
            ))}
          </div> */}
        </div>
      );
    };

export default Carousel
