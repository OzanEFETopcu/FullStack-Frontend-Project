import React, { useState, useEffect } from 'react';
import { useBeforeunload } from 'react-beforeunload';
import { useStopwatch } from 'react-timer-hook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faX } from '@fortawesome/free-solid-svg-icons'
import './../../../CSS/TaskItem.css'
import UpdateTask from "./UpdateTask"

function TaskItem({ task, onDelete, onUpdate }) {

    const [seenUpdatePage, setSeenUpdate] = useState(false);
    const [activationStatus, setActivationStatus] = useState(task.status === "active" ? "Inactivate" : "Activate");
    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch();

    useEffect(() => {
        if (task.status === "active") {
            start();
        }
    }, []);

    useBeforeunload(() => {
        task.activation_duration += totalSeconds;
        onUpdate(task.id, task);
    });

    function togglePopOnUpdate() {
        setSeenUpdate(!seenUpdatePage);
    };

    function stopwatchControl() {
        if (isRunning) {
            reset({ offset: false });
        } else {
            start();
        }
        if (activationStatus === "Activate") {
            setActivationStatus("Inactivate");
            task.status = "active";
            onUpdate(task.id, task);
        } else {
            setActivationStatus("Activate");
            task.status = "inactive";
            task.activation_duration += totalSeconds;
            onUpdate(task.id, task);
            console.log(task.activation_duration);
        }
    }

    return (
        <div className='single_task'>
            <h3 style={{ marginLeft: '0.8vw' }}>{task.name}</h3>
            <p className='task_info'>Tags: {task.tags.join(', ')}</p>
            <p className='task_info'>Status: {task.status}</p>
            <div>
                <button className='task_button_general' onClick={() => togglePopOnUpdate()}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                {seenUpdatePage ? <UpdateTask toggle={togglePopOnUpdate} task={task} onUpdate={onUpdate} /> : null}
                <button className='task_button_general' onClick={() => stopwatchControl()}>
                    {activationStatus}
                </button>
                <button className='task_button_general' onClick={() => onDelete(task.id)}>
                    <FontAwesomeIcon icon={faX} />
                </button>
            </div>
        </div>
    );
}

export default TaskItem;