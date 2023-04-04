import React from 'react'
import {Button, CardMedia, makeStyles, Typography,Card,CardContent, CardActions } from "@material-ui/core";
import richisito from "../img/any.jpg"
import TypeWriteEffect from "react-typewriter-effect"
import Avatar from '@material-ui/core/Avatar';
import cv from "../img/cv.pdf"
const About = ({title, dark, id}) => {
    if (dark) {
        console.log("ingreso about");
    }
    const classes= useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h5">{title}</Typography>
        <Card className={classes.card}>


          <CardContent className={classes.cardcontent}>
            <TypeWriteEffect
            text="Hi , I am Vanesa Sanchez ,Full Stack-Developer"
            textStyle={{fontSize: "2rem", fontWeight: "700px", color:"white"}}
            startDelay={100}
            cursorColor="white"
            typeSpeed={100}
            />

            contenido de la tarjeta
            <Typography/>
          </CardContent>
          <CardActions>
            <Button className={classes.pdfbutton} variant="contained">
              <a href={cv} download>
              Dowload CV
              </a>
              </Button>
          </CardActions>
        </Card>
      </div>

        </div>
  )
}


const useStyles = makeStyles((theme) => ({

        section:{
            minHeight:"100vh",
            backgroundColor: "#263238",

        },
        sectiondark:{
            background: "#263238",
        /*     "#607d8b", */
            color:"#fff"
        },
        sectioncontent:{
          maxWidth: "80vw",
          margin: "0 auto"
        },
        rounded: {
          borderRadius: '100%',
          width:'20%',
          height:'50%'
        },
        card:{
     height: "50vh",
     backgroundColor:"#263238",
     display:"flex",
     marginTop: theme.spacing(6),
     position: "relative",
     [theme.breakpoints.down('sm')]: {
      maxWidth: 600,
      maxHeight:600
    },
        },
        media:{
          width: "350px",
          objectFit:"cover",
          height: "auto",
          borderRadius:"10px",
          [theme.breakpoints.down('sm')]: {
            maxWidth: 400,
            maxHeight:500
          }
        },
        pdfbutton:{
          position:"absolute",
          bottom: "5rem",
          right:"4rem",
          [theme.breakpoints.down("sm")]:{
bottom:"2rem",
right: "1rem"
          },
          backgroundColor: "#90A4AE",
          padding: theme.spacing(3),
          "&: hover": {
            backgroundColor:"#fff"

          },
          "& a":{
            color:"#fff",
            textDecoration: "none",
            fontWeight:9000
          },
          "& a: hover":{
            color: "tomato"
          }
        }
  
 
  
  }))

export default About