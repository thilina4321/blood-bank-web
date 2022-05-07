import { GetServerSidePropsContext } from "next";
import React, { useEffect, useState } from "react";
import { HomeFaqInterface } from "../../../component-interfaces/home";
import useHttp from "../../../hooks/useHttp";
import {faqs} from '../../../data/faq'

const SpecificFaq: React.FC<{ params: string }> = (props) => {
  const { params } = props;

  const [faq, setFaq] = useState<HomeFaqInterface>();
  

  // const faqReauest = useHttp({
  //   url: "/home/faqs/" + params,
  //   method: 'get',
  //   onSucsses: (data: HomeFaqInterface[]) => {
  //     setFaq(data[0]);
  //   },
  // });

  useEffect(() => {
    if (params) {
      const question = faqs.find((que:any)=> que.id == params )
      console.log(faqs);
      console.log(params);
      
      setFaq(question)
      // faqReauest();
    }
  }, [params]);


  return (
    <div className="container">
      <h1> {faq?.question} </h1>
      <p> {faq?.answer} </p>
    </div>
  );
};

export default SpecificFaq;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const params = ctx.params?.id;

  console.log(ctx.params, '==============');
  

  return {
    props: {
      params,
    },
  };
};
