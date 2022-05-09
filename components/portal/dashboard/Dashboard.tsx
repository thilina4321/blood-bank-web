import React from 'react'
import classes from './board.module.css'

const programs = [
    {id:1, title : 'Blood Stocks', url :'/portal/stocks'},
    {id:2, title : 'Blood Donators', url :'/portal/donators'},
    {id:3, title : 'Programs', url :'/portal/stocks'},
]



const PortalDashboard = () => {
    const nextPageHandler = (url:string)=>{

    }
  return (
    <section className={classes.programs}>
      {programs.map(({ id, title, url }) => (
        <div className={classes.program} key={id}>
          <h1> {title} </h1>
          <button onClick={() => nextPageHandler(url)}> Explore </button>
        </div>
      ))}
    </section>
  )
}

export default PortalDashboard