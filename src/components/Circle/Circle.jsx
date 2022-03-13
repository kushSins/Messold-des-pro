import React from "react";
import "./Circle.css";

const Circle = ({ className, onclick }) => {
  return <div className={className} onClick={() => onclick()}></div>;
};

export default Circle;
