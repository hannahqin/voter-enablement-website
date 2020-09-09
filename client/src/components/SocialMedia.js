import React from "react";
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

import '../App.css';

function SocialMedia() {
  return (
    <React.Fragment>
        <Grid item >
          <IconButton>
              <InstagramIcon className="sm-icon" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <TwitterIcon className="sm-icon" />
          </IconButton>
        </Grid>
        <Grid item>
            <IconButton>
              <FacebookIcon className="sm-icon" />
            </IconButton>
        </Grid>
        <Grid item xs={12} md={12} lg={12} xl={12} >
          <Typography variant="body1" style={{textAlign:"center", margin:"0px", padding:"0px"}}>Your voice matters. Your vote matters.</Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={12} xl={12} >
          <Typography variant="body1" style={{textAlign:"center", margin:"0px", padding:"0px"}}><strong>You can make the difference.</strong></Typography>
        </Grid>
    </React.Fragment>
  );
}

export default SocialMedia;
