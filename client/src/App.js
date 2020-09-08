import React, {useEffect, useState} from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, withTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
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

theme.typography.h3 = {
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '5rem',
  },
};

theme.typography.h4 = {
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '3rem',
  },
};

theme.typography.h6 = {
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '4rem',
  },
};

const callBackendAPI = async () => {
  const response = await fetch('/api/connected');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message) 
  }
  return body;
};

function App() {
  const classes=useStyles();
  const [apiTest, setAPITest] = useState({data: 'TEST'});

  useEffect(() => {
    callBackendAPI()
      .then(res => setAPITest({ data: res.express }))
      .catch(err => console.log(err));
  }, []);
   
  return (
    <ThemeProvider theme={theme}>
      <Container id="outerContainer" maxWidth={false} style={{color: 'white', backgroundColor: 'black'}} >
        <Grid container direction="row" justify="flex-start" alignItems="center">
          <Header />
        </Grid>
        <Grid container style={{marginTop: "20vh", minHeight: '100vh'}}>
            <MainText />
            {/* { useMediaQuery('(min-width:600px)') ? (
              <MainText />
            ) :  (<SmallMainText /> ) } */}
            <VoteForText />
        </Grid>
        <Grid container style={{ minHeight: '100vh'}}>
          <Countdown />
          <ActionButtons />
        </Grid>
        <Grid container style={{minHeight: '100vh'}} >
          <Map />
          <StateSelection />
        </Grid>
        <Grid container style={{minHeight: "100vh"}}>
          <Grid container>
            <Commercial />
          </Grid>
          <Grid container 
            direction="row"
            justify="center"
            alignItems="center">
            <SocialMedia />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
