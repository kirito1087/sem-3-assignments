import React, { useReducer } from 'react'

const initialState = {
  color: "Red"
}

function reducer(state, action) {

  switch (action.type) {

    case "NEXT":
      if (state.color === "Red") {
        return { color: "Yellow" }
      } else if (state.color === "Yellow") {
        return { color: "Green" }
      } else {
        return { color: "Red" }
      }

    default:
      return state
  }
}

function Q2() {

  let [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>

      <h1>Traffic Light</h1>

      <h2 style={{ color: state.color }}>{state.color}</h2>

      <button onClick={() => dispatch({ type: "NEXT" })}>Next</button>

    </div>
  )
}

export default Q2;