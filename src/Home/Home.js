import React from "react";
import Teachers from "../Cards/Teachers";
import About from "../Components/About";
import Banner from "../Components/Banner";
import Content from "../Components/Content";
import Motive from "../Components/Motive";
import { PopupProvider } from "../TechSpardha24/popup";
import NewPage from "../TechSpardha24/NewPage";
import AnimatedContent from "../Animations/AnimatedContent";
import DecryptedText from "../Animations/DecryptedText";
import RollingModel from '../Animations/RollingModel';

export default function Home() {
  return (
    <PopupProvider>
      <div>
        <Banner />
        <div className="container relative items-center pt-5 mx-auto lg:flex">
          <div className="w-full h-250px lg:w-1/2 lg:pr-10 xl:pr-0 ">
               <RollingModel /> 
          </div>
          
          <div role="contentinfo" className="w-full h-full px-6 mx-auto mt-5 titleWrap lg:w-1/2 sm:px-5">
            <AnimatedContent
              distance={200}
              direction="vertical"
              reverse={true}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={300}
            >
              <h1 className="font-extrabold The">THE</h1>
            </AnimatedContent>

            <AnimatedContent
              distance={200}
              direction="vertical"
              reverse={true}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={200}
            >
              <h1 className="font-extrabold Infrastructure">INFRASTRUCTURE</h1>
            </AnimatedContent>

            <AnimatedContent
              distance={350}
              direction="vertical"
              reverse={true}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0}
            >
              <h1 className="font-extrabold Society">SOCIETY</h1>
            </AnimatedContent>

            <div className="mt-1 text-justify tagLine">
              <DecryptedText
                speed={120}
                maxIterations={20}
                className="revealed"
                parentClassName="all-letters"
                useOriginalCharsOnly="true"
                encryptedClassName="encrypted"
                text="The Department of Civil Engineering at NIT Kurukshetra works toward shaping individuals who have the power to change the world with their talent, ingenuity, and knowledge."
                animateOn="view"
                revealDirection="start"
              />
            </div>
          </div>
        </div>
        <About />
        <Content />
      </div>
      {/* <NewPage /> */}
    </PopupProvider>
  );
}