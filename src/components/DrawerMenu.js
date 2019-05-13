import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, ListSubheader, Collapse } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
// import {MenuIcon,InboxIcon,MailIcon} from '@material-ui/icons';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const styles = theme => ({

});

export class DrawerMenu extends Component {
  constructor(props){
    super(props);

    let stateObject ={}
    this.createList=this.createList.bind(this);
    this.listToShow = this.props.menuItems.map((value) => (this.createList(value, 0,stateObject)));
    this.state = stateObject
  }

  createList(item, depth,stateArray) {
    let shortName= item.name.replace(/\s/g, '');
    let itemNested = {};
    if(depth>0){
      itemNested=this.props.classesToUse.nested;
    }

    if (item.type == 'Folder') {
      /*folder */
      // console.log(this);
      let expand;
      if(this.hasOwnProperty('state')){
        expand = this.state[shortName]
      }else{
        expand=false;
      }
      
      let subFolder = item.children.map((value) => this.createList(value,depth+1));
      // this.setState({[shortName]:false});
      stateArray[shortName]=false;
      let folderItem = (
        <Fragment>
          <ListItem button className={itemNested} onClick={(e) => this.setState({[shortName]: !this.state[shortName]})} >
            <ListItemText inset primary={item.name} />
            {expand ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={expand} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {subFolder}
            </List>
          </Collapse>
        </Fragment>
      );
      return folderItem;
    } else if (item.type == 'File') {
      /*file */
      let fileItem = (
        <ListItem button className={itemNested}>
        <ListItemText inset primary={item.name} />
      </ListItem>
      );
      return fileItem;
    } else {
      console.log('Not defined item')
    }
    return;
  }

  render() {
    const classes = this.props.classesToUse;

    /*compose a list */
    // const menuStructure =
    // [
    //   {
    //     type: 'Folder',
    //     name: 'CubeMX basics',
    //     children:
    //       [
    //         {
    //           type: 'File',
    //           name: 'CubeMX Import'
    //         }
    //       ]
    //   }
    // ];

    let listCore = (
      <List
        component="nav"
        subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
      >
        {this.listToShow}
      </List>
    );
    console.log(this.state);
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
        {/* <List
          component="nav"
          subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
        >
          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText inset primary="Sent mail" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText inset primary="Drafts" />
          </ListItem>
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText inset primary="Inbox" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Starred" />
              </ListItem>
            </List>
          </Collapse>
        </List> */}
      </Drawer>
    )
  }
}
DrawerMenu.propTypes = {
  classes: PropTypes.array.isRequired
};

export default withStyles(styles)(DrawerMenu);
