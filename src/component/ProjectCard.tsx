import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, category }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg" data-aos="fade-up" data-aos-duration="1000">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Hover effect */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="bg-white/20 backdrop-blur-lg rounded-full p-4">
          <button className="text-white font-semibold px-4 py-2 bg-black/70 hover:bg-black/80 transition-colors rounded-full">
            View
          </button>
        </div>
      </div>

      {/* Text overlay */}
      <div className="absolute bottom-4 left-4 space-y-2">
        <h3 className="text-lg font-bold text-white bg-lime-400 px-2 py-1 rounded">{title}</h3>
        <p className="text-sm text-white bg-black/60 px-2 py-1 rounded">{category}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
