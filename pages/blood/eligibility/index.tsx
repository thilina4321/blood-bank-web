import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import { BloodEligibilityKnowMoreInterface } from "../../../component-interfaces/blood";
import EligibilityFindCenter from "../../../components/blood/eligibility/FindCenter";
import EligibilityKnowMore from "../../../components/blood/eligibility/KnowMore";
import EligibilityTitle from "../../../components/blood/eligibility/Title";
import useHttp from "../../../hooks/useHttp";

type detail = {
  title: string;
  description: string;
};

const informations : BloodEligibilityKnowMoreInterface[] = [
  {
    id: "1",
    image: "/research.jpeg",
    title: "Title 1",
    des: "this is the description",
  },
  {
    id: "2",
    image: "/research.jpeg",
    title: "Title 2",
    des: "this is the description",
  },
  {
    id: "3",
    image: "/research.jpeg",
    title: "Title 3",
    des: "this is the description",
  },
  {
    id: "4",
    image: "/research.jpeg",
    title: "Title 3",
    des: "this is the description",
  },
];

const Eligibility = () => {
  const [details, setDetails] = useState<detail>({
    title: "Can I donate Blood ?",
    description: `Are you 18-75 years old, healthy and weigh over 50 kg? Find out if you
  can donate blood, and start changing lives.`,
  });
  const [items, setItems] = useState([]);

  const getEligibilityReq = useHttp({
    url: "/eligibility",
    method: "get",
    onSucsses: (data: any) => {
      console.log(data);
      // setDetails(data)
      // setItems(data)
    },
  });

  useEffect(() => {
    getEligibilityReq();
  }, []);
  return (
    <Fragment>
      <Head>
        <title> Eligibility | blood </title>
      </Head>

      <EligibilityTitle
        title={details.title}
        description={details.description}
      />
      <EligibilityKnowMore informations={informations} />
      <EligibilityFindCenter />
    </Fragment>
  );
};

export default Eligibility;
