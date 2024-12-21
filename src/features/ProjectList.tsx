import React from 'react';
import ProjectCard from '../component/ProjectCard';

const projects = [
  {
    image: 'path/to/rocket-image.jpg',
    title: 'Digital Marketing',
    category: 'Art, Direction',
  },
  {
    image: 'path/to/pencil-rocket.jpg',
    title: 'Digital Marketing',
    category: 'Art, Direction',
  },
  // Add more projects as needed
];

const ProjectList: React.FC = () => {
  return (
    <div className="bg-black p-24">
      <h2 className="text-4xl font-bold text-white text-center mb-8">
        Explore My Projects
      </h2>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
