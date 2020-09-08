import React, {useState} from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import '../App.css';

const useStyles = makeStyles({
  root: {
    fontFamily: 'Libre Franklin !important',
    fontWeight: '100 !important',
  },
  appBar: {
    position: 'relative',
    backgroundColor: 'black',
    color: 'white',
  },
  title: {
    flex: 1,
  },
  paper: {
    backgroundColor: "black",
    boxShadow: "none",
    overflow: "hidden"
  },
});



function ActionButtons() {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState('');
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleClose = (value) => {
    setShowModal(false);
  };

  return (
    <React.Fragment>
        <Grid item   xs={4} md={4} lg={4} className="button-container" 
          onClick={() => {
            setShowModal(true);
            setActionType('reg');
          }} 
        >
            <Typography variant="h6" className={classes.root}>Register to Vote</Typography>
        </Grid>
        <Grid item xs={8} md={8} lg={8}></Grid>
        <Grid item  xs={4} md={4} lg={4} className="button-container" 
          onClick={() => {
            setShowModal(true);
            setActionType('ab');
          }} 
        >
            <Typography variant="h6" className={classes.root}>Request Absentee Ballot</Typography>
        </Grid>
        <Grid item xs={8} md={8} lg={8}></Grid>
        <Grid item  xs={4} md={4} lg={4} className="button-container"
            onClick={() => {
              setShowModal(true);
              setActionType('cr');
            }} 
          >
            <Typography variant="h6" className={classes.root}>Check Registration Status</Typography>
          </Grid>
          <Grid item xs={8} md={8} lg={8}></Grid>
          <Grid item xs={1} md={1} lg={1}></Grid>
          { showModal ? ( 
            <React.Fragment>
              <Dialog fullScreen onClose={handleClose} aria-labelledby="simple-dialog-title" open={showModal} TransitionComponent={Transition} PaperProps ={{
                classes: {
                  root: classes.paper
                }
              }}>
              <AppBar className={classes.appBar}>
                  <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                      <CloseIcon />
                    </IconButton>
                  </Toolbar>
                </AppBar>
                  { actionType===('cr') ? 
                    <iframe src="https://verify.vote.org/?partner=111111&campaign=free-tools" title="Check Registration" width="100%" height="100%" marginheight="0" frameborder="0" id="frame3" scrollable ="no"></iframe>
                  : null }
                  { actionType===('reg') ? 
                    <iframe src="https://register.vote.org/?partner=111111&campaign=free-tools" title="Register" width="100%" height="100%" marginheight="0" frameborder="0" id="frame3" scrollable ="no"></iframe>
                  : null }
                        { actionType===('ab') ? 
                    <iframe src="https://absentee.vote.org/?partner=111111&campaign=free-tools" title="Absentee Ballot" width="100%" height="100%" marginheight="0" frameborder="0" id="frame3" scrollable ="no"></iframe>
                  : null }
            </Dialog>
          </React.Fragment>
          ) : null}
    </React.Fragment>
  );
}
export default ActionButtons;