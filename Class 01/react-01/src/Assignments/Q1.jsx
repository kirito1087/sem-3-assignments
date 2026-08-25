import { useState } from 'react'

function Q1() {

  let [count, setCount] = useState(0)

  function increase(){
    if(count < 10){
      setCount(count + 1)
    }
  }

  function decrease(){
    if(count > 0){
      setCount(count - 1)
    }
  }

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={increase} disabled={count === 10}>
        Increase
      </button>

      <button onClick={decrease} disabled={count === 0}>
        Decrease
      </button>
    </div>
  )
}

export default Q1