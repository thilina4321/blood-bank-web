import React from 'react'
import classes from './button.module.css'

type props = {
  name:string
}
const MyButton:React.FC<props> = (props) => {
  const {name} = props
  return (
    <button className={classes.btn}>{name}</button>
  )
}

export default MyButton