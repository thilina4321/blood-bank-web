import { useRouter } from "next/router";
import React from "react";
import BreadCum from "../../../shared/BreadCum";
import classes from "./title.module.css";

const IronDependencyTitle = () => {
  const router = useRouter();
  const routes = router.pathname.replace("/", "").split("/");
  return (
    <div>
      <BreadCum breadCumValues={routes} />
      <h1 className={classes.title}>Iron Dependency</h1>
      <p>
        {`Iron is a mineral nutrient that’s essential for your body to function normally and to make haemoglobin (Hb). If you have iron deficiency, it’s treated by iron replacement therapy and the need for a transfusion is rare.`}
      </p>
    </div>
  );
};

export default IronDependencyTitle;
