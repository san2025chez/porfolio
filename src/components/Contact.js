import React from 'react'
import { makeStyles } from "@material-ui/core";


const Contact = ({title, dark, id}) => {
    const classes= useStyles();
  return (
    <div>Contact</div>
  )
}
const useStyles = makeStyles((theme) => ({

        section:{
            minHeight:"100vh",
        },
        sectiondark:{
            background:" #3333",
            color:"#fff"
        }
  
   
  
  }))
export default Contact