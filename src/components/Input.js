import React from "react";

const Input = (props) => {
  return (
    <div>
      <p>Type something</p>
      <input type="text" onChange={props.changed} />
      <p>Number of characters:{props.length}</p>
    </div>
  );
};

export default Input;
