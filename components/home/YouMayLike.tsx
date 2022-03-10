import React from "react";
import classes from "./youmaylike.module.css";

const likes = [
  { id: 1, title: "Title 1", des: "Description 1" },
  { id: 2, title: "Title 2", des: "Description 1" },
  { id: 3, title: "Title 3", des: "Description 1" },
];

const HomeYouMayLike = () => {
  return (
    <section className={classes.section}>
      <div className={classes.sub__section}>
        <img src={"/research.jpeg"} alt={"You may like"} />
      </div>
      <div className={classes.sub__section}>
        <h1> You May Like ? </h1>
        <div className={classes.likes}>
          {likes.map(({ id, title, des }) => (
            <div key={id} className={classes.like}>
              <h2> {title} </h2>
              <p> {des} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeYouMayLike;
