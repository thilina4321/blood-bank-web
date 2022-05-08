import { route } from "next/dist/server/router";
import { useRouter } from "next/router";
import React from "react";
import classes from "./program.module.css";

const programs = [
  {
    id: 1,
    title: "Donator Behaviour",
    description: `We investigate the best ways to recruit, motivate and keep donors.`,
  },
  {
    id: 2,
    title: "Donor health and wellbeing",
    description: `
      Keeping our donors happy and healthy is really important to us.`,
  },
  {
    id: 3,
    title: "Product development and storage",
    description: `
      What happens to your donation when it leaves the donor centre?`,
  },
 
  {
    id: 5,
    title: "Product safety",
    description: `
      Australia has one of the safest blood supplies in the world.`,
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
