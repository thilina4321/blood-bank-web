import React, { useState } from "react";
import useHttp from "../../hooks/useHttp";
import MyButton from "../../shared/MyButton";
import MyInput from "../../shared/MyInput";
import classes from "./enquery.module.css";

const Enquery = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const submitQueryReq = useHttp({
    url: "/contact-query",
    method: "post",
    body: { email, fullName, message, phoneNumber },
    onSucsses: (data: any) => {},
  });

  const submitHandler = async () => {
    const { data, error } = await submitQueryReq();
    if (data.success) {
      // semantic UI success
    }

    setEmail("");
    setPhoneNumber("");
    setMessage("");
    setFullName("");
  };

  return (
    <section className={classes.section}>
      <h1> Submiting Your Enquery </h1>
      <form className={classes.form}>
        <MyInput value={fullName} setValue={setFullName} label="Full Name" />
        <MyInput value={email} setValue={setEmail} label="Email" />
        <MyInput
          value={phoneNumber}
          setValue={setPhoneNumber}
          label="Phone Number"
        />
        <MyInput
          value={message}
          setValue={setMessage}
          label="Message"
          isTextArea={true}
        />
        <MyButton clickHandler={submitHandler} name="Submit Query" />
      </form>
    </section>
  );
};

export default Enquery;
