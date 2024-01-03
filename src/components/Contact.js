import React from 'react'
import { makeStyles, Typography} from "@material-ui/core";
import { IconButton, Grid } from '@material-ui/core';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import { Link} from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
const Contact = ({title, dark, id}) => {
    const classes= useStyles();
  return (
    <div className={`${classes.section} ${classes.sectiondark}`}>
    <div className={classes.sectioncontent} id={id}>
    <Typography variant="h5" style={{ textAlign: 'center' , fontWeight: 'bold' , color:'white', fontSize:'2rem'}}>{title}</Typography>
    <Grid container spacing={2} alignItems="center" className={classes.grid}>
    <Grid item>
   
    <a href='https://api.whatsapp.com/send?phone=543884299868' target="_blank" rel="noopener noreferrer">
    <IconButton > <WhatsAppIcon fontSize="large" style={{color: '#00e676' ,fontSize:'3rem'}}/></IconButton>
      </a>
     <a href="https://www.linkedin.com/in/anamariavanesasanchez/" target="_blank" rel="noopener noreferrer"> <IconButton >
     <LinkedInIcon  fontSize="large" style={{color: '#2e3181' ,fontSize:'3rem'}}/>
      </IconButton ></a>
   {/*    <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
      <IconButton >
       <EmailIcon  fontSize="large" style={{ color: 'black' ,fontSize:'3rem'}}/>
      </IconButton></a> */}
      <a  href="https://github.com/san2025chez" target="_blank" rel="noopener noreferrer">
      <IconButton   >
       <GitHubIcon  fontSize="large" style={{ color: 'black' ,fontSize:'3rem'}}/>
      </IconButton>
      </a>
    </Grid>

  </Grid>
  </div>
  </div>
);
}








const useStyles = makeStyles((theme) => ({

        section:{
            minHeight:"30vh",
            backgroundColor:"#263238",
        },
        sectiondark:{
          backgroundColor:'#4DD0B5',
            color:"#fff",
           
        },
        grid: {
   paddingTop:'50px',
              display: 'flex',
    justifyContent: 'center',

        },
        sectioncontent:{
          maxWidth:"90vw",
          margin: "0 auto",
    
       
        }
  
   
  
  }))
export default Contact