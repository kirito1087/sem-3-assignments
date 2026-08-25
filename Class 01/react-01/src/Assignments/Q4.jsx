import { useState } from 'react'

function Badge({count}) {

  return (
    <h2>Total: {count}</h2>
  )
}

function Q4() {

  let [tasks, setTasks] = useState(["Task1", "Task2"])
  let [task, setTask] = useState("")

  function addTask(){

    if(task !== ""){
      setTasks([...tasks, task])
      setTask("")
    }

  }

  return (
    <div>

      <Badge count={tasks.length} />

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>
        Add
      </button>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  )
}

export default Q4