import React from "react";
import classes from "./brand.module.css";

const Brand = () => {
  return (
    <section className={classes.section}>
      <div className={classes.name}>
        <h1>Sri Lanka Blood Bank Authority</h1>
      </div>
      <p>Your valuable donations will save hundreds of lifes.</p>
    </section>
  );
};

export default Brand;
