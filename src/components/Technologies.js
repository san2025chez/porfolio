import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion'; // Importación de motion para el movimiento de los iconos
import { CardMedia } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import Typography from '@mui/material/Typography';

// Imágenes
import node from "../img/node10.png";
import css from "../img/icons8.png";
import javascript from "../img/js8.png";
import mongo from "../img/mongo8.png";
import mysql from "../img/mysql8.png";
import html from "../img/html8.png";
import react from '../img/react8.png';
import git from '../img/git9.png';
import ts from '../img/ts9.png';
import pg from '../img/postgres8.png';
import express from '../img/ex8.png';
import nest from '../img/nest8.png';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#1E2A38',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontFamily: 'Space Grotesk, sans-serif', // Aplica la fuente a todos las letras
}));

export default function Technologies() {
    const classes = useStyles();

    return (
        <Box sx={{ flexGrow: 1 }} className={classes.box1}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography 
                        style={{ 
                            fontSize: window.innerWidth > 600 ? '21px' : '16px', // Ajusta el tamaño de la fuente para dispositivos de escritorio
                            color: '#FFFFFF', 
                            textAlign: 'justify', 
                            fontFamily: 'Space Grotesk, sans-serif', // Aplica la fuente a todos las letras
                            fontWeight: window.innerWidth > 600 ? 'normal' : 'lighter' // Ajusta el peso de la fuente para dispositivos móviles
                        }}
                    >
                        ¡Hola! Soy Vanesa Sanchez, Ingeniera Informática con una sólida experiencia en el desarrollo de proyectos
                        de software. Mi enfoque curioso y creativo se combina con una clara orientación hacia resultados tangibles...
                    </Typography>
                    <br /><br />
                </Grid>

                {/* Grid de iconos */}
                <Grid container spacing={2}>
                    {[
                        { img: node }, { img: css }, { img: javascript },
                        { img: mongo }, { img: mysql }, { img: html },
                        { img: react }, { img: git }, { img: ts },
                        { img: pg }, { img: express }, { img: nest }
                    ].map((tech, index) => (
                        <Grid item xs={4} sm={3} md={2} key={index}>
                            <motion.div
                                initial={{ rotateY: 0 }} // Estado inicial
                                animate={{ rotateY: 360 }} // Rotación a lo largo del eje Y
                                transition={{ duration: 2, repeat: Infinity }} // Animación continua
                                style={{ transformOrigin: 'center' }} // Establece el centro de rotación
                            >
                                <CardMedia image={tech.img} className={classes.image} />
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({
    box1: {
        backgroundColor: '#1E2A38',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
        },
    },
    image: {
        width: 50,
        height: 50,
        margin: 'auto',
    },
}));
