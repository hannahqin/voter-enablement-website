import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import dukeLogo from "./dukeLogoWhite.png";

import '../App.css';

const useStyles = makeStyles({
  root: {
    fontFamily: "'Factoria-Bold' !important",
    fontWeight: '700 !important',
  },
  header: {
    position: "fixed",
    background: "#012169",
    zIndex: "10",
  }
});


function Header() {
  const classes=useStyles();
  return (
    <React.Fragment>
        <Grid container className={classes.header} direction="row" justify="flex-start" alignItems="center">
            <Grid item style={{marginTop: "0.8em", marginBottom: "0.4em"}}>
                <img src={dukeLogo} id="dukeLogo" alt="The Brotherhood Logo" />
            </Grid>
            <Grid item>
              <Grid container direction="column" justify="center" alignItems="flex-start">
                  <Typography variant="h1" id="dukeLogoText" className={classes.root}>THE BROTHERHOOD</Typography>
                  <Typography variant="subtitle1" style={{marginTop:"0.1em"}}>Your Vote Matters</Typography>
              </Grid>
            </Grid>
        </Grid>
    </React.Fragment>
  );
}

export default Header;
