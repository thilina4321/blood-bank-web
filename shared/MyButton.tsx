import React from "react";
import classes from "./button.module.css";

type props = {
  name: string;
  clickHandler?: any;
};
const MyButton: React.FC<props> = (props) => {
  const { name, clickHandler } = props;
  return (
    <button type="button" onClick={clickHandler} className={classes.btn}>
      {name}
    </button>
  );
};

export default MyButton;
