import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h1>Contact Us Page</h1>
    </div>
  )
}

function Services() {
  return (
    <div>
      <h1>Services Page</h1>
    </div>
  )
}



const Q1 = () => {
  return (
   <>
   <BrowserRouter>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/services">Services</Link>
      </nav>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/services" element={<Services />} />

      </Routes>

    </BrowserRouter>
   </>
  )
}



export default Q1;