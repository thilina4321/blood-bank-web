import { GetServerSidePropsContext } from "next";
import React, { useEffect, useState } from "react";
import { HomeFaqInterface } from "../../../component-interfaces/home";
import useHttp from "../../../hooks/useHttp";

const SpecificFaq: React.FC<{ params: string }> = (props) => {
  const { params } = props;

  const [faq, setFaq] = useState<HomeFaqInterface>();

  const faqReauest = useHttp({
    url: "/home/faqs/" + params,
    method: 'get',
    onSucsses: (data: HomeFaqInterface[]) => {
      setFaq(data[0]);
    },
  });

  useEffect(() => {
    if (params) {
      faqReauest();
    }
  }, [params]);

  console.log("fff");

  return (
    <div className="container">
      <h1> {faq?.question} </h1>
      <p> {faq?.answer} </p>
    </div>
  );
};

export default SpecificFaq;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const params = ctx.params?.question;

  return {
    props: {
      params,
    },
  };
};
