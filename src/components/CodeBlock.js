import React, { PureComponent } from 'react';
import PropTypes from "prop-types";

import { Button, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/styles/hljs';

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
  const { classes } = props;
  /*copy the clipboard */
  function copyToClipBoard(e)
  {
    props.enqueueSnackbar('Code is now in your clipboard', { variant: 'info'});
    const el = document.createElement('textarea');
      el.value = children;
      document.body.appendChild(el);
      el.select();
      
      document.execCommand('copy');
      document.body.removeChild(el);
  };
  return (
    <div>
    <Divider />
      <div>
        <SyntaxHighlighter language="cs" style={atomOneLight} showLineNumbers="true" codeTagProps={{style: {fontFamily: 'inherit'} }}>
        {/* <SyntaxHighlighter language="cpp" style={prism} showLineNumbers="true" codeTagProps={{style: {fontFamily: 'inherit'} }}> */}
          {children}
        </SyntaxHighlighter>
      </div>
      <div>
        <Button variant="contained" size="small" style={{ marginBottom: 12}} color="primary" onClick={copyToClipBoard}>
          Copy code
        </Button>
      </div>
      <Divider />
    </div>
  );
}

export default withStyles(styles)(CodeBlock);

