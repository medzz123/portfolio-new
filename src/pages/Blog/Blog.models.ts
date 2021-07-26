export interface BlogProps {
  source: { compiledSource: string };
  frontMatter: { title: string; description: string; tags: string; date: string; image: string };
}
