function StudentCard({name, rollNo, course}) {

  return (
    <div>
      <h2>{name}</h2>
      <p>Roll No: {rollNo}</p>
      <p>Course: {course}</p>
    </div>
  )
}

function Q2() {

  return (
    <div>
      <h1>Students</h1>

      <StudentCard name="Krishna" rollNo="101" course="CSE" />

      <StudentCard name="Rahul" rollNo="102" course="AI" />

      <StudentCard name="Aman" rollNo="103" course="CSE" />

    </div>
  )
}

export default Q2