import React, { Component, Fragment } from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import CodeBlock from './CodeBlock';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';

const styles = (theme) => ({
  STdarkBlue: {
    color: '#002052'
  },
  STlightBlue: {
    color: '#39A9DC'
  }
});


export class MarkdownView extends Component {
  constructor(props) {
    super(props);
    CodeBlock.bind(this.props);
  }

  render() {
    // const { classes } = this.props;
    const options = {
      overrides: {
        h1: { component: ({ children, ...props }) => (<Typography gutterBottom variant="h4" className={props.classes.STdarkBlue}> {children}  </Typography>), props: { classes: this.props.classes } },
        h2: { component: ({ children, ...props }) => (<Typography gutterBottom variant="h6" className={props.classes.STdarkBlue}> {children}</Typography>), props: { classes: this.props.classes } },
        h3: { component: ({ children, ...props }) => (<Typography gutterBottom variant="subtitle1" className={props.classes.STdarkBlue}> {children}</Typography>), props: { classes: this.props.classes } },
        h4: { component: ({ children, ...props }) => (<Typography gutterBottom variant="caption" paragraph className={props.classes.STdarkBlue}> {children}</Typography>), props: { classes: this.props.classes } },
        p: { component: ({ children, ...props }) => (<Typography paragraph className={props.classes.STdarkBlue}>{children} </Typography>), props: { classes: this.props.classes } },
        a: { component: Link },
        li: {
          component: ({ children, ...props }) => {
            return (
              <li className={props.classes.STlightBlue}>
                <Typography component="span" className={props.classes.STdarkBlue}>{children}</Typography>
              </li>
            );
          }
          , props: { classes: this.props.classes}
        },
        code: {
          component: CodeBlock,
          props: {enqueueSnackbar: this.props.enqueueSnackbar}
        },
        pre: { component: ({ children, ...props }) => (<Fragment>{children}</Fragment>) },
        img: {
          component: ({ children, ...props }) =>
            (<Fragment><img alt={props.alt} src={this.props.mdInfo.mdPath + "/img/" + props.src} title={props.title} style={{ padding: 24, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', maxWidth: 'calc(90vw - 300px)' }}></img></Fragment>)//TODO fix the max width
        }
      },
    };
    return (
      // <Box width={1}> 
      <Grid container justify="center" spacing={0} style={{ padding: 24 }}>
        <Grid item>
          <ReactMarkdown children={this.props.mdInfo.mdContent} options={options} />
        </Grid>
      </Grid>
      //  </Box> 
    );
  }
}

MarkdownView.propTypes = {
  enqueueSnackbar: PropTypes.func.isRequired,
};


// export default withStyles(styles)(MarkdownView);
export default withStyles(styles)(MarkdownView);