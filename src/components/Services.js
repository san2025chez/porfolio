import React from 'react';
import { makeStyles, Grid, Typography, Dialog, DialogContent, IconButton } from '@material-ui/core';
import { Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { FaHtml5, FaReact, FaNodeJs, FaGitAlt, FaCss3Alt, FaTachometerAlt, FaDatabase, FaShoppingCart, FaDesktop } from 'react-icons/fa';
import { GiSettingsKnobs } from 'react-icons/gi';
import { SiTypescript } from 'react-icons/si';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(4),
    backgroundColor: '#1E2A38',
    color: '#FFFFFF',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: theme.spacing(4),
    fontSize: '2.5rem',
    fontFamily: 'Space Grotesk, sans-serif',
    textTransform: 'uppercase',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: theme.spacing(4),
    fontSize: '1.5rem',
    fontFamily: 'Space Grotesk, sans-serif',
    textTransform: 'uppercase',
  },
  grid: {
    [theme.breakpoints.down('xs')]: {
      margin: '0',
    },
  },
  card: {
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
  },
  cardContainer: {
    padding: '8px',
    textAlign: 'center',
  },
  icon: {
    fontSize: '3rem',
    color: '#00BFA5',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.0rem',
    lineHeight: '1.5',
    color: 'black',
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

const services = [
  { titles: 'Desarrollo de Aplicaciones Web', description: 'Creamos aplicaciones web innovadoras y dinámicas que proporcionan una experiencia de usuario excepcional y soluciones eficientes a tus necesidades digitales.', icon: <FaDesktop /> },
  { titles: 'Desarrollo de E-Commerce', description: 'Diseñamos y desarrollamos tiendas en línea completas que maximizan las ventas y facilitan una experiencia de compra intuitiva y segura para tus clientes.', icon: <FaShoppingCart /> },
  { titles: 'Desarrollo de Landing Pages', description: 'Creamos landing pages optimizadas que capturan leads y convierten visitantes en clientes, ayudando a alcanzar tus objetivos de marketing y ventas.', icon: <FaHtml5 /> },
  { titles: 'Mantenimiento y Soporte Técnico', description: 'Ofrecemos servicios de mantenimiento y soporte para asegurar que tus sistemas funcionen sin problemas, incluyendo actualizaciones y solución de problemas.', icon: <GiSettingsKnobs /> },
  { titles: 'Formateo e Instalación de Software', description: 'Proporcionamos servicios completos de formateo, instalación y configuración de software, asegurando que tu equipo esté listo para funcionar de manera óptima.', icon: <FaCss3Alt /> },
  { titles: 'Actualización y Optimizacin de Sistemas', description: 'Realizamos actualizaciones y optimizaciones para mejorar el rendimiento de tus sistemas, garantizando que estén al día con las últimas características y correcciones de seguridad.', icon: <SiTypescript /> },
  { titles: 'Consultoría en Arquitectura de Software', description: 'Ofrecemos asesoramiento experto para diseñar arquitecturas de software robustas y escalables que satisfagan tus necesidades actuales y futuras.', icon: <FaDatabase /> },
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
      <Grid container spacing={3} className={classes.grid}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} lg={3} key={index} className={classes.cardContainer}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleOpen(service)}
            >
              <Card className={classes.card}>
                <CardContent>
                  <div className={classes.icon}>{service.icon}</div>
                  <Typography variant="h5" className={classes.titles}>
                    {service.titles}
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
