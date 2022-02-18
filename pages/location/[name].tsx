import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Location from "../../components/location/Location";

const SpecificLocation = () => {
  const router = useRouter();
  const title = router.query["name"]! as string;

  return (
    <section>
      <Head>
        <title> locations - {title}</title>
      </Head>
      <Location title={title} />
    </section>
  );
};

export default SpecificLocation;
