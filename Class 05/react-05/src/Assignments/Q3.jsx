import React, { useReducer } from 'react'

const initialState = {
  item: "",
  cart: []
}

function reducer(state, action) {

  switch (action.type) {

    case "SET_ITEM":
      return {
        ...state,
        item: action.payload
      }

    case "ADD_TO_CART":
      if (state.item.trim() === "") {
        return state
      }
      return {
        item: "",
        cart: [...state.cart, state.item]
      }

    default:
      return state
  }
}

function Q3() {

  let [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>

      <h1>Shopping Cart</h1>

      <input
        type="text"
        value={state.item}
        placeholder="Enter item name"
        onChange={(e) => dispatch({ type: "SET_ITEM", payload: e.target.value })}
      />

      <button onClick={() => dispatch({ type: "ADD_TO_CART" })}>Add to Cart</button>

      <ul>
        {state.cart.map((a, index) => (
          <li key={index}>{a}</li>
        ))}
      </ul>

    </div>
  )
}

export default Q3;