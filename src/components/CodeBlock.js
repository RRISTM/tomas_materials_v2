import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles/hljs';

export default function CodeBlock({ children, ...props }) {
  
  console.log(props);
  return (
      <SyntaxHighlighter language="C" style={docco} showLineNumbers="true">
        {children}
      </SyntaxHighlighter>
  );
}
