import { useState, useEffect } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import image1 from "./Images/1.jpg";
import image2 from "./Images/2.jpg";
import image3 from "./Images/3.jpeg";
import image4 from "./Images/4.jpg";
import image5 from "./Images/5.jpg";
import image6 from "./Images/6.jpg";
import image7 from "./Images/7.jpg";
import image8 from "./Images/8.jpg";
import image9 from "./Images/9.jpg";
import image10 from "./Images/10.jpg";
import image11 from "./Images/11.jpg";
import image12 from "./Images/12.jpg";
import image13 from "./Images/13.jpg";
import image14 from "./Images/14.jpg";
import image15 from "./Images/15.jpg";
import image16 from "./Images/16.jpg";
import image17 from "./Images/17.jpg";
import image18 from "./Images/18.jpg";
import image19 from "./Images/19.jpg";

const images = [
    { src: image1, alt: "1" },
    { src: image2, alt: "2" },
    { src: image3, alt: "3" },
    { src: image4, alt: "4" },
    { src: image5, alt: "5" },
    { src: image6, alt: "6" },
    { src: image7, alt: "7" },
    { src: image8, alt: "8" },
    { src: image9, alt: "9" },
    { src: image10, alt: "10" },
    { src: image11, alt: "11" },
    { src: image12, alt: "12" },
    { src: image13, alt: "13" },
    { src: image14, alt: "14" },
    { src: image15, alt: "15" },
    { src: image16, alt: "16" },
    { src: image17, alt: "17" },
    { src: image18, alt: "18" },
    { src: image19, alt: "19" },
];




export default function Gallery() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; 

    return (
        <div className="bg-gray-100 p-4">
           <PhotoProvider>
    <div className="columns-2 md:columns-3 gap-2 ">
        {images.map((image, index) => (
            <PhotoView key={index} src={image.src}>
                <img alt={image.alt} src={image.src} className="w-full rounded-2xl cursor-pointer transition-transform duration-200 my-2 hover:opacity-95 hover:scale-[1.1] " />
            </PhotoView>
        ))}
    </div>
</PhotoProvider>

        </div>
    );
}
