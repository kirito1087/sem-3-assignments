import React, { useState } from 'react'

const ProfileCard = React.memo(function ProfileCard({ title, city }) {

  console.log("ProfileCard rendered")

  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginTop: "10px" }}>
      <h2>{title}</h2>
      <p>City: {city}</p>
    </div>
  )
})

function Q1() {

  let [count, setCount] = useState(0)

  return (
    <div>

      <h1>Profile Card with memo</h1>

      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>

      <ProfileCard title="Software Engineer" city="Pune" />

    </div>
  )
}

export default Q1;