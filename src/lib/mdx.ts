import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';

export async function serializeMdx(source: string) {
  const mdxSource = await serialize(source, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  });
  return mdxSource;
}