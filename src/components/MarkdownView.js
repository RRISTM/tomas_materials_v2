import React, { Component } from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import testPath from '../markdown/QSPI.md';


const styles = theme => ({
  listItem: {
    marginTop: theme.spacing(1),
  },
});

const options = {
  overrides: {
    h1: { component: ({ children, ...props }) => (<Typography gutterBottom variant="h4"> {children}  </Typography>)},
    h2: { component: ({ children, ...props }) => (<Typography gutterBottom variant="h6" > {children}</Typography>)},
    h3: { component: ({ children, ...props }) => (<Typography gutterBottom variant="subtitle1" > {children}</Typography>)},
    h4: { component: ({ children, ...props }) => (<Typography gutterBottom variant="caption" paragraph > {children}</Typography>)},
    p: { component: ({ children, ...props }) => (<Typography paragraph >{children} </Typography>)},
    a: { component: Link },
    li: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <li className={classes.listItem}>
          <Typography component="span" >{props}</Typography>
        </li>
      )),
    },
  },
};

export class MarkdownView extends Component {
  constructor(props) {
    super(props);

    this.state = { mdContent: "" };
  }

  componentWillMount() {
    fetch(testPath).then((response) => response.text()).then((text) => {
      console.log(text);
      this.setState({ mdContent: text })
    });
  }

  render() {
    // return <ReactMarkdown options={options} {...props} />;
    // return <ReactMarkdown children={this.state.mdContent}/>;
    return <ReactMarkdown children={this.state.mdContent} options={options}/>;
  }
}

export default MarkdownView;
