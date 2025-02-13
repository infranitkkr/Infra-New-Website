import React from 'react'
import Carousel from '../Carousel'
import Component from '../Component';

const CADPro = () => {
    const event = { 
        name: "CAD Pro",
        about:
          `"Design is not just what it looks like and what it feels like. Design is how it works." This event emphasizes the essential role of Computer-Aided Design (CAD) in shaping our world. CAD PRO is designed to test and showcase your proficiency in CAD software, challenging you to create designs that are not only visually appealing but also structurally sound. Participants will navigate through various stages that assess their technical skills, speed, and innovative approach to design. Whether you’re adept at problem-solving under time constraints or excel in crafting detailed and accurate designs, this event is your platform to shine and prove your expertise in CAD.`,
          
        toBeAnnounced:
          "Event Details such as the exact date, time, and venue are yet to be announced. Stay tuned for further updates regarding these details and additional information on the competition process.",
          
        team:
          "Participation is open to individual students from any college. A registration fee applies for all participants.",
          
        rules:
          "\n1. Participants must compete individually.\n2. A registration fee is applicable as per the guidelines provided during the registration process.\n3. Competitors are required to demonstrate proficiency in CAD software, particularly AutoCAD.\n4. Designs must be created within the allotted time and adhere to the competition specifications.\n5. All submissions must be original and created by the participant. Plagiarism or use of pre-made designs will result in disqualification.\n6. Participants are expected to follow all instructions and guidelines provided by the event coordinators.\n7. Failure to comply with the rules may result in penalties or disqualification.",
          
        venue:
          "\n- Date: To be announced\n- Time: To be announced\n- Venue: To be announced\n\nParticipation is open to students from any college, providing a broad platform for showcasing your CAD skills in a competitive environment.",
          
        judgingCriteria:
          "\n1. Time Management: Efficient completion of tasks within the given timeframe.\n2. Accuracy of Designs: Precision and correctness in the created designs.\n3. Technical Skills: Demonstrated proficiency in AutoCAD and related CAD software.\n4. Overall Quality: The clarity, functionality, and innovative approach of the design will be evaluated.",
          
        aim:
          "CAD Pro is your opportunity to put your CAD skills to the test and compete with peers from various institutes. Embrace the challenge, showcase your innovation and technical excellence, and be part of an event that celebrates the art and science of design. Register now and take the first step towards demonstrating your expertise in computer-aided design."
      };
  return (
    <div>
            <div>
                <Carousel />
            </div>
            <div>
                <Component event={event} />
            </div>
        </div>
  )
}

export default CADPro