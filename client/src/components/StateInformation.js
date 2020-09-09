/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles, withTheme, withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import stateInfo from "./StateInfo.json";

const useStyles = makeStyles({
    root: {
      fontFamily: 'Libre Franklin !important',
      fontWeight: '100 !important',
      fontSize: '2em',
    },
  });

export default function StateInformation(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
    <Grid container xs={12} md={12} lg={12}>
      <Grid item style={{width: "100%" }}>
          <Grid item style={{marginBottom: '1em'}}>
            <Typography variant="h6" className={classes.root}> Voter Registration Deadline</Typography>
            <Typography variant="h6" className={classes.root}><strong>{props.selectedState.vrd_inperson}</strong></Typography>
          </Grid>
          <Grid item style={{marginBottom: '1em'}}>
            <Typography variant="h6" className={classes.root}> Absentee Application Deadline</Typography>
            <Typography variant="h6" className={classes.root}><strong>{props.selectedState.abs_app}</strong></Typography>
          </Grid>
          <Grid item style={{marginBottom: '1em'}}>
            <Typography variant="h6" className={classes.root}> Early Voting</Typography>
            <Typography variant="h6" className={classes.root}><strong>{props.selectedState.abs_early}</strong></Typography>
          </Grid>
      </Grid>
    </Grid>
  </React.Fragment>
  );
}
