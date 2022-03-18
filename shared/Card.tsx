import React from "react";
import classes from "./card.module.css";

type Props = {
  image?: string;
  title: string;
  description: string;
  width?: number;
  bgColor?: boolean;
  onNavigate?: (title: string) => void;
};

const CardUIComponent: React.FC<Props> = (props) => {
  const { image, title, description, bgColor, onNavigate } = props;

  let style = bgColor
    ? { backgroundColor: "#FFFFFF", height: "30rem" }
    : { border: "2px solid #a3152d" };

  return (
    <section
      className={classes.section}
      style={style}
      onClick={() => onNavigate && onNavigate(title)}
    >
      {image && (
        <img
          className={classes.image}
          src={image}
          alt={title}
          width={200}
          height={250}
        />
      )}
      <div style={{ padding: "1rem" }}>
        <h1> {title} </h1>
        <p> {description} </p>
      </div>
    </section>
  );
};

export default CardUIComponent;
