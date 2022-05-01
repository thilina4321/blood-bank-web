import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BloodDonateNote } from "../../../component-interfaces/blood";
import classes from "./howtodonate.module.css";

// const myNotes: BloodDonateNote[] = [
//   {
//     id: 1,
//     title: `Mix lean beef and leafy green vegetables in your stir fry.`,
//   },
//   {
//     id: 2,
//     title: `Add a glass of orange juice or some vitamin-C rich fruit to your
//         breakfast cereal.`,
//   },
//   { id: 3, title: `Drink tea and coffee between meals, not with meals.` },
// ];

const HowToDonate: React.FC<{ myNotes: BloodDonateNote[] }> = (props) => {
  const { myNotes: notes } = props;
  // const [notes, setNotes] = useState<BloodDonateNote[]>([]);

  // useEffect(() => {
  //   setNotes(myNotes);
  // }, []);

  return (
    <section className={classes.section}>
      <div className={classes.image}>
        <Image src={"/git.png"} height={100} width={100} alt={"title"} />
      </div>
      <div className={classes.notes}>
        <h1>Things You can do .</h1>
        {notes.map((note, index) => (
          <div key={note._id} className={classes.note}>
            <h1> {index + 1} </h1>
            <p> {note.title} </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowToDonate;
