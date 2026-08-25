import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// 1. Three page components
function Home() {
  return <h1>Home Page</h1>;
}
function About() {
  return <h1>About Page</h1>;
}
function Contact() {
  return <h1>Contact Us Page</h1>;
}
// 2. Main App with routing
function Router() {
  return (
    <BrowserRouter>
      {/* Navigation menu */}
      <nav>
        <Link to="/">Home</Link> |<Link to="/about">About</Link> |
        <Link to="/contact">Contact Us</Link>
      </nav>
      {/* Route definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
