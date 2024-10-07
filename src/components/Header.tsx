'use client';

import React from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';
import { useThemeContext } from '../lib/theme';
import { Sun, Moon } from 'lucide-react';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <header className="bg-gray-100 dark:bg-gray-900 py-4">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex justify-between items-center sm:w-auto">
              <Link href="/" className="text-3xl font-bold text-gray-800 dark:text-white" style={{
                fontFamily: "'Caveat', cursive",
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
              }}>
                MAKIBlog
              </Link>
              <button
                onClick={toggleTheme}
                className="mode-toggle-button sm:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors duration-200"
              >
                {isDark ? <Sun className="text-gray-200" /> : <Moon className="text-gray-800" />}
              </button>
            </div>
            <div className="w-full sm:w-auto sm:flex sm:items-center sm:space-x-4">
              <div className="w-full sm:w-auto mb-4 sm:mb-0">
                <SearchBar />
              </div>
              <button
                onClick={toggleTheme}
                className="mode-toggle-button hidden sm:block p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors duration-200"
              >
                {isDark ? <Sun className="text-gray-200" /> : <Moon className="text-gray-800" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;