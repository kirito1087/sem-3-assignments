import React, { useState } from 'react'

const Child = React.memo(function Child({ onClick }) {

  console.log("Child rendered")

  return (
    <button onClick={onClick}>Click Me</button>
  )
})

function Q3() {

  let [count, setCount] = useState(0)

  function handleClick() {
    console.log("Button clicked")
  }

  return (
    <div>

      <h1>Keep the Same Function (without useCallback)</h1>

      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>

      <Child onClick={handleClick} />

    </div>
  )
}

export default Q3;