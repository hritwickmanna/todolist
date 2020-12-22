import React, { useState } from "react";

function InputArea(props) {
  const [item, addItem] = useState("");

  function handlechange(event) {
    //value continuosly storing at item
    addItem(event.target.value);
  }

  return (
    <div className="form">
      <input onChange={handlechange} type="text" value={item} />
      <button
        onClick={() => {
          props.mouseClick(item);
          addItem("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
