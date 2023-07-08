import React from 'react'

export default function Gallery() {
    return (
        <section class="px-4 py-24 mx-auto max-w-7xl">
            <h2 class="mb-2 text-3xl font-extrabold leading-tight text-gray-900">Gallery</h2>
            <p class="mb-10 text-lg text-gray-500">Glimpses of Infrastructure society, some of our captured moments.</p>
            <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                <div>
                    <img src={require('../gallery/1.jpg')} class="object-cover w-full h-56 mb-5 bg-center rounded" alt="Kutty" loading="lazy" />
                </div>
                <div>
                    <img src={require('../gallery/2.jpg')} class="object-cover w-full h-56 mb-5 bg-center rounded" alt="Kutty" loading="lazy" />
                </div>
                <div>
                    <img src={require('../gallery/3.jpg')} class="object-cover w-full h-56 mb-5 bg-center rounded" alt="Kutty" loading="lazy" />
                </div>
                <div>
                    <img src={require('../gallery/4.jpg')} class="object-cover w-full h-56 mb-5 bg-center rounded" alt="Kutty" loading="lazy" />
                </div>
                <div>
                    <img src={require('../gallery/5.jpg')} class="object-cover w-full h-56 mb-5 bg-center rounded" alt="Kutty" loading="lazy" />
                </div>
                <div>
                    <img src={require('../gallery/6.jpg')} class="object-cover w-full h-56 mb-5 bg-center rounded" alt="Kutty" loading="lazy" />
                </div>

            </div>
        </section>

    )
}
