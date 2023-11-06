import React, { useState } from "react";
import './../../../CSS/AddTask.css'



function AddTask({ toggle, onAdd }) {

    const [name, setTaskName] = useState('')
    const [tags, setTagName] = useState('')

    // Add task logic goes here
    function AddTask(e){
        e.preventDefault()

        //validating the tags input
        if(!tags) {
            alert('Please add at least 1 tag!')
            return
        }

        // Convert the tags input into an array
        const tagArray = tags.split(',').map(tag => tag.trim());

        onAdd({name, tags: tagArray, status:"inactive"})
        toggle()
    }

    return(
        <div className="popup">
            <div className="popup-inner">
                <h2>Add Task</h2>
                <form onSubmit={AddTask}>
                    <label>
                        Task Name:
                        <input type="text" placeholder="Add Task" value={name} onChange={e => setTaskName(e.target.value)} />
                    </label>
                    <label>
                        Tags:
                        <input type="text" placeholder="Add Tags" value={tags} onChange={e => setTagName(e.target.value)} />
                    </label>
                    <button type="submit">Add</button>
                </form>
                <button onClick={toggle}>Close</button>
            </div>
        </div>
    )
}

export default AddTask;