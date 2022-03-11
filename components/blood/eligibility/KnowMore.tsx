import { useRouter } from "next/router";
import React, { Fragment } from "react";
import CardUIComponent from "../../../shared/Card";
import classes from "./knowmore.module.css";

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

const EligibilityKnowMore = () => {
  const router = useRouter();

  const onNavigateHandler: (title: string) => void = (title: string) => {
    router.push(`/blood/eligibility/${title}`);
  };

  return (
    <Fragment>
      <h1 className={classes.h1}> Know More About Your Eligibility </h1>
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

export default EligibilityKnowMore;
