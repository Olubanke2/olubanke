import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
    const location = useLocation()
    return (
        <div>
            {location.pathname === '/' ? <Navbar className={'absolute'} linkClasses={'text-white'} /> : <Navbar />}
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
