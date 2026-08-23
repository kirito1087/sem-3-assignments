import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Home() {

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to our company website.</p>
    </div>
  )
}

function About() {

  return (
    <div>
      <h1>About Us</h1>
      <p>We are a company focused on providing quality services.</p>
    </div>
  )
}

function Contact() {

  return (
    <div>
      <h1>Contact Us</h1>
      <p>Name: Nikunj Sachdeva</p>
      <p>Email: your-email@example.com</p>
      <p>Phone: 1234567890</p>
    </div>
  )
}

function Q4() {

  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>
  )
}

export default Q4;