import React from "react";
import { BloodEligibilityBloodTypeProps } from "../../component-interfaces/blood";
import MyButton from "../../shared/MyButton";
import classes from "./blood.module.css";

const BloodType: React.FC<BloodEligibilityBloodTypeProps> = (props) => {
  const { title, summeryData, description, status } = props;

  return (
    <section className="section">
      <h1> {title.toUpperCase()} </h1>

      <div className={classes.summery}>
        {summeryData.map(({ type, amount }, index) => {
          return (
            <div key={index} style={{ flex: "1" }}>
              <p> {type} </p>
              <p> {amount} </p>
            </div>
          );
        })}
      </div>

      {status ? (
        <div style={{ color: "green" }}>
          <p> * {title} Blood Availablity is good. </p>
          <p> Even that donation is appreciated. </p>
        </div>
      ) : (
        <div style={{ color: "red" }}>
          <p> * {title} Blood Availablity is bad. </p>
          <p> Donations are highly appreciated. </p>
        </div>
      )}
      <p>{description}</p>
      <MyButton name={`Donate ${title}`} />
    </section>
  );
};

export default BloodType;
