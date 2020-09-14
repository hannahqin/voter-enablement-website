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
        <Grid container justify="center">
          <Grid item xs={12} md={8} lg={8}>
            <div className="videoWrapper">
              <ReactPlayer
                className="videoPlayer"
                url="https://www.youtube.com/watch?v=QDH56J2_ZmI"
                width='100%'
                height='100%'
              />
            </div>
          </Grid>
        </Grid>
    </React.Fragment>
  );
}

export default Commercial;
