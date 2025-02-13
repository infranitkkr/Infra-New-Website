import React from 'react'
import Carousel from '../Carousel'
import Component from '../Component';

const Planning = () => {
    const event = { 
        name: "Planning",
        about:
          "Planning is about designing better places to live—arranging buildings, roads, and parks in a way that makes life easier, more beautiful, and enjoyable for everyone. In this event, INFRA warmly invites students, planners, and enthusiasts to explore, learn, and share innovative ideas to shape the cities of tomorrow. Imagine designing a community where every street, park, and building is carefully positioned to optimize functionality while enhancing beauty. This event is not only a platform to showcase your creativity but also a practical exercise in creating sustainable, thriving urban spaces. With thoughtful design, every element of a city can contribute to a balanced, vibrant environment that meets today’s needs while anticipating future challenges. Here, you have the chance to experiment with concepts that integrate modern technology with traditional planning, all aimed at building a future-ready community.",
          
        toBeAnnounced:
          "Further details regarding the event schedule, expert sessions, and additional resources will be announced soon. Stay tuned for updates that will help you prepare your best urban design and gain insights into innovative planning methodologies.",
          
        team:
          "- Each team must consist of exactly 2 members.\n- Participants are encouraged to collaborate closely, share insights, and combine their creativity and analytical skills to develop innovative urban plans.",
          
        rules:
          " Team Composition: Each team should have 2 members.\n2. Format: All drawings must be prepared on an ED sheet to ensure clarity and precision.\n3. Time & Budget: Your design must be planned within the specified time and budget constraints.\n4. Key Focus: The design should prioritize sustainable urban development by taking into account geological features, available resources, and budget limitations.\n5. Preferred Concepts: Incorporate Green City principles and the use of renewable energy wherever possible.\n6. Submission: Ensure that your final drawing is neatly presented, clearly labeled, and submitted on time. Late submissions will not be accepted.\n7. Originality: All designs must be original and reflect your unique vision. Plagiarism or direct imitation of existing plans will lead to disqualification.\n8. Adherence: Strictly follow all provided guidelines. Any deviation may result in penalties or disqualification.",
          
        venue:
          " The event will be hosted at the Design Workshop in NIT Kurukshetra. This space is equipped with drafting tables, technical resources, and a creative ambiance that mirrors real-world planning environments. The venue is designed to foster creativity and collaboration, offering participants a conducive environment to transform their ideas into detailed urban plans.",
          
        judgingCriteria:
          " Creativity & Innovation: How original and imaginative is your urban design? Judges will look for fresh ideas and innovative solutions that stand out.\n2. Practicality & Feasibility: Does your plan realistically account for budget constraints, resource allocation, and geological features?\n3. Sustainability: Evaluate the extent to which your design incorporates eco-friendly practices, including the use of renewable energy and green city principles.\n4. Presentation & Clarity: The overall neatness, labeling, and clarity of your drawing on the ED sheet will be critically assessed.\n5. Adherence to Guidelines: Your design will be evaluated based on how closely it follows the event’s rules, including team size, format, and time/budget constraints.\n6. Impact & Vision: The potential of your design to contribute to the creation of a sustainable and vibrant urban environment will be a key factor in the evaluation.",
          
        aim:
          " The aim of the Town Planning event is to inspire innovative urban design that transforms cities into sustainable, efficient, and vibrant communities. By challenging participants to think critically and creatively, this event seeks to foster practical solutions that can improve the quality of urban life. We invite you to take this opportunity to design a blueprint for the city of tomorrow—one that harmonizes functionality with aesthetic appeal, and practicality with visionary thinking. Step up to the challenge, collaborate with your teammate, and make your mark in the future of urban planning."
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

export default Planning