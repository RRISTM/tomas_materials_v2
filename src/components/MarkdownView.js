import React, { Component, Fragment } from 'react';
import ReactMarkdown from 'markdown-to-jsx';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
// import { Box } from '@material-ui/core';

import CodeBlock from './CodeBlock';
import { withStyles } from '@material-ui/core/styles';


// import PropTypes from 'prop-types';

const styles = (theme) => ({
  STdarkBlue: {
    color: '#002052'
  },
  STlightBlue: {
    color: '#39A9DC'
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }
});
export class MarkdownView extends Component {
  // constructor(props) {
  //   super(props);
  //   //CodeBlock.bind(this.props);
  // }

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
          , props: { classes: this.props.classes }
        },
        code: {
          component: CodeBlock
        },
        pre: { component: ({ children, ...props }) => (<Fragment>{children}</Fragment>) },
        img: {
          component: ({ children, ...props }) => {
            return (<Fragment><img alt={props.alt} src={process.env.PUBLIC_URL + this.props.mdInfo.mdPath + "/img/" + props.src.replace('./img/', '')} title={props.title} style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', maxWidth: '100%', height: 'auto' }}></img></Fragment>)

          }
        }
      },
    };
    return (
      <Fragment>
        <ReactMarkdown children={this.props.children} options={options} />
      </Fragment>
    );
  }
}

MarkdownView.propTypes = {
};

// export default withStyles(styles)(MarkdownView);
export default withStyles(styles)(MarkdownView);