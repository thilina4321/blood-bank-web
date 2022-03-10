import { useRouter } from "next/router";
import React from "react";
import BreadCum from "../../../shared/BreadCum";
import CardUIComponent from "../../../shared/Card";
import classes from "./title.module.css";

const OurProgramsTitle = () => {
  const router = useRouter();
  const routes = router.pathname.replace("/", "").split("/");

  return (
    <div className={classes.section}>
      <BreadCum breadCumValues={routes} />
      <CardUIComponent
        width={30}
        title="Our Programs"
        image="/git.png"
        description={`There's a lot more to blood donation than you might expect — and we research every part of it. `}
      />
    </div>
  );
};

export default OurProgramsTitle;
