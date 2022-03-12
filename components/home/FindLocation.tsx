import { useRouter } from "next/router";
import React from "react";
import classes from "./findlocation.module.css";

const FindLocation = () => {
  const router = useRouter();

  const onNavigateHandler = () => {
    router.push("/location");
  };
  
  return (
    <section className={classes.section}>
      <h1> Find All Our Locations </h1>
      <button onClick={onNavigateHandler}> Find Now </button>
    </section>
  );
};

export default FindLocation;
