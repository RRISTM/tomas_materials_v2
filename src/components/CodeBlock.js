import React from 'react';

import { Button, Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  }
});

function CodeBlock({ children, ...props }) {
  // const { classes } = props;
  /*copy the clipboard */
  function copyToClipBoard(e) {
    props.enqueueSnackbar('Code is now in your clipboard', { variant: 'info' });
    const el = document.createElement('textarea');
    el.value = children;
    document.body.appendChild(el);
    el.select();

    document.execCommand('copy');
    document.body.removeChild(el);
  };
  let buttonShow;
  if (props.className !== undefined) {
    buttonShow = (
      <div>
        <Button variant="contained" size="small" style={{ marginBottom: 12 }} color="primary" onClick={copyToClipBoard}>
          Copy code
    </Button>
      </div>);
  } else {
    buttonShow = [];
  }
  let code_content;
  if (props.className === "lang-c") {
    let codeLines = children.split(/\r\n|\r|\n/).length;
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
            {children}
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
          {children}
        </code>
        {/* // </Typography> */}
      </i>
    );
  }

  return code_content;
}

export default withStyles(styles)(CodeBlock);

