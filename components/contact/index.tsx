import React from 'react'
import Enquery from './Enquery'
import TellUs from './TellUs'
import ContactTitle from './Title'
import Ways from './Ways'

const ContactComponent = () => {
  return (
    <div>
        <ContactTitle />
        <TellUs />
        <Enquery />
        <Ways />
    </div>
  )
}

export default ContactComponent