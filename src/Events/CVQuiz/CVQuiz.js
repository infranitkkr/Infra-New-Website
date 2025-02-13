import React from 'react'
import Carousel from '../Carousel'
import Component from '../Component';

const CVQuiz = () => {
    const event = { 
        name: "CV Quiz",
        about:
          "Join us for the CV Quiz, one of the premier civil engineering quizzes in northern India! This exciting single-member event is designed to test your classroom knowledge of civil engineering. It provides a platform to compete with the brightest minds and serves as a golden opportunity to learn, explore, and showcase your skills, knowledge, and competence in the field. Engage in a challenging quiz that covers a wide range of civil engineering topics and gain insights that will enhance your academic journey.",
          
        toBeAnnounced:
          "Stay tuned for additional details regarding registration procedures, prize distribution, and any further updates on the quiz format as we approach the event date.",
          
        team:
          "\n- Open to all undergraduate and postgraduate students currently enrolled in civil engineering programs from any college or university.\n- Each participant must register individually.",
          
        rules:
          "\n1. The quiz is a single-member event.\n2. Participation is free for all eligible civil engineering students.\n3. The quiz will encompass a broad range of civil engineering topics designed to test classroom knowledge.\n4. Each participant must register individually with accurate information.\n5. Cheating or any form of malpractice will result in immediate disqualification.\n6. All decisions by the quiz coordinators are final and binding.",
          
        venue:
          "\n- Date: Tuesday, February 04, 2025\n- Time: 2 PM IST\n- Venue: The quiz will be held at a designated venue on campus. (Exact location to be announced soon.)",
          
        judgingCriteria:
          "\n1. Accuracy: Correctness of answers and understanding of key civil engineering concepts.\n2. Speed: Efficiency in providing answers within the allotted time.\n3. Depth of Knowledge: Ability to apply classroom concepts to real-world problem scenarios.\n4. Overall Performance: Consistency and quality of responses throughout the quiz.",
          
        aim:
          "The CV Quiz aims to provide a challenging yet enriching platform for civil engineering students to demonstrate their academic prowess, sharpen their competitive edge, and gain invaluable insights that will aid in their future professional endeavors. It is an opportunity to celebrate and promote excellence in civil engineering education."
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

export default CVQuiz