import React from 'react'
import Carousel from '../Carousel'
import Component from '../Component';

const Intervista = () => {
    const event = { 
        name: "Intervista",
        about:
          "The journey toward securing a job can be overwhelming for many students and young professionals. The Intervista is designed to provide a safe and supportive environment where individuals can discuss their fears, challenges, and uncertainties related to pre-placement processes. This event offers live interactive sessions, expert guidance, and peer discussions to address common anxieties, provide actionable strategies, and boost confidence. Whether you are nervous about interviews, group discussions, or self-presentation, this session is crafted to help you step into your placement journey with clarity and assurance.",
          
        toBeAnnounced:
          "Problem Statement: Details on discussion topics, session formats, and interactive workshops will be announced soon.",
          
        team:
          "\n- Open to final-year students, fresh graduates, and anyone facing pre-placement challenges.\n- Each participant must register individually to join the session.",
          
        rules:
          "\n1. This is an individual participation event; each attendee registers on their own.\n2. Participants are expected to maintain politeness, professionalism, and discipline throughout the session.\n3. All discussions and interactions must remain respectful and constructive.\n4. Attendees should adhere to the schedule and guidelines provided by the event coordinators.\n5. Active participation is encouraged to maximize the benefits of the interactive sessions.",
          
        venue:
          "\n- Mode: The event will be held either virtually (via Zoom/Google Meet) or in-person (venue details to be shared soon).",
          
        judgingCriteria:
          "\n1. Engagement: Active and meaningful participation in discussions.\n2. Clarity: Ability to articulate thoughts and present ideas clearly.\n3. Problem-Solving: Demonstration of actionable strategies to overcome pre-placement challenges.\n4. Professionalism: Maintaining decorum, respectful interaction, and a positive attitude during sessions.",
          
        aim:
          " The Intervista aims to equip participants with practical tools, expert insights, and a supportive network to overcome placement-related anxieties. By engaging in live discussions, mock interviews, and interactive workshops, attendees will build confidence and prepare effectively for their professional journeys."
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

export default Intervista