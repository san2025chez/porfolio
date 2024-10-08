import React from 'react';
import { makeStyles, Grid, Typography, Dialog, DialogContent, IconButton } from '@material-ui/core';
import { Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { FaHtml5, FaReact, FaNodeJs, FaGitAlt, FaCss3Alt, FaDatabase, FaShoppingCart, FaDesktop } from 'react-icons/fa';
import { GiSettingsKnobs } from 'react-icons/gi';
import { SiTypescript } from 'react-icons/si';
import CloseIcon from '@material-ui/icons/Close';

// Define styles using makeStyles
const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(4),
    backgroundColor: '#1E2A38',
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centra horizontalmente el contenido
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: theme.spacing(4),
    fontSize: '2.0rem',
    fontFamily: 'Space Grotesk, sans-serif',
    textTransform: 'uppercase',
  },
  titles: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: theme.spacing(4),
    fontSize: '1.0rem',
    fontFamily: 'Space Grotesk, sans-serif',
    textTransform: 'uppercase',
  },
  gridContainer: {
    maxWidth: '1200px', // Establece un ancho máximo para mantener el contenido centrado
    width: '100%',
    padding: '0 16px', // Padding horizontal para espacios simétricos
    margin: '0 auto', // Centra el contenedor de la cuadrícula
  },
  cardContainer: {
    padding: '8px',
    textAlign: 'center',
  },
  icon: {
    fontSize: '3rem',
    color: '#0dd6bb;',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.0rem',
    lineHeight: '1.5',
    color: '#FFFF',
    fontFamily: 'Space Grotesk, sans-serif',
    textAlign: 'center',
  },
  dialog: {
    '& .MuiDialog-paper': {
      padding: theme.spacing(2),
    },
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
}));

// Define styled components
const CardStyled = styled(Card)(({ theme }) => ({
  backgroundColor: '#2E3A59',
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
  padding: '16px',
  fontFamily: 'Space Grotesk, sans-serif',
}));

const IconStyled = styled('div')(({ theme }) => ({
  fontSize: '3rem',
  color: "#0dd6bb",
  marginBottom: '1rem',
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '1.0rem',
  lineHeight: '1.5',
  color: 'white',
  textAlign: 'center',
}));

const services = [
  { 
    title: 'Desarrollo de Aplicaciones Web', 
    description: 'Desarrollo aplicaciones web innovadoras y dinámicas que proporcionan una experiencia de usuario excepcional y soluciones eficientes a tus necesidades digitales.', 
    icon: <FaDesktop /> 
  },
  { 
    title: 'Desarrollo de E-Commerce', 
    description: 'Diseño y desarrollo tiendas en línea completas que maximizan las ventas y facilitan una experiencia de compra intuitiva y segura para tus clientes.', 
    icon: <FaShoppingCart /> 
  },
  { 
    title: 'Desarrollo de Landing Pages', 
    description: 'Creo landing pages optimizadas que capturan leads y convierten visitantes en clientes, ayudando a alcanzar tus objetivos de marketing y ventas.', 
    icon: <FaDesktop /> 
  },
  { 
    title: 'Mantenimiento y Soporte Técnico', 
    description: 'Ofrezco servicios de mantenimiento y soporte para asegurar que tus sistemas funcionen sin problemas, incluyendo actualizaciones y solución de problemas.', 
    icon: <GiSettingsKnobs /> 
  },
  { 
    title: 'Formateo e Instalación de Software', 
    description: 'Proporciono servicios completos de formateo, instalación y configuración de software, asegurando que tu equipo esté listo para funcionar de manera óptima.', 
    icon: <FaCss3Alt /> 
  },
  { 
    title: 'Actualización y Optimización de Sistemas', 
    description: 'Realizo actualizaciones y optimizaciones para mejorar el rendimiento de tus sistemas, garantizando que estén al día con las últimas características y correcciones de seguridad.', 
    icon: <SiTypescript /> 
  },
  { 
    title: 'Consultoría en Arquitectura de Software', 
    description: 'Ofrezco asesoramiento experto para diseñar arquitecturas de software robustas y escalables que satisfagan tus necesidades actuales y futuras.', 
    icon: <FaDatabase /> 
  },
];


export const Services = ({ title, id }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState(null);

  const handleOpen = (service) => {
    setSelectedService(service);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedService(null);
  };

  return (
    <div className={classes.section} id={id}>
      <Typography variant="h5" className={classes.title}>
        {title || 'SERVICIOS'}
      </Typography>
      <div className={classes.gridContainer}>
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} className={classes.cardContainer}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
/*                 onClick={() => handleOpen(service)}
 */              >
                <CardStyled>
                  <CardContent>
                    <IconStyled>{service.icon}</IconStyled>
                    <Typography variant="h5" className={classes.titles}>
                      {service.title}
                    </Typography>
                    <Description>
                      {service.description}
                    </Description>
                  </CardContent>
                </CardStyled>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </div>
      {selectedService && (
        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth
          maxWidth="md"
          className={classes.dialog}
        >
          <DialogContent>
            <IconButton edge="end" color="inherit" onClick={handleClose} className={classes.closeButton}>
              <CloseIcon />
            </IconButton>
            <Typography variant="h4" className={classes.title}>
              {selectedService.title}
            </Typography>
            <Typography className={classes.description}>
              {selectedService.description}
            </Typography>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};
