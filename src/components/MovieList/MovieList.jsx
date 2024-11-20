import React from 'react';
import { Grid } from '@mui/material';

import useStyles from './styles.js';
import Movie from '../Movie/Movie';

const MovieList = ({ movies }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.moviesContainer}>
      {movies.map((movie, i) => (
        <Movie key={movie.id || i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;
