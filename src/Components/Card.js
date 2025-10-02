import React from "react";

function Card({ title, img }) {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <h2>{title}</h2>
    </div>
  );
}

export default Card;
