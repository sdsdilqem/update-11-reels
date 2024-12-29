import React from 'react';

interface SearchTagsProps {
  tags: string[];
}

export default function SearchTags({ tags }: SearchTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag}
          className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 rounded-full text-sm text-gray-600 transition-colors"
        >
          {tag}
        </button>
      ))}
    </div>
  );
}