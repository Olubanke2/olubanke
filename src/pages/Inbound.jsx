import React from 'react'
import Container from '../components/UI/Container'

import abstract from '../assets/inbound/abstract.svg'
import hero from '../assets/inbound/hero.svg'
import services from '../assets/inbound/services.svg'

const Inbound = () => {
    return (
        <div>
            <Container className='bg-primaryBlue text-white h-64 flex items-center relative'>
                <h1 className='text-5xl font-bold'>Inbound Services</h1>
                <img src={abstract} alt="abstract" className='absolute right-0 w-[120px]' />
            </Container>

            <Container className='flex flex-col gap-6 py-12 text-textblack'>
                <h1 className='font-semibold text-4xl'>Seamless Support. Exceptional Customer Experience.</h1>
                <p>At MCCL, we understand that every customer interaction matters. Our Inbound Call Services are designed to provide seamless, professional, and efficient customer support that keeps your clients engaged and satisfied.</p>
                <img src={hero} alt="office" className='mx-auto' />
                <p>Customer expectations are higher than ever, and businesses that fail to deliver fast, efficient, and personalized support risk losing customer loyalty. At MCCL, we act as an extension of your brand, ensuring that every call is handled with the utmost professionalism and care. Whether customers are calling with an inquiry, a complaint, or a technical issue, we provide friendly, knowledgeable, and solution-driven responses that leave a lasting positive impression.</p>
                <p>Beyond just answering calls, we create meaningful interactions that drive brand trust and customer satisfaction. Our agents are trained to understand your products, services, and company values, so they can offer informed solutions and personalized support. From assisting with order processing and troubleshooting to handling billing inquiries and complaints, we ensure that customers receive the attention and expertise they deserve. With cutting-edge call management technology, we streamline processes to reduce wait times, enhance response efficiency, and improve overall customer experience.</p>
            </Container>

            <Container className='flex bg-primaryGray py-16'>
                <img src={services} alt="woman working" className='w-1/2 rounded-2xl' />
                <div className="w-1/2  text-white text-right">
                    <h2>Why Choose MCCL for Inbound Call Services?</h2>
                    <ul className='py-3 flex flex-col gap-4'>
                        <li>
                            <h3 className='font-semibold'>Customer Support & Helpdesk Services</h3>
                            <p>Prompt issue resolution and customer assistance.</p>
                        </li>
                        <li>
                            <h3 className='font-semibold'>Product & Service Inquiries</h3>
                            <p>Providing customers with accurate and detailed information.</p>
                        </li>
                        <li>
                            <h3 className='font-semibold'>Complaint Handling & Resolution</h3>
                            <p>Addressing and resolving customer concerns professionally.</p>
                        </li>
                        <li>
                            <h3 className='font-semibold'>Billing & Payment Assistance</h3>
                            <p>Helping customers resolve invoice and payment-related concerns.</p>
                        </li>
                    </ul>
                </div>
            </Container>

            <Container className='flex flex-col justify-center rounded-3xl  bg-white -mt-5 py-20 border-2'>
                <h1 className="text-5xl text-center text-textblack font-bold">Power your business. Transform customer engagement.</h1>
                <button className="mt-10 p-2 mx-auto w-max border-2 rounded-2xl border-textblack text-textblack">Get Started</button>
            </Container>
        </div>
    )
}

export default Inbound
