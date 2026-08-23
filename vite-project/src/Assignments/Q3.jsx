import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Home() {

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to our food menu.</p>
    </div>
  )
}

function Pizza() {

  return (
    <div>
      <h1>Pizza</h1>
      <p>Delicious pizza with fresh toppings.</p>
    </div>
  )
}

function Burger() {

  return (
    <div>
      <h1>Burger</h1>
      <p>Juicy burger served with fresh ingredients.</p>
    </div>
  )
}

function Drinks() {

  return (
    <div>
      <h1>Drinks</h1>
      <p>Refreshing drinks to enjoy with your meal.</p>
    </div>
  )
}

function Q3() {

  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/pizza">Pizza</Link>
        <Link to="/burger">Burger</Link>
        <Link to="/drinks">Drinks</Link>
      </nav>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/pizza" element={<Pizza />} />

        <Route path="/burger" element={<Burger />} />

        <Route path="/drinks" element={<Drinks />} />

      </Routes>

    </BrowserRouter>
  )
}

export default Q3