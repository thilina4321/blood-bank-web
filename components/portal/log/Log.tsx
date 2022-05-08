import { useRouter } from "next/router";
import React, { useState } from "react";
import useHttp from "../../../hooks/useHttp";
import MyButton from "../../../shared/MyButton";
import MyInput from "../../../shared/MyInput";
import classes from "./log.module.css";
import axios from 'axios'

const ExperiencedDonator = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  

  const router = useRouter();

  const submitHandler = async () => {
    
    setError("");
    const res = await axios({
        url: "/api/portal/login",
        method: "POST",
        data: {email, password},
      });
    console.log(res);
    
    router.push("/portal/dashboard/board");

    // setEmail("");
    // setPassword("");
  };

  return (
    <section className={classes.section}>
      <h1> Blood Bank Admin Portal</h1>
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
