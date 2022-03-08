import React from "react";
import classes from "./platelet.module.css";

const Platelet = () => {
  return (
    <section className={classes.section}>
      <h1 style={{ color: "#e42312" }}>3. Platelet compatibility</h1>
      <div className={classes.descriptions}>
        <div className={classes.description}>
          ABO identical platelets are usually preferred. However, in some
          circumstances, the need for other special requirements may be more
          important than providing the same ABO group.
        </div>
        <div className={classes.description}>
          circumstances, the need for other special requirements may be more
          important than providing the same ABO group. Your healthcare team will
          work this out and you can always talk to them if you’d like more
          information.
        </div>
      </div>
    </section>
  );
};

export default Platelet;
