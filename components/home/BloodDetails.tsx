import Link from "next/link";
import React from "react";
import classes from "./blood_details.module.css";

type props = {
  bloodDetails: { title: string; shortDescription: string }[];
};
const BloodDetails: React.FC<props> = (props) => {
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
