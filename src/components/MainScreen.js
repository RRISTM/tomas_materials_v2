import React, { Component } from 'react';

import MarkdownView from './MarkdownView';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { SnackbarProvider, withSnackbar } from 'notistack';
import DrawerMenu from './DrawerMenu';
import { withStyles } from '@material-ui/core/styles';
//develop
// import mdDevelop from '%PUBLIC_URL%/markdown/CubeMXImport.md';
const filesToLoadArr = [
  {
    name: 'CubeMX Import',
    //production
    path: '/markdown',
    file: 'CubeMXImport.md',
    // develop
    // path: mdDevelop,
  }
  // {
  //   name: 'QSPI',
  //   path: '/markdown/QSPI.md',
  // }
];

const menuStructure =
  [
    {
      type: 'Folder',
      name: 'CubeMX basics',
      children:
        [
          {
            type: 'File',
            name: 'CubeMX Import'
          }
        ]
    },
    {
      type: 'File',
      name: 'About CubeMX'
  
    },
    {
      type: 'Folder',
      name: 'CubeMX More Folders',
      children:
        [
          {
            type: 'File',
            name: 'CubeMX Import'
          },
          {
            type: 'Folder',
            name: 'Nested',
            children:
            [
              {
                type: 'File',
                name: 'Nested item'
              },
              {
                type: 'Folder',
                name: 'Nested more nested',
                children:
                [
                  {
                    type: 'File',
                    name: 'More nested item'
                  },
                  
                ]
              }
            ]
          }
        ]
    }
  ];

// var mdContent =[];
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { mdFilesContent: [] };
  }

  componentWillMount() {
    var mdFilesContent = [];

    let requests = filesToLoadArr.map(value => {
      return fetch(value.path + "/" + value.file).then((response) => response.text()).then((text) => {
        let preparedContent = { name: value.name, mdContent: text, mdPath: value.path }
        mdFilesContent.push(preparedContent);

      });
    });

    Promise.all(requests).then(() => {
      this.setState({ mdFilesContent: mdFilesContent });
    });

  }

  render() {
    const MyMarkdownView = withSnackbar(MarkdownView);
    const { classes, theme } = this.props;

    /* md files */
    var mdFileToShow = {};
    if (this.state.mdFilesContent.length == 0) {
      mdFileToShow.name = "Loading";
      mdFileToShow.mdContent = "";
      mdFileToShow.mdPath = "";
    }
    else if (this.state.mdFilesContent.length == 1) {
      mdFileToShow = this.state.mdFilesContent[0];
    } else {
      console.log('Multiple files is not implemented yet');
    }

    console.log(classes);
    /*drawers */


    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit">
              {mdFileToShow.name}
            </Typography>
          </Toolbar>
        </AppBar>
        <DrawerMenu classesToUse={classes} menuItems={menuStructure}/>

        <div className={classes.content}>
          <SnackbarProvider maxSnack={3}>
            <div className={classes.toolbar} />
            <MyMarkdownView mdInfo={mdFileToShow} />
          </SnackbarProvider>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(MainScreen)
