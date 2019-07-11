import React from "react";
import Number from "./Number";

export default ({ className = "", onNumberClick }) => {
  const numpad = [[9, 8, 7], [6, 5, 4], [3, 2, 1], [0]];
  return (
    <div className={className}>
      {numpad.map((nums, i) => (
        <div key={"key-row-" + i}>
          {nums.map(n => (
            <Number key={"key-num-" + n} value={n} onClick={onNumberClick} />
          ))}
        </div>
      ))}
    </div>
  );
};
