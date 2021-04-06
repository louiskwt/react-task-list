// Required import for class based component
import React from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
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
      <Header />
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
