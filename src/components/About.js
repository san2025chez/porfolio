import React from 'react'
import {Button, CardMedia, makeStyles,Typography,Card,CardContent, CardActions } from "@material-ui/core";
import TypeWriteEffect from "react-typewriter-effect"
import Avatar from '@material-ui/core/Avatar';
import CVanesa from "../img/cvend.pdf";
import portada from "../img/portada.webp"
const About = ({title, dark, id}) => {
    if (dark) {
        console.log("ingreso about");
    }
    const classes= useStyles();
  return (
    <div className={`${classes.section} ${ classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
 
        <Card className={classes.card}>


          <CardContent className={classes.cardcontent}>
  
            <TypeWriteEffect
            text="Soy Vanesa Sanchez, Full-Stack Developer"
            textStyle={{fontSize: "3rem", fontWeight: "700px", color:'#228c55'}}
            startDelay={100}
            
            typeSpeed={100}
            />



       
          
          </CardContent>
          <CardActions>
            <Button className={classes.pdfbutton} variant="contained">
              <a href={CVanesa}  download>
            <h4>  Dowload CV</h4>
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
            minHeight:"90vh",
            backgroundColor: "#263238",

        },
        sectiondark:{
          backgroundSize: 'cover',
          background: "#00BFA5",
      /*     "#607d8b", */
          color:"#00BFA5",
          /* backgroundImage:  `url(${portada})`,
          backgroundRepeat: 'no-repeat', */
          backgroundColor:'#d2ede3'
          /* backgroundColor:'#4DD0B5' */
   
            
        },
        sectioncontent:{
          maxWidth: "80vw",
          margin: "0 auto",
      
   
        },
        rounded: {
          borderRadius: '100%',
          width:'20%',
          height:'50%'
        },
        card:{
         // backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/despensa-c8032.appspot.com/o/Crop_azul.webp?alt=media&token=d322d53d-8c8f-45f3-9ef9-5c6fa96c01bf")',

         //'url(${"../img/portada.webp"})', 
         backgroundPosition: 'center',
         border: 'none',
         variant:'elevation',
         boxShadow: 'none',
         outline: 'none',
       

          backgroundSize: 'cover',
     height: "85vh",
     backgroundColor:"transparent",
     display:"flex",
    
     position: "relative",
     [theme.breakpoints.down('sm')]: {
      maxWidth: 600,
      maxHeight:700
    },
        },
        cardcontent:{
          display: 'flex', /* Convierte al contenedor en un contenedor flexible */
          justifyContent: 'center', /* Centra el contenido horizontalmente */
          alignItems: 'center',
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
          bottom: "0.5rem",
          right:"4rem",
          [theme.breakpoints.down("sm")]:{
bottom:"2rem",
right: "1rem"
          },
          backgroundColor: "#228c55",
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