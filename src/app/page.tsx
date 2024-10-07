import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import ScrollToTopBottom from '../components/ScrollToTopBottom';

interface Post {
  slug: string;
  title: string;
  date: string;
}

function getPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), 'src', 'content');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      date: data.date,
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export default function Home() {
  const posts = getPosts();

  return (
    <div className="flex-grow bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-6">
            {posts.map((post) => (
              <Link href={`/posts/${post.slug}`} key={post.slug} className="block">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 border border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{post.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <ScrollToTopBottom />
    </div>
  );
}