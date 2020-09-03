import React, {useEffect, useState} from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import MainText from './components/MainText';
import './App.css';

const useStyles = makeStyles({
  root: {
    fontFamily: 'Libre Franklin !important'
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
      <Container maxWidth="false" style={{color: 'white', backgroundColor: 'black', height: '100vh', padding: '16px'}} >
        <Header />
        <MainText />
      </Container>
    </ThemeProvider>
  );
}

export default App;
