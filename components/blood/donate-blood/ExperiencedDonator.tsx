import { useRouter } from "next/router";
import React, { useState } from "react";
import useHttp from "../../../hooks/useHttp";
import MyButton from "../../../shared/MyButton";
import MyInput from "../../../shared/MyInput";
import classes from "./experienced_donator.module.css";

const ExperiencedDonator = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitQueryReq = useHttp({
    url: "/contact-query",
    method: "post",
    body: { email, password },
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
    router.push("/blood/donate-blood/account");

    setEmail("");
    setPassword("");
  };

  return (
    <section className={classes.section}>
      <h1>Thanks for visiting us again. </h1>
      <form className={classes.form}>
        <MyInput value={email} setValue={setEmail} label="Email" />
        <MyInput
          value={password}
          setValue={setPassword}
          label="Password"
          type="password"
        />

        <MyButton clickHandler={submitHandler} name="Log In" />
        {error && <p style={{ color: "red" }}> {error} </p>}
      </form>
    </section>
  );
};

export default ExperiencedDonator;
