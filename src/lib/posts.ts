import path from 'path';
import matter from 'gray-matter';

export interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
}

export async function getPosts(): Promise<Post[]> {
  // 这里我们将改为从 API 获取数据
  const response = await fetch('/api/posts');
  const posts = await response.json();
  return posts;
}