import React from "react";
import classes from "./ways.module.css";

const Ways = () => {
  return (
    <section className={classes.section}>
      <h1> Contact With Us </h1>
      <ul className={classes.ways}>
        <li> Email - slblooddonation@sl.com </li>
        <li> Call - +94 76 555 44 33 </li>
        <li> Fax - +94 76 555 44 33 </li>
      </ul>
    </section>
  );
};

export default Ways;
