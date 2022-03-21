import React from "react";
import classes from "./common.module.css";

interface BloodsTypes {
  id: string;
  population: string;
  description: string;
  type: string;
}

const bloods: BloodsTypes[] = [
  {
    id: "1",
    type: "O+",
    population: "34%",
    description:
      "More than a third of new donors are O+. You’re popular, versatile and a life-saver (you’ve got it all)",
  },
  {
    id: "2",
    type: "A+",
    population: "34%",
    description:
      "More than a third of new donors are O+. You’re popular, versatile and a life-saver (you’ve got it all)",
  },
  {
    id: "3",
    type: "B+",
    population: "34%",
    description:
      "More than a third of new donors are O+. You’re popular, versatile and a life-saver (you’ve got it all)",
  },
  {
    id: "4",
    type: "B-",
    population: "34%",
    description:
      "More than a third of new donors are O+. You’re popular, versatile and a life-saver (you’ve got it all)",
  },
];

const CommonBloodTypes = () => {
  return (
    <section className={classes.section}>
      <h1> Common Blood Types </h1>
      <p>
        {`Want to know which is the rarest or the most common blood type in Australia?
More than a third of people who donate blood for the first time have the most common type, while other types are far more rare. Where does yours fall?`}{" "}
      </p>

      <div className={classes.bloods}>
        {bloods.map(({ id, description, type, population }) => (
          //   <div className={classes.blood} key={id}>
          //     <h3> {type} </h3>
          //     <p> Population : {population} </p>
          //     <p> {description} </p>
          //   </div>
          <Blood
            key={id}
            type={type}
            population={population}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default CommonBloodTypes;

interface BloodProps {
  type: string;
  population: string;
  description: string;
}

const Blood: React.FC<BloodProps> = (props) => {
  const { type, population, description } = props;
  return (
    <div className={classes.blood}>
      <h3> {type} </h3>
      <h4> Population : {population} </h4>
      <p> {description} </p>
    </div>
  );
};
