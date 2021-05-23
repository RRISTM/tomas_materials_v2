import React, { Component, Fragment } from 'react';
import DocumentView from './DocumentView';
import PresentationView from './PresentationView';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

export class SelectView extends Component {
    render() {
        const separateHeader = /^----!\r\nPresentation\r\n----!/;
        /*find presentation*/
        let mdChapters = this.props.mdInfo.mdContent;
        let selectedView;
        console.log(mdChapters.search(separateHeader));
        console.log(mdChapters);
        if (mdChapters.search(separateHeader) >= 0) {
            /* presenatation mode */
            console.log('presenation mode');
            mdChapters = mdChapters.split(separateHeader).pop();
            selectedView = (<PresentationView mdChapters={mdChapters} enqueueSnackbar={this.props.enqueueSnackbar} mdInfo={this.props.mdInfo} />);
        } else {
            console.log('document mode');
            selectedView = (<DocumentView mdChapters={mdChapters} enqueueSnackbar={this.props.enqueueSnackbar} mdInfo={this.props.mdInfo} />);
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
