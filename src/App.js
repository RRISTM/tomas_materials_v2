import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import {blue,pink} from '@material-ui/core/colors';
import MainScreen from './components/MainScreen';
import 'typeface-roboto';


const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Arial'
    ].join(','),
    color:'#39A9DC'
  },
  palette: {
    primary: blue,
    secondary: pink,
  }
});



function App() {
  return (
    <MuiThemeProvider
      theme={theme}>

      <div className="App">
        <MainScreen />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
