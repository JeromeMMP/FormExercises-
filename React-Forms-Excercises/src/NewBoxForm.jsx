import React from "react";

const NewBoxForm = ({bgColor, width, height, handleChange, handleSubmit}) => {
   
 
    return(
        <div>
            <h1> Create New Box</h1>
            <form>
                <label htmlFor="bgColor"> Background Color </label>
                <input type="text" name="bgColor" id="bgColor" placeholder="Background Color"value={bgColor} onChange={handleChange}/>

                <label htmlFor="width"> Width in pixels </label>
                <input type="text" placeholder="Width" name="width" value={width} id="width" onChange={handleChange}/>
                
                <label htmlFor="height"> Height in pixels t</label>
                <input type="text" name="height" value={height} id="height" placeholder="Height" onChange={handleChange} />
                
                
                <br/>
                <button type="submit" onClick={handleSubmit} >Submit</button>
            </form>
        </div>

    );
};

export default NewBoxForm