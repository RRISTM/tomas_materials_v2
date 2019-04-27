import React, { Component } from 'react';
import Markdown from 'react-markdown';
import testPath from '../markdown/testfile.md';
import CodeBlock from './CodeBlock';

export class MarkdownView extends Component {
  constructor(props) {
    super(props);

    this.state = { mdContent: null };
  }

  componentWillMount() {
    fetch(testPath).then((response) => response.text()).then((text) => {
      this.setState({ mdContent: text })
    });
  }

  render() {
    return (
      <div className="container">
        <Markdown source={this.state.mdContent} renderers={{ code: CodeBlock }} />
      </div>
    );
  }
}

export default MarkdownView;
