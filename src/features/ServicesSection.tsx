import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import "./service.css"

type Service = {
  id: number;
  title: string;
  description: string;
};

const services: Service[] = [
  { id: 1, title: 'Responsive Web Design', description: 'Creating seamless experiences across all devices with pixel-perfect layouts.' },
  { id: 2, title: 'Single Page Applications (SPA)', description: 'Building fast and dynamic user interfaces using modern JavaScript frameworks.' },
  { id: 3, title: 'Mobile-First Design', description: 'Ensuring mobile-friendly designs that prioritize user experience on any screen size.' },
  { id: 4, title: 'UI/UX Design Integration', description: 'Translating wireframes and prototypes into fully interactive interfaces.' },
  { id: 5, title: 'Front-End Development', description: 'Transforming designs into clean, efficient, and reusable code using HTML, CSS, and JavaScript.' },
  { id: 6, title: 'Performance Optimization', description: 'Enhancing website speed and responsiveness for a smooth user experience.' },
];


const ServicesSection: React.FC = () => {
  return (
    <>
      <section className="bg-black text-white py-12 px-6 lg:p-24">
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
              className="flex items-center justify-between bg-[#1F1F1F] p-6 rounded-lg shadow-lg transition-all ease-in-out transform border-2 border-transparent hover:border-lime-400 cursor-pointer hover:bg-black"
            >
              <div className="flex">
              0{service.id}.
              </div>
              <div className='flex flex-col gap-2 mx-10'>
                <h4 className="text-lg font-semibold text-white mb-1"> {service.title}</h4>
                <p className="text-gray-400">{service.description}</p>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full text-white">
                <FaArrowRight />
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-black py-20">

        <div className="marquee-text">
          <div className="marquee-text-track">
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>CSS</p>
            <p>TailwindCSS</p>
            <p>Accessibility</p>
            <p>React</p>
            <p>Mantine</p>
            <p aria-hidden="true">JavaScript</p>
            <p aria-hidden="true">TypeScript</p>
            <p aria-hidden="true">CSS</p>
            <p aria-hidden="true">TailwindCSS</p>
            <p aria-hidden="true">Accessibility</p>
            <p aria-hidden="true">React</p>
            <p aria-hidden="true">Angular</p>
          </div>
        </div>
      </div>
    </>

  );
};

export default ServicesSection;
