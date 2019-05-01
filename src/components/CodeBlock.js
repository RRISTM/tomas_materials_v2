import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/styles/hljs';
import { Button, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { atomOneLight } from 'react-syntax-highlighter/dist/styles/hljs';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function CodeBlock({ children, ...props }) {

  /*copy the clipboard */
  function copyToClipBoard(e)
  {
    props.enqueueSnackbar('Copied to clipboard!', { variant: 'info'});
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
        <SyntaxHighlighter language="cpp" style={atomOneLight} showLineNumbers="true" codeTagProps={{style: {fontFamily: 'inherit'} }}>
          {children}
        </SyntaxHighlighter>
      </div>
      <div>
        <Button variant="contained" size="small" style={{ marginBottom: 12}} color="primary" onClick={copyToClipBoard}>
          Copy
        </Button>
      </div>
      <Divider />
    </div>
  );
}

export default withStyles(styles)(CodeBlock);

