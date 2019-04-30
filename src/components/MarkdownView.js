import React, { Component, Fragment } from 'react';
import ReactMarkdown from 'markdown-to-jsx';
// import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import CodeBlock from './CodeBlock';
import testPath from '../markdown/QSPI.md';
import { Grid } from '@material-ui/core';

import { withSnackbar } from 'notistack';
import PropTypes from 'prop-types';

// import { withStyles } from '@material-ui/core/styles';

// const styles = theme => ({
//   listItem: {
//     marginTop: theme.spacing(1),
//   },
// });

// const styles = theme => ({

// });



export class MarkdownView extends Component {
  constructor(props) {
    super(props);
    CodeBlock.bind(this.props);
    this.state = { mdContent: "" };
  }

  componentWillMount() {
    fetch(testPath).then((response) => response.text()).then((text) => {
      this.setState({ mdContent: text })
    });
  }
  render() {
    const options = {
      overrides: {
        h1: { component: ({ children, ...props }) => (<Typography gutterBottom variant="h4"> {children}  </Typography>) },
        h2: { component: ({ children, ...props }) => (<Typography gutterBottom variant="h6" > {children}</Typography>) },
        h3: { component: ({ children, ...props }) => (<Typography gutterBottom variant="subtitle1" > {children}</Typography>) },
        h4: { component: ({ children, ...props }) => (<Typography gutterBottom variant="caption" paragraph > {children}</Typography>) },
        p: { component: ({ children, ...props }) => (<Typography paragraph >{children} </Typography>) },
        a: { component: Link },
        li: {
          component: ({ children, ...props }) => (
            <li {...props}>
              <Typography component="span" >{children}</Typography>
            </li>
          )
        },
        code: {
          component: CodeBlock,
          props: this.props
        },
        pre: { component: ({ children, ...props }) => (<Fragment>{children}</Fragment>) },
      },
    };
    return (
      <Grid container justify="center" spacing={0} style={{ padding: 24 }}>
        <Grid item>
          <ReactMarkdown children={this.state.mdContent} options={options} />
        </Grid>
      </Grid>
    );
  }
}

MarkdownView.propTypes = {
  enqueueSnackbar: PropTypes.func.isRequired,
};


// export default withStyles(styles)(MarkdownView);
export default MarkdownView;