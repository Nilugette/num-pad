import React from "react";
import Button from "./Button";
export default ({ value, onClick }) => {
  return (
    <Button type="dark" className="m-1" onClick={() => onClick(value)}>
      {value}
    </Button>
  );
};
