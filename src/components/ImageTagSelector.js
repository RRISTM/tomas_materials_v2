// import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';

import SvgCarousel from './SvgCarousel';

import { webVariant } from '../webConfig';
export class ImageTagSelector extends Component {
    static propTypes = {}

    render() {
        let imageDisplay;
        /* */
        const srcImageName = this.props.src;
        const jsonRegex = /.json/;
        let variantPath = ''
        switch (webVariant) {
            case 'local':
                variantPath = '';
                break;
            default:
                variantPath = this.props.pathContext;
        }
        if (srcImageName.match(jsonRegex) !== null) {
            imageDisplay = (
                <Fragment>
                    <SvgCarousel src={variantPath + this.props.mdInfo.mdPath + "/img/" + this.props.src.replace('./img/', '')} mdPath={variantPath + this.props.mdInfo.mdPath} />
                </Fragment>
            );
        }
        else {
            imageDisplay = (
                <Fragment>
                    <img alt={this.props.alt} src={variantPath + this.props.mdInfo.mdPath + "/img/" + this.props.src.replace('./img/', '')} title={this.props.title} style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', maxWidth: '100%', height: 'auto' }}>
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