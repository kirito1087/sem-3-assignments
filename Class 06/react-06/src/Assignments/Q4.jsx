import React, { useState, useCallback } from 'react'

function Q4() {

  let [step, setStep] = useState(1)
  let [count, setCount] = useState(0)

  let increase = useCallback(() => {
    // step must be in the dependency array because this function
    // "closes over" step (closure) — it captures the value of step
    // that existed when the function was created.
    // If step is not in the dependency array, useCallback will keep
    // returning the OLD version of the function forever (created when
    // step was its initial value), so increase would always add the
    // stale/old step value even after the user changes it on screen.
    // Including [step] tells React: "rebuild this function only when
    // step changes" — so it always uses the latest step value.
    setCount(c => c + step)
  }, [step])

  return (
    <div>

      <h1>Callback with a Dependency</h1>

      <p>Step: {step}</p>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />

      <p>Count: {count}</p>
      <button onClick={increase}>Increase by Step</button>

    </div>
  )
}

export default Q4;