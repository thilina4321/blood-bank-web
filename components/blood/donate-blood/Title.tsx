import { useRouter } from "next/router";
import React from "react";
import { BloodDonateBloodTitleInterface } from "../../../component-interfaces/blood";
import BreadCum from "../../../shared/BreadCum";
import classes from "./title.module.css";

const DonateBloodTitle: React.FC<BloodDonateBloodTitleInterface> = (props) => {
  const router = useRouter();
  const routes = router.pathname.replace("/", "").split("/");

  const { title, description } = props;

  return (
    <div className={classes.section}>
      <BreadCum breadCumValues={routes} />
      <div className={classes.card}>
        <h1> {title} </h1>
        <p> {description} </p>
      </div>
    </div>
  );
};

export default DonateBloodTitle;
