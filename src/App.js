// Required import for class based component
import React from 'react'
import { useState, useEffect} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'



function App() {

  // Show Add task
  const [showAddTask, setShowAddTask] = useState(false)

  // State is immutable and so cannot use push to add
  const [tasks, setTasks] = useState([])

  // useEffect handles the side effect / load something on page loaded
  useEffect(() => {
    // Cannot use async directly on ^ arrow function, so we have to create our own async function
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  // Fetch tasks 
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  // Fetch Single task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    }) 
    // need to await json
    const data = await res.json();
    setTasks([...tasks, data]);

    // Generate an id in the front end
    // const id = Math.floor(Math.random() * 10000) + 1

    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])

  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    // Filter out the state (task list)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder }
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
  }

  return (
    <Router>
      <div className="container">
        {/* Props title */}
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>

        <Route path='/' exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask} /> }
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to Show'}
          </>
        )} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

// Class based components example

// class App extends React.Component {
//   render() {
//     return <h1>Hello From a class</h1>
//   }
// }

export default App;
