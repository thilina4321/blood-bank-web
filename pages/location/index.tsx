import React, { useEffect } from 'react'
import AboutOurLocations from '../../components/about/main/OurLocations'

const MainLocationPage = () => {
  useEffect(()=>{
    getData()
  }, [])

  const getData = async()=>{
    const res = await fetch('/api/location')
    console.log('this is the place');
    
    const jsonRes = await res.json()
    console.log(jsonRes);
    
  }

  return (
    <section>
        <AboutOurLocations isTitle={false} />
    </section>
  )
}

export default MainLocationPage