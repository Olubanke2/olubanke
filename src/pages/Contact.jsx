import React from 'react'
import Navbar from '../components/Navbar'
import Container from '../components/UI/Container'
import Footer from '../components/Footer'

import HeroImg from '../assets/hero-bg.png'

import map from '../assets/connect/locationmap.png'
import contact from '../assets/connect/contactimage.jpg'
import working from '../assets/connect/workingimage.svg'
import social from '../assets/connect/socialimage.svg'


const Contact = () => {
    return (
        <>
            <div className="text-textblack text-5xl h-64 flex items-center justify-center" style={{ backgroundImage: `url(${HeroImg})`, backgroundSize: 'cover' }}>
                <h1>Contact Us</h1>
            </div>

            <section className='my-4 px-5'>
                <div className="flex h-80 text-white gap-5">
                    <div className="flex-1 bg-yellow-300 ">
                        <img src={map} alt="map" className='w-full h-full object-cover' />
                    </div>
                    <div className="flex justify-center items-center flex-1 bg-primaryBlue ">
                        <div className="text-right">
                            <h2 className='font-semibold text-4xl'>Location</h2>
                            <p>14, Lanre Awolokun,<br />Gbagada,<br />Lagos</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='my-4 px-5'>
                <div className="flex h-80 text-white gap-5">
                    <div className="flex justify-center items-center flex-1 bg-primaryBlue ">
                        <div className="">
                            <h2 className='font-semibold text-4xl'>Contact</h2>
                            <p>info@mcclimited.com</p>
                            <p>08012345678</p>
                            <p>08012345678</p>
                        </div>
                    </div>
                    <div className="flex-1 bg-yellow-300 ">
                        <img src={contact} alt="map" className='w-full h-full object-cover' />
                    </div>
                </div>
            </section>



            <section className='my-4 px-5'>
                <div className="flex h-80 text-white gap-5">
                    <div className="flex-1 bg-yellow-300 ">
                        <img src={working} alt="map" className='w-full h-full object-cover' />
                    </div>
                    <div className="flex justify-center items-center flex-1 bg-primaryBlue ">
                        <div className="text-right">
                            <h2 className='font-semibold text-4xl'>Working Hours</h2>
                            <p>Mon - Fri: 8:00 to 19:00</p>
                            <p>Saturday: 8:00 to 19:00</p>
                            <p>Sunday: 8:00 to 19:00</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='my-4 px-5'>
                <div className="flex h-80 text-white gap-5">
                    <div className="flex justify-center items-center flex-1 bg-primaryBlue ">
                        <div className="">
                            <h2 className='font-semibold text-4xl'>Socials</h2>
                            <p>Facebook</p>
                            <p>X</p>
                            <p>Instagram</p>
                            <p>Youtube</p>
                        </div>
                    </div>
                    <div className="flex-1 bg-yellow-300 ">
                        <img src={social} alt="map" className='w-full h-full object-cover' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
