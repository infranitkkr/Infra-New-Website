import { useState, useEffect } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Blurhash } from 'react-blurhash';

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

const img = [
    { src: image1, alt: "1", hash: "JPG*{8IS?]IT_MV?" },
    { src: image2, alt: "2", hash: "J7Fh^o_N00~V0|V=" },
    { src: image3, alt: "3", hash: "JnL4+_WA?wWB_Nof" },
    { src: image4, alt: "4", hash: "JFGbVK$L}ds.O5R*" },
    { src: image5, alt: "5", hash: "JPHU,_My~qo#bt%M" },
    { src: image6, alt: "6", hash: "J5F5HS02?vRk00~n" },
    { src: image7, alt: "7", hash: "JREyb.tj}^V@?vRi" },
    { src: image8, alt: "8", hash: "JREyb.tj}^V@?vRi" },
    { src: image9, alt: "9", hash: "J7EL.;,a0{$x~o0f" },
    { src: image10, alt: "10", hash: "JiI53,M_?^WA%gof" },
    { src: image11, alt: "11", hash: "J5A,q]9:CTNg01s8" },
    { src: image12, alt: "12", hash: "JUE{YC,qr*NZE.TJ" },
    { src: image13, alt: "13", hash: "JZH-oxe.~Do#^*j]" },
    { src: image14, alt: "14", hash: "JRGIcQay4:ay~pWB" },
    { src: image15, alt: "15", hash: "J7DS{[S~~qNa00n~" },
    { src: image16, alt: "16", hash: "JKIOazw@{?rrpRt6" },
    { src: image17, alt: "17", hash: "J8F5je^-01D+~bJB" },
    { src: image19, alt: "18", hash: "JiI53,M_?^WA%gof" },
    { src: image18, alt: "19", hash: "JCCZFcbI~qxu9aof" },
    { src: image20, alt: "20", hash: "JRHxTlM}~VShI9o|" },
    { src: image21, alt: "21", hash: "JQIO5@NL~BS~IAXN" },
    { src: image22, alt: "22", hash: "JOD]3gRjx_V@~VjZ" },
    { src: image23, alt: "23", hash: "JwPi@m%M?wRys+WB" },
    { src: image24, alt: "24", hash: "JwPi@m%M?wRks+WB" },
    { src: image25, alt: "25", hash: "JrM%o@%M_Nozs,of" },
    { src: image26, alt: "26", hash: "JQGuRSrw~UrY_3RP" },
    { src: image27, alt: "27", hash: "JVEorkxu~qxu?at7" },
    { src: image28, alt: "28", hash: "JLFP84IU{Wt4?IV@" },
    { src: image29, alt: "29", hash: "JbHLi1yB~Wo}%ex]" },
    { src: image30, alt: "30", hash: "JDDSj|sj~Vs.%NtR" },
    { src: image31, alt: "31", hash: "JJGbedxZ4noz~pxt" },
    { src: image32, alt: "32", hash: "J1C?fd4T00Dk5*.A" },
    { src: image33, alt: "33", hash: "JAE{8?}tASNE_J9Z" },
];




export default function Gallery() {

    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        img.forEach((image, index) => {
            const imgObj = new Image();
            imgObj.src = image.src;
            imgObj.onload = () => {
                setImageLoaded((prev) => ({ ...prev, [index]: true }));
            };
        });
    }, []);



    return (
        <div className="bg-gray-100 p-8">
            <PhotoProvider>
                <div className="columns-2 md:columns-3 gap-4">
                    {img.map((image, index) => (
                        <PhotoView key={index} src={image.src}>
                            <div className="relative w-full my-4">
                                {!imageLoaded[index] && (
                                    <Blurhash
                                        hash={image.hash}
                                        width="100%"
                                        height={200}
                                        resolutionX={32}
                                        resolutionY={32}
                                        punch={1}
                                        className="rounded-2xl"
                                    />
                                )}
                                {imageLoaded[index] && (
                                    <img
                                        alt={image.alt}
                                        src={image.src}
                                        className="w-full rounded-2xl cursor-pointer transition-transform duration-200 hover:opacity-95 hover:scale-[1.1]"
                                    />
                                )}
                            </div>
                        </PhotoView>
                    ))}
                </div>
            </PhotoProvider>

        </div>
    );
}