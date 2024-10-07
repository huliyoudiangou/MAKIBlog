import React from 'react'

const MDXLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <article className="prose lg:prose-xl dark:prose-invert mx-auto py-8">
      {children}
    </article>
  )
}

export default MDXLayout