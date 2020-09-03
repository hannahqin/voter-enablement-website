import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import dukeLogo from "./dukeLogoWhite.png";

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 960px
// lg, large: 1280px
// xl, extra-large: 1920px

const useStyles = makeStyles({
    root: {
      fontFamily: 'Factoria',
    },
  });



function Header() {
    const classes=useStyles();
  return (
    <React.Fragment>
        <Grid container spacing={8}>
            <Grid item >
                <img src={dukeLogo} height='50vh' />
            </Grid>
            <Grid item xs={0} >
                <Typography variant="h3" className={classes.root}>Duke Votes</Typography>
            </Grid>
        </Grid>
    </React.Fragment>
  );
}

export default Header;
