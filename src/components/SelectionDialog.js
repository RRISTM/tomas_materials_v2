import React, { Component } from 'react';

export class SelectionDialog extends Component {
    constructor(props) {
        super(props);
        this.tagSelected = this.tagSelected.bind(this);
    }

    /*tag is selected inform parent */
    tagSelected() {
        this.props.selectedTagCallback();
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default SelectionDialog;
