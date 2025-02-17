import React from 'react'
import { workshop } from '../Constants/Learning'
import AnimatedContent from '../Animations/AnimatedContent'

export default function Content() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-col text-center w-full mb-10">
                    <h2 className="text-xs text-slate-500 tracking-widest font-medium title-font mb-1">SOME OF OUR</h2>
                    <h1 className="lg:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">Recent Activities</h1>
                </div>
                
                {/* Flex container for equal sizing */}
                <div className="flex flex-wrap -m-4">
                    {workshop.slice(0, 3).map((data) => (
                        <div key={data.title} className="p-4 xl:w-1/3 lg:w-1/2 md:w-1/3 w-full h-full">
                            <AnimatedContent
                            direction="vertical"
                            reverse={false}
                            >
                                <div className="h-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 flex flex-col justify-between">
                                    <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                                        {data.title}, <strong>{data.name}</strong>
                                    </h2>
                                    <p className="leading-relaxed text-base mb-4 flex-grow text-justify">{data.content}</p>
                                </div>
                            </AnimatedContent>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
