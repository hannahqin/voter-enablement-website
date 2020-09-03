import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import dukeLogo from "./dukeLogoWhite.png";

import '../App.css';

const useStyles = makeStyles({
    root: {
      fontFamily: 'Factoria',
    },
  });


function Header() {
    const classes=useStyles();
  return (
    <React.Fragment>
        <Grid item >
            <img src={dukeLogo} id="dukeLogo" />
        </Grid>
        <Grid item>
            <Typography variant="h3" className={classes.root} id="dukeLogoText">Duke Votes</Typography>
        </Grid>
    </React.Fragment>
  );
}

export default Header;
