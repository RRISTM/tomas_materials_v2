import React, { Component } from 'react';
import MarkdownView from './MarkdownView';
import { Box, Fab } from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    }
});

export class DocumentView extends Component {
    // constructor(props) {
    //     super(props);
    //     //CodeBlock.bind(this.props);
    // }

    scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    render() {
        const { classes } = this.props;
        const mdChapterRegex = /(^#\s.*\r\n\r\n)/g;
        let mdChapters = this.props.mdChapters;
        mdChapters = mdChapters.split(mdChapterRegex);
        let separatedMdContent = mdChapters.map((mdPart, key) => (<MarkdownView children={mdPart} enqueueSnackbar={this.props.enqueueSnackbar} mdInfo={this.props.mdInfo} key={key} routerLocation={this.props.routerLocation} />));
        return (
            <Box justify="flex-start" spacing={0} style={{ padding: 24 }}>
                {separatedMdContent}
                <Fab aria-label={'Add'} className={classes.fab} color={'primary'} onClick={this.scrollTop}>
                    <KeyboardArrowUp />
                </Fab>
            </Box>
        );
    }
}
DocumentView.propTypes = {
    enqueueSnackbar: PropTypes.func.isRequired,
};

export default withStyles(styles)(DocumentView);
