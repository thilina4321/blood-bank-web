import React from 'react'
import Banks from '../../components/banks/Banks'

const BloodBank = () => {
    const banks = [
        {city:'Biyagama'},
        {city:'Kelaniya'},
        {city:'Gampaha'},
        {city:'Biyagama'},
        {city:'Kelaniya'},
        {city:'Gampaha'},
    ]
  return (
    <Banks banks={banks} />
  )
}

export default BloodBank