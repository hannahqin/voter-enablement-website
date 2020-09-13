import React, {useState} from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ReactGA from 'react-ga';

import '../App.css';

const useStyles = makeStyles({
  root: {
    fontFamily: 'Libre Franklin !important',
    fontWeight: '500 !important',
    textTransform: 'uppercase !important',
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

const PrimaryButton = withStyles((theme) => ({
  root: {
    color: '#FFFFFF',
    backgroundColor: '#385EB5',
    paddingLeft: '1.5rem',
    paddingRight: '1.5em',
    marginBottom: '1rem',
  },
}))(Button);

const SecondaryButton = withStyles((theme) => ({
  root: {
    color: '#FFFFFF',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    '&:hover': {
      color: '#DDDDDD',
      backgroundColor: 'rgba(0,0,0,0.1)',
    },
    paddingLeft: '1.5rem',
    paddingRight: '1.5em',
    marginBottom: '1rem',
  },
}))(Button);

const theme = createMuiTheme();

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
        <Grid container direction="row" justify="flex-start" alignItems="flex-start">
          <PrimaryButton variant="contained" color="primary" style={{marginRight:"1.5em"}}
            onClick={() => {
              setShowModal(true);
              setActionType('reg');
              ReactGA.event({
                category: 'Vote_Buttons',
                action: 'Register'
              });
            }}
          >
            <Typography variant="h4" className={classes.root} style={{textTransform:'none'}}>Register to Vote</Typography>
          </PrimaryButton>
          <PrimaryButton variant="contained" color="primary" style={{marginRight:"1.5em"}}
            onClick={() => {
              setShowModal(true);
              setActionType('ab');
              ReactGA.event({
                category: 'Vote_Buttons',
                action: 'Absentee'
              });
            }} 
          >
            <Typography variant="h4" className={classes.root} style={{textTransform:'none'}}>Request Absentee Ballot</Typography>
          </PrimaryButton>
          <SecondaryButton variant="outlined" style={{marginRight:"1.5em"}}
            onClick={() => {
              setShowModal(true);
              setActionType('cr');
              ReactGA.event({
                category: 'Vote_Buttons',
                action: 'Check_Status'
              });
            }}
          >
            <Typography variant="h4" className={classes.root} style={{textTransform:'none'}}>Check Registration Status</Typography>
          </SecondaryButton>
        </Grid>
          
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