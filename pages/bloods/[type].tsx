import { GetStaticPropsContext } from "next";
import React from "react";
import BloodType from "../../components/blood/BloodType";

type props = {
  title: string;
};
const BloodTyp: React.FC<props> = (props) => {
  const { title } = props;
  const description = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nobis aut cumque non illum, suscipit, mollitia id odio molestiae debitis deleniti fugiat iste ad dignissimos blanditiis, quasi omnis! Qui, voluptatibus!`;
  const summeryData = [
    { type: "Stocks", amount: 20 },
    { type: "Needed", amount: 10 },
    { type: "Scarcity", amount: 10 },
  ];
  return (
    <BloodType
      status={false}
      title={title}
      description={description}
      summeryData={summeryData}
    />
  );
};

export default BloodTyp;

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const params = ctx.params!;

  return {
    props: {
      title: params["type"],
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
