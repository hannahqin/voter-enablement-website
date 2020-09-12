import React, {useRef} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextLoop from "react-text-loop";
import '../App.css';

const useStyles = makeStyles({
    root: {
      fontFamily: 'Libre Franklin !important',
      fontWeight: '100 !important',
      width:'90vw',
    },
  });

export function MainText() {
    const classes=useStyles();

  return (
    <React.Fragment>
        <Grid item xs={12} md={12} lg={12}>
          <Typography variant="h6" style={{fontWeight:'400', width:'100%'}}>WE VOTE FOR</Typography>
          <TextLoop interval='1500' noWrap={false} mask={true}>
            <Typography variant="h2" className={classes.root}><strong>CHANGE </strong> <small>vs. </small>STATUS QUO</Typography>
            <Typography variant="h2" className={classes.root}><strong>HOPE </strong> <small>vs. </small>FEAR</Typography>
            <Typography variant="h2" className={classes.root}><strong>ACTION </strong> <small>vs. </small>TALK</Typography>
            <Typography variant="h2" className={classes.root}><strong>LOVE </strong> <small>vs. </small>HATE</Typography>
            <Typography variant="h2" className={classes.root}><strong>IMPROVEMENT </strong> <small>vs. </small>NEGLECT</Typography>
            <Typography variant="h2" className={classes.root}><strong>OPTIMISM </strong> <small>vs. </small>PESSIMISM</Typography>
            <Typography variant="h2" className={classes.root}><strong>COMPASSION </strong> <small>vs. </small>NARCISSISM</Typography>
            <Typography variant="h2" className={classes.root}><strong>UNITY </strong> <small>vs. </small>DIVISION</Typography>
            <Typography variant="h2" className={classes.root}><strong>OPPORTUNITY </strong> <small>vs. </small>OPPRESSION</Typography>
            <Typography variant="h2" className={classes.root}><strong>GROWTH </strong> <small>vs. </small>STAGNATION</Typography>
            <Typography variant="h2" className={classes.root}><strong>JUSTICE </strong> <small>vs. </small>INJUSTICE</Typography>
          </TextLoop>
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
            </Grid>
        </React.Fragment>
    )
}