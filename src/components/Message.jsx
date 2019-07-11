import React from "react";

export default ({ children, type = "info" }) => {
  const classes = ["alert", "alert-" + type];
  return <div className={classes.join(" ")}>{children}</div>;
};
