import React, { Component } from 'react';
import MarkdownView from './MarkdownView';
import { Box, Fab } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';

const fabStyle = {
    position: 'fixed',
    bottom: 2,
    right: 2,
};
export class DocumentView extends Component {
    // constructor(props) {
    //     super(props);
    //     //CodeBlock.bind(this.props);
    // }

    scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    render() {
        const mdChapterRegex = /(^#\s.*\r\n\r\n)/g;
        let mdChapters = this.props.mdChapters;
        mdChapters = mdChapters.split(mdChapterRegex);
        let separatedMdContent = mdChapters.map((mdPart, key) => (<MarkdownView children={mdPart} enqueueSnackbar={this.props.enqueueSnackbar} mdInfo={this.props.mdInfo} key={key} routerLocation={this.props.routerLocation} />));
        return (
            <Box justify="flex-start" spacing={0} style={{ padding: 24 }}>
                {separatedMdContent}
                <Fab aria-label={'Add'} sx={fabStyle} color={'primary'} onClick={this.scrollTop}>
                    <KeyboardArrowUp />
                </Fab>
            </Box>
        );
    }
}
// DocumentView.propTypes = {
// };

export default DocumentView;
