import React from "react";
import CardUIComponent from "../../shared/Card";
import classes from "./information.module.css";

const informations = [
  {
    id: 1,
    image: "/research.jpeg",
    title: "Title 1",
    des: "this is the description",
  },
  {
    id: 2,
    image: "/research.jpeg",
    title: "Title 2",
    des: "this is the description",
  },
  {
    id: 3,
    image: "/research.jpeg",
    title: "Title 3",
    des: "this is the description",
  },
  {
    id: 4,
    image: "/research.jpeg",
    title: "Title 3",
    des: "this is the description",
  },
];

const HomeInformation = () => {
  return (
    <section className={classes.informations}>
      {informations.map(({ id, image, title, des }) => (
        <CardUIComponent
          bgColor={true}
          key={id}
          title={title}
          image={image}
          description={des}
          width={30}
        />
      ))}
    </section>
  );
};

export default HomeInformation;
