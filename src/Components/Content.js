import React from 'react'
import { workshop } from '../Constants/Learning'

export default function Content() {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-10 mx-auto">
                <div class="flex flex-col text-center w-full mb-10">
                    <h2 class="text-xs text-slate-500 tracking-widest font-medium title-font mb-1">SOME OF OUR</h2>
                    <h1 class="lg:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">Recent Activities</h1>
                </div>
                <div class="flex flex-wrap">
                    {workshop.slice(0,3).map((data) => (
                        <div key={data.title} class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{data.title}, <strong>{data.name}</strong></h2>
                        <p class="leading-relaxed text-base mb-4">{data.content}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
