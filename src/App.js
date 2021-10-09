import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blue, pink } from '@mui/material/colors';
import MainScreen from './components/MainScreen';
import CssBaseline from "@mui/material/CssBaseline";
import 'typeface-roboto';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import { Fragment } from 'react';

import { webVariant } from './webConfig';

const theme = createTheme({
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Roboto', 'Arial'
    ].join(',')
  },
  palette: {
    primary: blue,
    secondary: pink,
    text: {
      primary: '#002052'
    }
  }
});



function App() {
  let routeMainScreen;
  switch (webVariant) {
    case 'addressFetch':
      routeMainScreen = (<Route path='/:githubName/:githubRepository' component={MainScreen} />);
      break;
    default:
      routeMainScreen = (
        <Fragment>
          <Route path='/show' component={MainScreen} />);
          <Redirect from='/' to='/show' />
        </Fragment>
      );
  }
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ThemeProvider
        theme={theme}>
        <CssBaseline />
        <div className="App">
          <Switch>
            {routeMainScreen}
            {/* <Route path='/:githubName/:githubRepository' component={MainScreen} /> */}
            {/* <Route path='/show' component={MainScreen} />
            <Route path='/show' component={MainScreen} /> */}

          </Switch>
          {/* <MainScreen /> */}
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
