import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';

import { Container, Box, Button, Paper, MobileStepper, Alert, Fab } from '@mui/material';

import { KeyboardArrowLeft, KeyboardArrowRight, PlayArrow, Pause } from '@mui/icons-material';

export class SvgCarousel extends Component {
    static propTypes = { src: PropTypes.string };

    constructor(props) {

        super(props);
        this.state = { imageDescription: {}, imagesLoaded: false, imageIndex: 0, imageCount: 0, timeoutId: null, pause: true };
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.onTimeout = this.onTimeout.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.handlePausePlay = this.handlePausePlay.bind(this);
    }
    componentWillUnmount() {
        clearTimeout(this.state.timeoutId);
    }
    componentDidMount() {
        /* featch */
        const sourcePath = this.props.src;
        fetch(sourcePath).then((response) => {
            return response.json();
        }).then((jsonData) => {
            this.setState({ imageDescription: jsonData, imagesLoaded: true, imageCount: jsonData.sequence.length });
        });
    }

    handleNext() {
        let nextImageIndex = this.state.imageIndex + 1;
        if (nextImageIndex >= this.state.imageCount) {
            nextImageIndex = 0;
        }
        this.setState({ imageIndex: nextImageIndex });
    }

    handleBack() {
        let nextImageIndex = this.state.imageIndex - 1;
        if (nextImageIndex < 0) {
            nextImageIndex = this.state.imageCount - 1;
        }
        this.setState({ imageIndex: nextImageIndex });
    }

    onTimeout() {
        const timeoutId = setTimeout(this.onTimeout, this.state.imageDescription.interval);
        this.setState({ timeoutId: timeoutId });
        this.handleNext();
    }
    onMouseEnter() {
        clearTimeout(this.state.timeoutId);
    }
    onMouseLeave() {
        let timeoutId = setTimeout(this.onTimeout, this.state.imageDescription.interval);
        this.setState({ timeoutId: timeoutId });
    }

    handlePausePlay() {
        let newPause = false;
        if (this.state.pause) {
            newPause = false;
            const timeoutId = setTimeout(this.onTimeout, this.state.imageDescription.interval);
            this.setState({ timeoutId: timeoutId, pause: newPause });
        } else {
            newPause = true;
            clearTimeout(this.state.timeoutId);
            this.setState({ pause: newPause });
        }
    }

    render() {
        // const imagePath = this.state.imageDescription.path;
        const { sequence } = this.state.imageDescription;
        let imagesToShow = [];
        let textToShow = [];
        if (this.state.imagesLoaded) {
            imagesToShow = this.state.imageDescription.sequence.map((value, index) => {
                let hidden = { display: 'none', maxWidth: '100%', height: 'auto' };
                if (index === this.state.imageIndex) {
                    hidden = { maxWidth: '100%', height: 'auto' };
                }
                const item = (
                    <Box key={index} sx={{ justifyContent: "center", display: "flex" }} onClick={this.handlePausePlay}>
                        <img key={index} alt={index} src={this.props.mdPath + '/img/' + value.name} title={value.name} style={hidden}>
                        </img>
                    </Box>
                );
                return item;
            });

            textToShow = this.state.imageDescription.sequence.map((value, index) => {
                let hidden = { display: 'none', padding: theme => theme.spacing(2) };
                if (index === this.state.imageIndex) {
                    hidden = { padding: theme => theme.spacing(2) };
                }
                if (value.hasOwnProperty('text')) {
                    const item = (
                        <Box sx={hidden}>
                            <Alert key={index} variant="outlined" severity="info" >
                                {value.text}
                            </Alert>
                        </Box>
                    );
                    return item;
                } else {
                    return null;
                }

            });
        }

        let stepsCount = 0;
        let stepVariant = 'dots';
        if (this.state.imagesLoaded) {
            stepsCount = sequence.length;
            if (stepsCount > 10) {
                stepVariant = 'progress';
            }
        }
        return (
            <Paper>
                {/* <Container>
                    <Carousel autoPlay={true} timeout={timeout} interval={interval} animation={'fade'}>
                        {imagesToShow}
                    </Carousel>

                </Container> */}
                <Fab size="small" sx={{
                    top: theme => theme.spacing(2),
                    left: theme => theme.spacing(2)
                }} aria-label="Play/Pause" onClick={this.handlePausePlay}>
                    {this.state.pause ? <PlayArrow /> : <Pause />}
                </Fab>
                <Container >
                    {imagesToShow}
                    <MobileStepper
                        variant={stepVariant}
                        steps={stepsCount}
                        position="static"
                        activeStep={this.state.imageIndex}
                        // sx={{ maxWidth: 400, flexGrow: 1 }}
                        nextButton={
                            <Fragment>
                                <Button size="small" onClick={this.handleNext} >
                                    Next
                                    <KeyboardArrowRight />
                                </Button>
                            </Fragment>
                        }
                        backButton={
                            <Button size="small" onClick={this.handleBack} >
                                <KeyboardArrowLeft />
                                Back
                            </Button>
                        }
                    />
                </Container>

                {/* <Alert sx={{ margin: theme => theme.spacing(2) }} variant="outlined" severity="info">
                    This is an info alert — check it out!
                </Alert> */}
                {textToShow}
            </Paper >
        )
    }
}

export default SvgCarousel;


/*

json = {
    images:[
        {name:'ab.gif',
        path:'./img'}

    ],
    sequence:[
        {name:'ab.gif',
        timeLength: 500
    }
    ]
}
 */