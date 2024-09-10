import React from 'react';
import { Card, CardContent, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import { FaHtml5, FaReact, FaNodeJs, FaGitAlt, FaCss3Alt, FaDatabase, FaShoppingCart, FaDesktop } from 'react-icons/fa';
import { GiSettingsKnobs } from 'react-icons/gi';
import { SiTypescript } from 'react-icons/si';

// Definición de estilos con styled-components
const CardStyled = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
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
  margin: '10px',
  padding: '16px',
}));

const IconStyled = styled('div')(({ theme }) => ({
  fontSize: '3rem',
  color: theme.palette.secondary.main,
  marginBottom: '1rem',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: '2rem',
  fontWeight: 'bold',
  color: theme.palette.primary.contrastText,
  marginBottom: '32px',
  textTransform: 'uppercase',
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  lineHeight: '1.5',
  color: theme.palette.text.secondary,
  textAlign: 'center',
}));

const ServicesContainer = styled('div')(({ theme }) => ({
  padding: '24px',
  backgroundColor: theme.palette.background.default,
  minHeight: '100vh',
}));

const cardContainerStyle = {
  padding: '8px',
  textAlign: 'center',
};

const services = [
  { title: 'Desarrollo de Aplicaciones Web', description: 'Creamos aplicaciones web innovadoras y dinámicas que proporcionan una experiencia de usuario excepcional y soluciones eficientes a tus necesidades digitales.', icon: <FaDesktop /> },
  { title: 'Desarrollo de E-Commerce', description: 'Diseñamos y desarrollamos tiendas en línea completas que maximizan las ventas y facilitan una experiencia de compra intuitiva y segura para tus clientes.', icon: <FaShoppingCart /> },
  { title: 'Desarrollo de Landing Pages', description: 'Creamos landing pages optimizadas que capturan leads y convierten visitantes en clientes, ayudando a alcanzar tus objetivos de marketing y ventas.', icon: <FaHtml5 /> },
  { title: 'Mantenimiento y Soporte Técnico', description: 'Ofrecemos servicios de mantenimiento y soporte para asegurar que tus sistemas funcionen sin problemas, incluyendo actualizaciones y solución de problemas.', icon: <GiSettingsKnobs /> },
  { title: 'Formateo e Instalación de Software', description: 'Proporcionamos servicios completos de formateo, instalación y configuración de software, asegurando que tu equipo esté listo para funcionar de manera óptima.', icon: <FaCss3Alt /> },
  { title: 'Actualización y Optimización de Sistemas', description: 'Realizamos actualizaciones y optimizaciones para mejorar el rendimiento de tus sistemas, garantizando que estén al día con las últimas características y correcciones de seguridad.', icon: <SiTypescript /> },
  { title: 'Consultoría en Arquitectura de Software', description: 'Ofrecemos asesoramiento experto para diseñar arquitecturas de software robustas y escalables que satisfagan tus necesidades actuales y futuras.', icon: <FaDatabase /> },
];

export const Services = ({ title, id }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ServicesContainer id={id}>
      <SectionTitle variant="h5">
        {title || 'SERVICIOS'}
      </SectionTitle>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={cardContainerStyle}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <CardStyled>
                <CardContent>
                  <IconStyled>{service.icon}</IconStyled>
                  <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 2 }}>
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
    </ServicesContainer>
  );
};
