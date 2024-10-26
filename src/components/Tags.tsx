import React from 'react';

interface TagsProps {
  tag: string;
}

const Tags: React.FC<TagsProps> = ({ tag }) => {
  return (
    <li className="text-text-secondary bg-button-background/60 font-medium px-2 rounded-full text-center text-xs py-[3px] me-2 mb-2">
      {tag}
    </li>
  );
};

export default Tags;
