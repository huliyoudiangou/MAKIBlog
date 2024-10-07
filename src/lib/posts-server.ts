import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
}

export function getPostsFromFileSystem(): Post[] {
  const postsDirectory = path.join(process.cwd(), 'src', 'content');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      date: data.date,
      content: content,
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}