import { useRouter } from "next/router";
import React, { useState } from "react";
import useHttp from "../../../hooks/useHttp";
import MyButton from "../../../shared/MyButton";
import MyInput from "../../../shared/MyInput";
import classes from "./new_donator.module.css";

const NewDonator = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitQueryReq = useHttp({
    url: "/contact-query",
    method: "post",
    body: { email, fullName, phoneNumber: password },
    onSucsses: (data: any) => {},
  });

  const router = useRouter();

  const submitHandler = async () => {
    // if (!email || !password || !fullName) {
    //   setError("*Please provide all the details");
    //   return;
    // }
    setError("");
    // const { data, error } = await submitQueryReq();
    // if (data && data.success) {
    //   // semantic UI success
    // }
    router.push("/blood/donate-blood/donator-type/experienced");

    setEmail("");
    setPassword("");
    setFullName("");
  };

  return (
    <section className={classes.section}>
      <h1>Thanks for visiting us as New Member for blood donation fam!.</h1>
      <form className={classes.form}>
        <MyInput value={fullName} setValue={setFullName} label="Full Name" />
        <MyInput value={email} setValue={setEmail} label="Email" />
        <MyInput
          value={password}
          setValue={setPassword}
          label="Password"
          type="password"
        />

        <MyButton clickHandler={submitHandler} name="Create Account" />
        {error && <p style={{ color: "red" }}> {error} </p>}
      </form>
    </section>
  );
};

export default NewDonator;
