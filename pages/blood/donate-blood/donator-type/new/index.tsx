import Head from "next/head";
import React, { Fragment } from "react";
import NewDonator from '../../../../../components/blood/donate-blood/NewDonator'

const NewDonatorPage = () => {
  return (
    <Fragment>
      <Head>
        <title> New Donator </title>
        
      </Head>
      <NewDonator />
    </Fragment>
  );
};

export default NewDonatorPage;
