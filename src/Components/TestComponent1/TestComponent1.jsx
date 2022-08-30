import React, { useState } from "react";

export const TestComponent1 = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <button
        style={
          toggle
            ? { background: "black", color: "white" }
            : { background: "white", color: "black" }
        }
        onClick={handleToggle}
      >
        Toggle
      </button>
      <div>{toggle ? <h1>Toggle is True</h1> : null}</div>
    </div>
  );
};
