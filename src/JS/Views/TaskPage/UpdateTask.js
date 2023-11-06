import React, { useState } from "react";
import './../../../CSS/UpdateTask.css'



function UpdateTask({ toggle, task, onUpdate }) {

    const [name, setTaskName] = useState(task.name)
    const [tags, setTagName] = useState(task.tags.join(', '))

    // Add task logic goes here
    function UpdateTask(e){
        e.preventDefault()

        //validating the tags input
        if(!tags) {
            alert('Please add at least 1 tag!')
            return
        }

        // Convert the tags input into an array
        const tagArray = tags.split(',').map(tag => tag.trim());
        task.name = name;
        task.tags = tagArray;

        onUpdate(task.id, task)
        toggle()
    }

    return(
        <div className="popup">
            <div className="popup-inner">
                <h2>Update Task</h2>
                <form onSubmit={UpdateTask}>
                    <label>
                        Task Name:
                        <input type="text" value={name} onChange={e => setTaskName(e.target.value)} />
                    </label>
                    <label>
                        Tags:
                        <input type="text" value={tags} onChange={e => setTagName(e.target.value)} />
                    </label>
                    <button type="submit">Update</button>
                </form>
                <button onClick={toggle}>Close</button>
            </div>
        </div>
    )
}

export default UpdateTask;