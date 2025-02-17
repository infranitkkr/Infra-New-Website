import React from 'react'
import Carousel from '../Carousel'
import Component from '../Component';

const Mixcrete = () => {
    
    const event = { 
        name: "MIXCRETE",
        about:
          "Civil Engineering is a discipline rooted in practical skills and precise calculations. The Infrastructure Society invites students to participate in MixCrete—an engaging event that tests your abilities in concrete mix design. In MixCrete, you will have the opportunity to apply your theoretical knowledge to a hands-on challenge by preparing and casting concrete cubes according to strict mix proportions. This competition not only emphasizes technical proficiency but also encourages creativity and attention to detail. It is a chance to explore the science behind material properties, mix ratios, and quality control. Embrace this challenge as an opportunity to bridge classroom learning with real-world application and to showcase your practical engineering skills.",
          
        toBeAnnounced:
          "Demonstrate your skills in casting concrete cubes by achieving the specified strength through the correct mix proportions. Detailed guidelines and parameters will be announced soon to ensure a challenging yet fair test of your technical expertise.",
          
        team:
          "This is a team event with four members per team. Work collaboratively to plan, calculate, and execute your mix design. Each team member should contribute their expertise—whether in material measurement, mix calculation, or casting technique—to ensure that the collective effort results in a robust, well-formed concrete cube.",
          
        rules:
          "\n1. The event is a team competition with exactly four members per team.\n2. Participants must have a basic understanding of both nominal mix and design mix concepts.\n3. Each team is required to prepare and cast concrete cubes within the given time limits.\n4. Teams must strictly adhere to the specified mix proportions and process guidelines provided on-site.\n5. All necessary materials and tools will be supplied by the organizers.\n6. Safety protocols must be observed at all times, and any deviation from the guidelines may result in disqualification.",
          
        venue:
          "Venue: To be announced. The event will take place at a dedicated facility within the campus that replicates a real construction environment. Workstations will be arranged to provide ample space for material handling and concrete casting, ensuring both safety and efficiency during the competition.",
          
        judgingCriteria:
          "\n1. Proportioning Accuracy: Evaluate how precisely your team adheres to the prescribed mix design.\n2. Strength Achievement: The concrete cube must meet the specified strength criteria, reflecting the quality of your mix.\n3. Execution Skills: Assess the precision in mixing, casting, and finishing of the cube.\n4. Team Coordination: Consider the effectiveness of your collaboration and time management throughout the event.",
          
        aim:
          "MixCrete is designed to provide a practical platform for students to apply their civil engineering knowledge in a real-world scenario. By participating, you will refine your skills in concrete mix design and learn the importance of teamwork, precision, and innovation in construction. This event aims to bridge theoretical learning with practical application, preparing you for future challenges in civil engineering and construction management.",
        };
    return (
        <div>
            <div>
                <Carousel  />
            </div>
            <div>
                <Component event={event} />
            </div>
        </div>
    )
}

export default Mixcrete