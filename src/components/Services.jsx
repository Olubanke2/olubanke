import { MoveRight } from "lucide-react"
import Container from "./UI/Container"
import Inbound from '../assets/InboundImage.svg'
import Outbound from '../assets/OutboundImage.svg'


const Services = () => {
    return (
        <Container className="">
            <div className="text-center mt-10">
                <h3 className="text-4xl pb-4">Our Call Solutions, Your Business Growth</h3>
                <p className="mx-auto w-9/12">We handle your customer interactions, so you can focus on growing your business. Whether inbound or outbound, our expert call services enhance customer experience and drive results.</p>
            </div>
            <div className="mt-10">
                <div className="flex">
                    <div className="w-1/2 flex flex-col gap-6">
                        <h2 className="lg:text-6xl">Inbound call services </h2>
                        <p>We handle your customer interactions, so you can focus on growing your business. Whether inbound or outbound, our expert call services enhance customer experience and drive results.</p>
                        <button className="w-max bg-[#C4DEFD] gap-2 px-4 py-2 flex items-center">Learn more <MoveRight size={16} color="#ffffff" /></button>
                    </div>
                    <div className="">
                        <img src={Inbound} alt="illustration" />
                    </div>
                </div>
                <div className="flex flex-row-reverse">
                    <div className="w-1/2 text-right flex flex-col gap-6 justify-end items-end">
                        <h2 className="lg:text-6xl">Inbound call services </h2>
                        <p>We handle your customer interactions, so you can focus on growing your business. Whether inbound or outbound, our expert call services enhance customer experience and drive results.</p>
                        <button className="w-max bg-[#C4DEFD] gap-2 px-4 py-2 flex items-center">Learn more <MoveRight size={16} color="#ffffff" /></button>
                    </div>
                    <div className="">
                        <img src={Outbound} alt="illustration" />
                    </div>
                </div>
            </div>
        </Container>

    )
}

export default Services
