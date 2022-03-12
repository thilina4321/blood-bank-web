import React, { useState } from "react";
import MyButton from "../../shared/MyButton";
import MyInput from "../../shared/MyInput";
import classes from "./appointment.module.css";

const Appointment = () => {
  const [email, setEmail] = useState("");
  return (
    <div className={classes.section}>
      <h1> Make Appoinment Online </h1>
      <div className={classes.contact}>
        <div className={classes.contact__details}>
            Now You can make an online appoinment to 
            donate the blood without waiting in the premises.
            This is a greate move to our donaters as it is very easy to
            donate your blood.
        </div>
        <div className={classes.contact__form}>
          <MyInput label="Email" value={email} setValue={setEmail} />
          <MyInput label="Time" value={email} setValue={setEmail} />
          <div className={classes.submit__button}>
            <MyButton name="Make The Appointment" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
