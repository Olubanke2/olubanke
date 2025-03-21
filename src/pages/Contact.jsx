import React from 'react'
import Navbar from '../components/Navbar'
import Container from '../components/UI/Container'
import Footer from '../components/Footer'

import HeroImg from '../assets/hero-bg.png'


const Contact = () => {
    return (
        <>
            <Navbar className={'static'} linkClasses={'text-textblack'} />

            <div className="text-textblack text-5xl bg-slate-400 h-64 flex items-center justify-center" style={{ backgroundImage: `url(${HeroImg})`, backgroundSize: 'cover' }}>
                <h1>Contact Us</h1>
            </div>

            <section className='py-16 border border-b-2'>
                <Container className='flex justify-center items-center'>
                    <div className="">
                        <h2 className='font-semibold text-4xl'>Location</h2>
                        <p>14, Lanre Awolokun,<br/>Gbagada,<br/>Lagos</p>
                    </div>
                </Container>
            </section>

            <section className='py-16 border border-b-2'>
                <Container className='flex justify-center items-center'>
                    <div className="">
                        <h2 className='font-semibold text-4xl'>Contact</h2>
                        <p>14, Lanre Awolokun,<br/>Gbagada,<br/>Lagos</p>
                    </div>
                </Container>
            </section>

            <section className='py-16 border border-b-2'>
                <Container className='flex justify-center items-center'>
                    <div className="text-center">
                        <h2 className='font-semibold text-4xl'>Working Hours</h2>
                        <p>14, Lanre Awolokun,<br/>Gbagada,<br/>Lagos</p>
                    </div>
                </Container>
            </section>

            <section className='py-16 border border-b-2'>
                <Container className='flex justify-center items-center'>
                    <div className="">
                        <h2 className='font-semibold text-4xl'>Socials</h2>
                        <ul className='text-textblack'>
                            <li className='underline'>
                                Facebook
                            </li>
                            <li className='underline'>
                                X
                            </li>
                            <li className='underline'>
                                Instagram
                            </li>
                            <li className='underline'>
                                LinkedIn
                            </li>
                        </ul>
                    </div>
                </Container>
            </section>
            

            <Footer />
        </>
    )
}

export default Contact
