import React from "react";
import moment from "moment";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import '../App.css';

const useStyles = makeStyles({
  root: {
    fontFamily: 'Libre Franklin !important',
    fontWeight: '100 !important'
  },
});

function Countdown() {
  const classes=useStyles();

  const DaysLeft = () => {
    const electionDay = moment([2020, 11, 3]);
    const currentDate = moment();
    const timeTo = electionDay.diff(currentDate, 'days');
    return timeTo;
  }

  return (
    <React.Fragment>
        <Grid item>
            <Typography variant="h3">THERE ARE ONLY {moment([2020, 11,3]).diff(moment(), 'days')} DAYS TO NOVEMBER 3RD</Typography>
            <Typography variant="h6" className={classes.root}>Let's make sure your vote will count.</Typography>
        </Grid>
    </React.Fragment>
  );
}

export default Countdown;
