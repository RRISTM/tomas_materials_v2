import React, { Component, Fragment } from 'react';
import MarkdownView from './MarkdownView';
import { Box, Fab } from '@material-ui/core';
import { KeyboardArrowRight, KeyboardArrowLeft } from '@material-ui/icons';
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';
import { withStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
const VirtualizeSwipeableViews = virtualize(SwipeableViews);

const styles = (theme) => ({
    fabR: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    fabL: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(12),
    }
});
export class PresentationView extends Component {
    constructor(props) {
        super(props)

        const mdChapterRegex = /(?=#\s.*\r\n\r\n)/g;
        const emptyLine = /^\r\n\r\n/;
        let mdChapters = this.props.mdChapters;
        mdChapters = mdChapters.split(mdChapterRegex);

        if (mdChapters[0].search(emptyLine) >= 0) {
            mdChapters.shift();
        }
        const mdChapterSize = mdChapters.length;

        this.state = {
            slideIndex: 0,
            mdChapters: mdChapters,
            mdChapterSize: mdChapterSize
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    nextSlide() {
        let nextSlideIdex = this.state.slideIndex + 1;
        if (nextSlideIdex >= this.state.mdChapterSize) {
            console.log('çondition fail');
            return;
        }
        console.log(nextSlideIdex);
        this.setState({
            slideIndex: nextSlideIdex
        });
    }

    previousSlide() {
        let previousSlide = this.state.slideIndex - 1;
        if (previousSlide < 0) {
            previousSlide = 0;
        }
        this.setState({
            slideIndex: previousSlide
        });
    }

    render() {
        const { classes } = this.props;

        /*check first line */
        let separatedMdContent = this.state.mdChapters.map(mdPart => (<MarkdownView children={mdPart} enqueueSnackbar={this.props.enqueueSnackbar} mdInfo={this.props.mdInfo} />));
        // const slideRenderer = (params) => {
        //     let { key, index } = params;
        //     if (index < 0) {
        //         return <Fragment />;
        //     }
        //     if (index >= this.state.mdChapterSize) {
        //         return <Fragment />;
        //     }
        //     return <MarkdownView children={this.state.mdChapters[index]} enqueueSnackbar={this.props.enqueueSnackbar} mdInfo={this.props.mdInfo} />
        // };
        {/* <MarkdownView children={mdChapters[index]} enqueueSnackbar={this.props.enqueueSnackbar} mdInfo={this.props.mdInfo} /> */ }
        return (
            <Box justify="flex-start" spacing={0} style={{ padding: 24 }}>
                <SwipeableViews index={this.state.slideIndex}>
                    {separatedMdContent}
                </SwipeableViews>
                <Fab aria-label={'Previous slide'} className={classes.fabL} color={'primary'} onClick={this.previousSlide}>
                    <KeyboardArrowLeft />
                </Fab>
                <Fab aria-label={'Next slide'} className={classes.fabR} color={'primary'} onClick={this.nextSlide}>
                    <KeyboardArrowRight />
                </Fab>
            </Box>
        )
    }
}

// export default PresentationView;

export default withStyles(styles)(PresentationView);