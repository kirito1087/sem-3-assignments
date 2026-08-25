import React from 'react'

function Child({message}) {

  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

function Middle({message}) {

  return (
    <div>
      <Child message={message} />
    </div>
  )
}

function Q4() {

  let message = "Welcome to React"

  return (
    <div>
      <Middle message={message} />
    </div>
  )
}

export default Q4;