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
import stateInfo from "./components/StateInfo.json";
import ReactGA from 'react-ga';

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

// "THE BROTHERHOOD" header
theme.typography.h1 = {
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.3rem',
  }
};

// "your vote matters" in header
theme.typography.subtitle1 = {
  fontWeight: '300',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.7rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.7rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.8rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '0.8rem',
  }
};

// "what will you vote for?" and section headings
theme.typography.h3 = {
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.6rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.7rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2rem',
  }
};

// "Dates and Deadlines for [stateName]"
theme.typography.h4 = {
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.3rem',
  }
};

// Text beneath h3 headings (e.g. "Make sure your friends are in the know")
// Text on action buttons
// State dates/deadlines info
theme.typography.body1 = {
  lineHeight: '150%',
  fontWeight: '100',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.1rem',
  }
};

// "Your voice matters ..." in footer
theme.typography.body2 = {
  lineHeight: '150%',
  fontWeight: '100',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.9rem',
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
  // initialize Google Analytics
  ReactGA.initialize('UA-176303581-1');
  ReactGA.pageview('/');

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
    setSelState(newState);
  }
   
  return (
    <ThemeProvider theme={theme}>
      <Container id="outerContainer" maxWidth={false} style={{color: 'white', backgroundColor: '#012169'}} >
        <Grid container 
          id="mainTextContainer"
          className="sectionContainer"
          justify="space-between"
          style={{height: '100vh'}}
        >
          <Grid container direction="row" justify="flex-start" alignItems="flex-start">
            <Header />
          </Grid>
          <Grid container id="textLoopContainer" alignItems="flex-start">
            <MainText />
          </Grid>
          <Grid container direction="column" justify="center" alignItems="flex-start">
            <VoteForText />
            <ActionButtons />
          </Grid>
        </Grid>
        <Grid container 
          justify="space-around"
          id="stateInfoContainer" 
          className="sectionContainer" 
          ref={refToScroll2}>
            <Countdown />
            <Map selectedState={selState} />
            <StateSelection changeState={changeState} selectedState={selState} />
        </Grid>
        <Grid container id="shareContainer" className="sectionContainer">
          <Grid container>
            <Commercial />
          </Grid>
          <Grid container 
            direction="column"
            justify="flex-end"
            alignItems="center">
            <SocialMedia  />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
