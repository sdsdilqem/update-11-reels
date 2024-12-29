import React from 'react';
import Post from './Post';
import type { Post as PostType } from '../types/post';

interface PostGridProps {
  posts: PostType[];
}

export default function PostGrid({ posts }: PostGridProps) {
  return (
    <div className={`
      grid gap-[5px] sm:gap-4
      grid-cols-2    /* Mobile: 2 columns */
      sm:grid-cols-3 /* Tablet: 3 columns */
      lg:grid-cols-4 /* Desktop: 4 columns */
      xl:grid-cols-5 /* Large Desktop: 5 columns */
    `}>
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}