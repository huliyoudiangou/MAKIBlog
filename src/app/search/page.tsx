'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { getPosts, Post } from '../../lib/posts';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams?.get('q') || '';
  const [results, setResults] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts();
      const filteredPosts = allPosts.filter(
        (post: Post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.content.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredPosts);
    };

    fetchPosts();
  }, [query]);

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">搜索结果: {query}</h1>
      {results.length > 0 ? (
        <div className="grid gap-6">
          {results.map((post: Post) => (
            <Link href={`/posts/${post.slug}`} key={post.slug} className="block">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-400">没有找到相关结果。</p>
      )}
    </>
  );
}

export default function SearchPage() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Suspense fallback={<div>加载中...</div>}>
            <SearchResults />
          </Suspense>
        </div>
      </div>
    </div>
  );
}