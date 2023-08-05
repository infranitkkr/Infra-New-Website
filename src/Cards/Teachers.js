import React from "react";
import { teacher } from "../Constants/Learning";

const TeachersCard = (data) => {
  return (
    <div class="flex flex-col">
      <div class="justify-center flex">
        <img src={data.image} class="lg:w-[15vw] h-[30vh] teachers-img w-[60vw]"></img>
      </div>
      <h1 class="text-center font-bold">{data.name}</h1>
      <h1 class="text-center font-bold">{data.designation}</h1>
    </div>
  );
};

const Teachers = () => {
  return (
    <div class="flex flex-col align-middle flex-wrap place-content-center mx-4">
        <hr class="w-[90vw] place-self-center mb-6"/>
      <div class="mb-6">
        <h1 class="text-6xl text-gray-900 font-bold text-center mb-3">
          Our Pillars Of Guidance
        </h1>
        <h2 class="lg:w-2/3 mx-auto leading-relaxed text-base text-center">
          Meet the dynamic individuals who spearhead the success and growth
          of the Infrastructure Society at NIT Kurukshetra - the esteemed
          Faculty-In-Charge of the society and the visionary Head of the Civil
          Engineering Department. Their unwavering support and leadership are
          pivotal in shaping the future of our esteemed society.
        </h2>
      </div>
      <div class="flex lg:flex-row space-x-4 justify-center flex-wrap">
        {teacher.map((data) => (
          <div class="xl:w-1/5 lg:w-1/2 md:w-full px-8 border-l-2 border-gray-200 border-opacity-60 lg:h-[38vh] mb-5">
            <TeachersCard key={data.name} {...data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
