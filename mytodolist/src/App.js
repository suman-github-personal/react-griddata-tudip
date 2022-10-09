import React, { useState } from "react";
import ToDoList from "./ToDoList";
function App() {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvnts = (event) =>{
    setInputList(event.target.value);
  };
  const listofitems = () => {
    setItems((oldItems)=>{
      return [...oldItems, inputList]
    })
    setInputList("");
  };

  const deleteItem = (id) => {

    console.log("deleted")
    setItems((oldItems)=>{
      return oldItems.filter((arrElem, index)=>{
        return index !== id;
      })
    })
}

  return (
   <>
   <div className="main_div">
   <div className="center_div">
    <br />
    <h1>
      ToDo list
    </h1>
    <br />
    <input type="text" placeholder="Add a item" onChange={itemEvnts} value={inputList} />
    <button onClick={listofitems}>
       +
    </button>
    <ol>
      {/*<li> {inputList}</li>*/}
     {
        items.map( (itemval, index)=>{
         return <ToDoList 
         key={index} 
         id={index}
         text ={itemval}
         onSelect={deleteItem}
          />
        })
      }
    </ol>
    </div>
   </div>
   </>
  );
}

export default App;
