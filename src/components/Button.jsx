import React from "react";
export default ({ type = "primary", className, children, ...props }) => {
  let classes = ["btn", "btn-" + type];
  classes = className ? classes.concat(className.split(" ")) : classes;
  return (
    <button className={classes.join(" ")} {...props}>
      {children}
    </button>
  );
};
