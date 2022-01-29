import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import shadesOfPurple from 'react-syntax-highlighter/dist/cjs/styles/hljs/shades-of-purple';

SyntaxHighlighter.registerLanguage('javascript', js);

const CodeBlock: React.FunctionComponent<{
  language: string;
  value: string;
}> = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={shadesOfPurple}>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
