import { Menu, X } from 'lucide-react'
import logo from '../assets/Connectlogo.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = ({className, linkClasses}) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOptions = () => {
        setIsOpen(state => !state)
    }

    return (
        <nav className={`h-20 w-full flex px-12 justify-between items-center ${className}`}>
            <img className='' width={200} src={logo} alt="Logo" />

            {/* Desktop Nav */}
            <div className="hidden space-x-3 md:flex">
                <Link className={` font-medium text-black ${linkClasses}`} to="/">Home</Link>
                <Link className={` font-medium text-black ${linkClasses}`} to="/about">About</Link>
                <Link className={` font-medium ${linkClasses}`} to="/services">Services</Link>
                <Link className={` font-medium ${linkClasses}`} to="https://jobslounge.markcalthers.com/">Careers</Link>
                <Link className={` font-medium ${linkClasses}`} to="/contact">Contact Us</Link>
            </div>

            <button className='md:hidden z-10' onClick={toggleOptions}>
                {isOpen ? <X color="#ffffff" strokeWidth={3} /> : <Menu color="#ffffff" strokeWidth={3} />}
            </button>

            {isOpen && (
                <div className="absolute z-0 top-0 right-3">
                    <ul className="md:hidden space-y-2 text-center mt-20 bg-white rounded-lg px-12 py-6">
                        <li><Link href="#" className={`block text-[#000000] py-2 hover:bg-neutral-300 ${linkClasses}`}>Home</Link></li>
                        <li><Link href="#" className={`block text-[#000000] py-2 hover:bg-neutral-300 ${linkClasses}`}>About</Link></li>
                        <li><Link href="#" className={`block text-[#000000] py-2 hover:bg-neutral-300 ${linkClasses}`}>Services</Link></li>
                        <li><Link href="#" className={`block text-[#000000] py-2 hover:bg-neutral-300 ${linkClasses}`}>Contact</Link></li>
                    </ul>
                </div>)
            }
        </nav>
    )
}

export default Navbar
