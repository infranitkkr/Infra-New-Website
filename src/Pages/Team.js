import React from "react";
import TeamsCard from "../Cards/TeamsCard";
import DeveloperCard from "../Cards/DeveloperCard";
import { postHolder2024 } from "../API/postApi";
import { developers } from "../API/developerApi";

function Team() {
  return (
    <div>
      <div className="container flex justify-center mx-auto pt-10">
        <div>
          {/* <p className="text-gray-500 text-lg text-center font-normal pb-3">MANAGEMENT TEAM</p> */}
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">MANAGEMENT TEAM</h1>
        </div>
      </div>
      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-around flex-wrap md:justify-around sm:justify-around lg:justify-around">
            {/* <TeamsCard name={"Saurav Mathur"} post={"President"} image={first} insta= {"https://www.instagram.com/saurav_mathur_17"} linkedin={"https://www.linkedin.com/in/saurav-mathur-195573224"}/>
            <TeamsCard name={"Akash Pandey"} post={"Vice President"} image={second} insta= {"https://www.instagram.com/akashpandey1245"} linkedin={"https://www.linkedin.com/in/akash-pandey-8436b7217"}/>
            <TeamsCard name={"Yashvardhan Singh"} post={"General Secretary"} image={third} insta= {"https://www.instagram.com/yashvardhansingh222"} linkedin={"https://www.linkedin.com/in/%F0%9D%90%98%F0%9D%90%80%F0%9D%90%92%F0%9D%90%87%F0%9D%90%95%F0%9D%90%80%F0%9D%90%91%F0%9D%90%83%F0%9D%90%87%F0%9D%90%80%F0%9D%90%8D-%F0%9D%90%92%F0%9D%90%88%F0%9D%90%8D%F0%9D%90%86%F0%9D%90%87-bb10781b8"}/>
            <TeamsCard name={"Pravesh Kumar"} post={"Joint Secretary"} image={fourth} insta= {"https://www.instagram.com/pravesh_kumar.001"} linkedin={"https://www.linkedin.com/in/prLiavesh-kumar-805160220"}/>
            <TeamsCard name={"Anushka Meena"} post={"Additional Secretary"} image={fifth} insta= {"https://www.instagram.com/Anushkaa.x__"} linkedin={"https://www.linkedin.com/in/anushka-meena-259168252"}/>
            <TeamsCard name={"Harshith Mediga"} post={"Technical Head"} image={sixth} insta= {"https://www.instagram.com/chinnuharshith3_"} linkedin={"https://www.linkedin.com/in/harshith-mediga-5704021ab"}/> */}
            {postHolder2024.slice(0, 2).map((teamMember) => (
              <TeamsCard
                key={teamMember._id}
                name={teamMember.name}
                post={teamMember.designation}
                insta={teamMember.insta}
                linkedin={teamMember.linkedlin}
                image={teamMember.image}
              />
            ))}
          </div>
          <div className="lg:flex md:flex sm:flex items-center xl:justify-around flex-wrap md:justify-around sm:justify-around lg:justify-around">
            {postHolder2024.slice(2, 5).map((teamMember) => (
              <TeamsCard
                key={teamMember._id}
                name={teamMember.name}
                post={teamMember.designation}
                insta={teamMember.insta}
                linkedin={teamMember.linkedlin}
                image={teamMember.image}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="container flex justify-center mx-auto pt-16 border-t-2 border-t-gray-100">
        <div>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">Development Team</h1>
        </div>
      </div>

      {/* <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-28">
                    <img src={seventh} alt className="rounded-lg object-fit h-full w-full shadow-md" />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">Shivam Varshney</div>
                  <p className="text-gray-800 text-sm text-center">Developer</p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a target={'_blank'} href="https://github.com/Shivam-043" className="mx-3">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a target={'_blank'} href="https://www.linkedin.com/in/shivam-krishan-varshney-98a73817a/" className="mx-5">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#787A91" class="bi bi-linkedin" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                      </div>
                    </a>
                    <a target={'_blank'} href="https://www.instagram.com/Shivam._.varshney" className="mx-3">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                          <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-28">
                    <img src={require('../images/PastPost/8.jpg')} alt className="rounded-lg object-cover h-full w-full shadow-md" />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">Vamshi Krishna</div>
                  <p className="text-gray-800 text-sm text-center">Developer</p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a target={'_blank'} href="https://github.com/Vamshi2702" className="mx-3">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a target={'_blank'} href="https://www.linkedin.com/in/vk-komati/" className="mx-5">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#787A91" class="bi bi-linkedin" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                      </div>
                    </a>
                    <a target={'_blank'} href="https://www.instagram.com/vamshi_krishna_komati/" className="mx-3">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                          <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-28">
                    <img src={require('../images/PastPost/7.jpeg')} alt className="rounded-lg object-cover h-full w-full shadow-md" />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">Kashish Garg</div>
                  <p className="text-gray-800 text-sm text-center">Developer</p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a target={'_blank'} href="https://github.com/Kashish-Garg123" className="mx-3">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a target={'_blank'} href="https://www.linkedin.com/in/kashish-garg-4627041a9/" className="mx-5">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#787A91" class="bi bi-linkedin" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-3">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                          <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
      <div id="developers" className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-around flex-wrap md:justify-around sm:justify-around lg:justify-around">
            {developers.slice(0, 2).map((teamMember) => (
              <DeveloperCard
                key={teamMember._id}
                name={teamMember.name}
                session={teamMember.session}
                insta={teamMember.insta}
                linkedin={teamMember.linkedlin}
                github={teamMember.github}
                image={teamMember.image}
              />
            ))}
          </div>
          <div className="lg:flex md:flex sm:flex items-center xl:justify-around flex-wrap md:justify-around sm:justify-around lg:justify-around">
            {developers.slice(2, 4).map((teamMember) => (
              <DeveloperCard
                key={teamMember._id}
                name={teamMember.name}
                session={teamMember.session}
                insta={teamMember.insta}
                linkedin={teamMember.linkedlin}
                github={teamMember.github}
                image={teamMember.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
