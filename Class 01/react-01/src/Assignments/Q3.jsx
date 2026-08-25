import { useState } from 'react'

function Display({count}) {

  return (
    <h1>Count: {count}</h1>
  )
}

function Controls({setCount}) {

  function increase(){
    setCount(prev => prev + 1)
  }

  function decrease(){
    setCount(prev => prev - 1)
  }

  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

function Q3() {

  let [count, setCount] = useState(0)

  return (
    <div>

      <Display count={count} />

      <Controls setCount={setCount} />

    </div>
  )
}

export default Q3