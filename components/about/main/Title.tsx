import { useRouter } from "next/router";
import React from "react";
import BreadCum from "../../../shared/BreadCum";
import classes from "./title.module.css";

const AboutMainTitle = () => {
  const router = useRouter();
  const routes = router.pathname.replace("/", "").split("/");

  return (
    <div className={classes.section}>
      <BreadCum breadCumValues={routes} />
      <div className={classes.card}>
        <h1>Lets Make A Different Today </h1>
        <p>{` Welcome to Lifeblood, it’s great to see you. Whether you're in the mood to save a life or browsing for info and advice, let’s find what you need.`} </p>
      </div>
    </div>
  );
};

export default AboutMainTitle;
