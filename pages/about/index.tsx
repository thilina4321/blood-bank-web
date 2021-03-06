import Head from 'next/head'
import React from 'react'
import AboutOurLocations from '../../components/about/main/OurLocations'
import AboutMainSections from '../../components/about/main/Sections'
import AboutMainTitle from '../../components/about/main/Title'

const AboutUs = () => {
  return (
    <section>
      <Head>
        <title> About </title>
      </Head>

      <AboutMainTitle />
      <AboutMainSections />
      <AboutOurLocations />
    </section>
  )
}

export default AboutUs