import Head from "next/head";
import React from "react";
import Capability from "../../../components/banks/blood-group/Capability";
import Essesntial from "../../../components/banks/blood-group/Essesntial";
import PlateCapability from "../../../components/banks/blood-group/Plate";
import Title from "../../../components/banks/blood-group/Title";

const BloodGroups = () => {
  return (
    <div className="section">
        <Head>
            <title> Matching Blood Groups </title>
        </Head>
      <Title />
      <Essesntial />
      <Capability />
      <PlateCapability />

    </div>
  );
};

export default BloodGroups;
