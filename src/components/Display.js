import React from "react";
import "./Display.css";
const Display = ({ value, nam }) => {
  return (
    <text
      id={nam}
    >
      {value}
    </text>
  );
};

export default Display;
