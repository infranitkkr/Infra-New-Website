// AboutUs.js
import React, { useState } from "react";
import TiltedCard from "../Animations/TiltedCard";

const AboutUs = () => {
  // Preset team member details
  const [teamMembers] = useState([
    {
      id: 1,
      title: "Web Development Team",
      para:
        "We usually collaborate with writers and designers to ensure all parts of a website fit together, while still looking amazing.",
      
    },
    {
      id: 2,
      title: "Content",
      para:
        "Curating the voices for the designs made. The content is much more than visually appealing.",
      
    },
    {
      id: 3,
      title: "Social Media",
      para:
        "Handling the social media accounts and expanding the reach of our society.",
  
    },
  ]);

  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col text-center w-full mb-20 lg:mb-40 mt-10">
        <h1 className="sm:text-4xl text-2xl title-font mb-4 text-gray-900 font-bold">
          About Us
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Infrastructure is the Official Technical Society of the Department of
          Civil Engineering formed with the objective of nurturing the talents
          of budding engineers with an ultimate goal of achieving technical
          excellence. Herein, the seeds of research are being sowed into the minds
          of the students so as to encourage innovation. We work towards sharpening
          the technical skills of all the students and improving their field knowledge,
          hence bridging the gap between classrooms and the field. Every year, the bright
          minds capable and willing to contribute to this task are invited to be a part of
          the group and showcase their managerial skills. This is an institution where
          the team spirit and enthusiasm is contagious and people work together,
          redefining the very meaning of coordination and exhibiting unmatched unity
          despite all the differences by valuing every opinion and idea.
        </p>
      </div>
      <hr />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-4xl text-3xl title-font mb-4 text-gray-900 font-bold">
              Our Teams
            </h1>
          </div>

          {/* Display the team members using TiltedCard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center">
                <TiltedCard
                  containerHeight="300px"
                  containerWidth="300px"
                  imageHeight="300px"
                  imageWidth="300px"
                  rotateAmplitude={12}
                  scaleOnHover={1.02}
                  showMobileWarning={false}
                  showTooltip={true}
                  title={member.title}
                  para={member.para}
                  displayOverlayContent={true}
                  

                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
