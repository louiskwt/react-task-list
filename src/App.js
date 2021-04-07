// Required import for class based component
import React from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import { useState } from 'react'

function App() {

  // Show Add task
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState(
    [
        // State is immutable and so cannot use push to add
        {
            id: 1,
            text: 'Do HW',
            day: 'Feb 5th at 2:30 pm',
            reminder: true
        },
        {
            id: 2,
            text: 'Do exercise',
            day: 'Feb 6th at 2:30 pm',
            reminder: true
        },
        {
            id: 3,
            text: 'Grading',
            day: 'Feb 6th at 2:30 pm',
            reminder: false
        }
    ]
  )

  // Add Task
  const addTask = (task) => {
    // Generate an id in the front end
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    // Filter out the state (task list)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      {/* Props title */}
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} /> }
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to Show'}
    </div>
  );
}

// Class based components example

// class App extends React.Component {
//   render() {
//     return <h1>Hello From a class</h1>
//   }
// }

export default App;
