import React, { Component } from 'react';

import { Button, Divider } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { withSnackbar } from 'notistack';

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
class CodeBlock extends Component {
  // function CodeBlock({ children, ...props }) {
  constructor(props) {
    super(props);
    this.state = { timeoutCnt: 0 };
    this.copyToClipBoard = this.copyToClipBoard.bind(this);
    this.copyTimeout = this.copyTimeout.bind(this);
  }

  copyToClipBoard(e) {
    this.props.enqueueSnackbar('Code is now in your clipboard', { variant: 'info' });
    const el = document.createElement('textarea');
    el.value = this.props.children;
    document.body.appendChild(el);
    el.select();

    document.execCommand('copy');
    document.body.removeChild(el);
    let timeoutCnt = this.state.timeoutCnt;
    timeoutCnt++;
    this.setState({ timeoutCnt: timeoutCnt });
    setTimeout(this.copyTimeout, 5000);
  }

  copyTimeout() {
    let timeoutCnt = this.state.timeoutCnt;
    if (timeoutCnt > 0) {
      timeoutCnt--;
      this.setState({ timeoutCnt: timeoutCnt++ });
    }
  }

  render() {
    let buttonShow = [];
    let buttonText;
    let buttonColor;
    if (this.state.timeoutCnt > 0) {
      buttonText = '!!   Copied   !!';
      buttonColor = 'primary';
    } else {
      buttonText = 'Copy code';
      buttonColor = 'primary';
    }
    // const { classes } = props;
    /*copy the clipboard */

    let code_content;
    let lineNumber = 1;

    if ((this.props.className !== undefined) && this.props.className.includes('lang-')) {
      let filteredLanguageName = this.props.className.split('lang-').pop()
      /*handle -nc tag */
      if (filteredLanguageName.includes('-nc')) {
        filteredLanguageName = filteredLanguageName.replace('-nc', '');
      } else {
        buttonShow = (
          <div>
            <Button variant="contained" size="small" style={{ marginBottom: 12 }} color={buttonColor} onClick={this.copyToClipBoard}>
              {buttonText}
            </Button>
          </div>);
      }
      let codeLines = this.props.children.split(/\r\n|\r|\n/).length;
      let showLineNumbers;
      if (codeLines === 1) {
        showLineNumbers = false;
      } else {

        showLineNumbers = true;
      }
      if (filteredLanguageName.includes("-line")) {
        lineNumber = parseInt(filteredLanguageName.match(/-line(\d+)/)[0].replace('-line', ''));

        filteredLanguageName = filteredLanguageName.replace(/-line(\d+)/, '');
      } else {
        showLineNumbers = false;
      }
      code_content = (
        <div>
          <Divider />
          <div>
            <SyntaxHighlighter language={filteredLanguageName} style={atomOneLight} showLineNumbers={showLineNumbers} startingLineNumber={lineNumber} wrapLongLines={true} codeTagProps={{ style: { fontFamily: 'inherit' } }}>
              {/* <SyntaxHighlighter language="cpp" style={prism} showLineNumbers="true" codeTagProps={{style: {fontFamily: 'inherit'} }}> */}
              {this.props.children}
            </SyntaxHighlighter>
          </div>
          {buttonShow}
          <Divider />
        </div>
      );
    } else {
      code_content = (
        <i>
          <b>
            {/* // <Typography variant="i"> */}
            <code>
              {this.props.children}
            </code>
            {/* // </Typography> */}
          </b>
        </i>
      );
    }

    return code_content;
  }
}

export default withSnackbar(CodeBlock);
