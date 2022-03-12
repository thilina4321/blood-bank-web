import React, { useEffect, useState } from "react";
import { AboutResearchCard } from "../../../component-type/about";
import CardUIComponent from "../../../shared/Card";
import classes from "./wedo.module.css";

const cards: AboutResearchCard[] = [
  {
    width: 30,
    title: "Title 1",
    description: "Desciption 1",
    image: "/git.png",
  },
  {
    width: 30,
    title: "Title 2",
    description: "Desciption 2",
    image: "/git.png",
  },
  {
    width: 30,
    title: "Title 3",
    description: "Desciption 3",
    image: "/git.png",
  },
  {
    width: 30,
    title: "Title 4",
    description: "Desciption 4",
    image: "/git.png",
  },
];

const ResearchWhatWedo = () => {
  const [weDoItems, setWeDoItems] = useState<AboutResearchCard[]>([]);

  useEffect(() => {
    setWeDoItems(cards);
  }, []);

  return (
    <section className={classes.section}>
      <h1 className={classes.h1}> What We Do ? </h1>
      <div className={classes.items}>
        {weDoItems.map(({ width, title, description, image }, index) => (
          <CardUIComponent
            key={index}
            width={width}
            title={title}
            image={image}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default ResearchWhatWedo;
