/* import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Technology() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
 */
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import node from "../img/node10.png"
import { makeStyles } from "@material-ui/core";
import mysql from "../img/mysql8.png"
import javascript from "../img/js8.png"
import html from "../img/html8.png"
import css from "../img/icons8.png"
import {Card, CardMedia} from '@material-ui/core';

import mongo from "../img/mongo8.png"
import react from '../img/react8.png'
import git from '../img/git9.png'
import ts from '../img/ts9.png'
import pg from '../img/postgres8.png'
import express from '../img/ex8.png'
import nest from '../img/nest8.png'

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


                <Grid item xs={6} sm={6} md={2} >
                 
                      
                            <CardMedia image={node} alt={"title"} className={classes.image} />
                    
                  
                </Grid>
                <Grid item xs={6} sm={6} md={2}>
                   
                       
                            <CardMedia image={css} alt={"title"} className={classes.image} />
                     
                   
                </Grid>
                <Grid item xs={6} sm={6} md={2}>
                
           
                    <CardMedia image={javascript} alt={"title"} className={classes.image} />
             
                </Grid>

                <Grid item xs={6} sm={6} md={2} >
                 
                            <CardMedia image={mongo} alt={"title"} className={classes.image} />
                       
                  
                </Grid>
                <Grid item xs={6} sm={6} md={2}>
                   
                   
                            <CardMedia image={mysql} alt={"title"} className={classes.image} />
                  
                   
                </Grid>
                <Grid item xs={6} sm={6} md={2}>
                

                    <CardMedia image={html} alt={"title"} className={classes.image} />

          
          
                </Grid>
                <Grid item xs={6} sm={6} md={2}>
                
         
                    <CardMedia image={react} alt={"title"} className={classes.image} />
               
          
          
                </Grid>
                <Grid item xs={6} sm={6} md={2}>
                
              
                    <CardMedia image={git} alt={"title"} className={classes.image} />
         
          
          
                </Grid>
                <Grid item xs={6} sm={6} md={2}>
                
                    <CardMedia image={ts} alt={"title"} className={classes.image} />
               
          
          
                </Grid>

                <Grid item xs={6} sm={6} md={2}>
                
                    <CardMedia image={pg} alt={"title"} className={classes.image} />
            
          
          
                </Grid>
                <Grid item xs={6} sm={6} md={2}>
      
                    <CardMedia image={express} alt={"title"} className={classes.image} />
  
          
          
                </Grid>

                <Grid item xs={6} sm={6} md={2}>
      
                    <CardMedia image={nest} alt={"title"} className={classes.image} />
          
          
          
                </Grid>

               {/*  <Grid item xs={12} sm={6} md={4}>
               
                <CardContent >
                    <img src={html} alt={"title"} className={classes.logo} />
                </CardContent>
               
                </Grid> */}
{/* 
                <Grid item xs={12} sm={6} md={4}>
                
                <CardContent >
                    <img src={css} alt={"title"} className={classes.css} />
                </CardContent>
             
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                
                <CardContent >
                    <img src={mongo} alt={"title"} className={classes.mongo} />
                </CardContent>
             
                </Grid> */}




            </Grid>
        </Box>

    );
}
const useStyles = makeStyles((theme) => ({
  milogo:{
    height: '200px'
  },
  box1:{
    backgroundColor:"#263238"
  },
  card:{ width: '100px', height: '100px',
backgroundColor:'#263238' },
image:{
  width:100,
height: 100},
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
    mongo:{
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
    box:{
      height: "50%"
    }
}))
