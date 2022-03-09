import React, { Component, Fragment } from 'react';
import ReactMarkdown from 'markdown-to-jsx';

import { Typography, Link, Alert } from '@mui/material';

import CodeBlock from './CodeBlock';

import SvgCarousel from './SvgCarousel';

import ImageTagSelector from './ImageTagSelector';

import { GithubContext } from './GithubContext.js';
export class MarkdownView extends Component {
  // constructor(props) {
  //   super(props);
  //   //CodeBlock.bind(this.props);
  // }

  render() {
    // const { classes } = this.props;
    const options = {
      overrides: {
        h1: { component: ({ children, ...props }) => (<Typography gutterBottom variant="h4"> {children}  </Typography>), props: { classes: this.props.classes } },
        h2: { component: ({ children, ...props }) => (<Typography gutterBottom variant="h6" > {children}</Typography>), props: { classes: this.props.classes } },
        h3: { component: ({ children, ...props }) => (<Typography gutterBottom variant="subtitle1"> {children}</Typography>), props: { classes: this.props.classes } },
        h4: { component: ({ children, ...props }) => (<Typography gutterBottom variant="caption" paragraph > {children}</Typography>), props: { classes: this.props.classes } },
        p: { component: ({ children, ...props }) => (<Typography paragraph >{children} </Typography>), props: { classes: this.props.classes } },
        a: { component: Link },
        li: {
          component: ({ children, ...props }) => {
            return (
              <li >
                <Typography component="span" >{children}</Typography>
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
            return (
              <Fragment>
                <ImageTagSelector {...props} mdInfo={this.props.mdInfo} />
              </Fragment>
            )

          }
        },
        ainfo: {
          component: ({ children, ...props }) => {
            return (
              <Alert variant="filled" severity="info">
                {children}
              </Alert>
            );
          }
        },
        asuccess: {
          component: ({ children, ...props }) => {
            return (
              <Alert variant="filled" severity="success">
                {children}
              </Alert>
            );
          }
        },
        awarning: {
          component: ({ children, ...props }) => {
            return (
              <Alert variant="filled" severity="warning">
                {children}
              </Alert>
            );
          }
        },
        aerror: {
          component: ({ children, ...props }) => {
            return (
              <Alert variant="filled" severity="error">
                {children}
              </Alert>
            );
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

MarkdownView.contextType = GithubContext;

export default MarkdownView;