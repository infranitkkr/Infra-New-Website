import React from 'react'

const Component = ({ event = {} }) => {

    const judgingCriteriaArray = (event.judgingCriteria || '')
        .split('\n')
        .map((item) => item.trim())
        .filter((item) => item.length > 0);

    const rulesArray = (event.rules || '')
        .split('\n')
        .map((item) => item.trim())
        .filter((item) => item.length > 0);

    const teamArrays = (event.team || '')
        .split('\n')
        .map((item) => item.trim())
        .filter((item) => item.length > 0);

    const venueArray = (event.venue || '')
        .split('\n')
        .map((item) => item.trim())
        .filter((item) => item.length > 0);

    return (
        <div className=' flex items-center justify-center flex-col sm:mt-4 sm:pl-28 sm:pr-28' >

            <div className=' sm:text-6xl text-4xl font-extrabold  mb-4'><h1>{event.name}</h1></div>

            <div className='flex justify-center flex-col'>


                <h2 className=' text-xl font-semibold mt-4 pl-3'>About the event:</h2>
                <p className=' p-4 pt-2 sm:pl-12 sm:pr-16 text-justify'>{event.about}</p>


                <h2 className=' text-xl font-semibold mt-4 pl-3'>Team:</h2>
                <div className=' p-4 pt-2 sm:pl-12 sm:pr-16 text-justify'>
                    {teamArrays.map((member, index) => (
                        <p key={index} className="">{member}</p>
                    ))}
                </div>

                <h2 className=' text-xl font-semibold mt-4 pl-3'>Judging Criteria:</h2>
                <div className=' p-4 pt-2 sm:pl-12 sm:pr-16 text-justify'>
                    {judgingCriteriaArray.map((criterion, index) => (
                        <p key={index} className="">{criterion}</p>
                    ))}
                </div>

                {rulesArray.length > 0 && (
                    <div>
                        <h2 className=' text-xl font-semibold mt-4 pl-3'>Rules:</h2>
                        <div className=' p-4 pt-2 sm:pl-12 sm:pr-16 text-justify'>{rulesArray.map((rule, index) => (
                            <p key={index} className="">{rule}</p>
                        ))}</div>
                    </div>
                )}

                {venueArray.length > 0 && (
                    <div>
                        <h2 className=' text-xl font-semibold mt-4 pl-3'>Venue:</h2>
                        <div className=' p-4 pt-2 sm:pl-12 sm:pr-16 text-justify'>{venueArray.map((venue, index) => (
                            <p key={index} className="">{venue}</p>
                        ))}</div>
                    </div>
                )}

                <h2 className=' text-xl font-semibold mt-4 pl-3'>To be announced:</h2>
                <p className=' p-4 pt-2 sm:pl-12 sm:pr-16 text-justify'>{event.toBeAnnounced}</p>

                <h2 className=' text-xl font-semibold mt-4 pl-3'>Aim:</h2>
                <p className=' p-4 pt-2 sm:pl-12 sm:pr-16 text-justify'>{event.aim}</p>
            </div>
        </div>
    )
}

export default Component