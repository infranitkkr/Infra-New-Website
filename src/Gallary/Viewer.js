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
import image20 from "./Images/20.jpg";
import image21 from "./Images/21.jpg";
import image22 from "./Images/22.jpg";
import image23 from "./Images/23.jpg";
import image24 from "./Images/24.jpg";
import image25 from "./Images/25.jpg";
import image26 from "./Images/26.jpg";
import image27 from "./Images/27.jpg";
import image28 from "./Images/28.jpg";
import image29 from "./Images/29.jpg";
import image30 from "./Images/30.jpg";
import image31 from "./Images/31.jpg";
import image32 from "./Images/32.jpg";
import image33 from "./Images/33.jpg";

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
    { src: image20, alt: "20" },
    { src: image21, alt: "21" },
    { src: image22, alt: "22" },
    { src: image23, alt: "23" },
    { src: image24, alt: "24" },
    { src: image25, alt: "25" },
    { src: image26, alt: "26" },
    { src: image27, alt: "27" },
    { src: image28, alt: "28" },
    { src: image29, alt: "29" },
    { src: image30, alt: "30" },
    { src: image31, alt: "31" },
    { src: image32, alt: "32" },
    { src: image33, alt: "33" },
];




export default function Gallery() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; 

    return (
        <div className="bg-gray-100 p-8">
           <PhotoProvider>
    <div className="columns-2 md:columns-3 gap-4 ">
        {images.map((image, index) => (
            <PhotoView key={index} src={image.src}>
                <img alt={image.alt} src={image.src} className="w-full rounded-2xl cursor-pointer transition-transform duration-200 my-4 hover:opacity-95 hover:scale-[1.1] " />
            </PhotoView>
        ))}
    </div>
</PhotoProvider>

        </div>
    );
}