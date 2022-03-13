import React, { useState, useEffect } from "react";
import Circle from "../Circle/Circle";
import "./Options.css";

const Options = () => {
  const [active, setActive] = useState(2);
  const [light, setLight] = useState("text light");
  const [medium, setMedium] = useState("text medium");
  const [heavy, setHeavy] = useState("text heavy");

  useEffect(() => {
    setLight("text light");
    setMedium("text medium");
    setHeavy("text heavy");
    switch (active) {
      case 0:
        setLight("text light active-text");
        break;
      case 2:
        setMedium("text medium active-text");
        break;
      case 4:
        setHeavy("text heavy active-text");
        break;
      default:
    }
  }, [active]);

  const circles = [0, 1, 2, 3, 4];
  return (
    <div className="options">
      <div className="line" />
      {circles.map((e) => {
        return e === active ? (
          <div key={e}>
            <Circle
              className={`cir cir-${e} active`}
              onclick={() => setActive(e)}
            />
          </div>
        ) : (
          <div key={e}>
            <Circle className={`cir cir-${e}`} onclick={() => setActive(e)} />
          </div>
        );
      })}
      <div className={light}>Light</div>
      <div className={medium}>Medium</div>
      <div className={heavy}>Heavy</div>
    </div>
  );
};

export default Options;
