import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Markdown from 'react-markdown';
import testPath from '../markdown/testfile.md';
import SyntaxHighlighter from 'react-syntax-highlighter';

export class MarkdownView extends Component {
  constructor(props) {
    super(props);

    this.state = { mdContent: null };
    this.codeRef = React.createRef();
  }

  componentWillMount() {
    console.log('Component will mount');
    fetch(testPath).then((response) => response.text()).then((text) => {
      this.setState({ mdContent: text })
    });
  }
  componentDidMount() {
    console.log('Component did mount');
    // this.highlightCode();
    // const node = ReactDOM.findDOMNode(this);
    // console.log(node.querySelectorAll('pre code'));
    // console.log(this.codeRef);
    // this.codeRef.querySelectorAll('pre code').forEach((block) => {
    //   hljs.highlightBlock(block);
    // });

    const node = ReactDOM.findDOMNode(this);
    console.log(node);
    // Get child nodes
    if (node instanceof HTMLElement) {
      const child = node.querySelectorAll(' div');
      console.log(child);
    }
  }

  // highlightCode() {
  //   console.log(this.codeEl);
  //   this.codeEl.querySelectorAll('pre code').forEach((block) => {
  //     hljs.highlightBlock(block);
  //   });
  // }

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
