import React, {useState} from "react";
import { v4 as uuid} from "uuid"

import NewBoxForm from "./NewBoxForm.jsx";
import Box from "./Box.jsx";

const BoxList = () => {
    const initialData = {
        width: "",
        height: "",
        bgColor: "",
        id: uuid()
    } 
    const [formData, setFormData] = useState(initialData)
    const [boxes, setBoxes] = useState([]);
 
    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(data =>( {...data, 
                [name]: value, 
                

                }
             )
        )
     
    }
    const handleSubmit = (e) => {
        e.preventDefault() 
        console.log(formData)
        setBoxes([...boxes, formData]);
        setFormData(
          initialData
        );
        console.log(boxes)
    }

    const deleteComponent = (id) =>{
        let newBoxes = boxes.filter(box=> box.id!==id)
        setBoxes(newBoxes)
    }
 
 
    return(
        <div>
            <h1>BOX form </h1>    
            <NewBoxForm 
            width={formData.width} 
            height={formData.height} 
            bgColor={formData.bgColor}
            handleChange={handleChange}
            handleSubmit={handleSubmit}/>  
            <div>
            {boxes.map((box,i)=>(<Box key={box.id} id={box.id} height={box.height} width={box.width} bgColor={box.bgColor} index={i} deleteComponent={deleteComponent}/>))}
            </div>

        </div>

    )
};

export default BoxList