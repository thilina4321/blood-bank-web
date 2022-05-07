import { useRouter } from "next/router";
import React, { Fragment } from "react";
import CardUIComponent from "../../../shared/Card";
import classes from "./section.module.css";

const informations = [
  {
    id: 1,
    image: "/research.jpeg",
    title: "Contact Us",
    des: "this is the description",
  },
  {
    id: 2,
    image: "/research.jpeg",
    title: "Bloods",
    des: "this is the description",
  },
  {
    id: 3,
    image: "/research.jpeg",
    title: "Donations",
    des: "this is the description",
  },
  {
    id: 4,
    image: "/research.jpeg",
    title: "Thank You",
    des: "this is the description",
  },
];

const AboutMainSections = () => {
  const router = useRouter();
  console.log("hello");
  

  const onNavigateHandler: (title: string) => void = (title: string) => {
    router.push(`/`);
  };

  return (
    <Fragment>
      <h1 className={classes.h1}> Want To Know More About Us </h1>
      <section className={classes.informations}>
        {informations.map(({ id, image, title, des }) => (
          <CardUIComponent
            onNavigate={onNavigateHandler}
            bgColor={true}
            key={id}
            title={title}
            image={image}
            description={des}
            width={30}
          />
        ))}
      </section>
    </Fragment>
  );
};

export default AboutMainSections;
