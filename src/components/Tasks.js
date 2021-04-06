import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
          {tasks.map((task) => (
            //   a unique key is required for each item in map function 
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
          ))} 
        </>
    )
}

export default Tasks
