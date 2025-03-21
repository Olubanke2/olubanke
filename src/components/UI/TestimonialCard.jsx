import React from 'react'

const TestimonialCard = ({ statement, person, company }) => {
    return (
        <div className='w-5/12 py-2'>
            <p className='text-[#a1a1b0] font-medium mb-3'>{statement}</p>
            <h5 className='font-bold text-[#2b2c62]'>{person}</h5>
            <p className='text-[#a1a1b0] font-normal'>{company}</p>
        </div>
    )
}

export default TestimonialCard
