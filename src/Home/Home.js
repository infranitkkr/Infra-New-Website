import React, { useState } from "react";
import Teachers from "../Cards/Teachers";
import About from "../Components/About";
import Banner from "../Components/Banner";
import Content from "../Components/Content";
import Motive from "../Components/Motive";
import { PopupProvider } from "../TechSpardha24/popup";
import NewPage from "../TechSpardha24/NewPage"
export default function Home() {

  return (
    <PopupProvider><div>
      {/* <Banner /> */}
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

        <div
          role="contentinfo"
          className="titleWrap w-full lg:w-1/2 h-full mx-auto px-5 mt-5 "
        >
          <h1 className="The">THE</h1>
          <h1 className="Infrastructure">INFRASTRUCTURE</h1>
          <h1 className="Society">SOCIETY</h1>
          <p className="tagLine">
            The Department of Civil Engineering, NIT Kurukshetra works towards
            the shaping of such men who have the power of changing the face of
            the world with their talent, ingenuity and knowledge.
          </p>
        </div>
      </div>
      <About />
      <Content />
      <Teachers />
      <Motive />
    </div>
    <NewPage />
    </PopupProvider>
    
  );
}
