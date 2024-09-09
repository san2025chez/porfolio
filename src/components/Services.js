import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { motion } from 'framer-motion';
import { FaHtml5, FaReact, FaNodeJs, FaGitAlt, FaCss3Alt, FaTachometerAlt, FaDatabase, FaShoppingCart, FaDesktop } from 'react-icons/fa';
import { GiSettingsKnobs } from 'react-icons/gi';
import { SiTypescript } from 'react-icons/si';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

// Define estilos con makeStyles
const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: '#2E3A59', // Color de fondo de la tarjeta
    color: '#FFFFFF',
    borderRadius: '16px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.4)',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%', 
    margin: '10px',
    padding: '16px',
    fontFamily: 'Space Grotesk, sans-serif',
  },
  title: {
    fontSize: '2rem',
    textAlign:'center',
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 'bold',
    margin: '0.5rem 0 32px',
    color: '#00BFA5',
  },
  description: {
    fontSize: '0.9rem',
    lineHeight: '1.5',
    color: 'black',
    fontFamily:'Space Grotesk, sans-serif',
    textAlign: 'center',
  },
  icon: {
    fontSize: '3rem',
    color: '#00BFA5',
    marginBottom: '1rem',
  },
  box: {
    padding: '24px',
    backgroundColor: '#1E2A38',
    minHeight: '100vh',
  },
  cardContainer: {
    padding: '8px',
    textAlign: 'center',
    flex: '1 1 0',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2rem',
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 'bold',
    color:'white',
    marginBottom: '32px',
    textTransform: 'uppercase',
  }
}));

const services = [
  { title: 'Desarrollo de Aplicaciones Web', description: 'Creamos aplicaciones web innovadoras y dinámicas que proporcionan una experiencia de usuario excepcional y soluciones eficientes a tus necesidades digitales.', icon: <FaDesktop /> },
  { title: 'Desarrollo de E-Commerce', description: 'Diseñamos y desarrollamos tiendas en línea completas que maximizan las ventas y facilitan una experiencia de compra intuitiva y segura para tus clientes.', icon: <FaShoppingCart /> },
  { title: 'Desarrollo de Landing Pages', description: 'Creamos landing pages optimizadas que capturan leads y convierten visitantes en clientes, ayudando a alcanzar tus objetivos de marketing y ventas.', icon: <FaHtml5 /> },
  { title: 'Mantenimiento y Soporte Técnico', description: 'Ofrecemos servicios de mantenimiento y soporte para asegurar que tus sistemas funcionen sin problemas, incluyendo actualizaciones y solución de problemas.', icon: <GiSettingsKnobs /> },
  { title: 'Formateo e Instalación de Software', description: 'Proporcionamos servicios completos de formateo, instalación y configuración de software, asegurando que tu equipo esté listo para funcionar de manera óptima.', icon: <FaCss3Alt /> },
  { title: 'Actualización y Optimizacin de Sistemas', description: 'Realizamos actualizaciones y optimizaciones para mejorar el rendimiento de tus sistemas, garantizando que estén al día con las últimas características y correcciones de seguridad.', icon: <SiTypescript /> },
  { title: 'Consultoría en Arquitectura de Software', description: 'Ofrecemos asesoramiento experto para diseñar arquitecturas de software robustas y escalables que satisfagan tus necesidades actuales y futuras.', icon: <FaDatabase /> },
];

export const Services = ({ title, id }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
console.log("ingreso a servicios");
  return (

    <div className={classes.box} id={id}>
      <Typography variant="h5" className={classes.sectionTitle}>
        {title || 'SERVICIOS'}
      </Typography>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} className={classes.cardContainer}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Card className={classes.card}>
                <CardContent>
                  <div className={classes.icon}>{service.icon}</div>
                  <Typography variant="h5" className={classes.title}>
                    {service.title}
                  </Typography>
                  <Typography className={classes.description}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
