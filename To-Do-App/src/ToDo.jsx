import { useState } from "react"
import React from "react"
import "./ToDoStyle.css"

const  ToDo = ({updateTask, task, isDone, id, handleClickIsDone, deleteTask}) => { 
    const [isEditting, setIsEditting] = useState(false);
    const [newTask, setNewTask] = useState(task);

    const handleTask = (e) => {
        setNewTask(e.target.value)
    }

    const submitEditting = () => {
        setIsEditting(true)
    }
    const submitChange = () => {
        updateTask(id,newTask )
        setIsEditting(false)
    }

    if(isEditting){
       return ( 
            <form action="">
                <input type="text" value={newTask} onChange={handleTask}/>
                <button onClick={submitChange}>submit change</button>
            </form>
        )
    }
    else return(
    <div className={ isDone ? "done" : ''} id={id}> 
        <input type="checkbox" onClick={() => handleClickIsDone(id)}/>
        {task} 
        <button onClick={() => deleteTask(id)}> X </button>
        <button onClick={submitEditting} > edit </button>
    </div>

    )
} 

export default ToDo