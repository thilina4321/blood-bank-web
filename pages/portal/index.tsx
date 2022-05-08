import Head from 'next/head'
import React, { Fragment } from 'react'
import PortalLogin from '../../components/portal/log/Log'

const Portal = () => {
  return (
    <Fragment>
      <Head>
        <title> Admin Login </title>
      </Head>
      <PortalLogin />
    </Fragment>
  )
}

export default Portal