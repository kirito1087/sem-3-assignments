import React, { useReducer } from 'react'

const initialState = {
  quantity: 1,
  message: ""
}

function reducer(state, action) {

  switch (action.type) {

    case "INCREMENT":
      return {
        quantity: state.quantity + 1,
        message: ""
      }

    case "DECREMENT":
      if (state.quantity <= 1) {
        return {
          quantity: 1,
          message: "Quantity cannot be less than 1"
        }
      }
      return {
        quantity: state.quantity - 1,
        message: ""
      }

    default:
      return state
  }
}

function Q1() {

  let [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>

      <h1>Product Quantity Selector</h1>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>

      <span style={{ margin: "0 15px" }}>{state.quantity}</span>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>

      {state.message && (
        <p style={{ color: "red" }}>{state.message}</p>
      )}

    </div>
  )
}

export default Q1