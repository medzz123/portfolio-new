export { default } from '@pages/Blog';
import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

export async function getStaticPaths() {
  const files = fs.readdirSync('src/content');

  const paths = files.map((filename: string) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const markdownWithMetadata = fs
    .readFileSync(path.join('src/content/', slug + '.mdx'))
    .toString();

  const { content, data } = matter(markdownWithMetadata);
  const mdxSource = await serialize(content, { scope: data });
  return { props: { source: mdxSource, frontMatter: data } };
}
