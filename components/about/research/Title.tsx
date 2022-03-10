import { useRouter } from "next/router";
import React from "react";
import BreadCum from "../../../shared/BreadCum";
import CardUIComponent from "../../../shared/Card";
import classes from "./title.module.css";

const ResearchTitle = () => {
  const router = useRouter();
  const routes = router.pathname.replace("/", "").split("/");
  return (
    <div className={classes.section}>
      <BreadCum breadCumValues={routes} />
      <CardUIComponent
        width={30}
        title="Research"
        image="/git.png"
        description={`World-leading research guides everything we do, from bringing donors through the doors, to making our life-saving products fit for purpose and among the safest in the world.`}
      />
    </div>
  );
};

export default ResearchTitle;
