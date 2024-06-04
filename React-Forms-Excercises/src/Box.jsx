import React from "react";

const Box = ({bgColor, width, height, deleteComponent, id}) => {
    return (
        <div style={
            {backgroundColor: `${bgColor}`,
            width: `${width}px`,
            height:`${height}px`}
        }>
           
            <button onClick={() => deleteComponent(id) }>X </button>
        </div>

    )
}

export default Box