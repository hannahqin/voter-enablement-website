import React, {useEffect, useState} from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import MainText from './components/MainText';
import Countdown from './components/Countdown';
import ActionButtons from './components/ActionButtons';
import Map from './components/Map';
import StateSelection from './components/StateSelection';
import Commercial from './components/Commercial';
import SocialMedia from './components/SocialMedia';

import './App.css';

const useStyles = makeStyles({
  root: {
    fontFamily: 'Libre Franklin !important',
    fontWeight: '100 !important'
  },
});


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

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
      <Container maxWidth="false" style={{color: 'white', backgroundColor: 'black', height: '100vh', padding: '8em'}} >
        <Grid container spacing="8" style={{height: '10vh'}}>
          <Header />
        </Grid>
        <Grid container spacing="8" style={{height: '80vh', marginTop: '15em'}}>
          <MainText />
        </Grid>
        <Grid container>
          <Countdown />
        </Grid>
        <Grid container>
          <ActionButtons />
        </Grid>
        <Grid container>
          <Map />
        </Grid>
        <Grid container>
          <StateSelection />
        </Grid>
        <Grid container>
          <Commercial />
        </Grid>
        <Grid container>
          <SocialMedia />
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
