import React, { Component } from 'react';

import SelectView from './SelectView';
import { AppBar, Toolbar, Typography, IconButton, Box, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { SnackbarProvider } from 'notistack';
import DrawerMenu from './DrawerMenu';
import { withStyles } from '@material-ui/core/styles';

import { Route } from "react-router-dom";
import { Fragment } from 'react';
import { GithubContext } from './GithubContext.js';

import { webVariant } from '../webConfig';

import SelectDialog from './SelectionDialog';

// import { filesToLoadArr, menuStructure } from './markdownFilesToLoad';

//develop
// import mdDevelop from '%PUBLIC_URL%/markdown/CubeMXImport.md';

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
  appBarClose: {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  appBarOpen: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
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
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // marginLeft: -drawerWidth,
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  toolbar: theme.mixins.toolbar,
  nested: {
    paddingLeft: theme.spacing(4)
  },
  title: {
    flexGrow: 1,
  }
});


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
      tagList: []
    };

    this.tagDialog = React.createRef();

    this.itemSelectedCb = this.itemSelectedCb.bind(this);
    this.drawerOpenClose = this.drawerOpenClose.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.fetchRestOfFiles = this.fetchRestOfFiles.bind(this);
    this.fetchGithubTags = this.fetchGithubTags.bind(this);
    this.openTagDialog = this.openTagDialog.bind(this);
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
    let fileToFetchWithContent = `https://raw.githubusercontent.com/${githubName}/${githubRepository}/${gitTag}/doc`;
    fetch(fileToFetchWithContent + '/filesToLoad.json').then((response) => {
      return response.json();
    }).then((jsonData) => {
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
  openTagDialog() {
    this.tagDialog.current.openDialog();
  }
  render() {
    const { classes } = this.props;
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
          <DrawerMenu classesToUse={classes} menuItems={this.state.menuStructure} selectCb={this.itemSelectedCb} isDrawerOpen={this.state.isDrawerOpen} drawerChange={this.drawerOpenClose} match={this.props.match} {...routeProps} />
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
          <DrawerMenu classesToUse={classes} menuItems={this.state.menuStructure} selectCb={this.itemSelectedCb} isDrawerOpen={this.state.isDrawerOpen} drawerChange={this.drawerOpenClose} match={this.props.match} {...routeProps} />
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
      appBarStyle = classes.appBarOpen;
      contentStyle = classes.contentShift;
    } else {
      iconMenu = (<IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={this.handleDrawerOpen}
        edge="start"
      // className={clsx(classes.menuButton, open && classes.hide)}
      >
        <MenuIcon />
      </IconButton>);
      appBarStyle = classes.appBarClose;
      showDrawer = null;
      contentStyle = classes.content;
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
    let gitTagButtion;
    if (true) {
      gitTagButtion = (
        <Button color="inherit" onClick={this.openTagDialog}>
          Variant: {this.props.match.params.gitTag}
        </Button>
      );
    }

    /*drawers */
    return (
      <div className={classes.root}>
        {/* <Box className={appBarStyle}> */}
        {showDrawer}

        <AppBar position="fixed" className={appBarStyle}>
          <Toolbar>
            {iconMenu}
            <Typography variant="h6" color="inherit" className={classes.title}>
              {mdFileToShow.name}
            </Typography>
            {githubButton}
            {gitTagButtion}
          </Toolbar>
        </AppBar>
        <Box className={contentStyle}>
          <Route to={`${this.props.match.path}`} render={(routeProps) => (
            <SelectDialog tags={this.state.tagList} ref={this.tagDialog} {...routeProps} />
          )} />
          <SnackbarProvider maxSnack={3}>
            <div className={classes.toolbar} key={'blank_div'} />
            {showMd}
            {/* <Route path={`${this.props.match.path}/About`}>
              <SelectView mdInfo={{
                mdContent: "# Add ThreadX example test\n\n  <awarning>\n\nAlert test\n\n# H1 test \n\n\n\n</awarning>\n\n  This example is result of article `add_threadx` showing how to add ThreadX into CubeMX project. \n\n[Example link](https://github.com/RRISTM/stm32_threadx/tree/master/examples/threadx_add)"
                , mdFile: "add_threadx_example.md",
                mdPath: "/examples",
                name: "Add threadx"
              }} />
            </Route> */}
          </SnackbarProvider>
        </Box>
        {/* </Box> */}
      </div>
    )
  }
}

export default withStyles(styles)(MainScreen)
