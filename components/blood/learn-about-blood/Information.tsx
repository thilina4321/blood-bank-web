import React, { useEffect, useState } from "react";
import classes from "./information.module.css";

interface BloodInformation {
  title: string;
  description: string;
  items: any;
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
          "Some are rarer than others, and some are more versatile — but we love them all equally.",
        items: (
          <ul>
            <li> O positive</li>
            <li> O positive</li>
          </ul>
        ),
        id: "1",
      },
      {
        title: "There are 8 main blood types",
        description:
          "Some are rarer than others, and some are more versatile — but we love them all equally.",
        items: (
          <ul>
            <li> O positive</li>
            <li> O positive</li>
          </ul>
        ),
        id: "2",
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
          {items}
        </div>
      ))}
    </section>
  );
};

export default BloodInformation;
