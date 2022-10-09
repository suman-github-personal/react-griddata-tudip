import React from "react";

const ToDoList = (props) => {

    
    return (
        
    <>
    <button onClick={()=>{
        props.onSelect(props.id)}}>delete</button>
    <li>{props.text}</li>
    </>);
}

export default ToDoList;