import React, { useState } from "react";
import Teachers from "../Cards/Teachers";
import About from "../Components/About";
import Banner from "../Components/Banner";
import Content from "../Components/Content";
import Motive from "../Components/Motive";
import { PopupProvider } from "../TechSpardha24/popup";
import NewPage from "../TechSpardha24/NewPage"
import AnimatedContent from "../Animations/AnimatedContent";
import DecryptedText from "../Animations/DecryptedText";

export default function Home() {

  return (
    <PopupProvider><div>
      <Banner />
      <div className="lg:flex items-center relative container mx-auto pt-5">
        <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0 mx-auto">
          <img
            tabindex="0"
            role="img"
            aria-label="people smiling"
            className="mx-auto w-1/2"
            src={require("../images/eiffel.jpg")}
            alt="people smiling"
          />
        </div>

        <div role="contentinfo" className="titleWrap w-full lg:w-1/2 h-full mx-auto sm:px-5 mt-5 px-6">

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
            <h1 className="The font-extrabold">THE</h1>
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
            <h1 className="Infrastructure font-extrabold">INFRASTRUCTURE</h1>
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
            <h1 className="Society font-extrabold">SOCIETY</h1>
          </AnimatedContent>

          <div className=" tagLine mt-1 text-justify">
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
