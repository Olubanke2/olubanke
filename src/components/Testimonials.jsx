import React from 'react'
import Container from './UI/Container'
import TestimonialCard from './UI/TestimonialCard'

const testimonials = [
    {
        "statement": "MCCL transformed our customer service. Their agents handle inquiries professionally, reducing response time by 50% and boosting customer satisfaction.",
        "person": "David A.",
        "company": "SwiftRetail"
    },
    {
        "statement": "Since partnering with MCCL, our sales conversions have skyrocketed. Their outbound team is proactive, engaging, and results-driven.",
        "person": "Linda E.",
        "company": "PrimeTech Solutions"
    },
    {
        "statement": "We struggled with overdue payments until MCCL stepped in. Their structured approach to debt recovery improved our collection rate without harming customer relationships.",
        "person": "James T.",
        "company": "FinTrust Microfinance"
    },
    {
        "statement": "MCCL’s 24/7 support has been a game-changer. Our customers now receive round-the-clock assistance, leading to increased loyalty and retention.",
        "person": "Aisha M.",
        "company": "MedCare Assist"
    }
]


const Testimonials = () => {
    return (
        <Container className='my-10 text-textblack'>
            <h2 className='text-center text-4xl font-semibold my-8'>Testimonials</h2>
            <div className="flex flex-wrap justify-between lg:w-3/4 w-[95%] mx-auto  ">
                {testimonials.map((testimonial, index) =>
                (
                    <TestimonialCard statement={testimonial.statement} person={testimonial.person} company={testimonial.company} />
                ))
                }
            </div>
        </Container>
    )
}

export default Testimonials
