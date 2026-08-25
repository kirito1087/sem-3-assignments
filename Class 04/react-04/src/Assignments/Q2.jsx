import React from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'

let products = [
  {id: 1, name: "Laptop", price: 50000},
  {id: 2, name: "Phone", price: 30000},
  {id: 3, name: "Headphones", price: 5000},
  {id: 4, name: "Keyboard", price: 2000}
]

function ProductDetails() {

  let {id} = useParams()

  let product = products.find(a => a.id === Number(id))

  if(!product){
    return <h2>Product not found</h2>
  }

  return (
    <div>

      <h1>Product Details</h1>

      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>

    </div>
  )
}

function Q2() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/p/:id" element={<ProductDetails />} />

      </Routes>

    </BrowserRouter>
  )
}

export default Q2;