import Image from "next/image";
import React, { useEffect, useState } from "react";
import classes from "./description.module.css";

const IronDependencyDescription = () => {
  const [descriptions, setDescription] = useState<
    { id: number; image: string; title: string; description: string }[]
  >([]);

  useEffect(() => {
    const des = [
      {
        id: 1,
        image: "/git.png",
        title: "What is haemoglobin?",
        description: `
        Haemoglobin is a protein found in red blood cells and its primary function is to transport oxygen to the tissues in your body. Every part of your body needs oxygen to survive.

Iron gives haemoglobin in our blood cells their red colour and is absorbed by eating iron-rich foods.`,
      },
      {
        id: 2,
        image: "/git.png",
        title: "What’s the difference between iron and haemoglobin?",
        description: `
        It’s common for people to think that iron and haemoglobin are the same thing, but they’re actually quite different.
        Iron is a component of haemoglobin and is also found in other parts of the body. It's possible to have a normal haemoglobin level but be low in iron.   
        Iron is usually absorbed through your diet and is essential for the body to function normally and to make haemoglobin.`,
      },
    ];

    setDescription(des);
  }, []);

  return (
    <section className={classes.section}>
      <div className={classes.descriptions}>
        {descriptions.map(({ id, image, title, description }) => (
          <div key={id} className={classes.description}>
            <Image src={image} height={100} width={100} alt={title} />
            <h3>{title}</h3>
            <p> {description} </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IronDependencyDescription;
