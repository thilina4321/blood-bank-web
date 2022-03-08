import Image from "next/image";
import React, { useEffect, useState } from "react";
import classes from "./essential.module.css";

const Essesntial = () => {
  const [descriptions, setDescription] = useState<
    { id: number; image: string; title: string; description: string }[]
  >([]);

  useEffect(() => {
    const des = [
      {
        id: 1,
        image: "/git.png",
        title: "What are antigens? ",
        description: `
        Antigens are proteins or carbohydrates that our immune system can recognise.
        Any antigen that’s ‘foreign’ to our immune system is destroyed by an antibody.`,
      },
      {
        id: 2,
        image: "/git.png",
        title: "What are antibodies?",
        description: `
        Antibodies are attack molecules our immune system makes to protect us against foreign things such as bacteria and viruses. Antibodies can also form in response to different blood groups. Everyone is born with some antibodies and develops others over their lifetime.`,
      },
    ];

    setDescription(des);
  }, []);

  return (
    <section className={classes.section}>
      <h1 className={classes.title}>Know your blood group essentials</h1>

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

export default Essesntial;
