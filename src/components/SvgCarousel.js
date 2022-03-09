import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Container, Box, Button, MobileStepper } from '@mui/material';

import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

export class SvgCarousel extends Component {
    static propTypes = { src: PropTypes.string };

    constructor(props) {

        super(props);
        this.state = { imageDescription: {}, imagesLoaded: false, imageIndex: 0, imageCount: 0, timeoutId: null };
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.onTimeout = this.onTimeout.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }
    componentWillUnmount() {
        clearTimeout(this.state.timeoutId);
    }
    componentDidMount() {
        /* featch */
        console.log(this.props);
        const sourcePath = this.props.src;
        fetch(sourcePath).then((response) => {
            return response.json();
        }).then((jsonData) => {
            /*set loaded data to state */
            let timeoutId = setTimeout(this.onTimeout, jsonData.interval);
            this.setState({ imageDescription: jsonData, imagesLoaded: true, imageCount: jsonData.sequence.length, timeoutId: timeoutId });
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

    render() {
        const imagePath = this.state.imageDescription.path;
        const { sequence } = this.state.imageDescription;
        let imagesToShow = [];
        if (this.state.imagesLoaded) {
            imagesToShow = this.state.imageDescription.sequence.map((value, index) => {
                let hidden = { display: 'none' };
                if (index === this.state.imageIndex) {
                    hidden = {};
                }
                const item = (
                    <Box sx={{ justifyContent: "center", display: "flex" }}>
                        <img key={index} alt={index} src={this.props.mdPath + '/img/' + value.name} title={value.name} style={hidden}>
                        </img>
                    </Box>
                );
                return item;
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
            <Box>
                {/* <Container>
                    <Carousel autoPlay={true} timeout={timeout} interval={interval} animation={'fade'}>
                        {imagesToShow}
                    </Carousel>

                </Container> */}
                <Container onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                    {imagesToShow}
                    <MobileStepper
                        variant={stepVariant}
                        steps={stepsCount}
                        position="static"
                        activeStep={this.state.imageIndex}
                        // sx={{ maxWidth: 400, flexGrow: 1 }}
                        nextButton={
                            <Button size="small" onClick={this.handleNext} >
                                Next
                                <KeyboardArrowRight />
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={this.handleBack} >
                                <KeyboardArrowLeft />
                                Back
                            </Button>
                        }
                    />
                </Container>
            </Box>



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