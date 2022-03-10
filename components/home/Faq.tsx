import React from "react";
import classes from "./faq.module.css";

const questions = [
  { id: 1, question: "Question 1" },
  { id: 2, question: "Question 1" },
  { id: 3, question: "Question 1" },
  { id: 4, question: "Question 1" },
];

const HomeFaq = () => {
  return (
    <section className={classes.section}>
      <h1> Your most asked questions</h1>
      <div className={classes.questions}>
        {questions.map(({ id, question }) => (
          <div className={classes.question} key={id}>
            {question}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeFaq;
