// AboutUs.js
import React, { useState } from "react";
import TiltedCard from "../Animations/TiltedCard";

const AboutUs = () => {
  // Preset team member details
  const [teams] = useState([
    {
      id: 1,
      title: "Web Development Team",
      para:
        "We usually collaborate with writers and designers to ensure all parts of a website fit together, while still looking amazing. In short the web designers are the ones who ensures our website you see online looks good and is easy to navigate.Here we also have frontend and backend developers who always keeps a check and responsible for everything you see on website. We wear many hats for the advancement of our website.",
      
    },  
    {
      id: 2,
      title: "Content",
      para:
        "Curating the voices for the designs made. Content is what social media all about, it shares media and engages with the views of society. It is designed for publishing our words in a chronological order. It contribute to the collective whole of the designs made.The content is not like a no- brainer it includes the each and every thought and view of the society.The content is much more than visually appealing.",
      
    },
    {
      id: 3,
      title: "Social Media",
      para:
    "Handling the social media accounts and expanding the reach of our society. It's presence is as essential as a phone number. It's where we create connection with the design, content,publicity.It's typically used for the virtual and social interaction.The most interactive technology of our society that faciliate the creation, ideas, intrests and forms of our expressions through virtual communities.",
  
    },
    {
        id: 4 ,
        title: "Sponsorship",
        para:
          "Collaborating with various organizations and companies for their outreach. We act as the supporter of an event, activity financially through the provisions we provide by reaching out various sponsors for the society. The funding for the events will be provided. It only plays role in the funding but also in the Media event sponsorship.",
    
      },
      {
        id: 5,
        title: "External Publicity",
        para:
          "Networking closely with different clubs and societies of colleges throughout India.The main aim of external public relations is to create a good  image of our society and to give an idea about the events we undertake. We usually make u aware of the competitions we conduct. It is our most important medium through which we make aware of our society views..",
    
      },
      {
        id: 6,
        title: "Design",
        para:
          "Expressing the views of the society through the medium of posters with distinct designs. It usually refers to the planning, development, and creation of visual content to express the perspective of the society. It act as an enhancement to the content, faciliating the message,  society wants to give across. It helps our  imagnery to become a image. It delivers a focused message of the society.",
    
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
          <div className="flex flex-col text-center w-full ">
            <h1 className="sm:text-4xl text-3xl title-font my-12  text-gray-900 font-bold">
              Our Teams
            </h1>
          </div>

          {/* Display the team members using TiltedCard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   max-md:gap-x-[300px] max-lg:gap-x-[150px] ">
            {teams.map((member) => (
              <div key={member.id} className="flex flex-col items-center">
                <TiltedCard
                  containerHeight="350px"
                  containerWidth="400px"
                  imageHeight="300px"
                  imageWidth="350px"
                  rotateAmplitude={10}  
                  scaleOnHover={1.01}
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