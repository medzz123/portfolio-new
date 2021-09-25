import { Box } from '@components/Box';
import CodeBlock from '@components/Code';
import Link from '@components/Link';
import Seo from '@components/Seo';
import { H1, H2, H3, P, S } from '@components/Text';
import { NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import React from 'react';

import { useReadingTime } from './Blog.hooks';
import { BlogProps } from './Blog.models';
import {
  ArticleContainer,
  BlogContainer,
  MainImage,
  MainImageContainer,
  Socials,
} from './Blog.styles';

const Blog: NextPage<BlogProps> = (props) => {
  const { source, frontMatter } = props;
  const { readingLength, articleRef } = useReadingTime();

  const tags = frontMatter.tags.trim().split(',');

  return (
    <BlogContainer>
      <Seo title={frontMatter.title} description={frontMatter.description} />

      <ArticleContainer>
        <P mb="none" level="info">
          Posted 30 January 2021. 04:00am
        </P>

        <H1 font="mulish" weight="bold" mb="none">
          iPhone 11 Max Review - Outstanding masterpiece by Apple
        </H1>

        <Box css={{ display: 'flex' }}>
          {tags.map((tag) => (
            <Box css={{ marginRight: '$12' }} key={tag}>
              <S>{tag}</S>
            </Box>
          ))}
        </Box>

        <P level="info">
          {readingLength.min} - {readingLength.max} minutes
        </P>

        <MainImageContainer>
          <MainImage></MainImage>
        </MainImageContainer>

        <Socials>
          <p>Hello</p>
        </Socials>
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
      </ArticleContainer>
    </BlogContainer>
  );
};

export default Blog;
