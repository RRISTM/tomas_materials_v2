import React, { Component, Fragment } from 'react';
import DocumentView from './DocumentView';
import PresentationView from './PresentationView';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

export class SelectView extends Component {
    render() {
        const separateHeader = /----!\r\nPresentation\r\n----!/;
        /*find presentation*/
        let presentation = false;
        let mdChapters = this.props.mdInfo.mdContent;
        let selectedView = (<DocumentView mdChapters={mdChapters} enqueueSnackbar={this.props.enqueueSnackbar} mdInfo={this.props.mdInfo} />);
        if (mdChapters.search(separateHeader) > 0) {
            /* presenatation mode */
            console.log('presenation mode');
            presentation = true;
            mdChapters = mdChapters.split(separateHeader).pop();
        } else {
            console.log('document mode');
        }
        return (
            <Fragment>
                {selectedView}
            </Fragment>
        )
    }
}
SelectView.propTypes = {
    enqueueSnackbar: PropTypes.func.isRequired,
};

export default SelectView;
