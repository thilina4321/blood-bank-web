import { GetServerSidePropsContext } from "next";
import React from "react";

type props = {
  title: string;
};

const BankDetails: React.FC<props> = (props) => {
  const { title } = props;
  
  return <section className="section">
      <h1> {title} </h1>
  </section>;
};

export default BankDetails;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { params } = ctx;

  return {
    props: {
      title: params!['city'],
    },
  };
};
