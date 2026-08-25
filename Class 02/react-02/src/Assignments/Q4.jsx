import React, { useEffect, useState } from 'react'

function Q4() {

  let [todos, setTodos] = useState([])

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data))

  }, [])

  function deleteTodo(id){
    setTodos(todos.filter(a => a.id !== id))
  }

  return (
    <div>

      <h1>Todos</h1>

      {todos.map(a => (
        <div key={a.id}>

          <p>
            ID: {a.id} <br />
            Title: {a.title}
          </p>

          <button onClick={() => deleteTodo(a.id)}>
            Delete
          </button>

        </div>
      ))}

    </div>
  )
}

export default Q4