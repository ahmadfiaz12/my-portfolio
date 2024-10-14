import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

type Service = {
  id: number;
  title: string;
  description: string;
};

const services: Service[] = [
  { id: 1, title: 'Brand Identity Design', description: 'Dignissimos ducimus blanditiis praesen' },
  { id: 2, title: 'Website Design', description: 'Dignissimos ducimus blanditiis praesen' },
  { id: 3, title: 'Mobile Application Design', description: 'Dignissimos ducimus blanditiis praesen' },
  { id: 4, title: 'Motion Graphics Design', description: 'Dignissimos ducimus blanditiis praesen' },
  { id: 5, title: 'Website Development', description: 'Dignissimos ducimus blanditiis praesen' },
  { id: 6, title: 'SEO & Digital Marketing', description: 'Dignissimos ducimus blanditiis praesen' },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-12 px-6 lg:px-24">
      <div className="text-center mb-12">
        <h3 className="text-xl font-light text-gray-400">Popular Services</h3>
        <h2 className="text-4xl font-semibold text-white mt-2">
          My <span className="text-lime-500">Special Service</span> For your Business Development
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map(service => (
          <div 
            key={service.id}
            className="flex items-center justify-between bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <div>
              <h4 className="text-lg font-semibold text-white mb-1">0{service.id}. {service.title}</h4>
              <p className="text-gray-400">{service.description}</p>
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full text-white">
              <FaArrowRight />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
