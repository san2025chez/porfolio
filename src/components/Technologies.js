import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import node from "../img/node10.png"
import { makeStyles } from "@material-ui/core";
import mysql from "../img/mysql8.png"
import javascript from "../img/js8.png"
import html from "../img/html8.png"
import css from "../img/icons8.png"
import { Card, CardMedia } from '@material-ui/core';

import mongo from "../img/mongo8.png"
import react from '../img/react8.png'
import git from '../img/git9.png'
import ts from '../img/ts9.png'
import pg from '../img/postgres8.png'
import express from '../img/ex8.png'
import nest from '../img/nest8.png'
import { Typography } from '@material-ui/core';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === '#607d8b' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function Technologies() {
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }} className={classes.box1}>
             <Grid container spacing={2}>
                <Grid item xs={12}> 

            <Typography style={{ fontSize: '20px', color: '#228c55', textAlign: 'justify' }}>

¡Hola! Soy Vanesa Sanchez, Ingeniera Informática con una sólida experiencia en el desarrollo de proyectos
 de software. Mi enfoque curioso y creativo se combina con una clara orientación hacia resultados tangibles.

Me especializo en la creación de sitios web personalizados y ofrezco mis servicios para aquellos que buscan una solución única y eficiente.
 Si estás en la búsqueda de una página web o un sitio web a medida, estaré encantada de colaborar contigo.

Mi objetivo principal es continuar creciendo como ingeniera de software profesional, 
y estoy entusiasmada por explorar nuevas oportunidades alineadas con mis habilidades y experiencia. 
No dudes en ponerte en contacto conmigo si ves una posibilidad de colaboración que pueda encajar con mis objetivos y aportar de manera significativa.
 ¡Espero poder contribuir a tu proyecto o empresa!
</Typography>
                <br /><br />
                </Grid>
      
            <Grid container spacing={2}>

                <Grid item xs={4} sm={3} md={2} >


                    <CardMedia image={node} alt={"title"} className={classes.image} />


                </Grid>
                <Grid item xs={4} sm={3} md={2}>


                    <CardMedia image={css} alt={"title"} className={classes.image} />


                </Grid>
                <Grid item xs={4} sm={3} md={2}>


                    <CardMedia image={javascript} alt={"title"} className={classes.image} />

                </Grid>

                <Grid item xs={4} sm={3} md={2} >

                    <CardMedia image={mongo} alt={"title"} className={classes.image} />


                </Grid>
                <Grid item xs={4} sm={3} md={2}>


                    <CardMedia image={mysql} alt={"title"} className={classes.image} />


                </Grid>
                <Grid item xs={4} sm={3} md={2}>


                    <CardMedia image={html} alt={"title"} className={classes.image} />



                </Grid>
                <Grid item xs={4} sm={3} md={2}>


                    <CardMedia image={react} alt={"title"} className={classes.image} />



                </Grid>
                <Grid item xs={4} sm={3} md={2}>


                    <CardMedia image={git} alt={"title"} className={classes.image} />



                </Grid>
                <Grid item xs={4} sm={3} md={2}>

                    <CardMedia image={ts} alt={"title"} className={classes.image} />



                </Grid>

                <Grid item xs={4} sm={3} md={2}>

                    <CardMedia image={pg} alt={"title"} className={classes.image} />



                </Grid>
                <Grid item xs={4} sm={3} md={2}>

                    <CardMedia image={express} alt={"title"} className={classes.image} />



                </Grid>

                <Grid item xs={4} sm={3} md={2}>

                    <CardMedia image={nest} alt={"title"} className={classes.image} />



                </Grid>

            </Grid>
            </Grid>
        </Box>

    );
}
const useStyles = makeStyles((theme) => ({
    milogo: {
        height: '200px'
    },
    box1: {
        backgroundColor: '#d2ede3',
    
        backgroundColor: '#d2ede3',
      
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    card: {
        width: '100px', height: '100px',
        backgroundColor: '#263238'
    },
    image: {
        width: 50,
        height: 50,margin :'auto'
    },
    logo: {
        width: "40%",
        height: "50%"
    },
    logos: {
        width: "65%",
        height: "60%"
    },
    css: {
        width: "100px",
        height: "100px"

    },
    mongo: {
        width: "50px",
        height: "50px"

    },
    mysql: {
        width: "25%",
        height: "25%"
    },
    card: {
        maxWidth: 145,
        minHeight: 75,
        margin: theme.spacing(3)
    },
    box: {
        height: "50%"
    }
}))
