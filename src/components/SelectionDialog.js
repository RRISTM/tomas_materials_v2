import React, { Component } from 'react';

// import Button from '@material-ui/core/Button';
import { ListItemButton, List, ListItem, ListItemIcon, ListItemText, Dialog, DialogContent, DialogTitle } from '@mui/material';

import { AltRoute } from '@mui/icons-material';

import { Link } from "react-router-dom";
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
        /* assemble link */
        let linkPath = '';
        let fileName = '';
        if (this.props.match.params.hasOwnProperty('githubName')) {
            linkPath = linkPath + '/' + this.props.match.params.githubName;
        }
        if (this.props.match.params.hasOwnProperty('githubRepository')) {
            linkPath = linkPath + '/' + this.props.match.params.githubRepository;
        }
        if (this.props.match.params.hasOwnProperty('fileName')) {
            fileName = this.props.match.params.fileName;
        }
        return (
            <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={this.state.open}>
                <DialogTitle id="simple-dialog-title">Select page variant</DialogTitle>
                <DialogContent>
                    {/* <DialogContentText> */}
                    Page allow multiple vatiants for its content. They can be linked to specific SW or HW version.
                    {/* </DialogContentText> */}
                </DialogContent>
                <List>
                    {tags.map((tag) => (
                        <ListItemButton onClick={() => this.tagSelected(tag)} key={tag} component={Link} to={`${linkPath}/${tag}/${fileName}`}>
                            <ListItemIcon >
                                <AltRoute color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={tag} />
                        </ListItemButton>
                    ))}
                </List>
            </Dialog>
        )
    }
}

export default SelectionDialog;
