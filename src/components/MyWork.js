import React from 'react'
import { makeStyles, Grid, Card, CardContent, CardMedia, Typography, Link } from "@material-ui/core";
import mockData from '../mock/mockData';
import { } from '@mui/material/Grid';
import { minHeight } from '@mui/system';

const MyWork = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h5" style={{ textAlign: 'center',fontWeight: 'bold' , color:'#228c55', fontSize:'2rem'} }>{title}</Typography>
        <Grid container className={classes.grid}>
          {
            mockData.map(({ title, image, link,git }, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia image={image} className={classes.caratula} titulo="miimagen" />
                  <CardContent style={{padding: '0.5rem',   display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (maxWidth: 412px)': {
      padding: '0.1rem',
    }}}>
                    <Link href={link}  target="_blank" rel="noopener">
                      {title}
                    </Link>
                    <br/> 
                 {/*    <Link href={git}  target="_blank" rel="noopener">
                      Ir al Repositorio
                    </Link> */}
                  </CardContent>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </div>

    </div>
  )
}
const useStyles = makeStyles((theme) => ({

  section: {
    minHeight: "80vh",
  },
  sectiondark: {
    backgroundColor:'#d2ede3',
    background:"#263238",
    color: "white"
  },

  sectioncontent:{
    maxWidth:"90vw",
    margin: "0 auto",
    padding: theme.spacing(5)
  }
  ,
  grid: {
    marginTop: theme.spacing(10),
  },
  card: {
    maxWidth: 345,
  backgroundColor:'#8fd3ba',
    minHeight: 275,
    margin: theme.spacing(3),
    [theme.breakpoints.down('sm','xs')]: {
minHeight:'210px'
    },
  },
  caratula:{
    height: 0,
    paddingTop:'56.25%'

  }



}))

export default MyWork