import CodeBlock from '@components/Code';
import Link from '@components/Link';
import { NextPage } from 'next';
import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import React from 'react';

import { BlogContainer } from './Blog.styles';

const Wrapper = (props: { children: React.ReactNode }) => (
  <div style={{ padding: '20px', backgroundColor: 'tomato' }} {...props} />
);

const components = {
  Wrapper,
  Link,
  // eslint-disable-next-line react/display-name
  code: (props: { children: string }) => {
    return <CodeBlock language="javascript" value={props?.children} />;
  },
};

const Blog: NextPage<{
  source: { compiledSource: string };
  frontMatter: { title: string; description: string };
}> = ({ source, frontMatter }) => {
  return (
    <BlogContainer>
      <Head>
        <title>{frontMatter.description} | Mahedi Hasan</title>
      </Head>
      <div>
        <h1>{frontMatter.title}</h1>
        <MDXRemote {...source} components={components} />
      </div>
    </BlogContainer>
  );
};

export default Blog;
