import React, { useState, useEffect } from 'react';
import { Typography, Card, CardContent, Grid, CardMedia } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import portada from "../img/original-ana.png";
import { motion } from 'framer-motion';


const About = ({ title, dark, id }) => {
  const [fullStackText, setFullStackText] = useState('');
  const [developerText, setDeveloperText] = useState('');
  const [isTypingDeveloper, setIsTypingDeveloper] = useState(true);

  const fullStack = "Software";
  const developer = "Engineer";
  const whatsappLink = "https://wa.link/2ogmx1"; // Cambia este enlace por el tuyo

  useEffect(() => {
    const typeFullStack = () => {
      setFullStackText(fullStack.substring(0, fullStackText.length + 1));
    };

    if (fullStackText !== fullStack) {
      setTimeout(typeFullStack, 100);
    }
  }, [fullStackText]);

  useEffect(() => {
    const typeDeveloper = () => {
      if (isTypingDeveloper) {
        setDeveloperText(developer.substring(0, developerText.length + 1));
        if (developerText === developer) {
          setTimeout(() => setIsTypingDeveloper(false), 1000);
        }
      } else {
        setDeveloperText(developer.substring(0, developerText.length - 1));
        if (developerText === '') {
          setTimeout(() => setIsTypingDeveloper(true), 1000);
        }
      }
    };

    const typingTimeout = setTimeout(typeDeveloper, 100);
    return () => clearTimeout(typingTimeout);
  }, [developerText, isTypingDeveloper]);

  const handleClick = () => {
    window.open(whatsappLink, '_blank');
  };

  const classes = useStyles();

  return (
    <div className={classes.section} id={id}>
      <div className={classes.sectioncontent}>
        <Card className={classes.card}>
          <CardContent className={classes.cardcontent}>
            <Grid container spacing={3} style={{ minHeight: "80vh" }}>
              <Grid item xs={12} sm={6} className={classes.textContainer}>
                <Typography variant="h4" className={classes.title}>Soy Vanesa Sanchez</Typography>
                <span className={classes.typingText}>
                  {fullStackText} {developerText}
                </span>
                <Typography variant="h6" className={classes.description}>
                  Soy Ingeniera de Software, especialista en crear soluciones tecnológicas usando React, Node.js, y Nest.js,
                  con un enfoque en inteligencia artificial y aplicaciones escalables. Me apasiona transformar ideas en productos digitales innovadores y eficientes.
                  ¡Juntos, podemos impulsar tu proyecto!
                </Typography>
                <div className={classes.buttonContainer}>
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: '#00BFA5' }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className={classes.contactButton}
                    onClick={handleClick}
                  >
                    Contactarme
                  </motion.button>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.imageContainer} style={{ marginTop: '20px', '@media (max-width: 600px)': { marginTop: '40px' } }}>
                <CardMedia
                  className={classes.media}
                  image={portada}
                  title="Vanesa Sanchez"
                  alt="Imagen de Vanesa Sanchez"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: "#1E2A38",
    paddingTop: '50px',
    fontFamily: 'Open Sans, sans-serif',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '80px',
    },
  },
  sectioncontent: {
    maxWidth: "90vw",
    margin: "0 auto",
    padding: '0 16px',
    [theme.breakpoints.down('sm')]: {
      padding: '0 8px',
    },
  },
  textContainer: {
    marginTop: '50px',
    paddingTop: '40px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '20px',
      marginBottom: '30px',
      paddingBottom: '30px',
      paddingTop: '20px',
      textAlign: 'left',
    },
  },
  card: {
    backgroundColor: "transparent",
    boxShadow: 'none',
    border: 'none',
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down('sm')]: {
      flexDirection: "column",
    },
  },
  cardcontent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '20px',
      textAlign: 'left',
    },
  },
  title: {
    marginBottom: '20px',
    color: '#FFFFFF',
    fontSize: '2.5rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    fontFamily: 'Space Grotesk, sans-serif',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.0rem',
      textAlign: 'left',
    },
  },
  typingText: {
    fontSize: "3rem",
    fontWeight: "700",
    color: '#FFD700',
    textTransform: 'uppercase',
    marginBottom: '20px',
    fontFamily: 'Space Grotesk, sans-serif',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.8rem',
      textAlign: 'left',
      fontWeight: '500',
    },
  },
  description: {
    marginTop: '30px',
    color: '#FFFFFF',
    fontSize: '1.2rem',
    lineHeight: '1.6',
    fontWeight: '200', 
    fontFamily: 'Space Grotesk, sans-serif',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem', // Letra más delgada
      textAlign: 'left',
      fontWeight: '300', // Elegante
    },
  },
  buttonContainer: {
    marginTop: '30px',
    textAlign: 'center',
  },
  contactButton: {
    color: '#FFFFFF',
    backgroundColor: '#00BFA5',
    borderRadius: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
    '&:hover': {
      backgroundColor: '#007ACC',
    },
  },
  imageContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      width: '100%',
    },
  },
  media: {
    width: '80%',
    height: 'auto',
    maxHeight: '600px',
    objectFit: 'cover',
    borderRadius: "10px",
    [theme.breakpoints.down('sm')]: {
      height: '300px',
      maxHeight: '600px',
      width: '80%',
    },
  },
}));

export default About;
