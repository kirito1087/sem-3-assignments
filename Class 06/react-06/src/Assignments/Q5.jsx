import React, { useState, useEffect } from 'react'

function Q5() {

  let [text, setText] = useState(() => {
    return localStorage.getItem("savedText") || ""
  })

  useEffect(() => {
    localStorage.setItem("savedText", text)
  }, [text])

  return (
    <div>

      <h1>Remember the Input</h1>

      <input
        type="text"
        value={text}
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />

      <p>Saved value: {text}</p>

    </div>
  )
}

export default Q5;