import React, { useReducer } from 'react'

const initialState = {
  likes: 0,
  dislikes: 0
}

function reducer(state, action) {

  switch (action.type) {

    case "LIKE":
      return {
        ...state,
        likes: state.likes + 1
      }

    case "DISLIKE":
      return {
        ...state,
        dislikes: state.dislikes + 1
      }

    default:
      return state
  }
}

function Q4() {

  let [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>

      <h1>Like & Dislike Counter</h1>

      <button onClick={() => dispatch({ type: "LIKE" })}>👍 Like</button>
      <button onClick={() => dispatch({ type: "DISLIKE" })}>👎 Dislike</button>

      <p>Likes: {state.likes}</p>
      <p>Dislikes: {state.dislikes}</p>

    </div>
  )
}

export default Q4;