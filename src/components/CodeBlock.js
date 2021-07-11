import React, { Component } from 'react';
import { compose } from 'redux';

import { Button, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { withSnackbar } from 'notistack';

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  }
});

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
    console.log(this);
    let buttonShow;
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
    if (this.props.className !== undefined) {
      buttonShow = (
        <div>
          <Button variant="contained" size="small" style={{ marginBottom: 12 }} color={buttonColor} onClick={this.copyToClipBoard}>
            {buttonText}
          </Button>
        </div>);
    } else {
      buttonShow = [];
    }
    let code_content;
    if (this.props.className === "lang-c") {
      let codeLines = this.props.children.split(/\r\n|\r|\n/).length;
      let showLineNumbers;
      if (codeLines === 1) {
        showLineNumbers = false;
      } else {
        showLineNumbers = true;
      }
      code_content = (
        <div>
          <Divider />
          <div>
            <SyntaxHighlighter language="c" style={atomOneLight} showLineNumbers={showLineNumbers} wrapLongLines={true} codeTagProps={{ style: { fontFamily: 'inherit' } }}>
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
          {/* // <Typography variant="i"> */}

          <code>
            {this.props.children}
          </code>
          {/* // </Typography> */}
        </i>
      );
    }

    return code_content;
  }
}

// export default compose(withStyles(styles))(CodeBlock);
export default withSnackbar(withStyles(styles)(CodeBlock));

// withSnackbar(),