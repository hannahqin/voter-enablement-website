import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import '../App.css';

function Map() {
  return (
    <React.Fragment>
        <Grid item xs={6} md={6} lg={6}>
            <Typography variant="h1">Map</Typography>
        </Grid>
    </React.Fragment>
  );
}

export default Map;
