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
    image: "/eli_faq.png",
    title: "Frequently asked questions",
    des: `Browse through frequently asked questions, like how donation is affected by medication, tattoos, travel, and more.`,
  },
  {
    id: "2",
    image: "/eli_con.png",
    title: "Contact Us",
    des: `Couldn’t find what you were looking for in our FAQs? That’s OK — our team can help. Just get in touch.`,
  },
  {
    id: "2",
    image: "/research.jpeg",
    title: "Learn More",
    des: `If you want to learn more about the eligibility. Please contact with our doctor.`,
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
