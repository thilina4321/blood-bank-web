import React from "react";
import classes from "./donate.module.css";

const Donate = () => {
  return (
    <section className={classes.section}>
      <h1> I'm ready to give blood</h1>
      <div className={classes.buttons}>
          <button className={classes.new}> I am New </button>
          <button className={classes.before}> I Have Donate Before </button>
      </div>
    </section>
  );
};

export default Donate;
