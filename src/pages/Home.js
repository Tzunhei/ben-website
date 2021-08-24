import { Avatar, Box, Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import Background from '../car_bg.jpeg';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
  main: {
    fontFamily: 'Atkinson Hyperlegible',
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  content: {
    backgroundColor: '#263238',
    color: '#fff',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.main}>
      <Grid item xs={false} md={6} className={classes.image} />
      <Grid item xs={12} md={6} component={Paper} elevation={6} square className={classes.content}>
        <div className={classes.paper}>
          <Avatar sizes='' className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Box my={2}>
            <Typography variant='h3'>Ben moniteur auto école</Typography>
          </Box>
          <Box my={2}>
            <Typography variant='h5' gutterBottom color='secondary'>
              Présentation
            </Typography>
            <Typography paragraph>
              Moniteur auto-école expérimenté propose des cours sur véhicule école à boite manuelle
              ou automatique.
            </Typography>
            <Typography paragraph>
              Doté d une solide expérience de l'enseignement (44 ans) je suis moniteur diplômé
              d'Etat en voiture, moto, groupe lourd. Je donne des cours en véhicule équipé en double
              commande à boîte manuelle ou à boîte automatique.
            </Typography>
            <Typography variant='h5' gutterBottom color='secondary'>
              Tarifs et disponibilités
            </Typography>
            <Typography paragraph>
              Le taux horaire est de 40 € de l'heure pour la boîte mécanique, 45 € pour la boîte
              automatique. (Tarif dégressif pour un pack de 10h)
            </Typography>
            <Typography paragraph>Mes créneaux horaires : du lundi au samedi.</Typography>
            <Typography paragraph>La séance de conduite est de 2H.</Typography>
            <Typography paragraph>
              Le point de rendez-vous est situé au métro porte d'Italie. (6 Boulevard Kellermann,
              Paris 13e)
            </Typography>
            <Typography variant='h5' gutterBottom color='secondary'>
              Méthodologie
            </Typography>
            <Typography paragraph>
              En complément de ma formation sur véhicule, je vous adresserai une série de 70 vidéos
              pour compléter votre formation et un livret de formation pratique. Je vous les offre
              gratuitement.
            </Typography>
            <Typography paragraph>
              En ​espérant​ travailler avec vous très prochainement.
            </Typography>
          </Box>
          <Button
            size='large'
            color='secondary'
            variant='contained'
            target='_blank'
            href='https://www.superprof.fr/moniteur-auto-ecole-experimente-propose-cours-vehicule-ecole-boite-manuelle-automatique-reservation-lecons.html'>
            Me contacter
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Home;
