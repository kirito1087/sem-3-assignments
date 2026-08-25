import React, { createContext, useContext } from 'react'

let MessageContext = createContext()

function Child() {

  let message = useContext(MessageContext)

  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

function Middle() {

  return (
    <div>
      <Child />
    </div>
  )
}

function Q5() {

  let message = "Welcome to React"

  return (
    <MessageContext.Provider value={message}>

      <Middle />

    </MessageContext.Provider>
  )
}

export default Q5;