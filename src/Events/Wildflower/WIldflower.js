import React from 'react'
import Carousel from '../Carousel'
import Component from '../Component';
import RollingGallery from '../../Animations/RollingGallery';


import image1 from "../zGallery/1.jpg";
import image2 from "../zGallery/2.jpg";
import image3 from "../zGallery/3.jpg";
import image4 from "../zGallery/4.jpg";

const Wildflower = () => {

  const images=[
        image3,
        image1,
        image2,
        image4,
  ];

  const event = {
    name: "Wildflower",
    about:
      "Wildflower is the crown jewel of Techspardha and a highlight of the Techfest at NIT Kurukshetra, organized by the Infrastructure Society. This innovative event celebrates the universal language of music and dance by offering a dynamic platform for artists to express their creativity and passion. At Wildflower, we believe that every note, every step, and every beat carries a story that transcends boundaries and unites communities. Whether you are a soulful solo vocalist, an energetic duo, a vibrant dance troupe, or a band with a unique sound, Wildflower is your stage to shine. \n\nDrawing inspiration from the rich cultural heritage of our campus and the modern trends of today, the event is designed to push the limits of traditional performance art. With state-of-the-art sound systems, innovative lighting, and a stage that feels as expansive as your dreams, each performance is set to become a breathtaking spectacle. Beyond the competitive spirit, Wildflower is a festival of dreams—a place where creative minds converge to share their art, exchange ideas, and inspire one another. In addition to the performances, there will be interactive workshops, spontaneous jam sessions, and live collaborations that encourage audience participation and creative experimentation. Join us to experience an evening where passion meets innovation, and every performance becomes a celebration of life’s vibrant rhythms.",

    toBeAnnounced:
      "Stay tuned for exciting updates! In the coming days, we will unveil special guest appearances, surprise collaborative segments, and interactive sessions designed to elevate the Wildflower experience. These announcements will add an extra spark to the festivities, promising innovative segments that will engage and inspire every performer and audience member alike.",

    team:
      "Wildflower welcomes a diverse array of talent. The event is open to:\n\n1. Solo vocalists and instrumentalists who bring personal flair and emotion to the stage.\n2. Duos and small groups that demonstrate harmonious synergy and creative chemistry.\n3. Dance troupes that blend traditional moves with modern choreography.\n4. Bands spanning genres from rock and pop to fusion and indie, ready to electrify the crowd.\n5. Multi-disciplinary teams that combine music with visual art for a truly immersive performance.\n6. Anyone with an unyielding passion for performance and the desire to break new ground in artistic expression.",

    rules:
      "To ensure a fair and inspiring competition, all participants are requested to adhere to the following guidelines:\n\n1. Each performance must not exceed 8 minutes in duration.\n2. Acts should be original or feature a creative reinterpretation of existing works, with proper credits where applicable.\n3. The use of pre-recorded backing tracks is permitted only with prior approval from the organizing committee.\n4. Participants must submit a brief introduction of their act during the registration process.\n5. Attendance at scheduled technical rehearsals is mandatory for all performers.\n6. All performances should respect the venue’s safety protocols and decorum guidelines.\n7. Any disruptive behavior will lead to immediate disqualification.\n\nThese rules are in place to maintain a level playing field and to encourage innovative, high-quality performances throughout the event.",

    venue:
      "Join us on Saturday, March 1, 2025, at the iconic Jubilee Hall of NIT Kurukshetra. With its world-class acoustics, modern stage facilities, and a vibrant atmosphere, Jubilee Hall provides the perfect backdrop for an evening filled with mesmerizing performances and unforgettable experiences. The venue's blend of traditional architecture and contemporary design mirrors the spirit of Wildflower—where heritage meets innovation.",

    judgingCriteria:
      "The performances at Wildflower will be evaluated based on a comprehensive set of criteria that honors both technical skill and creative expression:\n\n1. Creativity and Originality: How uniquely the performance interprets musical and dance elements.\n2. Technical Execution: Precision in vocals, instrumentals, choreography, and overall performance quality.\n3. Stage Presence and Audience Engagement: The ability to captivate and connect with the audience.\n4. Innovative Use of Technology and Visuals: Integration of modern elements that enhance the performance.\n5. Consistency and Overall Impact: The performance’s ability to leave a lasting impression on both the judges and the audience.\n\nThese criteria reflect our commitment to celebrating diverse talents and pushing the boundaries of performance art.",

    aim:
      "Wildflower is more than a competition—it is a celebration of the transformative power of art. Our aim is to create a nurturing environment where emerging artists can express themselves freely, innovate fearlessly, and build connections that last a lifetime. By blending traditional performance art with modern creativity, we aspire to cultivate a community that values artistic expression and celebrates individuality. Whether you are taking the stage or cheering from the audience, Wildflower invites you to be a part of an inspiring journey that redefines the boundaries of music and dance. Step forward, let your talent shine, and join us in creating an experience that resonates with the heart and soul of every participant."
  };
  return (
    <div>
      {/* <div>
        <Carousel />
      </div> */}
      <div>
        <RollingGallery autoplay={true} pauseOnHover={true} images={images}/>
      </div>
      <div>
        <Component event={event} />
      </div>
    </div>)
}

export default Wildflower