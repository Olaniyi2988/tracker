import { useState } from "react"
import Header from "./components/Header";
import Task from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Hello',
        day: 'feb 5th at 2:30',
        reminder: true,
      },
      {
        id: 2,
        text: 'World',
        day: 'feb 8th at 2:30',
        reminder: false,
      },
      {
        id: 3,
        text: 'Today',
        day: 'feb 3th at 2:30',
        reminder: true,
      }
    ]
  )

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Task tasks={tasks} onDelete={deleteTask} />)
        : ('No Task')}
    </div>
  );
}

export default App;
