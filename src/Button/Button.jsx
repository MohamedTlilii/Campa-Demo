import React from "react";
import "./Style.css";

function Button(props) {
  return (
    <div>
      <button
        style={{
          color: props.color,
          backgroundColor: props.bgColor,
          width: props.width,
        }}
        className="btn"
      >
        {props.content}
      </button>
    </div>
  );
}

export default Button;
