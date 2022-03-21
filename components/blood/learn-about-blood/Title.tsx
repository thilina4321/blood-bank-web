import { useRouter } from "next/router";
import React from "react";
import BreadCum from "../../../shared/BreadCum";
import classes from "./title.module.css";

const LearnAboutBloodTitle = () => {
  const router = useRouter();
  const routes = router.pathname.replace("/", "").split("/");
  return (
    <section className={classes.section}>
      <BreadCum breadCumValues={routes} />

      <h1> Blood Types </h1>
      <p>
        {`When someone is given a blood transfusion, they need to be given a blood type that’s compatible with their own. That's why blood types matter.`}{" "}
      </p>
    </section>
  );
};

export default LearnAboutBloodTitle;
