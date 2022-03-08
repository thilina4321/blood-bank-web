import React, { Fragment } from "react";
import classes from "./title.module.css";

const Title = () => {
  return (
    <Fragment>
      <h1 className={classes.title}>Matching blood groups</h1>
      <p>
        {`Before you receive a transfusion, testing is done between the donated blood and a sample of your own blood to check for compatibility.
`}
      </p>
    </Fragment>
  );
};

export default Title;
