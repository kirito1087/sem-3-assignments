import { useState } from 'react'

{/*COUNTER APP*/}
const Counter = () => {
  const[count, setCount] = useState(0);
  const increase = () => setCount(count+1);
  const decrease = () => setCount(count-1);
  const reset = () => setCount(0);
  return (
    <div>
      <h1>COUNTER APP</h1>
      <h1>Count: {count}</h1>

      <button onClick={increase}>INCREASE</button>
      <button onClick={decrease}>DECREASE</button>
      <button onClick={reset}>RESET</button>
    </div>
  )
}

export default Counter