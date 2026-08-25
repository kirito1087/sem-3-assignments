import React, { useEffect, useState } from 'react'

function Q2() {

  let [todos, setTodos] = useState([])

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data))

  }, [])

  return (
    <div>

      <h1>First 10 Todos</h1>

      {todos
        .slice(0, 10)
        .map(a => (
          <div key={a.id}>
            <p>ID: {a.id}</p>
            <p>Title: {a.title}</p>
          </div>
        ))
      }

    </div>
  )
}

export default Q2