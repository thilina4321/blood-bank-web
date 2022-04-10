import { useRouter } from "next/router";
import React from "react";
import classes from "./donate.module.css";

const Donate = () => {
  const router = useRouter();

  const navigateToDonator = (type: "new" | "experienced") => {
    if (type === "new") {
      router.push("/blood/donate-blood/donator-type/new");
      return;
    }
    router.push("/blood/donate-blood/donator-type/experienced");
  };

  return (
    <section className={classes.section}>
      <h1>{` I'm ready to give blood`} </h1>
      <div className={classes.buttons}>
        <button
          onClick={() => navigateToDonator("new")}
          className={classes.new}
        >
          I am New
        </button>
        <button
          onClick={() => navigateToDonator("experienced")}
          className={classes.before}
        >
          I Have Donate Before
        </button>
      </div>
    </section>
  );
};

export default Donate;
