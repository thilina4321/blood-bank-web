import React from "react";
import classes from "./tellus.module.css";
import DialpadIcon from '@mui/icons-material/Dialpad';

const TellUs = () => {
  return (
    <section className={classes.section}>
      <h1> Tell us how your feeling   </h1>
      <p>
        {`If you've got a suggestion, complaint or compliment, we'll see how we can put your voice to good use:

`}
      </p>
      <h3> Send us your suggestions </h3>
      <h1> <DialpadIcon fontSize="large" /> </h1>

    </section>
  );
};

export default TellUs;
