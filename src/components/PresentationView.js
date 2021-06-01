import React, { Component } from 'react';
import MarkdownView from './MarkdownView';
import { Box, Fab, Fade, Tooltip } from '@material-ui/core';
import { KeyboardArrowRight, KeyboardArrowLeft, Replay, CallMerge } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import { Route, Switch, Redirect, Link } from "react-router-dom";

// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    fabR: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    fabC: {
        position: 'fixed',
        bottom: theme.spacing(10),
        right: theme.spacing(2),
    },
    fabL: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(10),
    },
    fabLL: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(18),
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
            mdChapterSize: mdChapterSize,
            slide: true,
            slideToShow: 0
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
        this.firstSlide = this.firstSlide.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    firstSlide() {
        let previousIndex = this.state.slideIndex;
        this.setState({
            previousIndex: previousIndex,
            slideIndex: 0,
            slide: false
        });
    }

    nextSlide() {
        let nextSlideIdex = this.state.slideIndex + 1;
        if (nextSlideIdex >= this.state.mdChapterSize) {
            console.log('çondition fail');
            return;
        }
        this.setState({
            slideIndex: nextSlideIdex,
            slide: false
        });
    }

    previousSlide() {
        let previousSlide = this.state.slideIndex - 1;
        if (previousSlide < 0) {
            previousSlide = 0;
        }
        this.setState({
            slideIndex: previousSlide,
            slide: false
        });
    }
    onExited() {
        this.setState({
            slideToShow: this.state.slideIndex,
            slide: true
        });
    }

    render() {
        const { classes } = this.props;
        console.log(this.props)
        /*check first line */
        //let separatedMdContent = this.state.mdChapters.map(mdPart => (<MarkdownView children={mdPart} enqueueSnackbar={this.props.enqueueSnackbar} mdInfo={this.props.mdInfo} />));
        const mdToShowIn = (
            <Switch>
                <Route exact path={`${this.props.match.url}/:id`} render={({ match }) => {
                    if ((match.params.id >= 0) && (match.params.id < this.state.mdChapterSize)) {
                        this.setState({ slideIndex: match.params.id });
                    }
                    return (
                        // <Post post={posts.find(p => p.id === match.params.id)} />
                        <Fade in={this.state.slide} unmountOnExit={true} mountOnEnter={true} onExited={this.onExited}>
                            {/*div is here to make fade work. fade is not accept custome component as child */}
                            <div>
                                <MarkdownView children={this.state.mdChapters[this.state.slideToShow]} enqueueSnackbar={this.props.enqueueSnackbar} mdInfo={this.props.mdInfo} />
                            </div>
                        </Fade>
                    )
                }} />
                <Redirect exact from={`${this.props.match.url}`} to={`${this.props.match.url}/0`} />
            </Switch>
        );
        // const mdToShowOut = (
        //     <Slide direction="up" in={false}>
        //         <MarkdownView children={this.state.mdChapters[this.state.previousIndex]} enqueueSnackbar={this.props.enqueueSnackbar} mdInfo={this.props.mdInfo} />
        //     </Slide>
        // );
        return (
            <Box justify="flex-start" spacing={0} style={{ padding: 24 }}>
                {mdToShowIn}
                <Tooltip title="First slide" aria-label="First slide">
                    {/* <Fab aria-label={'First slide'} className={classes.fabLL} color={'primary'} onClick={this.firstSlide}> */}
                    <Fab aria-label={'First slide'} className={classes.fabLL} color={'primary'} component={Link} to={`${this.props.match.url}/0`}>
                        <Replay />
                    </Fab>
                </Tooltip>
                <Tooltip title="Previous slide" aria-label="Previous slide">
                    <Fab aria-label={'Previous slide'} className={classes.fabL} color={'primary'} onClick={this.previousSlide}>
                        <KeyboardArrowLeft />
                    </Fab>
                </Tooltip>
                <Fab aria-label={'Slide'} className={classes.fabC} variant="extended">
                    {`  ${this.state.slideIndex + 1} / ${this.state.mdChapters.length}  `}
                </Fab>
                <Tooltip title="Next slide" aria-label="Next slide">
                    <Fab aria-label={'Next slide'} className={classes.fabR} color={'primary'} onClick={this.nextSlide}>
                        <KeyboardArrowRight />
                    </Fab>
                </Tooltip>

            </Box>
        )
    }
}

export default withStyles(styles)(PresentationView);