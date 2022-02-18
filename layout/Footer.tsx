import React from "react";
import classes from "./fotter.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.general}>
        <h4>General</h4>
        <p> Resources </p>
        <p> Bloods </p>
        <p> Donators </p>
        
      </div>
      <div className={classes.more}>
        <h4>More</h4>
        <p> Commerce </p>
        <p> Contact </p>
        <p> Donations </p>
        <p> Help </p>
      </div>
    </footer>
  );
};

export default Footer;
