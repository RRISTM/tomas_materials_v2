import React, { Component } from 'react';

import SelectView from './SelectView';
import { AppBar, Toolbar, Typography, IconButton, Box, Button } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { SnackbarProvider } from 'notistack';
import DrawerMenu from './DrawerMenu';

import { Route } from "react-router-dom";
import { Fragment } from 'react';
import { GithubContext } from './GithubContext.js';

import { webVariant } from '../webConfig';

// import { filesToLoadArr, menuStructure } from './markdownFilesToLoad';

//develop
// import mdDevelop from '%PUBLIC_URL%/markdown/CubeMXImport.md';

// var mdContent =[];
const drawerWidth = 320;

const mainScreenStyles = {
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: drawerWidth
    }
  },
  drawerPaper: {
    width: drawerWidth,
  },
  appBarClose: {
    marginLeft: drawerWidth,
    transition: (theme) => theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  appBarOpen: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: (theme) => theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  // content: {
  //   flexGrow: 1,
  //   padding: theme.spacing.unit * 3,
  // },
  content: {
    flexGrow: 1,
    padding: 24,
    transition: (theme) => theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // marginLeft: -drawerWidth,
    marginLeft: 0,
  },
  contentShift: {
    transition: (theme) => theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    // marginLeft: drawerWidth,
    marginLeft: 0,
  },
  nested: {
    paddingLeft: 32
  },
  title: {
    flexGrow: 1,
  }
};

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mdFilesContent: [],
      mdSelected: "",
      isDrawerOpen: true,
      menuStructure: [],
      mdfilesToLoadArr: [],
      mdGithubLoc: '',
      githubPage: ''
    };
    this.itemSelectedCb = this.itemSelectedCb.bind(this);
    this.drawerOpenClose = this.drawerOpenClose.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.fetchRestOfFiles = this.fetchRestOfFiles.bind(this);
  }

  componentDidMount() {

    let fileToFetchWithContent;
    switch (webVariant) {
      case 'githubFetch':
        fetch(process.env.PUBLIC_URL + '/github.json').then((response) => {
          return response.json();
        }).then((jsonData) => {
          fileToFetchWithContent = jsonData.githubLoc;
          this.fetchRestOfFiles(fileToFetchWithContent);//fetch from location found in github.json in public folder
        });
        break;
      case 'local':
        this.fetchRestOfFiles(process.env.PUBLIC_URL);// fetch from public folder
        break;
      case 'addressFetch':
        fileToFetchWithContent = `https://raw.githubusercontent.com/${this.props.match.params.githubName}/${this.props.match.params.githubRepository}/master/doc`;
        this.fetchRestOfFiles(fileToFetchWithContent);//fetch from location based on address parameters
        break;
      default:

    }
  }

  fetchRestOfFiles(fileToFetchWithContent) {
    let filesToLoad;
    var mdFilesContent = [];
    fetch(fileToFetchWithContent + '/filesToLoad.json').then((response) => {
      return response.json();
    }).then((jsonData) => {
      document.title = jsonData.title;
      filesToLoad = jsonData;
    }).then(() => {
      let requests = filesToLoad.filesToLoadArr.map(value => {
        return fetch(fileToFetchWithContent + value.path + "/" + value.file).then((response) => response.text()).then((text) => {
          let preparedContent = { name: value.name, mdContent: text, mdPath: value.path, mdFile: value.file }
          mdFilesContent.push(preparedContent);
        });
      });
      Promise.all(requests).then(() => {
        this.setState({ mdFilesContent: mdFilesContent, menuStructure: filesToLoad.menuStructure, mdfilesToLoadArr: filesToLoad.filesToLoadArr, mdGithubLoc: filesToLoad.githubLoc, githubPage: fileToFetchWithContent });
      });
    })
  }


  itemSelectedCb(itemName) {
    this.setState({ mdSelected: itemName });
  }
  handleDrawerOpen() {
    this.drawerOpenClose(true);
  }
  drawerOpenClose(isOpen) {
    this.setState({ isDrawerOpen: isOpen });
  }
  render() {
    // const { classes } = this.props;
    /* md files */
    let mdFileToShow = {};
    let showDrawer;
    let showMd;
    if (this.state.mdFilesContent.length === 0) {
      mdFileToShow.name = "Loading";
      mdFileToShow.mdContent = "";
      mdFileToShow.mdPath = "";
    }
    else if (this.state.mdFilesContent.length === 1) {
      mdFileToShow = this.state.mdFilesContent[0];
      let mdFileToPath = this.state.menuStructure[0];
      showDrawer = (
        <Route to={`${this.props.match.path}`} render={(routeProps) => (
          <DrawerMenu classesToUse={mainScreenStyles} menuItems={this.state.menuStructure} selectCb={this.itemSelectedCb} isDrawerOpen={this.state.isDrawerOpen} drawerChange={this.drawerOpenClose} match={this.props.match} {...routeProps} />
        )} />
      );
      showMd = (
        <Route path={`${this.props.match.path}/${mdFileToPath.file}`} render={(routeProps) => (
          <GithubContext.Provider value={this.state.githubPage}>
            <SelectView mdInfo={mdFileToShow} {...routeProps} />
          </GithubContext.Provider>
        )} />
      );
    } else {
      showDrawer = (
        <Route to={`${this.props.match.path}`} render={(routeProps) => (
          <DrawerMenu classesToUse={mainScreenStyles} menuItems={this.state.menuStructure} selectCb={this.itemSelectedCb} isDrawerOpen={this.state.isDrawerOpen} drawerChange={this.drawerOpenClose} match={this.props.match} {...routeProps} />
        )} />
      );
      mdFileToShow = this.state.mdFilesContent.find((mdFileContent) => (mdFileContent.name === this.state.mdSelected));
      // let mdFileToPath = this.state.menuStructure.find((menuStructureContent) => (menuStructureContent.name === this.state.mdSelected));
      showMd = this.state.mdFilesContent.map((mdFileContent, index) => {
        return (<Route key={index} path={`${this.props.match.path}/${mdFileContent.mdFile}`} render={(routeProps) => {
          return (
            <GithubContext.Provider value={this.state.githubPage}>
              <SelectView mdInfo={mdFileContent} {...routeProps} />
            </GithubContext.Provider>
          );
        }} />)
      });
      showMd.push(<Route key={'main screen not selected item'} exact path={`${this.props.match.path}`} render={(routeProps) => {
        return (<Fragment></Fragment>);
      }} />)
      if (mdFileToShow === undefined) {
        mdFileToShow = {};
        mdFileToShow.name = "";
        mdFileToShow.mdContent = "";
        mdFileToShow.mdPath = "";
      }

      // console.log('Multiple files is not implemented yet');
    }
    let appBarStyle;
    let contentStyle;
    let iconMenu;
    if (this.state.isDrawerOpen) {
      appBarStyle = mainScreenStyles.appBarOpen;
      contentStyle = mainScreenStyles.contentShift;
    } else {
      iconMenu = (<IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={this.handleDrawerOpen}
        edge="start"
      // className={clsx(classes.menuButton, open && classes.hide)}
      >
        <Menu />
      </IconButton>);
      appBarStyle = mainScreenStyles.appBarClose;
      showDrawer = null;
      contentStyle = mainScreenStyles.content;
    }
    let githubButton;
    /* create githup source page button */

    let mdFileSource = this.state.mdfilesToLoadArr.find(element => {
      return this.props.location.pathname.includes(element.file);
    });
    if (mdFileSource !== undefined) {
      let hrefAddr = `${this.state.mdGithubLoc}${mdFileSource.path}/${mdFileSource.file}`;
      mdFileToShow.name = mdFileSource.name;
      githubButton = (
        <Button target="_blank" href={hrefAddr} color="inherit">
          EDIT THIS PAGE
        </Button>
      );
    }
    /*drawers */
    return (
      <Box sx={mainScreenStyles.root}>
        {showDrawer}

        <AppBar position="fixed" sx={appBarStyle}>
          <Toolbar>
            {iconMenu}
            <Typography variant="h6" color="inherit" sx={mainScreenStyles.title}>
              {mdFileToShow.name}
            </Typography>
            {githubButton}
          </Toolbar>
        </AppBar>
        <Box sx={contentStyle}>
          <SnackbarProvider maxSnack={3}>
            {showMd}
          </SnackbarProvider>
        </Box>
      </Box>
    )
  }
}

export default (MainScreen);
