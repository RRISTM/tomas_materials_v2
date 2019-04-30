import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles/hljs';
import { Grid, Button, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withSnackbar } from 'notistack';

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
    // <Grid spacing={0} style={{ padding: 12 }}>
    //   <Grid item>
    //     <SyntaxHighlighter language="C" style={docco} showLineNumbers="true">
    //       {children}
    //     </SyntaxHighlighter>
    //   </Grid>
    //   <Grid item>
    //     <Button variant="contained" size="small">
    //       Copy
    //     </Button>
    //   </Grid>
    // </Grid>

    <div>
    <Divider />
      <div>
        <SyntaxHighlighter language="C" style={docco} showLineNumbers="true">
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

