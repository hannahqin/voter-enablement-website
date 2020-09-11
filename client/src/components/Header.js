import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import dukeLogo from "./dukeLogoWhite.png";

import '../App.css';

const useStyles = makeStyles({
  root: {
    fontFamily: "'Factoria' !important",
    fontWeight: '700 !important',
  },
});


function Header() {
  const classes=useStyles();
  return (
    <React.Fragment>
        <Grid container direction="row" justify="flex-start" alignItems="center" style={{marginTop: "1em"}}>
            <Grid item>
                <img src={dukeLogo} id="dukeLogo" />
            </Grid>
            <Grid item>
              <Grid container direction="column" justify="center" alignItems="flex-start">
                  <Typography variant="h5" id="dukeLogoText" className={classes.root}>THE BROTHERHOOD</Typography>
                  <Typography variant="subtitle1" style={{marginTop:"0.1em"}}>Your Vote Matters</Typography>
              </Grid>
            </Grid>
        </Grid>
    </React.Fragment>
  );
}

export default Header;
