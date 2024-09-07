import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { motion } from 'framer-motion';
import { FaHtml5, FaReact, FaNodeJs, FaGitAlt, FaCss3Alt, FaTachometerAlt, FaDatabase, FaShoppingCart, FaDesktop } from 'react-icons/fa';
import { GiSettingsKnobs } from 'react-icons/gi';
import { SiTypescript } from 'react-icons/si';

// Define estilos con makeStyles
const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: '#1E2A38',
    color: '#FFFFFF',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%', // Asegura que las tarjetas tengan el mismo tamaño
    fontFamily: 'Space Grotesk, sans-serif', // Aplica la fuente a las tarjetas
    margin: '5px', // Añade espacio adicional entre las tarjetas y los bordes de la ventana
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#00BFA5',
    fontFamily: 'Space Grotesk, sans-serif', // Aplica la fuente a los títulos
  },
  description: {
    fontSize: '0.9rem', // Reducido un punto de tamaño
    lineHeight: '1.6',
    fontFamily: 'Space Grotesk, sans-serif', // Aplica la fuente a las descripciones
    style: { 
      fontSize: '15px', // Reducido un punto de tamaño
      color: '#FFFFFF', 
      textAlign: 'justify', 
      fontFamily: 'Space Grotesk, sans-serif' // Aplica la fuente a todos las letras
    },
  },
  icon: {
    fontSize: '3rem',
    color: '#00BFA5',
    margin: 'auto',
    display: 'block',
    fontFamily: 'Space Grotesk, sans-serif', // Aplica la fuente a los iconos
  },
  box: {
    padding: '16px 22px', // Añade espacio adicional a los lados izquierdo y derecho
    backgroundColor: '#1E2A38',
    minHeight: '100vh',
    fontFamily: 'Space Grotesk, sans-serif', // Aplica la fuente al contenedor
  },
  cardContainer: {
    padding: '8px',
    textAlign: 'center',
    flex: '1 1 0', // Permite que las tarjetas se ajusten al tamaño del contenedor
    fontFamily: 'Space Grotesk, sans-serif', // Aplica la fuente al contenedor de tarjetas
  },
  sectionTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: '2rem', // Ajustado a un valor numérico
    fontSize: '2rem',
    fontFamily: 'Space Grotesk, sans-serif', // Aplica la fuente a los títulos de sección
    textTransform: 'uppercase',
    color: '#FFFFFF',
    marginTop: '2rem', // Ajustado a un valor numérico
  },
  serviciosTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '2rem',
    fontFamily: 'Space Grotesk, sans-serif', // Aplica la fuente a los títulos de servicios
    textTransform: 'uppercase',
    color: '#FFFFFF',
    marginBottom: '2rem', // Ajustado a un valor numérico
  },
  // Estilos adicionales para el título "Servicios"
  servicios: {
    fontSize: '2rem',
    textAlign: 'center',
    fontFamily: 'Space Grotesk, sans-serif', // Aplica la fuente al título "Servicios"
    fontWeight: 'bold',
    marginBottom: '32px',
    textTransform: 'uppercase',
  },
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

const Services = ({title,id}) => {
  const classes = useStyles();

  return (
    <div className={classes.section} id={id}>
    <div className={classes.box}>
      <Typography variant="h2" style={{ 
        fontSize: '2rem', 
        textAlign: 'center', 
        fontFamily: 'Space Grotesk, sans-serif', 
        fontWeight: 'bold',
        color:'white', 
        marginBottom: '32px', 
        textTransform: 'uppercase' 
      }}>
        SERVICIOS
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
                  <Typography variant="body2" style={{ 
                    fontSize: '19px', // Reducido un punto de tamaño
                    color: 'black', 
                    textAlign: 'left', 
                    fontFamily: 'Space Grotesk, sans-serif' // Aplica la fuente a todos las letras
                  }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
    </div>
  );
};

export default Services;
