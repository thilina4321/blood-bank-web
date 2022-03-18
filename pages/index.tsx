import Head from "next/head";
import { useEffect, useState } from "react";
import {
  HomeFaqInterface,
  HomeInformationInterface,
} from "../component-interfaces/home";
import Appointment from "../components/home/Appointment";
import Brand from "../components/home/Brand";
import HomeFaq from "../components/home/Faq";
import FindLocation from "../components/home/FindLocation";
import HomeInformation from "../components/home/Information";
import HomeYouMayLike from "../components/home/YouMayLike";
import useHttp from "../hooks/useHttp";

// const details: { title: string; shortDescription: string }[] = [
//   { title: "Title 1", shortDescription: "This is the des 1" },
//   { title: "Title 2", shortDescription: "This is the des 2" },
//   { title: "Title 3", shortDescription: "This is the des 3" },
//   { title: "Title 4", shortDescription: "This is the des 4" },
//   { title: "Title 5", shortDescription: "This is the des 5" },
// ];

// const locations: { district: string; province: string; city: string }[] = [
//   { district: "Colombo", province: "Western", city: "biyagama" },
//   { district: "Wayaba", province: "Nuwara", city: "daraniyagla" },
//   { district: "Colombo", province: "Western", city: "biyagama" },
// ];

export default function Home() {
  const [information, setInformation] = useState<HomeInformationInterface[]>(
    []
  );

  const [faqs, setFaqs] = useState<HomeFaqInterface[]>([]);

  const informationReq = useHttp({
    url: "/home-information",
    method: "get",
    onSucsses: (data: HomeInformationInterface[]) => {
      setInformation(data);
    },
  });

  const faqReq = useHttp({
    url: "/home/faqs",
    method: "get",
    onSucsses: (data: HomeFaqInterface[]) => {
      setFaqs(data);
    },
  });

  useEffect(() => {
    informationReq();
    faqReq();
  }, []);

  return (
    <div>
      <Head>
        <title> SL Blood Bank </title>
      </Head>
      <Brand />
      <HomeInformation informations={information} />
      <HomeFaq faqs={faqs} />
      <HomeYouMayLike />
      <Appointment />
      <FindLocation />
    </div>
  );
}
