import Head from "next/head";
import React, { Fragment } from "react";
import ExperiencedDonator from "../../../../../components/blood/donate-blood/ExperiencedDonator";

const ExperiencedDonatorPage = () => {
  return (
    <Fragment>
      <Head>
        <title> Already registered Donator </title>
      </Head>
      <ExperiencedDonator />
    </Fragment>
  );
};

export default ExperiencedDonatorPage;
