import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

const Home = () => {
    return (
        <>
            <Navbar className={'absolute'} linkClasses={'text-white'} />
            <Hero />
            <Services />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default Home
