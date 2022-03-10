import { route } from "next/dist/server/router";
import { useRouter } from "next/router";
import React from "react";
import classes from "./program.module.css";

const programs = [
  {
    id: 1,
    title: "Title 1",
    description:
      "We investigate the best ways to recruit, motivate and keep donors. 1",
  },
  {
    id: 2,
    title: "Title 2",
    description:
      "We investigate the best ways to recruit, motivate and keep donors. 2",
  },
  {
    id: 3,
    title: "Title 3",
    description:
      "We investigate the best ways to recruit, motivate and keep donors. 3",
  },
  {
    id: 4,
    title: "Title 4",
    description:
      "We investigate the best ways to recruit, motivate and keep donors. 3",
  },
  {
    id: 5,
    title: "Title 5",
    description:
      "We investigate the best ways to recruit, motivate and keep donors. 3",
  },
];

const OurProgrmItems = () => {
  const router = useRouter();

  const nextPageHandler = (title: string) => {
    router.push(`/about/our-programs/${title}`);
  };

  return (
    <section className={classes.programs}>
      {programs.map(({ id, title, description }) => (
        <div className={classes.program} key={id}>
          <h1> {title} </h1>
          <p> {description} </p>
          <button onClick={() => nextPageHandler(title)}> Learn More </button>
        </div>
      ))}
    </section>
  );
};

export default OurProgrmItems;
