import React from "react"


const  NewToDoForm = ({formData, handleClick, handleChange}) => { 
   

   
    return(
        <form>
            <input type="text" 
            id="task" 
            name="task" 
            value={formData} 
            onChange={handleChange}/>
            <button onClick={handleClick}>Submit</button>
        </form>

    )
} 

export default NewToDoForm