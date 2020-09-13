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
        <Grid container justify="center">
          <Grid item>
            <IconButton href="https://twitter.com/intent/tweet?url=www.thebrotherhoodvotes.us&text=I'm%20ready%20to%20vote.%20Are%20you%3F%20" target="_blank">
              <TwitterIcon className="sm-icon" />
            </IconButton>
          </Grid>
          <Grid item>
              <IconButton href="https://www.facebook.com/sharer/sharer.php?u=www.thebrotherhoodvotes.us" target="_blank">
                <FacebookIcon className="sm-icon" />
              </IconButton>
          </Grid>
          <Grid item>
            <IconButton href="https://www.instagram.com/dukembb" target="_blank">
                <InstagramIcon className="sm-icon" />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} lg={12} xl={12} style={{flexBasis: "auto"}}>
          <Typography variant="body1">Your voice matters. Your vote matters.</Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={12} xl={12} style={{flexBasis: "auto"}}>
          <Typography variant="body1" style={{fontWeight:'500'}}>You can make the difference.</Typography>
        </Grid>
    </React.Fragment>
  );
}

export default SocialMedia;
