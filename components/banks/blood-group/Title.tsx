import { useRouter } from "next/router";
import React, { Fragment } from "react";
import BreadCum from "../../../shared/BreadCum";
import classes from "./title.module.css";

const Title = () => {
    const router = useRouter()
    const routes = router.pathname.replace('/', '').split('/')
    console.log(routes);
    
    
  return (
    <Fragment>
      <BreadCum breadCumValues={routes} />
      <h1 className={classes.title}>Matching blood groups</h1>
      <p>
        {`Before you receive a transfusion, testing is done between the donated blood and a sample of your own blood to check for compatibility.
`}
      </p>
    </Fragment>
  );
};

export default Title;
