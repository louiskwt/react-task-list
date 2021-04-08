import React from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle, onUpdate }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text} 
                {/* onClick={() => onUpdate(task.id)} */}
                <div>
                    <FaEdit style={{color: 'green', cursor: 'pointer', marginRight: '10px'}} onClick={() => onUpdate(task.id)}/>
                    <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}/> 
                </div>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
