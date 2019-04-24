import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Markdown from 'react-markdown';
import testPath from '../markdown/testfile.md';
import SyntaxHighlighter from 'react-syntax-highlighter';

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
        <h1>Test</h1>
        <SyntaxHighlighter>
          <Markdown source={this.state.mdContent} />
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default MarkdownView;
