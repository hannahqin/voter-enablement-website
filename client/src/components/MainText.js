import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import '../App.css';

function MainText() {
  return (
    <React.Fragment>
        <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h3">WE VOTE FOR: <strong>CHANGE </strong> <small>vs. </small>STATUS QUO /</Typography>
            <Typography variant="h3"><strong>HOPE </strong><small>vs.</small> FEAR / <strong>ACTION </strong> <small>vs. </small> TALK / <strong>LOVE </strong> <small>vs. </small>HATE /</Typography>
            <Typography variant="h3"><strong>OPTIMISM </strong><small>vs. </small>PESSIMISM / <strong>UNITY</strong> <small>vs. </small> DIVISION /</Typography>
            <Typography variant="h3"><strong>COMPASSION </strong> <small>vs. </small>NARCISSISM / <strong>JUSTICE </strong> <small>vs. </small>INJUSTICE /</Typography>
            <Typography variant="h3"><strong>OPPORTUNITY </strong><small>vs. </small> OPPRESSION</Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={12} style={{marginTop: "10em"}}>
            <Typography variant="h3">WHAT WILL YOU VOTE FOR?</Typography>
            <Typography variant="p">Make your voting plan here </Typography>
            <ArrowDropDownIcon fontSize="large" />
        </Grid>
    </React.Fragment>
  );
}

export default MainText;
