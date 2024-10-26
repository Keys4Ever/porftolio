import React from 'react';

interface AButtonProps {
  src: string;
  href: string;
  alt: string;
  buttonName: string;
}

const AButton: React.FC<AButtonProps> = ({ src, href, alt }) => {
  return (
    <a 
    href={href} 
    className="px-2 py-2 text-sm font-medium text-center inline-flex items-center transition-all duration-200 hover:scale-105 text-text-secondary bg-button-background rounded-md hover:bg-button-highlight focus:outline-none"
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img src={src} alt={alt} className="w-5 h-5" />
  </a>
  
  );
};

export default AButton;
