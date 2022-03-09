import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';

import SvgCarousel from './SvgCarousel';


export class ImageTagSelector extends Component {
    static propTypes = {}

    render() {
        let imageDisplay;
        /* */
        const srcImageName = this.props.src;
        console.log(this.props);
        const jsonRegex = /.json/;
        console.log(srcImageName.match(jsonRegex));
        if (srcImageName.match(jsonRegex) !== null) {
            imageDisplay = (
                <Fragment>
                    <SvgCarousel src={this.props.mdInfo.mdPath + "/img/" + this.props.src.replace('./img/', '')} mdPath={this.props.mdInfo.mdPath} />
                </Fragment>
            );
        }
        else {
            imageDisplay = (
                <Fragment>
                    <img alt={this.props.alt} src={this.props.mdInfo.mdPath + "/img/" + this.props.src.replace('./img/', '')} title={this.props.title} style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', maxWidth: '100%', height: 'auto' }}>
                    </img>
                    <br />
                </Fragment>);

        }


        return (
            <Fragment>
                {imageDisplay}
            </Fragment>
        )
    }
}

export default ImageTagSelector;