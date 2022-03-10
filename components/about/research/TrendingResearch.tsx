import React, { useState } from "react";
import classes from "./trending.module.css";

const researches = [
  { id: 1, title: "Research 1", des: "Description 1", img: "/research.jpeg" },
  { id: 2, title: "Research 2", des: "Description 2", img: "/research.jpeg" },
  {
    id: 3,
    title: "Research 3",
    des: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, eligendi ipsa! Ratione beatae tenetur ad! Eius, et? Consequuntur at quia libero molestiae id debitis earum ullam, itaque dolorem impedit fugiat enim tempore necessitatibus aliquid beatae esse magnam architecto exercitationem voluptate sequi quo? Neque molestias pariatur officia cupiditate dolores, omnis reiciendis. Quasi, alias maiores molestias nihil tempore iure! Ipsa non sapiente dolore tenetur exercitationem distinctio corporis, a eos. Nam voluptas perspiciatis doloremque odit vero aliquam beatae porro neque delectus rerum amet esse, culpa fugiat veniam impedit eos explicabo omnis consequatur recusandae placeat ea est! Laborum ipsa, delectus sequi quisquam odio exercitationem commodi inventore fuga beatae, eligendi reiciendis voluptates, animi itaque nam suscipit quo quae similique magni quaerat aspernatur nesciunt neque enim adipisci repellendus? Animi quae fugiat aperiam consectetur nulla obcaecati nobis ducimus optio omnis impedit voluptatem illo officia distinctio similique minus voluptatum, at, excepturi facilis eaque harum veniam dolorum labore ipsum quas? Quidem, sunt. Eaque mollitia dolor, quia cumque accusamus veniam dignissimos repellendus cupiditate vitae, aliquid repudiandae. Corporis commodi quo a, sint ipsa ducimus quidem earum deserunt consequatur atque molestias quas dignissimos quae quaerat est? Soluta commodi rem iusto, quidem odio inventore a error eius autem veritatis debitis aspernatur asperiores praesentium.`,
    img: "/research.jpeg",
  },
];

const TrendingResearch = () => {
  const [selectNumber, setSelectNumber] = useState(0);

  return (
    <section className={classes.section}>
      <h1> Trending Research </h1>
      <div className={classes.researches}>
        {researches.map(({ id, title, img, des }) => (
          <div
            key={id}
            className={classes.research}
            onClick={() => id === selectNumber ? setSelectNumber(0) : setSelectNumber(id)}
          >
            {selectNumber === id ? (
              <div className={classes.sub__research__full}>
                <img
                  className={classes.image}
                  src={img}
                  alt={title}
                  width={200}
                  height={200}
                />
                <h2> {title} </h2>
                <p> {des} </p>
              </div>
            ) : (
              <div className={classes.sub__research__half}>
                <h2> {title} </h2>
                <p> {des} </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingResearch;
