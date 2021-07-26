import CodeBlock from '@components/Code';
import Hero from '@components/Hero';
import Layout from '@components/Layout';
import Link from '@components/Link';
import Seo from '@components/Seo';
import { H1, H2, H3, P } from '@components/Text';
import { NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import React from 'react';

import { useReadingTime } from './Blog.hooks';
import { BlogProps } from './Blog.models';
import { BlogContainer } from './Blog.styles';

const Blog: NextPage<BlogProps> = (props) => {
  const { source, frontMatter } = props;
  const { readingLength, articleRef } = useReadingTime();

  const tags = frontMatter.tags.trim().split(',');

  return (
    <BlogContainer>
      <Seo title={frontMatter.title} description={frontMatter.description} />

      <Hero
        title={frontMatter.title}
        date={frontMatter.date}
        description={frontMatter.description}
        image={frontMatter.image}
        tags={tags}
      />

      <Layout>
        <P level="info">
          {readingLength.min} - {readingLength.max} minutes
        </P>

        <article ref={articleRef}>
          <MDXRemote
            {...source}
            components={{
              Link,
              code: (props: unknown) => (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                <CodeBlock language="javascript" value={(props as any)?.children} />
              ),
              h1: H1,
              h2: H2,
              p: P,
              h3: H3,
            }}
          />
        </article>
      </Layout>
    </BlogContainer>
  );
};

export default Blog;
