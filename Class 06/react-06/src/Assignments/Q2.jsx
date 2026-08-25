import React, { useState, useMemo } from 'react'

const names = ["Krishna", "Rahul", "Aman", "Rohit", "Priya", "Sneha", "Arjun", "Isha"]

function Q2() {

  let [search, setSearch] = useState("")
  let [count, setCount] = useState(0)

  let filteredList = useMemo(() => {
    console.log("Filtering list...")
    return names.filter(a => a.toLowerCase().includes(search.toLowerCase()))
  }, [search])

  return (
    <div>

      <h1>Filter an Expensive List</h1>

      <input
        type="text"
        value={search}
        placeholder="Search name..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>

      <ul>
        {filteredList.map((a, index) => (
          <li key={index}>{a}</li>
        ))}
      </ul>

    </div>
  )
}

export default Q2;