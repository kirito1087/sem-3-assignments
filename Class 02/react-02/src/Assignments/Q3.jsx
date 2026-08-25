import React, { useEffect, useState } from 'react'

function Q3() {

  let [todos, setTodos] = useState([])
  let [selectedUser, setSelectedUser] = useState(1)

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data))

  }, [])

  return (
    <div>

      <h1>Filter Todos by User</h1>

      <button onClick={() => setSelectedUser(1)}>
        User 1
      </button>

      <button onClick={() => setSelectedUser(2)}>
        User 2
      </button>

      <button onClick={() => setSelectedUser(3)}>
        User 3
      </button>

      <h2>User {selectedUser}</h2>

      {todos
        .filter(a => a.userId === selectedUser)
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

export default Q3