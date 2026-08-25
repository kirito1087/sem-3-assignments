import React from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom'

let students = [
  {id: 1, name: "Krishna", marks: 85},
  {id: 2, name: "Rahul", marks: 78},
  {id: 3, name: "Aman", marks: 92},
  {id: 4, name: "Rohit", marks: 70}
]

function StudentList() {

  let navigate = useNavigate()

  return (
    <div>

      <h1>Student List</h1>

      {students.map(a => (
        <div key={a.id}>

          <button onClick={() => navigate(`/student/${a.id}`)}>
            {a.name}
          </button>

        </div>
      ))}

    </div>
  )
}

function StudentDetails() {

  let {id} = useParams()

  let student = students.find(a => a.id === Number(id))

  return (
    <div>

      <h1>Student Details</h1>

      <p>Name: {student.name}</p>
      <p>Marks: {student.marks}</p>

    </div>
  )
}

function Q1() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<StudentList />} />

        <Route path="/student/:id" element={<StudentDetails />} />

      </Routes>

    </BrowserRouter>
  )
}

export default Q1;