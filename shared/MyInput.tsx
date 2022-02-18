import React from "react";
import classes from "./myinput.module.css";

type props = {
  label: string;
  type?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>
};

const MyInput: React.FC<props> = (props) => {
  const { label, type = "text", value, setValue } = props;
  return (
    <div className={classes.section}>
      <label htmlFor={label}> {label} </label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={classes.input}
        type={type}
      />
    </div>
  );
};

export default MyInput;
