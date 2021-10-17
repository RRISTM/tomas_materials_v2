import React, { Component } from 'react';

import SelectView from './SelectView';
import { AppBar, Toolbar, Typography, IconButton, Box, Button } from '@mui/material';
import { Menu, GitHub } from '@mui/icons-material';

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
      githubPage: '',
      selectTag: false,
      tagList: [],
      githubName: '',
      githubRepository: '',
      gitTag: '',
      pageOptions: {
        'allowMenu': true,
        'allowTagSelect': true
      }
    };



    this.itemSelectedCb = this.itemSelectedCb.bind(this);
    this.drawerOpenClose = this.drawerOpenClose.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.fetchRestOfFiles = this.fetchRestOfFiles.bind(this);
    this.fetchGithubTags = this.fetchGithubTags.bind(this);

  }

  componentDidMount() {
    switch (webVariant) {
      case 'githubFetch':
        fetch(process.env.PUBLIC_URL + '/github.json').then((response) => {
          return response.json();
        }).then((jsonData) => {
          this.fetchRestOfFiles(jsonData.githubName, jsonData.githubRepository, this.props.match.params.gitTag);//fetch from location found in github.json in public folder
        });
        break;
      case 'local':
        console.log('!!local option currently not working!!')
        this.fetchRestOfFiles(process.env.PUBLIC_URL);// fetch from public folder
        break;
      case 'addressFetch':
        this.fetchRestOfFiles(this.props.match.params.githubName, this.props.match.params.githubRepository, this.props.match.params.gitTag);//fetch from location based on address parameters
        break;
      default:

    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.gitTag !== prevProps.match.params.gitTag) {
      switch (webVariant) {
        case 'addressFetch':
          this.fetchRestOfFiles(this.props.match.params.githubName, this.props.match.params.githubRepository, this.props.match.params.gitTag);//fetch from location based on address parameters
          break;
        case 'githubFetch':
          fetch(process.env.PUBLIC_URL + '/github.json').then((response) => {
            return response.json();
          }).then((jsonData) => {
            this.fetchRestOfFiles(jsonData.githubName, jsonData.githubRepository, this.props.match.params.gitTag);//fetch from location found in github.json in public folder
          });
          break;
        default:
      }
    }

  }

  fetchGithubTags(githubName, githubRepo) {
    let githubPage = `https://api.github.com/repos/${githubName}/${githubRepo}/tags`;
    fetch(githubPage).then((response) => {
      return response.json();
    }).then((text) => {
      let tagNames = text.map(tagJson => tagJson.name);
      this.setState({ tagList: tagNames });
    });
  }

  fetchRestOfFiles(githubName, githubRepository, gitTag) {
    let filesToLoad;
    var mdFilesContent = [];
    this.fetchGithubTags(githubName, githubRepository);
    let fileToFetchWithContent = `https://raw.githubusercontent.com/${githubName}/${githubRepository}/${gitTag}`;
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
        let isDrawerOpen = true;

        if (!(('options' in filesToLoad) && ('allowMenu' in filesToLoad.options))) {
          filesToLoad.options = this.state.pageOptions;
          console.log('Add options to yout filesToLoad file');
        }
        if (filesToLoad.options.allowMenu === false) {
          isDrawerOpen = false;
        }

        this.setState({ githubName: githubName, githubRepository: githubRepository, gitTag: gitTag, mdFilesContent: mdFilesContent, menuStructure: filesToLoad.menuStructure, mdfilesToLoadArr: filesToLoad.filesToLoadArr, mdGithubLoc: filesToLoad.githubLoc, githubPage: fileToFetchWithContent, pageOptions: filesToLoad.options, isDrawerOpen: isDrawerOpen });
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
    let possibleRoute = '';
    switch (webVariant) {
      case 'addressFetch':
        possibleRoute = '/:githubName/:githubRepository/:gitTag';
        break;
      case 'githubFetch':
        possibleRoute = '/:gitTag';
        break;
      default:
    }

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
          <DrawerMenu classesToUse={mainScreenStyles} menuItems={this.state.menuStructure} selectCb={this.itemSelectedCb} isDrawerOpen={this.state.isDrawerOpen} drawerChange={this.drawerOpenClose} tagList={this.state.tagList} pageOptions={this.state.pageOptions} match={this.props.match} {...routeProps} />
        )} />
      );
      showMd = (

        <Route path={`${possibleRoute}/${mdFileToPath.file}`} render={(routeProps) => (
          <GithubContext.Provider value={this.state.githubPage}>
            <SelectView mdInfo={mdFileToShow} {...routeProps} />
          </GithubContext.Provider>
        )} />
      );
    } else {
      showDrawer = (
        <Route to={`${this.props.match.path}`} render={(routeProps) => (
          <DrawerMenu classesToUse={mainScreenStyles} menuItems={this.state.menuStructure} selectCb={this.itemSelectedCb} isDrawerOpen={this.state.isDrawerOpen} drawerChange={this.drawerOpenClose} tagList={this.state.tagList} pageOptions={this.state.pageOptions} match={this.props.match} {...routeProps} />
        )} />
      );
      mdFileToShow = this.state.mdFilesContent.find((mdFileContent) => (mdFileContent.name === this.state.mdSelected));
      // let mdFileToPath = this.state.menuStructure.find((menuStructureContent) => (menuStructureContent.name === this.state.mdSelected));
      showMd = this.state.mdFilesContent.map((mdFileContent, index) => {
        return (<Route key={index} path={`${possibleRoute}/${mdFileContent.mdFile}`} render={(routeProps) => {
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
      console.log(this.state)
      if (('allowMenu' in this.state.pageOptions) && (this.state.pageOptions.allowMenu === true)) {
        iconMenu = (<IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={this.handleDrawerOpen}
          edge="start"
        // className={clsx(classes.menuButton, open && classes.hide)}
        >
          <Menu />
        </IconButton>);
      }
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
      let hrefAddr = `https://github.com/${this.state.githubName}/${this.state.githubRepository}/blob/${this.state.gitTag}${mdFileSource.path}/${mdFileSource.file}`;
      mdFileToShow.name = mdFileSource.name;
      githubButton = (
        <Button target="_blank" href={hrefAddr} startIcon={<GitHub />} color="inherit">
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
        {/* <Box sx={contentStyle}>
          <SnackbarProvider maxSnack={3}> */}
        <Box className={contentStyle}>

          <SnackbarProvider maxSnack={3}>
            {/* <div className={classes.toolbar} key={'blank_div'} /> */}
            {showMd}
          </SnackbarProvider>
        </Box>
      </Box>
    )
  }
}

export default (MainScreen);
