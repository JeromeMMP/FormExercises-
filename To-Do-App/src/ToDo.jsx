import { useState } from "react"
import React from "react"
import "./ToDoStyle.css"

const  ToDo = ({updateTask, task, isDone, id, handleClickIsDone, deleteTask}) => { 
    const [isEditting, setIsEditting] = useState(false);
    const [newTask, setNewTask] = useState(task);
    const [animationDelete, setAnimationDelete] = useState(false);

    const AddClasses = () =>{
        let string = ''
        if(isDone && animationDelete){
            string = "done fade-out"
            return string
        }
        else if (isDone && animationDelete===false){
           string = "done"
           return string
        }
        else if (animationDelete && isDone === false){
            string = "fade-out"
            return string
        }
        else return string
        
    }
    let classPut = AddClasses()

    const deleteWithAnimation = () => { 
        setAnimationDelete(true)
        setTimeout( () => deleteTask(id), 4000)
    }

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
    <div className={ classPut} id={id}> 
        <input type="checkbox" onClick={() => handleClickIsDone(id)}/>
        {task} 
        <button onClick={deleteWithAnimation}> X </button>
        <button onClick={submitEditting} > edit </button>
    </div>

    )
} 

export default ToDo