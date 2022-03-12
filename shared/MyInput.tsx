import React from "react";
import classes from "./myinput.module.css";

type props = {
  label: string;
  type?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isTextArea?: boolean;
};

const MyInput: React.FC<props> = (props) => {
  const { label, type = "text", value, setValue, isTextArea } = props;
  return (
    <div className={classes.section}>
      <label htmlFor={label}> {label} </label>
      {!isTextArea ? (
        <input
          placeholder={` Tell us your ${label.toLowerCase()}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={classes.input}
          type={type}
        />
      ) : (
        <textarea
          placeholder={` Tell us your ${label.toLowerCase()}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={15}
          className={classes.textarea}
        />
      )}
    </div>
  );
};

export default MyInput;
