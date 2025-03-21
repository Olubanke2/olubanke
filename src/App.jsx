import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

import Testimonials from "./components/Testimonials"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Services from "./pages/Services"



const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/services', element: <Services /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> }
])


function App() {

  return <RouterProvider router={router} />
}

export default App
