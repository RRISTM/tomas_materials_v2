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
  },
  {
    name: 'QSPI',
    path: '/markdown/QSPI.md',
  }
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
const drawerWidth = 320;

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
    this.state = {
      mdFilesContent: [],
      mdSelected: "",
    };
    this.itemSelectedCb = this.itemSelectedCb.bind(this);
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
  itemSelectedCb(itemName) {
    this.setState({ mdSelected: itemName });
  }
  render() {
    const MyMarkdownView = withSnackbar(MarkdownView);
    const { classes } = this.props;

    /* md files */
    let mdFileToShow = {};
    let showDrawer = [];
    let showMd = [];
    if (this.state.mdFilesContent.length === 0) {
      mdFileToShow.name = "Loading";
      mdFileToShow.mdContent = "";
      mdFileToShow.mdPath = "";
    }
    else if (this.state.mdFilesContent.length === 1) {
      mdFileToShow = this.state.mdFilesContent[0];
      showDrawer.push(<DrawerMenu classesToUse={classes} menuItems={menuStructure} selectCb={this.itemSelectedCb} />);
      showMd.push(<MyMarkdownView mdInfo={mdFileToShow} />);
    } else {
      showDrawer.push(<DrawerMenu classesToUse={classes} menuItems={menuStructure} selectCb={this.itemSelectedCb} />);
      mdFileToShow = this.state.mdFilesContent.find((mdFileContent) => (mdFileContent.name === this.state.mdSelected));
      console.log(mdFileToShow);
      console.log(this.state.mdFilesContent);
      if (mdFileToShow !== undefined) {
        showMd.push(<MyMarkdownView mdInfo={mdFileToShow} />);
      } else {
        mdFileToShow = {};
        mdFileToShow.name = "";
        mdFileToShow.mdContent = "";
        mdFileToShow.mdPath = "";
      }
      // console.log('Multiple files is not implemented yet');
    }

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
        {showDrawer}
        <div className={classes.content}>
          <SnackbarProvider maxSnack={3}>
            <div className={classes.toolbar} />
            {showMd}
          </SnackbarProvider>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(MainScreen)
