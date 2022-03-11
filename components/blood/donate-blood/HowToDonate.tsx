import Image from "next/image";
import React, { useEffect, useState } from "react";
import classes from "./howtodonate.module.css";

type notes = {
  id: number;
  note: string;
};
const myNotes: notes[] = [
  {
    id: 1,
    note: `Mix lean beef and leafy green vegetables in your stir fry.`,
  },
  {
    id: 2,
    note: `Add a glass of orange juice or some vitamin-C rich fruit to your
        breakfast cereal.`,
  },
  { id: 3, note: `Drink tea and coffee between meals, not with meals.` },
];

const HowToDonate = () => {
  const [notes, setNotes] = useState<notes[]>([]);

  useEffect(() => {
    setNotes(myNotes);
  }, []);

  return (
    <section className={classes.section}>
      <div className={classes.image}>
        <Image src={"/git.png"} height={100} width={100} alt={"title"} />
      </div>
      <div className={classes.notes}>
        <h1>How do I donate?</h1>
        {notes.map((note) => (
          <div key={note.id} className={classes.note}>
            <h1> {note.id} </h1>
            <p> {note.note} </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowToDonate;
