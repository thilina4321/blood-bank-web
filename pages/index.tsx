import Head from "next/head";
import Appointment from "../components/home/Appointment";
import BloodDetails from "../components/home/BloodDetails";
import Brand from "../components/home/Brand";
import Locations from "../components/home/Locations";

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
  return (
    <div>
      <Head>
        <title> SL Blood Bank </title>
      </Head>
      <Brand />
      <BloodDetails bloodDetails={details} />
      <Appointment />
      <Locations locations={locations} />
    </div>
  );
}
