import React from "react";

function Button({ text, onClick }) {
  return (
    <button className="custom-btn" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
