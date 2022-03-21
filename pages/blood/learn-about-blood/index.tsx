import Head from "next/head";
import React, { Fragment } from "react";
import LearnABoutBlood from "../../../components/blood/learn-about-blood";

const LearnAboutBloodPage = () => {
  return (
    <Fragment>
      <Head>
        <title> Learn About Blood </title>{" "}
      </Head>
      <LearnABoutBlood />
    </Fragment>
  );
};

export default LearnAboutBloodPage;
