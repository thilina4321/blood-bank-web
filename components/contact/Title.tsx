import { useRouter } from "next/router";
import React from "react";
import BreadCum from "../../shared/BreadCum";
import classes from "./title.module.css";

const ContactTitle = () => {
  const router = useRouter();
  const routes = router.pathname.replace("/", "").split("/");

  return (
    <div className={classes.section}>
      <BreadCum breadCumValues={routes} />
      <div className={classes.card}>
        <h1> Contact Us </h1>
        <p>
          {" "}
          {`We’re here to help, whatever you need. Pick a way to get in touch and give us a buzz, drop us a line, or send us an old-fashioned letter.`}{" "}
        </p>
      </div>
    </div>
  );
};

export default ContactTitle;
