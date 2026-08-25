import React, { useEffect, useState } from 'react'

function Q5() {

  let [todos, setTodos] = useState([])
  let [search, setSearch] = useState("")

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

      <h1>Search Todos</h1>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search todo..."
      />

      {todos
        .filter(a => a.title.toLowerCase().includes(search.toLowerCase()))
        .map(a => (
          <div key={a.id}>

            <p>
              ID: {a.id} <br />
              Title: {a.title}
            </p>

            <button onClick={() => deleteTodo(a.id)}>
              Delete
            </button>

          </div>
        ))
      }

    </div>
  )
}

export default Q5