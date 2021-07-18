import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { blue, pink } from '@material-ui/core/colors';
import MainScreen from './components/MainScreen';
import CssBaseline from "@material-ui/core/CssBaseline";
import 'typeface-roboto';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";


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
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <MuiThemeProvider
        theme={theme}>
        <CssBaseline />
        <div className="App">
          <Switch>

            <Route path='/show' component={MainScreen} />
            <Redirect from='/' to='/show' />
          </Switch>
          {/* <MainScreen /> */}
        </div>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
