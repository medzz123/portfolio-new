import { Box } from '@components/Box';
import CodeBlock from '@components/Code';
import Link from '@components/Link';
import Seo from '@components/Seo';
import Text from '@components/Text';
import { NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import React from 'react';

import { useReadingTime } from './Blog.hooks';
import { BlogProps } from './Blog.models';
import { BlogContainer, Divider, TagsContainer } from './Blog.styles';

const Blog: NextPage<BlogProps> = (props) => {
  const { source, frontMatter } = props;
  const { readingLength, articleRef } = useReadingTime();

  const tags = frontMatter.tags.trim().split(',');

  return (
    <BlogContainer>
      <Seo title={frontMatter.title} description={frontMatter.description} />

      <Box css={{ width: '$full' }}>
        <Box css={{ mb: '$20' }}>
          <Text variant="h1" mb="none">
            {frontMatter.title}
          </Text>
          <TagsContainer>
            {tags.map((tag) => (
              <Text variant="span" key={tag} level="info" mb="none">
                {frontMatter.title}
              </Text>
            ))}
          </TagsContainer>
        </Box>

        <Box css={{ width: '$full' }}>
          <Text variant="p" level="info">
            {readingLength.min} - {readingLength.max} minutes
          </Text>
        </Box>

        <Divider />

        <article ref={articleRef}>
          <MDXRemote
            {...source}
            components={{
              Link,
              code: (props: unknown) => (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                <CodeBlock language="javascript" value={(props as any)?.children} />
              ),
              h1: (props: unknown) => <Text variant="h1" {...props} />,
              h2: (props: unknown) => <Text variant="h2" {...props} />,
              p: (props: unknown) => <Text variant="p" {...props} />,
              h3: (props: unknown) => <Text variant="h3" {...props} />,
            }}
          />
        </article>
      </Box>
    </BlogContainer>
  );
};

export default Blog;
