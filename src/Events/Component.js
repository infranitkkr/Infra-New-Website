import React from 'react'

const Component = ({event}) => {
    return (
        <div className=' flex items-center justify-center flex-col sm:mt-4 sm:pl-28 sm:pr-28' >

            <div className=' text-6xl mb-4'><h1>{event.name}</h1></div>
            <div className='flex justify-center flex-col'>
                <p className=' p-4 pt-2 sm:pl-12 sm:pr-16 text-justify'>{event.about}</p>
                <h2 className=' text-xl font-semibold mt-4 pl-3'>Team</h2>
                <p className=' p-4 pt-2 sm:pl-12 sm:pr-16 text-justify'>{event.team}</p>
                <h2 className=' text-xl font-semibold mt-4 pl-3'>Rules</h2>
                <p className=' p-4 pt-2 sm:pl-12 sm:pr-16 text-justify'>{event.rules}</p>
                <h2 className=' text-xl font-semibold mt-4 pl-3'>Venue</h2>
                <p className=' p-4 pt-2 sm:pl-12 sm:pr-16 text-justify'>{event.venue}</p>
                <h2 className=' text-xl font-semibold mt-4 pl-3'>Aim</h2>
                <p className=' p-4 pt-2 sm:pl-12 sm:pr-16 text-justify'>{event.aim}</p>
            </div>
        </div>
    )
}

export default Component