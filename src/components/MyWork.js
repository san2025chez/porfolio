import React from 'react'
import { makeStyles, Grid, Card, CardContent, CardMedia, Typography, Link } from "@material-ui/core";
import mockData from '../mock/mockData';
import { } from '@mui/material/Grid';
import { minHeight } from '@mui/system';

const MyWork = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h5">{title}</Typography>
        <Grid container className={classes.grid}>
          {
            mockData.map(({ title, image, link }, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia image={image} className={classes.caratula} titulo="miimagen" />
                  <CardContent>
                    <Link href={link} color="primary" target="_blank" rel="noopener">
                      {title}
                    </Link>
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
    background:"#252a5c",
    color: "#fff"
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
    minHeight: 275,
    margin: theme.spacing(3)
  },
  caratula:{
    height: 0,
    paddingTop:'56.25%'

  }



}))

export default MyWork