/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import stateInfo from './StateInfo.json';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    width: '100%',
  },
  input: {
    color: 'white',
    backgroundColor: 'lightgrey',
    width: '100%'
  }
}));

export default function StateSelection() {
  const classes = useStyles();

  return (
    <Grid container xs={5} md={5} lg={5} className="button-container">
      <Grid item style={{marginTop:"5vh", width: "100%"}}>
      <Autocomplete
        id="combo-box-demo"
        options={stateInfo}
        getOptionLabel={(option) => option.state}
        style={{ width: '100%' }}
        InputProps={{
          className: classes.root,
      }}
        renderInput={(params) => <TextField {...params} label="Select State" className={classes.input} />}
      />
        </Grid>
      </Grid>
  );
}