import Head from 'next/head'
import React, { Fragment } from 'react'
import DonatorAccount from '../../../../components/blood/donate-blood/Account'

const DonatorAccountPage = () => {
  return (
      <Fragment>
          <Head>
              <title> Donator Account | user </title>
          </Head>
          <DonatorAccount />
      </Fragment>
  )
}

export default DonatorAccountPage