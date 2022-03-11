import Head from "next/head";
import React, { Fragment } from "react";
import Donate from "../../../components/blood/donate-blood/Donate";
import HowToDonate from "../../../components/blood/donate-blood/HowToDonate";
import DonateBloodTitle from "../../../components/blood/donate-blood/Title";

const DonateBlood = () => {
  return (
    <Fragment>
      <Head>
        <title> Donate-Blood | blood </title>
      </Head>

      <DonateBloodTitle />
      <Donate />
      <HowToDonate />
    </Fragment>
  );
};

export default DonateBlood;
