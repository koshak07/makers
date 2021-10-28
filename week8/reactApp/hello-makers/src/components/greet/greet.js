import React from 'react';
import'./greet.css'

const Greet = (props) => {
   
    return (
        

        <input onChange={(e)=>{
            props.getData(e.target.value)
        }} type='text'></input>
    );
};


export default Greet;