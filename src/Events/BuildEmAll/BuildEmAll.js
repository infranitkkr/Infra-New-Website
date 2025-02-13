import React from 'react'
import Carousel from '../Carousel'
import Component from '../Component';

const BuildEmAll = () => {
    const event = { 
        name: "BUILD-EM-ALL",
        about:
          "The Build-em-all competition celebrates innovative ideas and technical skills in designing structures. It challenges participants to integrate novel technologies, spatial organization, materials, and aesthetics while addressing global trends like flexibility, adaptability, and the digital revolution.",
          
        toBeAnnounced:
          "Problem Statement: Harness your creativity and technical expertise to construct a model of a given civil engineering structure, adhering to specified parameters and requirements.",
          
        team:
          " This is a team event with four members per team. Multidisciplinary team members are encouraged to promote diverse perspectives.",
          
        rules:
          "\n1. This is a team event with four members per team.\n2. Multidisciplinary team members are encouraged to promote diverse perspectives.\n3. Teams will design and build a stable structure using the provided materials.\n4. Structures must meet the specified parameters and requirements within the allocated time.\n5. Participants are expected to incorporate innovative solutions while maintaining structural stability.\n6. Judging will be based on both technical execution and creative implementation.",
          
        venue:
          "Venue: To be announced.",
          
        judgingCriteria:
          "\n1. Technical Execution: Evaluation of the stability, functionality, and adherence to the specified parameters of the constructed model.\n2. Creative Implementation: Assessment of innovative design solutions, aesthetic appeal, and integration of novel technologies.",
          
        aim:
          "Take this chance to push the boundaries of creativity and engineering. Combine your imagination and skills to create a structure that stands out for its stability, functionality, and design. Let your ideas shape the future of civil engineering."
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

export default BuildEmAll