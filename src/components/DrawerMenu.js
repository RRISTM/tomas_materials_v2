import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Drawer, List, Divider, ListSubheader, } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DrawerMenuItem from './DrawerMenuItem';
// import {MenuIcon,InboxIcon,MailIcon} from '@material-ui/icons';


const styles = theme => ({

});

export class DrawerMenu extends Component {

  render() {
    const classes = this.props.classesToUse;

    let listToShow = this.props.menuItems.map((value) => (<DrawerMenuItem key={value.name} item={value} depth={0} selectCb={this.props.selectCb} classesToUse={this.props.classesToUse}/>));

    let listCore = (
      <List
        component="nav"
        subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
      >
        {listToShow}
      </List>
    );
    return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        {listCore}
      </Drawer>
    )
  }
}
DrawerMenu.propTypes = {
  selectCb: PropTypes.func.isRequired,
  classesToUse: PropTypes.object.isRequired,
  menuItems:PropTypes.array.isRequired
};

export default withStyles(styles)(DrawerMenu);
