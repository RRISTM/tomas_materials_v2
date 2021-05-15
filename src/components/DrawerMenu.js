import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Drawer, List, Divider, ListSubheader, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DrawerMenuItem from './DrawerMenuItem';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import {MenuIcon,InboxIcon,MailIcon} from '@material-ui/icons';


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

    let listToShow = this.props.menuItems.map((value) => (<DrawerMenuItem key={value.name} item={value} depth={0} selectCb={this.props.selectCb} classesToUse={this.props.classesToUse} />));

    let listCore = (
      <List
        component="nav"
      // subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
      >
        {listToShow}
      </List>
    );
    console.log(this.props);
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
        <div className={classes.toolbar}>
          <IconButton onClick={this.closeDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
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
  isDrawerOpen: PropTypes.bool.isRequired
};

export default withStyles(styles)(DrawerMenu);
