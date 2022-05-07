import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useHttp from "../../../hooks/useHttp";
import {youmaylikedata} from '../../../data/youmaylike'
interface YouMayLikeSingle {
  title: string;
  _id: string;
  description: string;
  imageUrl?: string;
}

const SpecificYouMayLike: React.FC<{ params: string }> = (props) => {
  const { params } = props;

  const [youMayLike, setYouMayLike] = useState<YouMayLikeSingle>();

  const faqReauest = useHttp({
    url: "/you-may-like/" + params,
    method: "get",
    onSucsses: (data: YouMayLikeSingle) => {
      setYouMayLike(data);
    },
  });

  useEffect(() => {
    if (params) {
      // faqReauest();
      const data = youmaylikedata.find(like => like._id === params)
      setYouMayLike(data)
    }
  }, [params]);

  console.log("fff");

  return (
    <div className="container">
      <Head>
        <title> {params} | You May Like </title>
      </Head>
      <h1> {youMayLike?.title} </h1>
      {youMayLike?.imageUrl && (
        <div style={{ width: "100%", height: "100%" }}>
          <img
            className="img-spe"
            src={youMayLike.imageUrl}
            alt={youMayLike.title}
          />
        </div>
      )}
      <p> {youMayLike?.description} </p>
    </div>
  );
};

export default SpecificYouMayLike;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const params = ctx.params?.title;

  return {
    props: {
      params,
    },
  };
};
