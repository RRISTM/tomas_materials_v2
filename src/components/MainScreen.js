import React, { Component } from 'react';

import MarkdownView from './MarkdownView';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { SnackbarProvider, withSnackbar } from 'notistack';
import DrawerMenu from './DrawerMenu';
import { withStyles } from '@material-ui/core/styles';
import { filesToLoadArr, menuStructure } from './markdownFilesToLoad';

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
    paddingLeft: theme.spacing.unit * 4
  }
});

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mdFilesContent: [],
      mdSelected: "",
      isDrawerOpen: false
    };
    this.itemSelectedCb = this.itemSelectedCb.bind(this);
    this.drawerOpenClose = this.drawerOpenClose.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
  }

  componentWillMount() {
    var mdFilesContent = [];

    let requests = filesToLoadArr.map(value => {
      return fetch(process.env.PUBLIC_URL + value.path + "/" + value.file).then((response) => response.text()).then((text) => {
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
  handleDrawerOpen() {
    console.log(this);
    this.drawerOpenClose(true);
  }
  drawerOpenClose(isOpen) {
    this.setState({ isDrawerOpen: isOpen });
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
      showDrawer.push(<DrawerMenu classesToUse={classes} menuItems={menuStructure} selectCb={this.itemSelectedCb} isDrawerOpen={this.state.isDrawerOpen} drawerChange={this.drawerOpenClose} />);
      showMd.push(<MyMarkdownView mdInfo={mdFileToShow} />);
    } else {
      showDrawer.push(<DrawerMenu classesToUse={classes} menuItems={menuStructure} selectCb={this.itemSelectedCb} isDrawerOpen={this.state.isDrawerOpen} drawerChange={this.drawerOpenClose} />);
      mdFileToShow = this.state.mdFilesContent.find((mdFileContent) => (mdFileContent.name === this.state.mdSelected));
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
    /*drawers */
    return (
      <div className={classes.root}>
        {/* <Box className={appBarStyle}> */}
        {showDrawer}

        <AppBar position="fixed" className={appBarStyle}>
          <Toolbar>
            {iconMenu}
            <Typography variant="h6" color="inherit">
              {mdFileToShow.name}
            </Typography>
          </Toolbar>
        </AppBar>
        <Box className={contentStyle}>
          <SnackbarProvider maxSnack={3}>
            <div className={classes.toolbar} />
            {showMd}
          </SnackbarProvider>
        </Box>
        {/* </Box> */}
      </div>
    )
  }
}

export default withStyles(styles)(MainScreen)
