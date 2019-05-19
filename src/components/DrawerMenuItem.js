import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, Collapse, List } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

export class DrawerMenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = { expand: false };
  }

  render() {
    let item = this.props.item;
    let shortName = item.name.replace(/\s/g, '');
    let itemNested = {};
    if (this.props.depth > 0) {
      itemNested = this.props.classesToUse.nested;
    }
    let completeItem = {};
    if (item.type == 'Folder') {
      /*folder */
      let subFolder = item.children.map((value) => <DrawerMenuItem key={value.name} item={value} depth={this.props.depth + 1} selectCb={this.props.selectCb} classesToUse={this.props.classesToUse}/>);
      let folderItem = (
        <Fragment>
          <ListItem button className={itemNested} onClick={(e) => this.setState({ expand: !this.state.expand })} >
            <ListItemText inset primary={item.name} />
            {this.state.expand ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.expand} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {subFolder}
            </List>
          </Collapse>
        </Fragment>
      );
      completeItem = folderItem;
    } else if (item.type == 'File') {
      /*file */
      let fileItem = (
        <ListItem button className={itemNested}>
          <ListItemText inset primary={item.name} />
        </ListItem>
      );
      completeItem = fileItem;
    } else {
      console.log('Not defined item')
    }

    return (
      <Fragment>
        {completeItem}
      </Fragment>
    )
  }
}
DrawerMenuItem.propTypes = {
  // classes: PropTypes.array.isRequired,
  selectCb: PropTypes.func.isRequired,
  depth: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  classesToUse: PropTypes.object.isRequired
};

export default DrawerMenuItem;