import React from 'react'
import Container from '../components/UI/Container'

import abstract from '../assets/inbound/abstract.svg'
import hero from '../assets/outbound/hero.svg'
import services from '../assets/outbound/services.svg'

const Outbound = () => {
    return (
        <div>
            <Container className='bg-primaryBlue text-white h-64 flex items-center relative'>
                <h1 className='text-5xl font-bold'>Outbound Services</h1>
                <img src={abstract} alt="abstract" className='absolute right-0 w-[120px]' />
            </Container>

            <Container className='flex flex-col gap-6 py-12 text-textblack'>
                <h1 className='font-semibold text-4xl'>Drive Sales. Strengthen Customer Relationships.</h1>
                <p>At MCCL, we understand that every customer interaction matters. Our Inbound Call Services are designed to provide seamless, professional, and efficient customer support that keeps your clients engaged and satisfied.</p>
                <img src={hero} alt="office" className='mx-auto' />
                <p>In today’s fast-paced business environment, customer service is more than just answering calls—it’s about creating meaningful interactions that build trust and brand loyalty. Our trained professionals handle customer inquiries, complaints, and technical support with precision and care, ensuring that every call contributes to a positive customer experience. Whether it’s resolving issues, processing orders, or offering expert guidance, MCCL ensures swift and effective communication that aligns with your company’s goals.</p>
                <p>From lead generation and sales outreach to customer retention and market research, our outbound calling strategies are tailored to your business goals. Whether you need to recover outstanding payments, schedule appointments, or conduct surveys, our experienced agents will represent your brand with professionalism and expertise. With data-driven insights and cutting-edge call technology, we optimize every conversation to maximize conversions, improve customer loyalty, and increase revenue.</p>
            </Container>

            <Container className='flex bg-primaryGray py-16'>
                <div className="w-1/2  text-white">
                    <h2>Why Choose MCCL for Outbound Call Services?</h2>
                    <ul className='py-3 flex flex-col gap-4'>
                        <li>
                            <h3 className='font-semibold'>Debt Recovery & Collections</h3>
                            <p>Helping businesses retrieve outstanding payments efficiently.</p>
                        </li>
                        <li>
                            <h3 className='font-semibold'>Sales & Telemarketing</h3>
                            <p>Converting prospects into customers through persuasive outreach.</p>
                        </li>
                        <li>
                            <h3 className='font-semibold'>Service Renewal & Subscription Management</h3>
                            <p>Ensuring customers remain engaged with your services.</p>
                        </li>
                        <li>
                            <h3 className='font-semibold'>Customer Satisfaction & Feedback Calls</h3>
                            <p>Collecting insights to enhance service quality.</p>
                        </li>
                    </ul>
                </div>
                <img src={services} alt="woman working" className='w-1/2 rounded-2xl' />
            </Container>

            <Container className='flex flex-col justify-center rounded-3xl  bg-white -mt-5 py-20 border-2'>
                <h1 className="text-5xl text-center text-textblack font-bold">Power your business. Transform customer engagement.</h1>
                <button className="mt-10 p-2 mx-auto w-max border-2 rounded-2xl border-textblack text-textblack">Get Started</button>
            </Container>
        </div>
    )
}

export default Outbound
