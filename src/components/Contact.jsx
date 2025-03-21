import React from 'react'
import Container from './UI/Container'

import Facebook from '../assets/social/white/Facebook.svg'
import Instagram from '../assets/social/white/Instagram.svg'
import X from '../assets/social/white/Xlogo.svg'
import LinkedIn from '../assets/social/white/LinkedIn.svg'
import Whatsapp from '../assets/social/white/Whatsapp.svg'

const Contact = () => {
    return (
        <Container className='bg-[#3033E9] py-5 text-white text-center flex flex-col items-center gap-5'>
            <h1 className='font-bold text-3xl'>Let’s Talk – Transform Your Customer Engagement</h1>
            <div className="">
                <h4>E-MAIL</h4>
                <p className='font-bold text-2xl my-4'>info@markcalthers.com</p>
            </div>
            <div className="">
                <h4>PHONE</h4>
                <p className='font-bold text-2xl my-4'>+234 801 234 5678</p>
            </div>
            <div className="">
                <h4>SOCIALS</h4>
                <div className="flex gap-3 my-4">
                    <img src={Facebook} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={X} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Whatsapp} alt="" />
                </div>
            </div>
        </Container>
    )
}

export default Contact
