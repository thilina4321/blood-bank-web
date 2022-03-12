import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import { BankIronDependencyFood } from "../../../component-interfaces/bank";
import classes from "./nutrition.module.css";

const richFoodsArr: BankIronDependencyFood[] = [
  {
    id: 1,
    note: `Red meat contains a lot of iron`,
  },
  {
    id: 2,
    note: `Foods and drinks that reduce the amount of iron your body can absorb include chocolate, unprocessed bran, tea, coffee, red wine and cola drinks.`,
  },
  {
    id: 3,
    note: `Antacids can also reduce iron absorption, as can other medications. 
      `,
  },
  {
    id: 4,
    note: `Red meat contains a lot of iron`,
  },
];

const IronDependencyNutrition = () => {
  const [richFoods, setRichFoods] = useState<BankIronDependencyFood[]>([]);

  useEffect(() => {
    // http request
    setRichFoods(richFoodsArr);
  }, []);

  return (
    <section className={classes.section}>
      <Fragment>
        <h1>Iron and nutrition</h1>
        <p>{`If you are low in iron, diet alone won’t be enough to boost your levels. However, it’s still a good idea to make sure you’re eating a diet rich in iron. This can help you maintain your levels once they’re back to normal. `}</p>
      </Fragment>

      <Fragment>
        <h2>What’s the best food for iron?</h2>
        <p>{`What’s the best food for iron?
There are two types of iron in food — 'haem iron', which is found in meat, and 'non-haem iron', which is found in plants.
Your body absorbs haem iron much more easily than non-haem iron. Meat also contains a lot more iron than plants, however a well-balanced vegetarian diet can still provide enough iron. `}</p>
      </Fragment>

      <div className={classes.rich__food}>
        <h2>{`What’s the best way to eat iron rich foods?`}</h2>
        <p>
          You can increase (or decrease) your iron absorption by having certain
          other foods, drinks and medications.{" "}
        </p>
        <ul>
          {richFoods.map(({ id, note }) => (
            <li key={id}> {note} </li>
          ))}
        </ul>

        <Image src={"/git.png"} height={200} width={200} alt={"title"} />
      </div>
    </section>
  );
};

export default IronDependencyNutrition;
