import React, { Component } from 'react';
import MarkdownView from './MarkdownView';
import { Box, Fab } from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons';
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';
import { withStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
const VirtualizeSwipeableViews = virtualize(SwipeableViews);

const styles = (theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    }
});
export class PresentationView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            slideIndex: 0
        };

        this.nextSlide = this.nextSlide.bind(this);
    }

    nextSlide() {
        console.log('nextSlide');
        this.setState({
            slideIndex: this.state.slideIndex + 1
        });
    }

    render() {
        const { classes } = this.props;
        const mdChapterRegex = /(?=#\s.*\r\n\r\n)/g;
        const emptyLine = /^\r\n\r\n/;
        let mdChapters = this.props.mdChapters;
        mdChapters = mdChapters.split(mdChapterRegex);
        /*check first line */
        if (mdChapters[0].search(emptyLine) >= 0) {
            mdChapters.shift();
        }
        let separatedMdContent = mdChapters.map(mdPart => (<MarkdownView children={mdPart} enqueueSnackbar={this.props.enqueueSnackbar} mdInfo={this.props.mdInfo} />));
        const slideRenderer = ({ key, indexSlide }) => {
            // if (indexSlide != undefined) {
            return <MarkdownView children={mdChapters[this.state.slideIndex]} enqueueSnackbar={this.props.enqueueSnackbar} mdInfo={this.props.mdInfo} />
            // }
        };
        {/* <MarkdownView children={mdChapters[index]} enqueueSnackbar={this.props.enqueueSnackbar} mdInfo={this.props.mdInfo} /> */ }
        console.log(mdChapters);
        return (
            <Box justify="flex-start" spacing={0} style={{ padding: 24 }}>
                <VirtualizeSwipeableViews index={this.state.slideIndex} slideRenderer={slideRenderer} />
                {/* <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                    {separatedMdContent}
                </SwipeableViews> */}
                <Fab aria-label={'Add'} className={classes.fab} color={'primary'} onClick={this.nextSlide}>
                    <KeyboardArrowRight />
                </Fab>
            </Box>
        )
    }
}

// export default PresentationView;

export default withStyles(styles)(PresentationView);