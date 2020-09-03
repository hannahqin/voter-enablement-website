import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import '../App.css';

const useStyles = makeStyles({
    root: {
      fontFamily: 'Libre Franklin !important',
      fontWeight: '100 !important'
    },
  });

export function MainText() {
    const classes=useStyles();

  return (
    <React.Fragment>
        <Grid item xs={12} md={12} lg={12} className="text-container">
            <Typography variant="h3" className={classes.root}><strong>WE VOTE FOR CHANGE </strong> <small>vs. </small>STATUS QUO /</Typography>
            <Typography variant="h3" className={classes.root}><strong>HOPE </strong><small>vs.</small> FEAR / <strong>ACTION </strong> <small>vs. </small> TALK / <strong>LOVE </strong> <small>vs. </small>HATE /</Typography>
            <Typography variant="h3" className={classes.root}><strong>OPTIMISM </strong><small>vs. </small>PESSIMISM / <strong>UNITY</strong> <small>vs. </small> DIVISION /</Typography>
            <Typography variant="h3" className={classes.root}><strong>COMPASSION </strong> <small>vs. </small>NARCISSISM / <span style={{color: "#003399"}}><strong>JUSTICE</strong> </span> <small>vs. </small>INJUSTICE /</Typography>
            <Typography variant="h3" className={classes.root}><strong>OPPORTUNITY </strong><small>vs. </small> OPPRESSION</Typography>
        </Grid>
    </React.Fragment>
  );
}

export function SmallMainText() {
    const classes=useStyles();

  return (
    <React.Fragment>
        <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h3" className={classes.root}><strong>WE VOTE FOR </strong></Typography>
            <Typography variant="h3" className={classes.root}><strong>CHANGE </strong> <small>vs. </small>STATUS QUO /</Typography>
            <Typography variant="h3" className={classes.root}><strong>HOPE </strong><small>vs.</small> FEAR / <strong>ACTION </strong> <small>vs. </small> TALK / </Typography>
            <Typography variant="h3" className={classes.root}><strong>LOVE </strong> <small>vs. </small>HATE /</Typography>
            <Typography variant="h3" className={classes.root}><strong>OPTIMISM </strong><small>vs. </small>PESSIMISM / </Typography>
            <Typography variant="h3" className={classes.root}><span style={{color: "#003399"}}><strong>JUSTICE</strong> </span> <small>vs. </small>INJUSTICE /</Typography>
            <Typography variant="h3" className={classes.root}><strong>UNITY</strong> <small>vs. </small> DIVISION /</Typography>
            <Typography variant="h3" className={classes.root}><strong>COMPASSION </strong> <small>vs. </small>NARCISSISM / </Typography>
            <Typography variant="h3" className={classes.root}><strong>OPPORTUNITY </strong><small>vs. </small> OPPRESSION</Typography>
        </Grid>
    </React.Fragment>
  );
}

export function VoteForText() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid item xs={12} md={12} lg={12}>
                <Typography variant="h3"><strong>WHAT WILL YOU VOTE FOR?</strong></Typography>
                <Typography variant="h6" className={classes.root}>Make your voting plan here</Typography>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
                <ArrowDropDownIcon className="arrow-icon" />
            </Grid>
        </React.Fragment>
    )
}