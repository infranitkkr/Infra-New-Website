import React from "react";
import { Link } from "react-router-dom";
import ShinyText from '../Animations/ShinyText';
import GradientText from '../Animations/GradientText';


export default function Events() {
  return (
    <div>
      <div className="container flex flex-col items-center py-12 mx-auto sm:py-24">
        <div className="flex-col items-center justify-center w-11/12 mb-5 sm:w-2/3 lg:flex sm:mb-10">
          <h1 className="text-3xl font-black leading-7 text-center text-gray-800 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:leading-10">
            Techspardha
          </h1>
          <p className="mt-5 text-sm font-normal text-justify text-gray-400 sm:mt-10 lg:w-10/12 sm:text-lg">
            Techspardha is a national level annual techno-managerial students’
            festival of National Institute of Technology, Kurukshetra. It
            started in 1995 as "Technospect" (later changed to Literati). The
            year 2013 marked the Golden Jubilee of NIT Kurukshetra, same year it
            was renamed as Techspardha. Etymologically, the word ‘Techspardha’
            is composed of two words, ‘Tech’ in English is a contraction of
            technology and ‘Spardha’ in Hindi means competition. In order to
            achieve what we dream, the Infrastructure Society organizes various
            events at institute as well as national level.
          </p>
        </div>
      </div>

      <div class="flex justify-center items-center ">
        <div class="bg-white  rounded-lg sm:w-3/4 w-5/6 shadow-xl ml-0   ">
          <ul class="divide-y  divide-gray-300   w-[100%] ">


            <li>
              <Link to={"/events/archicapture"}>
                <div className="grid items-center grid-cols-2 p-4 text-sm cursor-pointer hover:bg-gray-50 sm:text-lg">
                  <div className="text-sm sm:text-lg justify-self-start">Archicapture</div>
                  {/* <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={10}
                    showBorder={false}
                    className="text-sm custom-class sm:text-lg justify-self-end"
                  >
                    Register Here
                  </GradientText> */}
                </div>
              </Link>
            </li>



            <li>
              <Link to={"/events/build-em-all"}>
              <div className="grid items-center grid-cols-2 p-4 text-sm cursor-pointer hover:bg-gray-50 sm:text-lg">
                  <div className="text-sm sm:text-lg justify-self-start">Build-Em-All</div>
                  <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={10}
                    showBorder={false}
                    className="text-sm custom-class sm:text-lg justify-self-end"
                  >
                    Register Here
                  </GradientText>
                </div>
              </Link>
            </li>
            <li>
              <Link to={"/events/cadpro"}>
              <div className="grid items-center grid-cols-2 p-4 text-sm cursor-pointer hover:bg-gray-50 sm:text-lg">
                  <div className="text-sm sm:text-lg justify-self-start">CAD Pro</div>
                  <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={10}
                    showBorder={false}
                    className="text-sm custom-class sm:text-lg justify-self-end"
                  >
                    Register Here
                  </GradientText>
                </div>
              </Link>
            </li>
            {/* <li>
              <Link to={"/events/civiera"}>
                <div className="grid items-center grid-cols-2 p-4 text-sm cursor-pointer hover:bg-gray-50 sm:text-lg">
                  <div className="text-sm sm:text-lg justify-self-start">Civiera</div>
                  <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={10}
                    showBorder={false}
                    className="text-sm custom-class sm:text-lg justify-self-end"
                  >
                    Register Here
                  </GradientText>
                </div>
              </Link>
            </li> */}
            <li>
              <Link to={"/events/cvquiz"}>
              <div className="grid items-center grid-cols-2 p-4 text-sm cursor-pointer hover:bg-gray-50 sm:text-lg">
                  <div className="text-sm sm:text-lg justify-self-start">CV Quiz</div>
                  <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={10}
                    showBorder={false}
                    className="text-sm custom-class sm:text-lg justify-self-end"
                  >
                    Register Here
                  </GradientText>
                </div>
              </Link>
            </li>
            <li>
              <Link to={"/events/gogate"}>
              <div className="grid items-center grid-cols-2 p-4 text-sm cursor-pointer hover:bg-gray-50 sm:text-lg">
                  <div className="text-sm sm:text-lg justify-self-start">Go Gate</div>
                  <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={10}
                    showBorder={false}
                    className="text-sm custom-class sm:text-lg justify-self-end"
                  >
                    Register Here
                  </GradientText>
                </div>
              </Link>

            </li>
            <li>
              <Link to={"/events/intervista"}>
              <div className="grid items-center grid-cols-2 p-4 text-sm cursor-pointer hover:bg-gray-50 sm:text-lg">
                  <div className="text-sm sm:text-lg justify-self-start">Invervista</div>
                  {/* <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={10}
                    showBorder={false}
                    className="text-sm custom-class sm:text-lg justify-self-end"
                  >
                    Register Here
                  </GradientText> */}
                </div>
              </Link>
            </li>
            <li>
              <Link to={"/events/mixcrete"}>
              <div className="grid items-center grid-cols-2 p-4 text-sm cursor-pointer hover:bg-gray-50 sm:text-lg">
                  <div className="text-sm sm:text-lg justify-self-start">Mixcrete</div>
                  <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={10}
                    showBorder={false}
                    className="text-sm custom-class sm:text-lg justify-self-end"
                  >
                    Register Here
                  </GradientText>
                </div>
              </Link>
            </li>
            
            <li>
              <Link to={"/events/opinion-olampic"}>
              <div className="grid items-center grid-cols-2 p-4 text-sm cursor-pointer hover:bg-gray-50 sm:text-lg">
                  <div className="text-sm sm:text-lg justify-self-start">Opinion Olampic</div>
                  <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={10}
                    showBorder={false}
                    className="text-sm custom-class sm:text-lg justify-self-end"
                  >
                    Register Here
                  </GradientText>
                </div>
              </Link>
            </li>
            <li>
              <Link to={"/events/planning"}>
              <div className="grid items-center grid-cols-2 p-4 text-sm cursor-pointer hover:bg-gray-50 sm:text-lg">
                  <div className="text-sm sm:text-lg justify-self-start">Planning</div>
                  <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={10}
                    showBorder={false}
                    className="text-sm custom-class sm:text-lg justify-self-end"
                  >
                    Register Here
                  </GradientText>
                </div>
              </Link>

            </li>

            <li>
              <Link to={"/events/wildflower"}>
              <div className="grid items-center grid-cols-2 p-4 text-sm cursor-pointer hover:bg-gray-50 sm:text-lg">
                  <div className="text-sm sm:text-lg justify-self-start">Wild Flower</div>
                  {/* <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={10}
                    showBorder={false}
                    className="text-sm custom-class sm:text-lg justify-self-end"
                  >
                    Register Here
                  </GradientText> */}
                </div>
              </Link>
            </li>


          </ul>
        </div>
      </div>
      {/* <section class="px-4 py-20 mx-auto max-w-7xl">
        <div
          id="Mixcrete"
          class="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24"
        >
          <div>
            <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              Mixcrete
            </h2>
            <p class="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              Civil Engineering is all about practical skills and calculations.
              Infrastructure society invites students to participate in
              Mixcrete. Mixcrete directs towards casting a correct proportion of
              concrete cubes and achieving given strength. Students just need to
              give shape to their capabilities and calculations. It is a
              four-member event for anyone having basic familiarity with nominal
              mix and design mix they can participate in the event.
            </p>
          </div>
          <div className="items-center w-full lg:flex lg:w-4/5 ">
            <img
              className="hidden w-full lg:block"
              src={require("../images/mixcrete.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
            <img
              className="hidden w-full lg:hidden sm:block h-3/4"
              src={require("../images/mixcrete.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
            <img
              className="block w-full sm:hidden"
              src={require("../images/mixcrete.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
          </div>
        </div>
        <div
          id="Build-em-all"
          class="grid flex-col-reverse mb-24 items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24"
        >
          <div class="order-none md:order-2">
            <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              Build-em-all
            </h2>
            <p class="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              The competition focuses on the outstanding ideas and skills that
              would define a design of structure by implementing novel
              technologies, spatial organization, materials and aesthetics,
              along with side on globalisation, flexibility, adaptability and
              the digital revolution. It is a four member event and also we
              encourage multidisciplinary members. The purpose of Build-em-all
              is to use your creativity and technical skills to build a model of
              a given civil engineering structure. This event is about creating
              a stable structure with the given materials and according to given
              parameters and requirements within the specified time.
            </p>
          </div>
          <div className="items-center w-full lg:flex lg:w-4/5 ">
            <img
              className="hidden w-full lg:block"
              src={require("../images/build.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
            <img
              className="hidden w-full lg:hidden sm:block h-3/4"
              src={require("../images/build.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
            <img
              className="block w-full sm:hidden"
              src={require("../images/build.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
          </div>
        </div>
        <div
          id="Civiera"
          class="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24"
        >
          <div>
            <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              Civiera
            </h2>
            <p class="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              Infrastructure society provides an opportunity for students to
              propose their views as well as their visionary inputs on the
              improvement that is going around the civilization. Students
              present their conceptions by a stunning MS PowerPoint presentation
              and a printed report in IEEE format. The research is conducted as
              per the required theme of the event. It will benefit you to delve
              deeper into the subjects. It is all about awareness and the way
              you express your views on a new concept.
            </p>
          </div>
          <div className="items-center w-full lg:flex lg:w-4/5 ">
            <img
              className="hidden w-full lg:block"
              src={require("../images/Civiera.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
            <img
              className="hidden w-full lg:hidden sm:block h-3/4"
              src={require("../images/Civiera.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
            <img
              className="block w-full sm:hidden"
              src={require("../images/Civiera.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
          </div>
        </div>
        <div
          id="Go GATE"
          class="grid flex-col-reverse mb-24 items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24"
        >
          <div class="order-none md:order-2">
            <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              Go GATE
            </h2>
            <p class="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              GATE stands for Graduate Aptitude Test in Engineering which is a
              highly competitive examination held all over the country every
              year to get admissions in prestigious colleges such as IITs &NITs.
              Various PSUs also recruit through GATE scorecards which is like a
              golden opportunity for the engineering graduates. So keeping in
              mind the momentousness of this exam INFRA team organise various
              mock tests which not only tests the comprehensive understanding of
              various subjects of civil engineering but also helps to boost the
              performance of the participants during the actual GATE
              examinations. By participating in this event you can even check
              your preparation level in relative to the other aspirants
              participating for the same.
            </p>
          </div>
          <div className="items-center w-full lg:flex lg:w-4/5 ">
            <img
              className="hidden w-full lg:block"
              src={require("../images/about1.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
            <img
              className="hidden w-full lg:hidden sm:block h-3/4"
              src={require("../images/about1.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
            <img
              className="block w-full sm:hidden"
              src={require("../images/about1.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
          </div>
        </div>
        <div
          id="Town Planning"
          class="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24"
        >
          <div>
            <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              Town Planning
            </h2>
            <p class="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              Town planning is the planning and designing of all new buildings,
              rocks, and parks in a place inorder to make them attractive and
              convenient for the people who live there. Town planning is the
              process of managing land resources. INFRA is pleased to invite the
              students, planners and enthusiasts to take part in this event. The
              main aim of this event is to search for creative Town planners who
              make recommendations to aid towards the healthy development of
              community and to plan according to the geological Features in the
              area, resources available, the importance of planning in civil
              engineering is reinforced by this events. It is a two members
              event and the Drawing has to be prepared on the ED sheet. It
              mainly focuses, that we have to plan according to the geological
              to the features in the area resources available and to plan
              according to the given budget in the specified time. It's
              Preferable to use green city concept, new energy resources, and
              renewable resources
            </p>
          </div>
          <div className="items-center w-full lg:flex lg:w-4/5 ">
            <img
              className="hidden w-full lg:block"
              src={require("../images/town.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
            <img
              className="hidden w-full lg:hidden sm:block h-3/4"
              src={require("../images/town.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
            <img
              className="block w-full sm:hidden"
              src={require("../images/town.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
          </div>
        </div>
        <div
          id="Archicapture"
          class="grid flex-col-reverse mb-24 items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24"
        >
          <div class="order-none md:order-2">
            <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              Archicapture
            </h2>
            <p class="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              Capturing magnificent showplaces to photoengrave a hut and
              edifices , architectural photography is an art ,To illustrate ten
              thousand words in the blink of a moment. Photography is All About
              Light, Composition, and Most Importantly Emotion,a Good Snapshot
              stops a moment from running away.ArchiCapture brings us a great
              fortuity to showcase one's skills to experiment with various
              angles, settings, timing and effects to achieve unique and
              interesting shots of emblazed architectural spirits and
              Photography from a new perspective.
            </p>
          </div>
          <div className="items-center w-full lg:flex lg:w-4/5 ">
            <img
              className="hidden w-full lg:block"
              src={require("../images/Archicapture.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
            <img
              className="hidden w-full lg:hidden sm:block h-3/4"
              src={require("../images/Archicapture.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
            <img
              className="block w-full sm:hidden"
              src={require("../images/Archicapture.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
          </div>
        </div>
        <div
          id="Intervista"
          class="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24"
        >
          <div>
            <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              Intervista
            </h2>
            <p class="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              Thinking about placement, no idea about selection process, lack of
              sources of preparation, or confused if you would be able to handle
              the pressure. Intervista, a event for giving students pre
              placement experience and helping them to get rid off placement
              phobia. This event consist of Live interaction Sessions for
              boosting confidence, written and interview rounds and feedback
              from people (Seniors and Teachers) who undergone through process.
              One will find positive change in his communication skills and will
              become more confident. Winners will get cash prizes and exciting
              gift
            </p>
          </div>
          <div className="items-center w-full lg:flex lg:w-4/5 ">
            <img
              className="hidden w-full lg:block"
              src={require("../images/intervista.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
            <img
              className="hidden w-full lg:hidden sm:block h-3/4"
              src={require("../images/intervista.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
            <img
              className="block w-full sm:hidden"
              src={require("../images/intervista.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
          </div>
        </div>
        <div
          id="Wild flower"
          class="grid flex-col-reverse mb-24 items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24"
        >
          <div class="order-none md:order-2">
            <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              Wild flower
            </h2>
            <p class="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              A massive night inscribed to the supremacy of music. It exhibits
              the rich colors of our culture with the fusion of pop. It's a
              platform to reflect the elegance of authentic music. The cherry on
              the cake is that the performances are by bands. We inaugurate this
              marvelous ride with the setting of the sun and it continues till
              the stars are reflected on the aether. Stunning performances by
              the students are captured in the memories of spectators. The songs
              spread unprecedented excitement through the twilight of the moon.
            </p>
          </div>
          <div className="items-center w-full lg:flex lg:w-4/5 ">
            <img
              className="hidden w-full lg:block"
              src={require("../gallery/4.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
            <img
              className="hidden w-full lg:hidden sm:block h-3/4"
              src={require("../gallery/4.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
            <img
              className="block w-full sm:hidden"
              src={require("../gallery/4.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
          </div>
        </div>
        <div
          id="CAD pro"
          class="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24"
        >
          <div>
            <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              CAD pro
            </h2>
            <p class="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              Design is not just what it looks like and what it feels. Design is
              how it works.” Every structure which we see and every place where
              we visit are all designed by CAD model at one point or another. So
              we are here with this exciting event that tests your CAD skills to
              the fullest. Here you will compete with lots of participants from
              various institutes. The event includes various stages in which
              following factors are consider :- Knowledge of software, Speed for
              solving the problem statement, Stability of structure, Idea on
              loads and their points of action. The participation is free and
              winners will get some exciting prizes.
            </p>
          </div>
          <div className="items-center w-full lg:flex lg:w-4/5 ">
            <img
              className="hidden w-full lg:block"
              src={require("../images/about2.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
            <img
              className="hidden w-full lg:hidden sm:block h-3/4"
              src={require("../images/about2.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
            <img
              className="block w-full sm:hidden"
              src={require("../images/about2.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
          </div>
        </div>
        <div
          id="CV Quiz"
          class="grid flex-col-reverse mb-24 items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24"
        >
          <div class="order-none md:order-2">
            <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              CV Quiz
            </h2>
            <p class="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              It's nice to have valid competition; it pushes you to do better.
              CV Quiz is one of the best civil engineering quizzes in northern
              India. It's a single member event to test classroom knowledge of
              civil engg. A platform to compete with the best brains and golden
              opportunity to learn, explore, showcase your skills, knowledge and
              competence in civil engg. Be a part of this fantastic quiz.
            </p>
          </div>
          <div className="items-center w-full lg:flex lg:w-4/5 ">
            <img
              className="hidden w-full lg:block"
              src={require("../images/about1.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
            <img
              className="hidden w-full lg:hidden sm:block h-3/4"
              src={require("../images/about1.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
            <img
              className="block w-full sm:hidden"
              src={require("../images/about1.jpg")}
              alt="people discussing on board"
              style={{ borderRadius: "15px" }}
            />
          </div>
        </div>
      </section> */}
    </div>
  );
}