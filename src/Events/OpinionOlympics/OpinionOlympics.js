import React from 'react';
import Carousel from '../Carousel';
import Component from '../Component';

const OpinionOlympics= () => {
  const event = {
    name: "Opinion Olympics",
    about:
      "Opinion Olympics is the crown jewel of TECHSPARDHA 25 under the inspiring theme 'FRONTIER REIMAGINED'.\n\n" +
      "From the very beginning of human civilization, speech and debate have been the driving forces behind progress, challenging ideas and reshaping perspectives. In this spirit, Opinion Olympics is designed to celebrate the art of debate, offering an electrifying platform where ideas clash, intellects meet, and new paradigms are born.\n\n" +
      "This event is not merely a competition—it is a journey into the heart of critical thinking and persuasive communication.\n\n" +
      "The central focus of this year’s debate is an issue that sits at the intersection of tradition and innovation: '3D Printing vs. Conventional Construction Materials'. As the world stands at the crossroads of technological advancement and time-tested engineering, this topic provides the perfect stage to explore the transformative impact of emerging technologies.\n\n" +
      "On one hand, 3D printing is revolutionizing the construction industry with promises of rapid prototyping, cost efficiency, and design freedom. On the other, conventional materials like steel and concrete have long been the bedrock of safe and durable construction.\n\n" +
      "This debate aims to dissect these contrasting approaches, examining their benefits, limitations, and the broader implications for the future of construction.\n\n" +
      "Participants will be challenged to adopt a stance on the day of the event, with each debater assigned either the advocacy for 'Steel Structures' or 'Concrete Structures'. This spontaneous assignment ensures that every participant must be well-versed in both aspects, prepared to argue with depth and conviction regardless of their initial preference.\n\n" +
      "The knockout format of the competition adds an extra layer of excitement and pressure, ensuring that every round is a true test of wit, research, and on-the-spot reasoning.\n\n" +
      "Opinion Olympics is open to all undergraduate and postgraduate students who possess a passion for articulate discourse and a desire to challenge conventional wisdom. Whether you are a seasoned debater or stepping up to the podium for the first time, this event welcomes you to showcase your skills and engage in a dynamic exchange of ideas.\n\n" +
      "The competition is structured to reward not only the accuracy and depth of your research but also your ability to connect with the audience through effective body language and eloquent speech.\n\n" +
      "In addition to the debate rounds, the event promises to deliver an immersive experience with interactive segments and guest sessions. Renowned experts from the fields of architecture, engineering, and digital fabrication will join the event to offer insights into the rapidly evolving landscape of construction technology.\n\n" +
      "These sessions are designed to provide additional context to the debate topic, enriching the discussion with real-world applications and futuristic trends.\n\n" +
      "The stage is set at NIT Kurukshetra’s main auditorium—a venue celebrated for its state-of-the-art facilities and vibrant campus energy. Here, the auditorium will transform into a dynamic debate arena, complete with modern acoustics and state-of-the-art lighting, to ensure an engaging and immersive experience for both participants and the audience.\n\n" +
      "Ultimately, Opinion Olympics is about more than winning a debate. It is about the relentless pursuit of knowledge, the celebration of diverse viewpoints, and the courage to challenge established norms.\n\n" +
      "Join us as we embark on this intellectual adventure where every word matters and every argument has the power to change perspectives. Whether you are here to debate or to be inspired, Opinion Olympics offers a unique opportunity to engage with ideas that are shaping the future of construction and technology.",
      
    toBeAnnounced:
      "Stay tuned for special interactive sessions and guest lectures featuring leading experts in architecture, engineering, and 3D printing.\n\n" +
      "These segments will further enrich the debate by providing insights into the practical applications and future trends of both construction paradigms.",
      
    team:
      "This is a single-member event open to all undergraduate and postgraduate students.\n\n" +
      "Whether you are an experienced debater or a newcomer eager to test your skills, every voice is important in this arena of ideas.",
      
    rules:
      "1. Open to all UG & PG students.\n\n" +
      "2. This is a single-member event.\n\n" +
      "3. Participants will be assigned a debate topic on the spot, requiring comprehensive knowledge of both 3D printing and conventional construction materials.\n\n" +
      "4. On the day of the event, each debater will receive a specific topic—either 'Steel Structures' or 'Concrete Structures'.\n\n" +
      "5. The debate will be conducted in a knockout format.\n\n" +
      "6. Strict time limits will be enforced for each round.\n\n" +
      "7. Participants must maintain decorum and exhibit respectful conduct at all times.\n\n" +
      "8. Plagiarism or misrepresentation of facts is strictly prohibited.\n\n" +
      "9. Prizes will be awarded to the top two debaters, one for each viewpoint.",
      
    venue:
      "The debate will take place at the main auditorium of NIT Kurukshetra, a venue renowned for its cutting-edge facilities and vibrant campus energy.\n\n" +
      "The auditorium will be transformed into a dynamic debate arena, complete with modern acoustics and state-of-the-art lighting, to ensure an engaging and immersive experience for both participants and the audience.",
      
    judgingCriteria:
      "Debaters will be evaluated on several key criteria:\n\n" +
      "- Precision in research, depth of evidence, and the clarity of information presented.\n\n" +
      "- Body Language, including effective gestures, eye contact, and overall stage presence.\n\n" +
      "- Linguistic proficiency, with emphasis on the appropriate choice of words, fluency, and articulation.\n\n" +
      "- Logical coherence, ensuring that arguments are structured, compelling, and able to counter opposing viewpoints.\n\n" +
      "- Innovation in presenting creative and fresh perspectives on the debate topic.",
      
    aim:
      "The aim of Opinion Olympics is to push the boundaries of conventional debate and foster a culture of intellectual curiosity and innovative thinking.\n\n" +
      "By challenging participants to explore the complex dynamics between emerging technologies and traditional practices, we aspire to nurture critical thinking, effective communication, and the courage to express well-informed opinions.\n\n" +
      "This event is not just a contest of words—it is a celebration of the human spirit’s ability to innovate, adapt, and evolve through dialogue.\n\n" +
      "Whether you are a debater or an audience member, Opinion Olympics promises to be an inspiring journey where every argument, every insight, and every exchange contributes to a broader understanding of the future of construction and technology."
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
  );
};

export default OpinionOlympics;