import Navbar from "../components/Navbar"

import Target from '../assets/About/Goal.svg'
import Profit from '../assets/About/Improvement.svg'
import Shield from '../assets/About/Protect.svg'
import Idea from '../assets/About/Project.svg'
import Values from '../assets/About/ValuesImage.svg'
import Container from "../components/UI/Container"
import Footer from "../components/Footer"

import HeroImg from '../assets/hero-bg.png'
import Videothumb from '../assets/About/VideoThumb.png'
import { Video } from "lucide-react"
import Background from '../assets/About/background.jpg'

const About = () => {
    return (
        <div>
            <div className="text-textblack text-5xl  h-64 flex items-center justify-center" style={{ backgroundImage: `url(${HeroImg})`,backgroundRepeat:"no-repeat", backgroundSize: 'cover', backgroundPosition:"center"}}>"
                <h1>About Us</h1>
            </div>

            <Container className='bg-[#F2F0EB] py-12'>
                <div className="text-center text-textblack">
                    <h1 className="font-bold text-3xl">Your Call Center Partner for Growth</h1>
                    <p className="w-1/2 mx-auto my-2 ">Delivering seamless customer engagement, sales, and support with expertise and innovation.</p>

                    <div className="w-[80%] aspect-[16/9] mx-auto">
                        <iframe className="mx-auto my-2 w-full h-full rounded-2xl" src="https://www.youtube.com/embed/3AKaDTseXA0?si=TT5qGq4vqBXOhBdi?modestbranding=1&rel=0"></iframe>

                    </div>
                </div>
            </Container>

            <section>
                <Container >
                    <div id="mission" className=" bg-[#3033E9] py-16 flex justify-between items-center" style={{ backgroundImage: `url(${Background})`, opacity: '10%' }}>
                        <h1 className="text-3xl font-semibold">OUR MISSION</h1>
                        <p className="w-1/2">To empower businesses with world-class call center solutions that enhance customer satisfaction, drive sales growth, and optimize operational efficiency. At MCCL, we prioritize excellence, innovation, and personalized engagement to create meaningful connections between businesses and their customers.</p>
                    </div>
                    <div id="vision" className="py-16 flex justify-between items-center">
                        <p className="w-1/2">To be the leading provider of customer engagement solutions, setting the standard for exceptional call center services that foster business success, customer loyalty, and continuous innovation in the global marketplace.</p>
                        <h1 className="text-3xl font-semibold">OUR VISION</h1>
                    </div>
                </Container>
            </section>

            <section className="bg-white py-10">
                <Container className='flex justify-between'>
                    <div className="text-[#2B2C62]">
                        <h1 className="text-3xl font-semibold my-3">OUR VALUES</h1>
                        <p className="text-xl w-5/6">At MCCL, we don’t just answer calls, we create lasting connections.</p>
                        <ul className="mt-6 w-5/6">
                            <li className="flex items-center mb-5 gap-x-2   ">
                                <img src={Target} width={30} alt="" />
                                <p>Customer-Centric Approach – Every call is an opportunity to create a positive experience</p>
                            </li>
                            <li className="flex items-center mb-5 gap-x-2   ">
                                <img src={Profit} width={30} alt="" />
                                <p>Results-Driven – Focused on delivering measurable business outcomes.</p>
                            </li>
                            <li className="flex items-center mb-5 gap-x-2   ">
                                <img src={Shield} width={30} alt="" />
                                <p>Integrity & Transparency – Ethical practices in every interaction.</p>
                            </li>
                            <li className="flex items-center mb-5 gap-x-2   ">
                                <img src={Idea} width={30} alt="" />
                                <p>Innovation & Efficiency – Leveraging technology for smarter service delivery.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <img src={Values} alt="" />
                    </div>
                </Container>
            </section>

            <Container className='flex flex-col justify-center rounded-3xl bg-[#252525] -mt-5 py-20'>
                <h1 className="text-5xl text-center text-white font-bold">Power your business. Transform customer engagement.</h1>
                <button className="mt-10 p-2 mx-auto w-max border-2 rounded-2xl border-white text-white">Get Started</button>
            </Container>
        </div>
    )
}

export default About
