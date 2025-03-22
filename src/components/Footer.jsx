import logo from '../assets/Connectlogo.svg'

import Facebook from '../assets/social/Facebook.svg'
import Instagram from '../assets/social/Instagram.svg'
import Twitter from '../assets/social/Xlogo.svg'
import Linkedin from '../assets/social/LinkedIn.svg'
import Whatsapp from '../assets/social/Whatsapp.svg'


const Footer = () => {
    return (
        <footer className='bg-white p-6 lg:p-12'>
            <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center">
                <img src={logo} width={200} alt="" />
                <div className="">
                    <a className='px-2 text-[#1E0E62] font-medium' href="">Home</a>
                    <a className='px-2 text-[#1E0E62] font-medium' href="">Services</a>
                    <a className='px-2 text-[#1E0E62] font-medium' href="">Careers</a>
                    <a className='px-2 text-[#1E0E62] font-medium' href="">Contact Us</a>
                </div>
            </div>
            <hr className='border-[#EBEAED]' />
            <div className="">
                <div className= "flex justify-center my-5">
                    <img src={Facebook}     className='mx-2' alt="" />
                    <img src={Instagram} className='px-2' alt="" />
                    <img src={Twitter} className='px-2' alt="" />
                    <img src={Linkedin} className='px-2' alt="" />
                    <img src={Whatsapp} className='px-2' alt="" />
                </div>
                <p className='text-center text-[#818181]'>© 2025 MCC Connect. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
