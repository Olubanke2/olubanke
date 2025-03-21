import { MoveRight } from "lucide-react"
import Navbar from "../components/Navbar"
import Container from "../components/UI/Container"
import Footer from "../components/Footer"

import HeroImg from '../assets/hero-bg.png'



const Services = () => {
    return (
        <>
            <Navbar />

            <div className="text-textblack text-5xl bg-slate-400 h-64 flex items-center justify-center" style={{ backgroundImage: `url(${HeroImg})`, backgroundSize: 'cover' }}>
                <h1>Services</h1>
            </div>

            <Container className='bg-[#F2F0EB] py-16 flex flex-col gap-8 justify-center items-center'>
                <h2 className="font-semibold text-4xl">Seamless Communication. Powerful Results.</h2>
                <p className="w-1/2 text-center">Inbound and outbound call solutions designed to enhance customer satisfaction, drive sales, and optimize business operations.</p>
                <div className="flex gap-6">
                    <button className="w-max bg-[#C4DEFD] gap-2 px-4 py-2 flex items-center">Inbound Services<MoveRight size={16} color="#ffffff" /></button>
                    <button className="w-max bg-[#C4DEFD] gap-2 px-4 py-2 flex items-center">Outbound Services<MoveRight size={16} color="#ffffff" /></button>
                </div>
            </Container>

            <Container className='py-16 text-center'>
                <h1 className="font-bold text-4xl text-textblack">Why Choose MCCL?</h1>
                <p className="pb-10">More than a call center. Your strategic partner for growth.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="h-72 bg-[#3033E9] text-white flex flex-col items-center justify-center p-4 rounded-lg">
                        <h3 className="font-bold">Trained Call Experts</h3>
                        <p className="text-center">Skilled professionals delivering quality interactions.</p>
                    </div>
                    <div className="h-72 bg-[#3033E9] text-white flex flex-col items-center justify-center p-4 rounded-lg">
                        <h3 className="font-bold">24/7 Support</h3>
                        <p>Always available to serve your customers.</p>
                    </div>
                    <div className="h-72 bg-[#3033E9] text-white flex flex-col items-center justify-center p-4 rounded-lg">
                        <h3 className="font-bold">Data-Driven Insights</h3>
                        <p>Optimizing performance through analytics.</p>
                    </div>
                    <div className="h-72 bg-[#3033E9] text-white flex flex-col items-center justify-center p-4 rounded-lg">
                        <h3 className="font-bold">Custom Solutions</h3>
                        <p>Tailored call strategies for every business.</p>
                    </div>
                    <div className="h-72 bg-[#3033E9] text-white flex flex-col items-center justify-center p-4 rounded-lg">
                        <h3 className="font-bold">Scalable Services</h3>
                        <p>Grow your operations seamlessly.</p>
                    </div>
                    <div className="h-72 bg-[#3033E9] text-white flex flex-col items-center justify-center p-4 rounded-lg">
                        <h3 className="font-bold">Customer-Centric Approach</h3>
                        <p>Ensuring satisfaction with every call.</p>
                    </div>
                </div>
            </Container>

            <Container className='flex flex-col justify-center rounded-3xl bg-[#252525] -mt-5 py-20'>
                <h1 className="text-5xl text-center text-white font-bold w-1/2 mx-auto">Let’s Elevate Your Customer Experience.</h1>
                <button className="mt-10 p-2 mx-auto w-max border-2 rounded-2xl border-white text-white">Get Started</button>
            </Container>

            <Footer />

        </>
    )
}

export default Services
