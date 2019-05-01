import React, { Component, Fragment } from 'react';

import MarkdownView from './MarkdownView';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { SnackbarProvider, withSnackbar } from 'notistack';

export class MainScreen extends Component {
  render() {
    const MyMarkdownView = withSnackbar(MarkdownView);
    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              QSPI
          </Typography>
          </Toolbar>
        </AppBar>
        <SnackbarProvider maxSnack={3}>
          <MyMarkdownView />
        </SnackbarProvider>
      </Fragment>
    )
  }
}

export default MainScreen
