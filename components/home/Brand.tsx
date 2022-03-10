import React from "react";
import MyButton from "../../shared/MyButton";
import classes from "./brand.module.css";
const Brand = () => {
  return (
    <section className={classes.section}>
      <div className={classes.name}>
        <h1>Sri Lanka Blood Bank Authority</h1>
      </div>
      <p>Your valuable donations will save hundreds of lifes.</p>
      {/* <div className={classes.btn}>
        <MyButton name="Donate Blood" />
      </div> */}
    </section>
  );
};

export default Brand;
