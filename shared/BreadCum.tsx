import React, { Fragment } from "react";
import classes from "./breadcum.module.css";

type Props = {
  breadCumValues: string[];
};
const BreadCum: React.FC<Props> = (props) => {
  const { breadCumValues } = props;
  console.log(breadCumValues);
  
  return (
    <section className={classes.section}>
      {breadCumValues.map((val, ind) => (
        <div className={classes.item} key={ind}>
            {`${val} >> `}
        </div>
      ))}
    </section>
  );
};

export default BreadCum;
