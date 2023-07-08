import React, { useState } from "react";

const Learning_Card = ({ name, title, content, image }) => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="w-full flex justify-start items-start flex-col bg-gray-50 p-8">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="flex flex-row justify-between items-start">
          <p className="text-xl md:text-2xl font-medium leading-normal text-gray-800">
            {name}, <strong>{title}</strong>
          </p>
          <button onClick={() => setMenu(!menu)} className="ml-4 md:hidden">
            <svg
              className={"transform " + (menu ? "rotate-0" : "rotate-180")}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 12.5L10 7.5L5 12.5"
                stroke="#1F2937"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* className={"md:block " + (menu1 ? "block" : "hidden")} */}
      <div className={"md:block" + (menu ? "block" : "hidden")}>
        <div className="lg:flex block">
          <p className="mt-3 text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6">
            {content}
          </p>
          <img src={image} alt={title} className="md:w-3/12 xl:w-1/6"></img>
        </div>
      </div>
    </div>
  );
};

export default Learning_Card;
