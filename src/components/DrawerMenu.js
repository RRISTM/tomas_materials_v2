import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Drawer, List, Divider, IconButton, Toolbar } from '@mui/material';
import { withStyles } from '@mui/styles';
import DrawerMenuItem from './DrawerMenuItem';
import { ChevronLeft } from '@mui/icons-material';
import { Route } from "react-router-dom";
// import {MenuIcon,InboxIcon,MailIcon} from '@mui/icons-material';


const styles = theme => ({

});

export class DrawerMenu extends Component {
  constructor(props) {
    super(props);
    this.closeDrawer = this.closeDrawer.bind(this);
  }
  closeDrawer() {
    console.log(this);
    this.props.drawerChange(false);
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
    return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        open={this.props.isDrawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
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
          {/* </div> */}
        </Toolbar>
        <Divider />
        {listCore}
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

export default withStyles(styles)(DrawerMenu);
