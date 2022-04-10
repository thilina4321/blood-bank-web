import { useRouter } from "next/router";
import React from "react";
import { HomeFaqInterface } from "../../component-interfaces/home";
import classes from "./faq.module.css";

const HomeFaq: React.FC<{ faqs: HomeFaqInterface[] }> = (props) => {
  const { faqs: questions = [] } = props;
  const router = useRouter();
  return (
    <section className={classes.section}>
      <h1> Your most asked questions</h1>
      <div className={classes.questions}>
        {questions.map(({ id, question }) => (
          <div
            onClick={() => router.push("/home/faq/" + question)}
            className={classes.question}
            key={id}
          >
            {question}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeFaq;
