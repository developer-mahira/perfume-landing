import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginTop: "3rem" }}>
      <h2>Visitors Count: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          background: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default Counter;
