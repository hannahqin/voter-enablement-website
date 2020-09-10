import React, {useEffect, useState, useRef} from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import {MainText, SmallMainText, VoteForText} from './components/MainText';
import Countdown from './components/Countdown';
import ActionButtons from './components/ActionButtons';
import Map from './components/Map';
import StateSelection from './components/StateSelection';
import Commercial from './components/Commercial';
import SocialMedia from './components/SocialMedia';
import { spacing } from '@material-ui/system';
import stateInfo from "./StateInfo.json";

import './App.css';


const useStyles = makeStyles({
  root: {
    fontFamily: 'Libre Franklin !important',
    fontWeight: '100 !important'
  },
});

var theme = createMuiTheme();
theme = responsiveFontSizes(theme);

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 960px
// lg, large: 1280px
// xl, extra-large: 1920px

// main text and countdown text
theme.typography.h3 = {
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.5rem',
  }
};

// share CTA
theme.typography.h4 = {
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2rem',
  }
};

theme.typography.h6 = {
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.5rem',
  }
};

theme.typography.body1 = {
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.8rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.8rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1rem',
  }
};

const callBackendAPI = async () => {
  const response = await fetch('/api/connected');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message) 
  }
  return body;
};
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  

function App() {
  const classes=useStyles();
  const [apiTest, setAPITest] = useState({data: 'TEST'});
  const [selState, setSelState] = useState(stateInfo[0]);

  const refToScroll1 = useRef(null)
  const refToScroll2 = useRef(null)
  const executeScrollTo1 = () => scrollToRef(refToScroll1)
  const executeScrollTo2 = () => scrollToRef(refToScroll2)

  useEffect(() => {
    callBackendAPI()
      .then(res => setAPITest({ data: res.express }))
      .catch(err => console.log(err));
  }, []);

  const changeState = (newState) => {
    console.log('select state', newState);
    setSelState(newState);
  }
   
  return (
    <ThemeProvider theme={theme}>
      <Container id="outerContainer" maxWidth={false} style={{color: 'white', backgroundColor: '#012169'}} >
        <Grid container id="mainTextContainer" style={{height: '100vh'}}>
          <Grid container direction="row" justify="flex-start" alignItems="flex-start">
            <Header />
          </Grid>
          <Grid container alignItems="center">
            <MainText />
          </Grid>
          <Grid container alignItems="flex-end">
            <grid item onClick={executeScrollTo1}>
              <VoteForText />
            </grid>
          </Grid>
        </Grid>
        <Grid container id="countdownActionContainer" style={{ minHeight: '100vh'}} ref={refToScroll1}>
          <Countdown />
          <ActionButtons />
          {/* <Grid item onClick={executeScrollTo2} style={{cursor: "pointer"}}>
            <ArrowDropDownIcon style={{fontSize: '10em'}} />
          </Grid> */}
        </Grid>
        <Grid container id="stateInfoContainer" style={{minHeight: '100vh'}} ref={refToScroll2}>
            <Typography variant="h6">KNOW YOUR STATE'S VOTING DEADLINES</Typography>
            <Map selectedState={selState} />
            <StateSelection changeState={changeState} stateValue={selState} />
        </Grid>
        <Grid container id="shareContainer" style={{minHeight: '100vh'}}>
          <Grid container>
            <Commercial />
          </Grid>
          <Grid container 
            direction="row"
            justify="center"
            alignItems="center"
            style={{marginTop: '4em'}}>
            <SocialMedia  />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
