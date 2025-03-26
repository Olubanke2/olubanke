import { ChevronDown, Menu, X } from 'lucide-react'
import logo from '../assets/Connectlogo.svg'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
const Navbar = ({ className, linkClasses }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
    const location = useLocation()

    const toggleOptions = () => {
        setIsOpen(state => !state)
    }

    const toggleServicesDropdown = () => {
        setIsServicesDropdownOpen(state => !state)
    }

    const isActive = (path) => location.pathname === path ? "underline decoration-2 underline-offset-4" : "";

    return (
        <nav className={`h-20 w-full flex px-6 lg:px-12 justify-between items-center ${className}`}>
            <img className='' width={200} src={logo} alt="Logo" />
            {/* Desktop Nav */}
            <div className="hidden space-x-3 md:flex">
                <Link className={` font-medium text-black ${linkClasses} ${isActive("/")}`} to="/">Home</Link>
                <Link className={` font-medium text-black ${linkClasses} ${isActive("/about")}`} to="/about">About</Link>


                {/* <Link className={` font-medium ${linkClasses} ${isActive("/services")}`} to="/services">Services</Link> */}

                <div
                    className="relative"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                    <div className="flex items-center">
                        <Link
                            className={`font-medium ${linkClasses} ${isActive("/services")}`}
                            to="/services"
                        >
                            Services
                        </Link>
                        <ChevronDown size={20} color={location.pathname==='/' ? 'white' : '#000'} className="ml-1" />
                    </div>

                    {isServicesDropdownOpen && (
                        <div className="absolute top-full left-0  bg-white shadow-lg rounded-md py-2 w-48 z-10">
                            <Link
                                to="/services/inbound-services"
                                className="block px-4 py-2 hover:bg-gray-100"
                            >
                                Inbound Services
                            </Link>
                            <Link
                                to="/services/outbound-services"
                                className="block px-4 py-2 hover:bg-gray-100"
                            >
                                Outbound Services
                            </Link>
                        </div>
                    )}
                </div>


                <Link className={` font-medium ${linkClasses}`} to="https://jobslounge.markcalthers.com/job/Call-Centre-Executive-1195">Careers</Link>
                <Link className={` font-medium ${linkClasses} ${isActive("/contact")}`} to="/contact">Contact Us</Link>
            </div>

            <button className='md:hidden z-10' onClick={toggleOptions}>
                {isOpen ? <X color={location.pathname==='/' ? 'white' : '#000'} strokeWidth={3} /> : <Menu color={location.pathname==='/' ? 'white' : '#000'} strokeWidth={3} />}
            </button>

            {isOpen && (
                <div className="absolute z-0 top-0 right-3">
                    <ul className="text-sm md:hidden space-y-2 text-center mt-16 bg-white rounded-lg px-12 py-3">
                        <li><Link to='/' className={`block text-black py-2 hover:bg-neutral-300 ${isActive("/")}`}>Home</Link></li>
                        <li><Link to='/about' className={`block text-black py-2 hover:bg-neutral-300 ${isActive("/about")}`}>About</Link></li>
                        <li><Link to='services' className={`block text-black py-2 hover:bg-neutral-300 ${isActive("/services")}`}>Services</Link></li>
                        <li><Link to='https://jobslounge.markcalthers.com/job/Call-Centre-Executive-1195' className={`block text-black py-2 hover:bg-neutral-300`}>Careers</Link></li>
                        <li><Link to='/contact' className={`block text-black py-2 hover:bg-neutral-300 ${isActive("/contact")}`}>Contact</Link></li>
                    </ul>
                </div>)
            }
        </nav>
    )
}

export default Navbar
