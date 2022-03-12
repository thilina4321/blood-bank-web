import Link from "next/link";
import React from "react";
import { HomeBloodDetailsProps } from "../../component-interfaces/home";
import classes from "./blood_details.module.css";

const BloodDetails: React.FC<HomeBloodDetailsProps> = (props) => {
  const { bloodDetails } = props;

  return (
    <section className={classes.main}>
      <h1 className={classes.h1}> Blood Details </h1>
      <div className={classes.section}>
        {bloodDetails.map(({ title, shortDescription }, index) => (
          <div key={index} className={classes.card}>
            <h3> {title} </h3>
            <p> {shortDescription} </p>
            <Link href={"/bloods/" + title}>
              <a style={{ color: "blue" }}> Go to main page </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BloodDetails;
