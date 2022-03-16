import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import { BloodDonateNote } from "../../../component-interfaces/blood";
import Donate from "../../../components/blood/donate-blood/Donate";
import HowToDonate from "../../../components/blood/donate-blood/HowToDonate";
import DonateBloodTitle from "../../../components/blood/donate-blood/Title";
import useHttp from "../../../hooks/useHttp";

type donateBloodType = {
  title: string;
  description: string;
  items: BloodDonateNote[];
};

const DonateBlood = () => {
  const [donateBlood, setDonateBlood] = useState<donateBloodType>();

  const getBloodDonateReq = useHttp({
    url: "/donate-blood",
    method: "get",
    onSucsses: (data: donateBloodType[]) => {
      setDonateBlood(data[0]);
    },
  });

  useEffect(() => {
    getBloodDonateReq();
  }, []);

  console.log("hello world");

  return (
    <Fragment>
      <Head>
        <title> Donate-Blood | blood </title>
      </Head>

      <DonateBloodTitle
        title={donateBlood?.title!}
        description={donateBlood?.description!}
      />
      <Donate />
      {donateBlood?.items && <HowToDonate myNotes={donateBlood?.items} />}
    </Fragment>
  );
};

export default DonateBlood;
