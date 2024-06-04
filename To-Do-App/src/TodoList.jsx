import React, { useState } from "react"
import { v4 as uuid} from "uuid"
import NewToDoForm from "./NewTodoForm"
import ToDo from "./ToDo"


const  ToDoList = () => { 
    const [Todos, setTodos] = useState([]);
    const [formData, setFormData] = useState('') 

    const deleteTask = (id) => { 
        let deleted = Todos.filter(todo => todo.id !== id)
        setTodos(deleted)
    }

    const handleChange = (e) => {
        setFormData(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault(); 
        let todo = {
            task: formData,
            isDone: false, 
            id: uuid()
        }
        setTodos([...Todos, todo]);
        setFormData('')
    }

    const updateTask = (id, updatedTask) =>{
        let update = Todos.map(todo => todo.id===id? {...todo, task : updatedTask}: todo)
        setTodos(update)
    }

    const handleClickIsDone = (id) => { 
        let update = Todos.map((todo) =>{ 
            if(todo.id===id ){
                if (!todo.isDone){
                return {...todo, isDone: true}}
                else return {...todo, isDone: false}
            }
            else return {...todo}
        });
        setTodos(update);
        console.log(update); 
    } 

    // // addingYYY to local storage 
    // localStorage.setItem('todos', JSON.stringify(Todos))
    // const oldTodos = JSON.parse(localStorage.getItem("todos"))
    // setTodos(oldTodos)



    return(
        <div>
            <h1>To Do List</h1>
            
            <NewToDoForm formData={formData} handleClick={handleClick} handleChange={handleChange} />

            <div>
                {Todos.map(({task, isDone, id}) => <ToDo updateTask={updateTask} deleteTask={deleteTask} id={id} task={task} isDone={isDone} key={id} handleClickIsDone={handleClickIsDone}/>)
                }   
            </div>
            
        </div>
    )
} 

export default ToDoList 