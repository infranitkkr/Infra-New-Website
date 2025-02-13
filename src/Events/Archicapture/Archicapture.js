import React from 'react'
import Carousel from '../Carousel'
import Component from '../Component';

const Archicapture = () => {
    const event = { 
        name: "Archi Capture",
        about:
          "The Art of Architectural Photography! Architectural photography is more than just taking pictures—it’s about capturing the very soul and essence of structures, from humble huts to magnificent edifices. Archi Capture invites you on a creative journey where every image tells a unique story. Through the interplay of light, shadow, and perspective, this event challenges you to see beyond the ordinary. It is an opportunity to explore innovative techniques, experiment with diverse settings, and express your unique vision of architectural beauty. \n\nAt its core, Archi Capture celebrates the narrative of every building, transforming static structures into dynamic pieces of art. Whether it is the weathered texture of an ancient wall, the modern lines of a contemporary design, or the subtle interplay of natural light on a façade, every photograph has the potential to evoke emotion and inspire wonder. This event is designed not only to showcase technical skills but also to highlight the artistic vision behind each shot. Prepare to immerse yourself in a world where every angle and every composition can redefine the essence of architecture. Embrace the challenge, and let your lens capture moments that speak volumes about the spirit and grandeur of the built environment.",
          
        toBeAnnounced:
          "What's it all about? In the coming days, we will reveal additional details regarding submission deadlines, exhibition dates, and special guest workshops led by renowned photographers. Stay tuned as we unveil more information on the innovative themes and creative challenges that will further push the boundaries of architectural photography. Expect updates that will guide you through the process of refining your technique and elevating your artistic expression to new heights.",
          
        team:
          " Archi Capture is an individual event, open to all students with a passion for photography and architecture. Whether you are a budding photographer eager to experiment with your first architectural shot or a seasoned professional looking to capture the intricate details of a historic monument, this event is designed for you. Join a community of creative minds who share a common love for the art of capturing timeless moments through their lenses.",
          
        rules:
          " Participants are required to adhere to the event guidelines to ensure a fair and inspiring competition. The theme for Archi Capture is centered on capturing the beauty, spirit, and essence of architectural structures. Each participant must submit original high-resolution digital photographs that clearly showcase their unique interpretation of the assigned theme. Experimentation with various photography techniques is encouraged—explore different angles, settings, timing, and effects to create captivating images. While post-processing and editing are permitted, they must not alter the original essence of the photograph. All entries should maintain the authenticity of the moment captured. Ensure that your submission meets the technical specifications outlined by the organizing committee. Late entries or those failing to comply with the guidelines may be disqualified. This framework is designed to foster creativity while upholding the integrity of the artistic process.",
          
        venue:
          "Venue: Archi Capture will take place at select photography studios and outdoor locations across the NIT Kurukshetra campus. These venues have been carefully chosen to provide a diverse range of settings—from controlled indoor environments that allow for precision and creativity, to natural outdoor backdrops that inspire spontaneous artistic expression. The variety in venues will enable you to experiment with different lighting conditions and architectural styles, ensuring a rich and rewarding experience.",
          
        judgingCriteria:
          " The entries will be evaluated on multiple facets to ensure a comprehensive assessment of both artistic vision and technical proficiency. Judges will consider creativity and originality—how uniquely the photograph interprets the subject matter. Composition is key, with a focus on the effective use of light, space, and angles to craft a compelling visual narrative. The emotional impact of the photograph, its ability to evoke feelings and tell a story, will also be critically assessed. Finally, technical quality—including clarity, focus, and overall execution—will form a significant part of the evaluation. Each of these criteria is designed to recognize and reward outstanding talent in the art of architectural photography.",
          
        aim:
          " Archi Capture is more than a competition—it is a celebration of artistic expression and the transformative power of photography. Our goal is to provide a platform where photographers can push the boundaries of creativity and capture the hidden stories within every architectural marvel. We aim to inspire participants to see the world through a fresh lens, appreciate the intricate details of design, and convey the profound beauty inherent in our surroundings. Join us in this creative adventure to redefine architectural photography and leave an indelible mark on the art community."
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

export default Archicapture