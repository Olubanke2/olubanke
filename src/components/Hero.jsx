import React from 'react'
import HeroImg from '../assets/Heroimage.jpg'

const Hero = () => {
    return (
        <div className='lg:px-20 px-8 h-[60vh] lg:h-[550px] flex items-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${HeroImg})`, }}>
            <div className="flex flex-col gap-6 lg:w-1/2">
                <h3 className='text-white hidden lg:block'>MCCL delivers expert inbound & outbound call solutions to enhance customer satisfaction and drive business growth.</h3>
                <h1 className='text-center lg:text-left font-bold text-5xl lg:text-6xl text-white'>Smarter Calls <br /> Better Business</h1>
                <button className='w-max mx-auto lg:mx-0 py-3 lg:py-2 px-5 bg-[#2b2c62] text-white'>Explore services</button>
            </div>
        </div>
    )
}

export default Hero;