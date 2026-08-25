import React from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom'

let products = [
  {id: 1, name: "Laptop", price: 50000},
  {id: 2, name: "Phone", price: 30000},
  {id: 3, name: "Headphones", price: 5000},
  {id: 4, name: "Keyboard", price: 2000}
]

function ProductList() {

  let navigate = useNavigate()

  return (
    <div>

      <h1>Product List</h1>

      {products.map(a => (
        <div key={a.id}>

          <button onClick={() => navigate(`/p/${a.id}`)}>
            {a.name}
          </button>

        </div>
      ))}

    </div>
  )
}

function ProductDetails() {

  let {id} = useParams()

  let navigate = useNavigate()

  let product = products.find(a => a.id === Number(id))

  if(!product){
    return <h2>Product not found</h2>
  }

  return (
    <div>

      <h1>Product Details</h1>

      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>

      <button onClick={() => navigate('/list')}>
        Back to List
      </button>

    </div>
  )
}

function Q3() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/list" element={<ProductList />} />

        <Route path="/p/:id" element={<ProductDetails />} />

      </Routes>

    </BrowserRouter>
  )
}

export default Q3