import Head from "next/head";
import { useEffect, useState } from "react";
import { HomeInformationInterface } from "../component-interfaces/home";
import Appointment from "../components/home/Appointment";
import Brand from "../components/home/Brand";
import HomeFaq from "../components/home/Faq";
import FindLocation from "../components/home/FindLocation";
import HomeInformation from "../components/home/Information";
import HomeYouMayLike from "../components/home/YouMayLike";
import useHttp from "../hooks/useHttp";

const details: { title: string; shortDescription: string }[] = [
  { title: "Title 1", shortDescription: "This is the des 1" },
  { title: "Title 2", shortDescription: "This is the des 2" },
  { title: "Title 3", shortDescription: "This is the des 3" },
  { title: "Title 4", shortDescription: "This is the des 4" },
  { title: "Title 5", shortDescription: "This is the des 5" },
];

const locations: { district: string; province: string; city: string }[] = [
  { district: "Colombo", province: "Western", city: "biyagama" },
  { district: "Wayaba", province: "Nuwara", city: "daraniyagla" },
  { district: "Colombo", province: "Western", city: "biyagama" },
];

export default function Home() {
  const [information, setInformation] = useState<HomeInformationInterface[]>(
    []
  );

  const informationReq = useHttp({
    url: "/home-information",
    method: "get",
    onSucsses: (data: HomeInformationInterface[]) => {
      setInformation(data)
    },
  });

  useEffect(()=>{
    informationReq()
  }, [])

  return (
    <div>
      <Head>
        <title> SL Blood Bank </title>
      </Head>
      <Brand />
      {/* <BloodDetails bloodDetails={details} /> */}
      <HomeInformation informations={information} />
      <HomeFaq />
      <HomeYouMayLike />
      <Appointment />
      <FindLocation />
      {/* <Locations locations={locations} /> */}
    </div>
  );
}
