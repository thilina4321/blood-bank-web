import { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import {eligibility} from '../../../data/eligibility'

const SpecificEligibilityDetail = () => {
  const {query} = useRouter()
  const [eli, setEli] = useState<any>(null)
  const router = useRouter()

  useEffect(()=>{
    if(query.name){
      if(query.name === 'Contact Us'){
        router.push('/contact')
        return
      }
      if(query.name === 'Learn More'){
        router.push('/blood/learn-about-blood')
        return
      }
    let index = eligibility.findIndex((e:any)=> e.title = query.name)
    const data = eligibility[index];
    console.log(data);
    setEli(data)
    }
  }, [query])
  
  return (
    <Fragment>
      <Head>
        <title> {eli && eli.title} </title>
      </Head>
   { eli && <section className="container">
      <h1> {eli.title} </h1>
      <img src={eli.image} alt={eli.title} width={200} height={200} />
      <p>
        {eli.des}
      </p>
      {eli.title === "Frequently Asked Questions" && <div>
        {eli.items.map((it:any)=> <div key={it.id}>
          <h2> {it.q} </h2>
          <p> {it.a} </p>
           </div>)}
        </div>}
    </section>}
    </Fragment>
  );
};

export default SpecificEligibilityDetail;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
