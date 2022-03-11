import Head from "next/head";
import React, { Fragment } from "react";
import ContactComponent from "../../components/contact";

const Contact = () => {
  return (
    <Fragment>
      <Head>
        <title> Contact </title>
      </Head>
      <ContactComponent />
    </Fragment>
  );
};

export default Contact;
