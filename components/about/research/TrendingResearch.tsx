import React, { useState } from "react";
import classes from "./trending.module.css";

const researches = [
  { id: 1, title: `How we’re governed
  `, des: `The regular reviews look at scientific excellence, strategic direction and governance. We’re guided by a Research and Development Framework, which we developed together with governments. The framework outlines what we do, who we consult with and how we collaborate with governments and other stakeholders.
  As part of the framework, our project proposals are reviewed by an independent Research Advisory Committee consisting of local and international experts in the blood sector, along with Lifeblood executives and senior representatives from the National Blood Authority.`, img: "/research.jpeg" },
  { id: 2, title: "Annual Reports", des: `We’re proud of what we achieve as world-leading researchers. Check out the details in our latest annual reports.`, img: "/research.jpeg" },
  {
    id: 3,
    title: "Our collaborators",
    des: ` Nurturing strategic collaborations with researchers aligned with our own research priorities is critical for our success.
    By combining our specialist skills with clinical practitioners or by accessing high-cost, cutting-edge infrastructure and expertise outside our field, we can multiply our impact.
    We participate in many collaborations that gain competitive grant funding and deliver important results.  
    Here’s a list of our projects for 2019-2020, including who we’re working with.   
    `,
    img: "/research.jpeg",
  },
];

const TrendingResearch = () => {
  const [selectNumber, setSelectNumber] = useState(0);

  return (
    <section className={classes.section}>
      <h1>  Research Strategy </h1>
      <div className={classes.researches}>
        {researches.map(({ id, title, img, des }) => (
          <div
            key={id}
            className={classes.research}
            onClick={() => id === selectNumber ? setSelectNumber(0) : setSelectNumber(id)}
          >
            {selectNumber === id ? (
              <div className={classes.sub__research__full}>
                {/* <img
                  className={classes.image}
                  src={img}
                  alt={title}
                  width={200}
                  height={200}
                /> */}
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
