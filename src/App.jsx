import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Navbar from './Section/Navbar';
import Footer from './Section/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          
          <Route path="" element={<Home />} />

          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Contact" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App


