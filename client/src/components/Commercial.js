import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from "react-player";
import '../App.css';

function Commercial() {
  return (
    <React.Fragment>
        <Grid item xs={12} md={12} lg={12}>
          <Typography variant="h3">SHARE #THEBROTHERHOODVOTES</Typography>
          <Typography variant="body1">Make sure your friends are in the know</Typography>
        </Grid>
        <Grid item xs={3} md={2} lg={3}></Grid>
        <Grid item xs={12} md={8} lg={6} style={{marginTop: "5vh"}}>
          <ReactPlayer
            width="100%"  
            height="50vh"
            url="https://www.youtube.com/watch?v=QDH56J2_ZmI"
          />
        </Grid>
        <Grid item xs={0} md={4} lg={6}></Grid>
    </React.Fragment>
  );
}

export default Commercial;
