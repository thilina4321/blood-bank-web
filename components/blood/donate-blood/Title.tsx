import { useRouter } from "next/router";
import React from "react";
import BreadCum from "../../../shared/BreadCum";
import CardUIComponent from "../../../shared/Card";
import classes from "./title.module.css";

const DonateBloodTitle = () => {
  const router = useRouter();
  const routes = router.pathname.replace("/", "").split("/");

  return (
    <div className={classes.section}>
      <BreadCum breadCumValues={routes} />
      <div className={classes.card}>
        <h1> Ready to start saving lives? </h1>
        <p> You’re this close to being one of the thousands of Australians who have promised to give hope, joy and second chances – all in the name of donating blood. Take the Bloody Oath, and book a donation today. </p>
      </div>
    </div>
  );
};

export default DonateBloodTitle;
