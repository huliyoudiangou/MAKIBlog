'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="搜索..."
        className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                   focus:outline-none
                   bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                   w-full transition-colors duration-200"
      />
    </form>
  );
};

export default SearchBar;