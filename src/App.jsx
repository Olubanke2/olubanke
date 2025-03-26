import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

import Testimonials from "./components/Testimonials"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import Inbound from "./pages/Inbound"
import Layout from "./components/Layout"
import Error from "./pages/Error"

import './App.css'
import Outbound from "./pages/Outbound"



const router = createBrowserRouter([
  {
    path: '/', element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/services', element: <Services />, },
      { path: '/services/inbound-services', element: <Inbound /> },
      { path: '/services/outbound-services', element: <Outbound /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> }
    ]
  },
])


function App() {

  return <RouterProvider router={router} />

}



export default App
