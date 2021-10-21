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
      routeMainScreen = (
        <Fragment>
          {/* <Route exact path="/:githubName/:githubRepository/"> */}
          <Route path="/:githubName/:githubRepository/" render={(routeProps) => (
            <Redirect to={`/${routeProps.match.params.githubName}/${routeProps.match.params.githubRepository}/master`} />
          )
          } />
          {/* // </Route> */}
          <Route path='/:githubName/:githubRepository/:gitTag' exact component={MainScreen} />
          <Route path='/:githubName/:githubRepository/:gitTag/:fileName' component={MainScreen} />
        </Fragment>
      );
      break;
    default:
      routeMainScreen = (
        <Fragment>
          {/* <Redirect from='/' exact to='/show' /> */}
          <Route exact path="/">
            <Redirect to="/master" />
          </Route>
          <Route path='/:gitTag' exact component={MainScreen} />
          <Route path='/:gitTag/:fileName' component={MainScreen} />
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
            {/* <Route path='/:gitTag' exact>
              exact github path
            </Route>
            <Route path='/:gitTag/:fileName'>
              exact github path with tag
            </Route> */}

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
      </ThemeProvider>
    </Router>
  );
}

export default App;
