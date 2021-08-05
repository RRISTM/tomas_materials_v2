import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import CallSplitIcon from '@material-ui/icons/CallSplit';

export class SelectionDialog extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.tagSelected = this.tagSelected.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    openDialog() {
        this.setState({ open: true });
    }
    /*tag is selected inform parent */
    tagSelected(tag) {
        //this.props.selectedTagCallback();
        this.setState({ open: false });
    }
    handleClose() {
        this.setState({ open: false });
    }
    render() {
        let tags = this.props.tags;

        return (
            <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={this.state.open}>
                <DialogTitle id="simple-dialog-title">Select page variant</DialogTitle>
                <List>
                    {tags.map((tag) => (
                        <ListItem button onClick={() => this.tagSelected(tag)} key={tag}>
                            <ListItemAvatar>
                                <Avatar>
                                    <CallSplitIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={tag} />
                        </ListItem>
                    ))}
                </List>
            </Dialog>
        )
    }
}

export default SelectionDialog;
