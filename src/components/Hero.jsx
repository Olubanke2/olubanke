import React from 'react'
import HeroImg from '../assets/Heroimage.jpg'

const Hero = () => {
    return (
        <div className='px-10 justify-center sm:px-20 h-[350px] flex items-center' style={{ backgroundImage: `url(${HeroImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}>
            <div className="gap-6 flex flex-col justify-center items-center sm:w-1/2">
                <h3 className='text-white max-sm:hidden pr-[130px] m-12 mt-11 gap-6  w-[481px] h-[38px]'>MCCL delivers expert inbound & outbound call solutions to enhance customer satisfaction and drive business growth.</h3>
                <h1 className=' max-sm:text-center font-bold text-6xl max-sm:text-[36px] text-white'>Smarter Calls <br /> Better Business</h1>
                <button className='py-2 px-5 bg-[#3033E9] text-sm sm:text-base max-sm:h-[40px] max-sm:px-1 max-sm:rounded-md text-white'>Explore services</button>
            </div>
        </div >
    )
}

export default Hero;