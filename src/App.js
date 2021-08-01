import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { blue, pink } from '@material-ui/core/colors';
import MainScreen from './components/MainScreen';
import CssBaseline from "@material-ui/core/CssBaseline";
import 'typeface-roboto';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import { Fragment } from 'react';

import { webVariant } from './webConfig';

const theme = createMuiTheme({
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
      routeMainScreen = (<Route path='/:githubName/:githubRepository/:gitTag' component={MainScreen} />);
      break;
    default:
      routeMainScreen = (
        <Fragment>
          {/* <Redirect from='/' exact to='/show' /> */}
          <Route exact path="/">
            <Redirect to="/show" />
          </Route>
          <Route path='/show' component={MainScreen} />
        </Fragment>
      );
  }
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <MuiThemeProvider
        theme={theme}>
        <CssBaseline />
        <div className="App">
          <Switch>
            {routeMainScreen}
            {/* <Route path='/:githubName/:githubRepository' component={MainScreen} /> */}
            {/* <Route path='/show' component={MainScreen} />
            <Route path='/show' component={MainScreen} /> */}

            {/* <Route path='/:githubName/:githubRepository' exact>
              exact github path
            </Route>
            <Route path='/:githubName/:githubRepository/:gitTag' exact>
              exact github path with tag
            </Route>
            <Route path='/:githubName/:githubRepository/:gitTag/:content' exac>
              exact github path with tag content
            </Route> */}
          </Switch>
          {/* <MainScreen /> */}
        </div>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
