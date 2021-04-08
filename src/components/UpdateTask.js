import React from 'react'

// Component level state
import { useState } from 'react'


const UpdateTask = ({ onUpdate }) => {
    // Component level state to handle form input
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     // Form validation
    //     if(!text) {
    //         alert('Please Add a Task')
    //         return
    //     }
    //     onAdd({text, day, reminder})

    //     setText('')
    //     setDay('')
    //     setReminder(false)
    // }

    // const onUpdate = (data) => {
    //     setText(data.text);
    //     setDay(data.date);
    //     setReminder(data.reminder)
    // }

    return (
        <form className='update-form'>
            {/* <div className="form-control">
                <label>Task</label>
                <input type="text" 
                        placeholder='Add Task' 
                        value={text} 
                        onChange={(e) => setText(e.target.value)}
                />
            </div> */}
            <div className="form-control">
                <label>Task</label>
                <input type="text" 
                        placeholder='Add Task' 
                        value={text} 
                        onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" 
                        placeholder='Add Day & Time'
                        value={day} 
                        onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" 
                        checked={reminder}
                        value={reminder} 
                        onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input type="submit" value="Save Task" className="btn btn-block"/>
        </form>
    )
}

export default UpdateTask