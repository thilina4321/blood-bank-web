import { useRouter } from "next/router";
import React from "react";
import BreadCum from "../../../shared/BreadCum";
import CardUIComponent from "../../../shared/Card";
import classes from "./title.module.css";

const EligibilityTitle = () => {
  const router = useRouter();
  const routes = router.pathname.replace("/", "").split("/");

  return (
    <div className={classes.section}>
      <BreadCum breadCumValues={routes} />
      <div className={classes.card}>
        <h1> Can I donate blood? </h1>
        <p> Are you 18-75 years old, healthy and weigh over 50 kg? Find out if you can donate blood, and start changing lives. </p>
        <button> Take the QUIZ </button>
      </div>
    </div>
  );
};

export default EligibilityTitle;
