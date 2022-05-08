import { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import {ourprogramdata} from '../../../data/our-programs'
const SpecificProgram = () => {

  const [program, setProgram] = useState<any>([])
  const {query} = useRouter()
  console.log(query);
  

  useEffect(() => {
    if(query && query.name){
    const data = ourprogramdata.find(pro=> pro.title === query.name )
    setProgram(data)
  }
  }, [query])
  

  return (
    <Fragment>
      <Head>
        <title> {query && query.name} </title>
      </Head>
   { program &&  <section className="container">
      <h1> {program.title} </h1>
      {/* <img src="/research.jpeg" alt="title" width={200} height={200} /> */}
      <h2 style={{fontSize:'2rem', color :'#5e0023'}}>
       {program.description}
      </h2>

      <div> 
        {program.items?.map((pro:any)=> <div key={pro.id}>
          <h3> {pro.title} </h3>
          <p> {pro.des} </p>
        </div> )}
      </div>
    </section>}
    </Fragment>
  );
};

export default SpecificProgram;

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
