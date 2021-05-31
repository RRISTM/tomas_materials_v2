import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { blue, pink } from '@material-ui/core/colors';
import MainScreen from './components/MainScreen';
import 'typeface-roboto';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";


const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Arial'
    ].join(','),
    color: '#39A9DC'
  },
  palette: {
    primary: blue,
    secondary: pink,
  }
});



function App() {
  return (
    <Router>
      <MuiThemeProvider
        theme={theme}>

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
