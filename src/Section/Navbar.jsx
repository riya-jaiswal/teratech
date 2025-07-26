import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png' 

const Navbar = () => {
  return (
    <nav className=" bg-white shadow-md py-2 px-6 flex items-center justify-between sticky top-0 z-50">
      
      {/* Left: Logo */}
      {/* <div className="flex items-center">
        <img src={logo} alt="Tetratech Logo" className="h-30 w-32 mr-3" /> 
        <span className="text-xl font-bold text-[#003366]"></span> 
      </div> */}

      {/* Center: Navigation */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li><Link to="/" className="hover:text-[#DB1A13]">Home</Link></li>
        <li><Link to="/about" className="hover:text-[#DB1A13]">About</Link></li>
        <li><Link to="/service" className="hover:text-[#DB1A13]">Service</Link></li>
        <li><Link to="/contact" className="hover:text-[#DB1A13]">Contact</Link></li>
      </ul>

      {/* Right: CTA Button */}
      <a
        href="https://wa.me/917378751788"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#DB1A13] text-white text-lg px-3 py-2 rounded-full font-semibold shadow hover:bg-[#b91610] transition"
      >
        Chat Now
      </a>
    </nav>
  )
}

export default Navbar
