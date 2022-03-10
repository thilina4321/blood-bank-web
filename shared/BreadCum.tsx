import React, { Fragment } from "react";
import classes from "./breadcum.module.css";

type Props = {
  breadCumValues: string[];
  color?:string
  bgColor?:string
};
const BreadCum: React.FC<Props> = (props) => {
  const { breadCumValues, color = '#000', bgColor = '#F6F6F6' } = props;
  
  return (
    <section className={classes.section} style={{color:color, backgroundColor:bgColor}}>
      {breadCumValues.map((val, ind) => (
        <div className={classes.item} key={ind}>
            {`${val} >> `}
        </div>
      ))}
    </section>
  );
};

export default BreadCum;
