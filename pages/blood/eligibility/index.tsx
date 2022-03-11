import Head from "next/head";
import React, { Fragment } from "react";
import EligibilityFindCenter from "../../../components/blood/eligibility/FindCenter";
import EligibilityKnowMore from "../../../components/blood/eligibility/KnowMore";
import EligibilityTitle from "../../../components/blood/eligibility/Title";

const Eligibility = () => {
  return (
    <Fragment>
      <Head>
        <title> Eligibility | blood </title>
      </Head>

      <EligibilityTitle />
      <EligibilityKnowMore />
      <EligibilityFindCenter />
    </Fragment>
  );
};

export default Eligibility;
