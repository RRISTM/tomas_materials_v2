import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import MarkdownView from './components/MarkdownView';
import 'typeface-roboto';
import { SnackbarProvider, withSnackbar } from 'notistack';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

const MyMarkdownView = withSnackbar(MarkdownView);

function App() {
  return (
    <MuiThemeProvider
      theme={theme}>

      <div className="App">
        <SnackbarProvider maxSnack={3}>
          <MyMarkdownView />
        </SnackbarProvider>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
