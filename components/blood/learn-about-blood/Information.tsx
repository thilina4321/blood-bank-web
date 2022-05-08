import React, { useEffect, useState } from "react";
import classes from "./information.module.css";

interface BloodInformation {
  title: string;
  description: string;
  items?: any;
  id: string;
}

const BloodInformation = () => {
  const [infor, setInfor] = useState<BloodInformation[]>([]);

  useEffect(() => {
    setInfor((infor) => [
      ...infor,
      {
        title: "There are 8 main blood types",
        description:
          "Some are rare than others, and some are more versatile — but we love them all equally.",
        
        id: "1",
      },
      
    ]);
  }, []);
  return (
    <section className={classes.section}>
      <h1> Essential Information About Blood. </h1>
      {infor.map(({ title, description, items, id }) => (
        <div key={id}>
          <h2> {title} </h2>
          <p> {description} </p>
          <ul>
            <li> O positive</li>
            <li> O negative</li>
            <li> A positive</li>
            <li> A negative</li>
            <li> B positive</li>
            <li> B negative</li>
            <li> AB positive</li>
            <li> AB negative. </li>
          </ul>
        </div>
      ))}

      <h2>How do blood types work?</h2>
      <p> {`Like your eye colour and the shape of your nose, your blood type is inherited from your parents.  

There are two systems that make up your blood type:`} </p>
<ul>
  <li>   ABO (blood types A, B, AB or O) </li>
 <li>Rh type or group (positive or negative).
</li>
</ul>
    </section>
  );
};

export default BloodInformation;
