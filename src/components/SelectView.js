import React, { Component, Fragment } from 'react';
import DocumentView from './DocumentView';
import PresentationView from './PresentationView';
// import PropTypes from 'prop-types';
import { Route } from "react-router-dom";

export class SelectView extends Component {
    render() {
        const separateHeader = /^----!(\r\n|\n)Presentation(\r\n|\n)----!/;
        /*find presentation*/
        let mdChapters = this.props.mdInfo.mdContent;
        let selectedView;
        if (mdChapters.search(separateHeader) >= 0) {
            /* presenatation mode */
            console.log('presenation mode');
            mdChapters = mdChapters.split(separateHeader).pop();
            selectedView = (
                <Route to={`${this.props.match.path}`} render={(routeProps) => (
                    <PresentationView mdChapters={mdChapters} mdInfo={this.props.mdInfo} {...routeProps} />
                )} />
            );
        } else {
            console.log('document mode');
            // selectedView = (<DocumentView mdChapters={mdChapters} mdInfo={this.props.mdInfo} />);
            selectedView = (
                <Route to={`${this.props.match.path}`} render={(routeProps) => (
                    <DocumentView mdChapters={mdChapters} mdInfo={this.props.mdInfo} {...routeProps} />
                )} />
            );
        }
        return (
            <Fragment>
                {selectedView}
            </Fragment>
        )
    }
}
SelectView.propTypes = {
};

export default SelectView;
