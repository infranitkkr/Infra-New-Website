import React from 'react';
import bis from "../Logo/bis.png"
import asce from "../Logo/asce.png"

export default function Explore() {
    return <div>
        <div className="py-12 px-4 md:px-6 sm:w-4/5 container mx-auto flex justify-center items-center">
            <div className="flex flex-col justify-start items-start w-full space-y-8">
                <div className="flex justify-start items-start">
                    <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Explore</p>
                </div>
                {/* <div className="w-full flex justify-start items-start flex-col bg-gray-100 p-8">
                    <div className="flex flex-col md:flex-row justify-between w-full">
                        <div className="flex flex-row justify-between items-start">
                            <p className="text-xl md:text-2xl font-medium leading-normal text-gray-800">Call for Proposals/Applications for <strong>IITR@175</strong> Partnerships and Fellowships</p>
                        </div>
                    </div>
                    
                    <div >
                        <p className="mt-3 text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6">IIT Roorkee is inviting for proposals and applications to participate in IITR@175 partnership initiative, announced on the occasion of 175 Years celebrations of the Institute. The highlights of the initiatives in the scheme applicable to (i) all academic/research institutions in the state of Uttarakhand, and (ii) institutes in the states of UP, Haryana, Punjab, Himachal Pradesh, and UT of Chandigarh which are within 200 KM from IIT Roorkee are:</p>
                        <p className="mt-3 text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6"><strong>(A)</strong> IITR@175 Partnerships: This scheme intends to establish collaborations with up to five technical academic institutions, which have the potential and aspiration to take themselves to a higher level with a small helping hand from IIT Roorkee. The document outlining the background, format in which the proposals need to be submitted, selection guidelines, scope of collaboration as well as timelines are attached.</p>
                        <p className="mt-3 text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6"><strong>(B)</strong> IITR@175 Fellowships/Internships/Incubation: Under this scheme IIT Roorkee will offer Fellowships to selected Ph.D/M.Tech/B.Tech students in our neighbourhood, as well as opportunities for incubating start-ups at IIT Roorkee.</p>
                        <p className="text-md md:text-lg py-2 font-medium leading-normal text-gray-800"><strong>Related links</strong></p>
                        <a href="https://drive.google.com/file/d/1v13uWoAz93qPLI9KqLvLN30oWbrnUM2s/view?usp=sharing" style={{ color: 'blue' }} >Cover letter</a> | <a href="https://drive.google.com/file/d/1SzhQ4SWjecK9HYkEWMcJbUF31JbxpRoO/view?usp=sharing" style={{ color: 'blue' }} >Call for proposals for partnership and fellowship</a> | <a href="https://drive.google.com/file/d/1dQJ4l9mmp0Ckyf_PfZn40G7q9TE-bNqm/view?usp=sharing" style={{ color: 'blue' }} >ITTR@175</a>
                    </div>
                    <div className="m-auto py-2 lg:py-6" >
                        <img src={require('../images/iitr.jpg')} alt="" />
                    </div>
                </div> */}
                <div className="w-full flex justify-start items-start flex-col bg-gray-100 p-8">
                    <div className="flex flex-col md:flex-row justify-between w-full">
                        <div className="flex flex-row justify-between items-start">
                            <p className="text-xl md:text-2xl font-medium leading-normal text-gray-800">Bureau of Indian Standard, <strong>BIS</strong></p>
                        </div>
                    </div>
                    {/* className={"md:block " + (menu1 ? "block" : "hidden")} */}
                    <div >
                        <p className="mt-3 text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6">BIS is the National Standards Body of India established under the BIS Act 1986 for the harmonious development of the activities of standardization, marking and quality certification of goods and for matters connected therewith or incidental thereto.</p>
                        <p className="mt-3 text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6"><strong>(A)</strong> Infrastructure Society played a vital role in the formation of the Standards Club under the Bureau of Indian Standards.</p>
                        <p className="mt-3 text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6"><strong>(B)</strong> This club is oriented towards spreading knowledge among students regarding the standardization of materials when they are brought into use on an industrial level.</p>
                        <p className="text-md md:text-lg py-2 font-medium leading-normal text-gray-800"><strong>Related links</strong></p>
                        <a href="https://www.bis.gov.in/" style={{ color: 'blue' }} >Official Website</a>
                    </div>
                    <div className="m-auto py-2 lg:py-6" >
                        <img src={bis} className="w-[30vw] h-[20vh] sm:w-[30vw] sm:h-[35vh]" alt="" />
                    </div>
                </div>
                <div className="w-full flex justify-start items-start flex-col bg-gray-100 p-8">
                    <div className="flex flex-col md:flex-row justify-between w-full">
                        <div className="flex flex-row justify-between items-start">
                            <p className="text-xl md:text-2xl font-medium leading-normal text-gray-800">AMERICAN SOCIETY OF CIVIL ENGINEERS, <strong>ASCE</strong></p>
                        </div>
                    </div>
                    {/* className={"md:block " + (menu1 ? "block" : "hidden")} */}
                    <div >
                        <p className="mt-3 text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6">The American Society of Civil Engineers (ASCE) is a tax-exempt professional body founded in 1852 to represent members of the civil engineering profession worldwide. Headquartered in Reston, Virginia, it is the oldest national engineering society in the United States.</p>
                        <p className="mt-3 text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6"><strong>(A)</strong> It was under Infrastructure only that the American Society of Civil Engineers emerged as the new society of our institute.</p>
                        <p className="mt-3 text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6"><strong>(B)</strong> The American Society of Civil Engineers or ASCE tends to provide a platform for aspiring civil engineers to get more pragmatic exposure to the discipline of civil engineering.</p>
                        <p className="text-md md:text-lg py-2 font-medium leading-normal text-gray-800"><strong>Related links</strong></p>
                        <a href="https://www.asce.org/" style={{ color: 'blue' }} >Official Website</a>
                    </div>
                    <div className="m-auto py-2 lg:py-6" >
                        <img src={asce} className="w-full h-[20vh] sm:w-[30vw] sm:h-[35vh]" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>;
}
