import { useRouter } from "next/router";
import React from "react";
import { ContactTitleInterface } from "../../component-interfaces/contact";
import BreadCum from "../../shared/BreadCum";
import classes from "./title.module.css";

const ContactTitle: React.FC<ContactTitleInterface> = (props) => {
  const { title, description } = props;

  

  const router = useRouter();
  const routes = router.pathname.replace("/", "").split("/");

  return (
    <div className={classes.section}>
      <BreadCum breadCumValues={routes} />
      <div className={classes.card}>
        <h1> {title} </h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ContactTitle;
