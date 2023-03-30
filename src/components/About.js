import React from 'react'
import {Button, CardMedia, makeStyles, Typography,Card,CardContent, CardActions } from "@material-ui/core";
import richisito from "../img/any.jpg"
import TypeWriteEffect from "react-typewriter-effect"
import cv from "../img/cv.pdf"
const About = ({title, dark, id}) => {
    if (dark) {
        console.log("ingreso about");
    }
    const classes= useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h3">{title}</Typography>
        <Card className={classes.card}>
          <CardMedia  image={richisito} className={classes.media} title="picture"/>

          <CardContent className={classes.cardcontent}>
            <TypeWriteEffect
            text="Hi , I am Vanesa Sanchez"
            textStyle={{fontSize: "2rem", fontWeight: "700px"}}
            startDelay={100}
            cursorColor="black"
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
        About º
        </div>
  )
}


const useStyles = makeStyles((theme) => ({

        section:{
            minHeight:"100vh",
        },
        sectiondark:{
            background:" #333",
            color:"#fff"
        },
        sectioncontent:{
          maxWidth: "80vw",
          margin: "0 auto"
        },
        card:{
     height: "70vh",
     display:"flex",
     marginTop: theme.spacing(6),
     position: "relative"
        },
        media:{
          width: "250px",
          objectFit:"cover",
          height: "auto",
          borderRadius:"10px"
        },
        pdfbutton:{
          position:"absolute",
          bottom: "5rem",
          right:"4rem",
          [theme.breakpoints.down("sm")]:{
bottom:"2rem",
right: "1rem"
          },
          backgroundColor: "tomato",
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