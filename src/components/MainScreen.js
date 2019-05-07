import React, { Component, Fragment } from 'react';

import MarkdownView from './MarkdownView';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { SnackbarProvider, withSnackbar } from 'notistack';
//develop
import mdDevelop from '../CubeMXImport.md';
const filesToLoadArr = [
  {
    name: 'CubeMX Import',
    //production
    // path: '/markdown/CubeMXImport.md',
    //develop
    path: mdDevelop,
  }
  // {
  //   name: 'QSPI',
  //   path: '/markdown/QSPI.md',
  // }
];

// var mdContent =[];

export class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { mdFilesContent: [] };
  }

  componentWillMount() {
    var mdFilesContent = [];

    let requests = filesToLoadArr.map(value => {
      return fetch(value.path).then((response) => response.text()).then((text) => {
        let preparedContent = { name: value.name, mdContent: text }
        mdFilesContent.push(preparedContent);

      });
    });

    Promise.all(requests).then(() => {
      this.setState({ mdFilesContent: mdFilesContent });
    });

  }

  render() {
    const MyMarkdownView = withSnackbar(MarkdownView);
    var mdFileToShow = {};
    if (this.state.mdFilesContent.length == 0) {
      mdFileToShow.name = "Loading";
      mdFileToShow.mdContent = "";
    }
    else if (this.state.mdFilesContent.length == 1) {
      mdFileToShow = this.state.mdFilesContent[0];
    } else {
      console.log('Multiple files is not implemented yet');
    }
    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              {mdFileToShow.name}
            </Typography>
          </Toolbar>
        </AppBar>
        <SnackbarProvider maxSnack={3}>
          <MyMarkdownView mdContent={mdFileToShow.mdContent} />
        </SnackbarProvider>
      </Fragment>
    )
  }
}

export default MainScreen
