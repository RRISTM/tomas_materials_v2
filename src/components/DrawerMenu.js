import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Drawer, List, Divider, IconButton, Toolbar, Button } from '@mui/material';
import DrawerMenuItem from './DrawerMenuItem';
import { ChevronLeft } from '@mui/icons-material';
import { Route } from "react-router-dom";

import { LocalOffer } from '@mui/icons-material';

import SelectDialog from './SelectionDialog';
// import {MenuIcon,InboxIcon,MailIcon} from '@mui/icons-material';

const tagButtonStyle = {
  flexGrow: 1
}

export class DrawerMenu extends Component {
  constructor(props) {
    super(props);

    this.tagDialog = React.createRef();

    this.closeDrawer = this.closeDrawer.bind(this);
    this.openTagDialog = this.openTagDialog.bind(this);
  }
  closeDrawer() {
    this.props.drawerChange(false);
  }
  openTagDialog() {
    this.tagDialog.current.openDialog();
  }
  render() {
    const classes = this.props.classesToUse;
    let listToShow = this.props.menuItems.map((value, index) => (
      <Route key={index} to={`${this.props.match.path}`} render={(routeProps) => (
        <DrawerMenuItem key={value.name} item={value} depth={0} selectCb={this.props.selectCb} classesToUse={this.props.classesToUse} {...routeProps} />
      )} />
    ));

    let listCore = (
      <List
        component="nav"
      // subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
      >
        {listToShow}
      </List>
    );
    let gitTagButton;
    if (this.props.pageOptions.allowTagSelect) {
      gitTagButton = (
        <Button color="inherit" onClick={this.openTagDialog} startIcon={<LocalOffer />} sx={tagButtonStyle}>
          {this.props.match.params.gitTag}
        </Button>
      );
    } else {
      if (Array.isArray(this.props.tagList)) {
        gitTagButton = <Button color="inherit" startIcon={<LocalOffer />} sx={tagButtonStyle}>
          {this.props.tagList[0]}
        </Button>
      }
    }
    return (
      <Drawer
        sx={
          classes.drawer
        }
        variant="persistent"
        open={this.props.isDrawerOpen}
        // classes={{
        //   paper: classes.drawerPaper,
        // }}
        anchor="left"
      >
        {/* <div className={classes.toolbar} /> */}
        <Toolbar >

          {/* <div className={classes.toolbar}> */}
          <IconButton
            onClick={this.closeDrawer}
            color="inherit"
            aria-label="open drawer"
            edge="start">
            <ChevronLeft />
          </IconButton>
          {gitTagButton}
          {/* </div> */}
        </Toolbar>
        <Divider />
        {listCore}
        <Route to={`${this.props.match.path}`} render={(routeProps) => (
          <SelectDialog tags={this.props.tagList} ref={this.tagDialog} {...routeProps} />
        )} />
      </Drawer>
    )
  }
}
DrawerMenu.propTypes = {
  selectCb: PropTypes.func.isRequired,
  classesToUse: PropTypes.object.isRequired,
  menuItems: PropTypes.array.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
};

export default DrawerMenu;
