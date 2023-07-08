import React from 'react'
import Learning_Card from '../Cards/Learning_Card';
import { workshop , seminar ,webinar} from '../Constants/Learning';

export default function Workshop() {
    return (
        <div className="py-12 px-4 md:px-6 sm:w-4/5 container mx-auto grid justify-center items-center">
            <div className="flex flex-col justify-start items-center my-10 w-full space-y-8">
                <div className="flex justify-start items-start">
                    <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 ">Workshops</p>
                </div>
                {workshop.map((card) => <Learning_Card key={card.title} {...card}/>)}
            </div>
            <div className="flex flex-col justify-start items-center my-10 w-full space-y-8">
                <div className="flex justify-start items-start">
                    <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Seminar</p>
                </div>
                {seminar.map((card) => <Learning_Card key={card.title} {...card}/>)}
            </div>
            <div className="flex flex-col justify-start items-center my-10 w-full space-y-8">
                <div className="flex justify-start items-start">
                    <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Webinar</p>
                </div>
                {webinar.map((card) => <Learning_Card key={card.title} {...card}/>)}
            </div>
        </div>
    )
}
