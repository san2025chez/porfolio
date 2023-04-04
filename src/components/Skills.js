import React from 'react'
import { makeStyles, Grid, Card, CardContent, CardMedia, Typography, Link } from "@material-ui/core";
import mockData from '../mock/mockDataTechnology';
import { } from '@mui/material/Grid';
import { minHeight } from '@mui/system';
import Technology from './Technologies';
import Technologies from './Technologies';

const Skills = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
      <Typography variant="h5" style={{ textAlign: 'center' ,fontWeight: 'bold' , color:'white', fontSize:'2rem'}}>{title}</Typography>
      <br/>
      
  
          
             
                 <Technologies/>
                 
               
       
            
 
      </div>

    </div>
  )
}
const useStyles = makeStyles((theme) => ({

  section: {
    minHeight: "70vh",

    backgroundColor:"#263238"
  },
  sectiondark: {
    backgroundColor:"#263238",
    color: "#607d8b",
   
  },

  sectioncontent:{
    maxWidth:"90vw",
    margin: "0 auto",
    padding: theme.spacing(5)
  }
  ,
  grid: {
    marginTop: theme.spacing(5),
 

  },
  card: {
  
    margin: theme.spacing(2)
  }
  ,
  miitem:{
    marginBottom:"20px"
  }



}))

export default Skills