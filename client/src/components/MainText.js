import React, {useRef} from "react";
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
        <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h4" className={classes.root}>WE VOTE FOR: <strong>CHANGE </strong> <small>vs. </small>STATUS QUO /</Typography>
            <Typography variant="h4" className={classes.root}><strong>HOPE </strong><small>vs.</small> FEAR / <strong>ACTION </strong> <small>vs. </small> TALK / <strong>LOVE </strong> <small>vs. </small>HATE /</Typography>
            <Typography variant="h4" className={classes.root}><strong>OPTIMISM </strong><small>vs. </small>PESSIMISM / <strong>UNITY</strong> <small>vs. </small> DIVISION /</Typography>
            <Typography variant="h4" className={classes.root}><strong>COMPASSION </strong> <small>vs. </small>NARCISSISM / <strong>JUSTICE </strong><small>vs. </small>INJUSTICE /</Typography>
            <Typography variant="h4" className={classes.root}><strong>OPPORTUNITY </strong><small>vs. </small> OPPRESSION</Typography>
        </Grid>
    </React.Fragment>
  );
}

export function SmallMainText() {
    const classes=useStyles();

  return (
    <React.Fragment>
        <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h4" className={classes.root}>WE VOTE FOR:</Typography>
            <Typography variant="h4" className={classes.root}><strong>CHANGE </strong> <small>vs. </small>STATUS QUO /</Typography>
            <Typography variant="h4" className={classes.root}><strong>HOPE </strong><small>vs.</small> FEAR / <strong>ACTION </strong> <small>vs. </small> TALK / </Typography>
            <Typography variant="h4" className={classes.root}><strong>LOVE </strong> <small>vs. </small>HATE /</Typography>
            <Typography variant="h4" className={classes.root}><strong>OPTIMISM </strong><small>vs. </small>PESSIMISM / </Typography>
            <Typography variant="h4" className={classes.root}><strong>JUSTICE </strong><small>vs. </small>INJUSTICE /</Typography>
            <Typography variant="h4" className={classes.root}><strong>UNITY</strong> <small>vs. </small> DIVISION /</Typography>
            <Typography variant="h4" className={classes.root}><strong>COMPASSION </strong> <small>vs. </small>NARCISSISM / </Typography>
            <Typography variant="h4" className={classes.root}><strong>OPPORTUNITY </strong><small>vs. </small> OPPRESSION</Typography>
        </Grid>
    </React.Fragment>
  );
}

export function VoteForText() {
    const classes = useStyles();
    
    return (
        <React.Fragment>
            <Grid item xs={12} md={12} lg={12} style={{flexBasis: 'auto', paddingBottom: '1.2em'}}>
                <Typography variant="h3"><strong>WHAT WILL YOU VOTE FOR?</strong></Typography>
                <Typography variant="h6">Let's make sure your vote counts <span><ArrowDropDownIcon style={{fontSize: "1em"}}/></span></Typography>
            </Grid>
        </React.Fragment>
    )
}