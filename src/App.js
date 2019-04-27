import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import MarkdownView from './components/MarkdownView';

function App() {
  return (
    <MuiThemeProvider >
      <div className="App">
        <MarkdownView />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
