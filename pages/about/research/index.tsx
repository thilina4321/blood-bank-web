import Head from 'next/head'
import React, { Fragment } from 'react'
import ResearchTitle from '../../../components/about/research/Title'
import ResearchWhatWedo from '../../../components/about/research/Wedo'

const Research = () => {
  return (
    <Fragment>
        <Head>
            <title> Research | About </title>
        </Head>
        <ResearchTitle />
        <ResearchWhatWedo />
    </Fragment>
  )
}

export default Research