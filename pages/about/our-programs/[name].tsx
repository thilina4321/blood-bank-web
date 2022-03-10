import { GetStaticProps } from "next";
import React from "react";

const SpecificProgram = () => {
  return (
    <section className="container">
      <h1> Title </h1>
      <img src="/research.jpeg" alt="title" width={200} height={200} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ad placeat
        saepe inventore error assumenda soluta fugiat debitis in nemo
        exercitationem sequi blanditiis reiciendis molestiae, dolorum vero iusto
        incidunt voluptatibus! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Est ad placeat saepe inventore error assumenda soluta
        fugiat debitis in nemo exercitationem sequi blanditiis reiciendis
        molestiae, dolorum vero iusto incidunt voluptatibus! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Est ad placeat saepe inventore
        error assumenda soluta fugiat debitis in nemo exercitationem sequi
        blanditiis reiciendis molestiae, dolorum vero iusto incidunt
        voluptatibus!
      </p>
    </section>
  );
};

export default SpecificProgram;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
