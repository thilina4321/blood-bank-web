import Head from 'next/head'
import React from 'react'
import IronDependencyDescription from '../../../components/banks/iron-dependency/Description'
import IronAbsorption from '../../../components/banks/iron-dependency/IronAbsorption'
import IronDependencyNutrition from '../../../components/banks/iron-dependency/Nutrition'
import IronDependencyTitle from '../../../components/banks/iron-dependency/Title'

const index = () => {
  return (
    <div className='section'>
        <Head>
            <title>Iron Dependency</title>
        </Head>
        <IronDependencyTitle />
        <IronDependencyDescription />
        <IronDependencyNutrition />
        <IronAbsorption />
    </div>
  )
}

export default index