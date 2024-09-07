// MyWork.js
import React, { useState } from 'react';
import { makeStyles, Grid, Typography, Dialog, DialogContent, IconButton } from '@material-ui/core';
import ProjectCard from './ProjectCard';
import mockData from '../mock/mockData';
import CloseIcon from '@material-ui/icons/Close';

const MyWork = ({ title, id }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className={classes.section} id={id}>
      <Typography variant="h5" className={classes.title}>
        {title}
      </Typography>
      <Grid container spacing={3} className={classes.grid}>
        {mockData.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              onOpen={() => handleOpen(project)}
            />
          </Grid>
        ))}
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md" // Ajusta el tamaño máximo del popup
        className={classes.dialog}
      >
        <DialogContent>
          <IconButton edge="end" color="inherit" onClick={handleClose} className={classes.closeButton}>
            <CloseIcon />
          </IconButton>
          {selectedProject && (
            <div>
              <Typography variant="h4" className={classes.dialogTitle}>
                {selectedProject.title}
              </Typography>
              <Typography className={classes.dialogDescription}>
                {selectedProject.description}
              </Typography>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

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
    fontSize: '2rem',
    fontFamily: 'Space Grotesk, sans-serif', // Aplica la fuente a todos las letras
    textTransform: 'uppercase', // Convierte la primera letra de cada palabra a mayúscula
  },
  grid: {
    [theme.breakpoints.down('xs')]: {
      margin: '0',
    },
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
  dialogTitle: {
    marginBottom: theme.spacing(2),
  },
  dialogDescription: {
    fontSize: '1rem',
  },
}));

export default MyWork;
