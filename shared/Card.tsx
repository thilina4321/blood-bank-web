import Image from "next/image";
import React from "react";
import classes from "./card.module.css";

type Props = {
  image: string;
  title: string;
  description: string;
  width: number;
};

const CardUIComponent: React.FC<Props> = (props) => {
  const { image, title, description, width } = props;

  return (
    <section className={classes.section} style={{ width: `${width}%` }}>
      <Image
        className={classes.image}
        src={image}
        alt={title}
        width={200}
        height={200}
      />
      <h1> {title} </h1>
      <p> {description} </p>
    </section>
  );
};

export default CardUIComponent;
