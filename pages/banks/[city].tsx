import { GetServerSidePropsContext } from "next";
import React from "react";

type props = {
  title: string;
};

const BankDetails: React.FC<props> = (props) => {
  const { title } = props;

  return (
    <section className="section">
      <h1> {title} </h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.005470009979!2d79.97769862781902!3d6.950031519764486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25677ddae5c43%3A0x541d92dd5945da68!2sBiyagama!5e0!3m2!1sen!2slk!4v1646621415774!5m2!1sen!2slk"
        width="600"
        height="600"
        style={{ border: "0", width: "100%" }}
        allowFullScreen
        loading="lazy"
      ></iframe>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: "5rem",
          marginTop: "5rem",
          flexWrap:'wrap'
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            border: "2px solid #eee",
            padding: "2rem",
            flex: "1",
            borderRadius: "1rem",
          }}
        >
          <h1>Address :</h1>
          <p> 345, St. Mawatha, Colombo </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            border: "2px solid #eee",
            padding: "2rem",
            flex: "1",
            borderRadius: "1rem",
          }}
        >
          <h1>Phone Number : </h1>
          <p> 0762436688 </p>
        </div>
      </div>
    </section>
  );
};

export default BankDetails;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { params } = ctx;

  return {
    props: {
      title: params!["city"],
    },
  };
};
