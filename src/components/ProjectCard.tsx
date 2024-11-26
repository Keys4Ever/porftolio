import React from 'react';
import AButton from './AButton.tsx';
import Tags from './Tags.tsx';

interface ProjectCardProps {
  title: string;
  imgSrc: string;
  imgAlt: string;
  description: string;
  githubLink: string;
  projectLink: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  imgSrc, 
  imgAlt, 
  description, 
  githubLink, 
  projectLink, 
  tags 
}) => {
  
  const handleClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div 
      onClick={() => handleClick(projectLink)} 
      className="bg-card-background mb-8 h-auto w-full max-w-4xl mx-auto border-[3px] border-card-border rounded-xl grid md:grid-cols-2 transition-transform duration-300 transform hover:scale-[1.02] cursor-pointer no-underline group"
    >
      {/* Imagen a la izquierda */}
      <img 
        src={imgSrc} 
        alt={imgAlt} 
        className="w-full h-80 object-cover rounded-md bg-cover mx-auto md:mx-0" 
      />

      {/* Contenido a la derecha */}
      <div className="p-4 flex flex-col justify-between h-full">
        <div className="font-medium text-ellipsis flex justify-between items-start">
          {/* Título y botón de GitHub juntos en línea */}
          <h2 className="text-2xl md:text-4xl underline text-text-secondary transition-colors duration-300 group-hover:text-text-primary mb-2">
            {title}
            <svg 
              className="inline-block ml-2 w-8 h-8 text-text-secondary group-hover:text-text-primary" 
              stroke="#fff" 
              fill="currentColor" 
              strokeWidth="0" 
              viewBox="0 0 24 24" 
              height="1em" 
              width="1em" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
              <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
            </svg>
          </h2>
          {/* Botón de GitHub al lado del título */}
          <AButton 
            src="/logos/github.png" 
            alt="Github Logo" 
            href={githubLink}  
          />
        </div>
        <p className="text-text-secondary mb-4">{description}</p>

        {/* Etiquetas */}
        <div className="mt-auto"> {/* Esto empuja las etiquetas hacia el final del contenedor */}
          <ul className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <Tags key={index} tag={tag} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
