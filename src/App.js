import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import MarkdownView from './components/MarkdownView';
import 'typeface-roboto';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

function App() {
  return (
    <MuiThemeProvider
      theme={theme}>

      <div className="App">
        <MarkdownView />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
