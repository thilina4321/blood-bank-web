import Head from 'next/head'
import React, { Fragment } from 'react'
import PortalDashboard from '../../../components/portal/dashboard/Dashboard'

const Board = () => {
  return (
    <Fragment>
        <Head>
            <title> Dashboard </title>
        </Head>
        <h1 style={{textAlign:'center'}}> Admin Dashboard </h1>
        <PortalDashboard />
    </Fragment>
  )
}

export default Board