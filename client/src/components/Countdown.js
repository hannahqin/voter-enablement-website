import React from "react";
import moment from "moment";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import countdown from 'countdown';
import momentcountdown from 'moment-countdown';
import '../App.css';

const useStyles = makeStyles({
  root: {
    fontFamily: 'Libre Franklin !important',
    fontWeight: '100 !important'
  },
});

function Countdown() {
  const classes=useStyles();

  return (
    <React.Fragment>
        <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h4" style={{textTransform: "uppercase"}}>THERE ARE ONLY {moment().countdown("2020-11-03", countdown.DAYS, NaN, 0).toString()} TO NOVEMBER 3RD</Typography>
            <Typography variant="h6" className={classes.root}>Let's make sure your vote will count.</Typography>
        </Grid>
    </React.Fragment>
  );
}

export default Countdown;
