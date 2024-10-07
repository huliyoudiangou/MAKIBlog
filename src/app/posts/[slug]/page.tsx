import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import ScrollToTopBottom from '../../../components/ScrollToTopBottom';

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'src', 'content'));
  
  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'src', 'content', `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const markdownFile = fs.readFileSync(filePath, 'utf-8');
  
  const { data: frontMatter, content } = matter(markdownFile);

  // 移除 Markdown 内容中的所有顶级标题（# 开头的行）
  const contentWithoutTitles = content.replace(/^# .+$/gm, '').trim();

  const readingTime = calculateReadingTime(contentWithoutTitles);

  return (
    <div className="flex-grow bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <article className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 max-w-3xl">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">{frontMatter.title}</h1>
          <div className="mb-6 text-gray-600 dark:text-gray-400 text-center text-xs sm:text-sm">
            <time>{frontMatter.date}</time>
            <span> · 阅读时间：约 {readingTime} 分钟</span>
          </div>
          <div className="text-sm sm:text-base">
            <MDXRemote source={contentWithoutTitles} />
          </div>
        </article>
      </div>
      <ScrollToTopBottom />
    </div>
  );
}