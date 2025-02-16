import React from "react";
import { Link } from "react-router-dom";
import AnimatedContent from "../Animations/AnimatedContent";
const About = () => {

    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div class=" flex flex-col items-center w-full my-20 border-t-2 py-8">
                <h1 class="sm:text-4xl text-2xl  title-font mb-10 text-gray-900 font-bold">About Us</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-justify">
                    Infrastructure is the Official Technical Society of the Department of Civil Engineering formed with the objective of nurturing the talents of budding engineers with an ultimate goal of achieving technical excellence. Herein, the seeds of research are being sowed into the minds of the students so as to encourage the innovation. We work towards sharpening the technical skills of all the students and improving their field knowledge, hence bridging the gap between classrooms and field. Every year, the bright minds capable and willing to contribute to this task are invited to be a part of the group and showcase their managerial skills. This is an institution where the team spirit and enthusiasm is contagious and people work together redefining the very meaning of coordination and exhibit unmatched unity despite all the differences by valuing each and every opinion and idea.
                </p>
                <div class="py-2 mx-auto">
                    <Link to="/about-us" style={{ textDecoration: "none" }}>
                        <button
                            style={{ borderRadius: "15px" }}
                            className="group bg-slate-900 text-white hover:bg-white hover:text-black border-2 border-gray-900 py-2 px-4 flex my-4">
                            <h2 className="my-auto text-center text-lg font-normal mx-4 group-hover:text-black">Know more</h2>
                        </button>
                    </Link>
                </div>
            </div>
            <hr />

            <div className="flex justify-between flex-col lg:gap-8 my-20 sm:my-14 gap-12 sm:px-6 px-3">
                <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Our Mission</h2>
                <div className="flex sm:flex-row flex-col gap-12">
                    <div className="w-full sm:w-[60%] sm:px-[30px]">
                        <AnimatedContent
                            direction="horizontal"
                            reverse={true}
                        >
                            <div className="p-2 border-gray-50 shadow-xl rounded-2xl">
                                <p className="font-normal text-base leading-6 text-gray-600 mt-4">One man's 'Magic' is another's engineering, thereupon we the team of Infrastructure Society, The Formal Technical Society of the Department of Civil Engineering, National Institute of Technology, Kurukshetra ceaselessly pouring our efforts to succour the transformation of magic in your dreams to astounding reality. Put in place with motto of fostering the talents of countrywide 'Fledgling engineers' endeavouring technical assistance, on the 26th day of August 1998, unfailingly setting a new benchmark, whensoever standing up for some new initiative.
                                </p>
                                <p className="font-normal text-base leading-6 text-gray-600 mt-6">From sowing the seeds of research in brainiacs to fine-tuning the technical skills and field knowledge, The society has been, so far, successful in bridging the gap between classrooms and field with a team of bright minds fused together exhibiting inimitable unity heedless of the differences. Sculpturing the team's strive in words, copious events are organised at institute and national level taking vision of dreams, applying magic of science and mathematics and knowledge of nature's material to create the world that never has been.</p>
                            </div>
                        </AnimatedContent>
                    </div>
                    <div className="items-center w-full sm:w-[40%]">
                    <AnimatedContent
                            direction="horizontal"
                            reverse={false}
                        >
                        <img className="lg:block hidden w-full" src={require('../images/about2.jpg')} alt="people discussing on board" style={{ borderRadius: '15px' }} />
                        <img className="sm:hidden block w-full" src={require('../images/about2.jpg')} alt="people discussing on board" style={{ borderRadius: '15px' }} />
                        </AnimatedContent>

                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default About;