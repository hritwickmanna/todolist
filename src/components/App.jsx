import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [item1, addItem1] = useState([]); //for storing item in item1 array

  function mouseClick(item) {
    addItem1((prev) => [...prev, item]); // finally addind item in item1 array
  }
  //good example of functional programming
  function deleteItem(id) {
    //deleting item with having its index(id)
    addItem1((prev) => prev.filter((item, index) => index !== id));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div>
        <p>click the item to delete after adding</p>
      </div>
      <InputArea mouseClick={mouseClick} />

      <ul>
        {item1.map((item, index) => (
          <ToDoItem
            text={item}
            key={index}
            id={index}
            deleteItem={deleteItem} //passing the function and again reusing from child to parent
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
