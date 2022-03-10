import Head from "next/head";
import React, { Fragment } from "react";
import OurProgrmItems from "../../../components/about/our-programs/Programs";
import OurProgramsTitle from "../../../components/about/our-programs/Title";

const OurPrograms = () => {
  return (
    <Fragment>
      <Head>
        <title> Our Programs | About </title>
      </Head>
      <OurProgramsTitle />
      <OurProgrmItems />
    </Fragment>
  );
};

export default OurPrograms;
