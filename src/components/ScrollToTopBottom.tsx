'use client';

import { useState, useEffect } from 'react';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

const ScrollToTopBottom = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
          <button
            onClick={scrollToTop}
            className="p-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition-colors duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUpIcon className="w-5 h-5" />
          </button>
          <button
            onClick={scrollToBottom}
            className="p-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition-colors duration-200"
            aria-label="Scroll to bottom"
          >
            <ArrowDownIcon className="w-5 h-5" />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTopBottom;