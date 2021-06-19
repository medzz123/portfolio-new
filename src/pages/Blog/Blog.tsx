import CodeBlock from '@components/Code';
import Link from '@components/Link';
import Text from '@components/Text';
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
  // eslint-disable-next-line react/display-name
  h1: (props: unknown) => {
    console.log({ props });

    return <Text variant="h1" {...props} />;
  },
  // eslint-disable-next-line react/display-name
  h2: (props: unknown) => {
    console.log({ props });

    return <Text variant="h2" {...props} />;
  },
  // eslint-disable-next-line react/display-name
  p: (props: unknown) => {
    console.log({ props });

    return <Text variant="p" {...props} />;
  },
  // eslint-disable-next-line react/display-name
  h3: (props: unknown) => {
    console.log({ props });

    return <Text variant="h3" {...props} />;
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
        <Text variant="h1">{frontMatter.title}</Text>
        <MDXRemote {...source} components={components} />
      </div>
    </BlogContainer>
  );
};

export default Blog;
