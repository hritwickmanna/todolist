import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        // using function else its get its clicked without clicked by default
        props.deleteItem(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
