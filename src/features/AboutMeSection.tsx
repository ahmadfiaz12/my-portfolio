import React from 'react';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

const AboutMeSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-12 px-6 lg:px-24 flex flex-col lg:flex-row items-start">
      {/* Text Content */}
      <div className="lg:w-1/2 space-y-6 mb-12 lg:mb-0">
        <h3 className="text-lg font-light text-gray-400">About Me</h3>
        <h2 className="text-4xl font-semibold leading-snug">
          Professional <span className="text-lime-500">Problem Solutions</span> For Digital Products
        </h2>
        <p className="text-gray-400">
          At vero eos et accusamus etodio dignissimos ducimus praesentium voluptatum corrupti quos dolores quas molestias excepturi sint occaecati cupiditate provident qui officia deserunt mollitia animi, id est laborum et dolorum.
        </p>

        {/* Services List */}
        <ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-lg">
          <li className="flex items-center text-lime-500">
            <FaCheck className="mr-2" /> Branding & Design
          </li>
          <li className="flex items-center text-lime-500">
            <FaCheck className="mr-2" /> Digital Marketing
          </li>
          <li className="flex items-center text-lime-500">
            <FaCheck className="mr-2" /> Web Development
          </li>
          <li className="flex items-center text-lime-500">
            <FaCheck className="mr-2" /> Product Design
          </li>
        </ul>

        {/* Learn More Button */}
        <button className="mt-6 px-6 py-3 rounded-full bg-lime-500 text-black font-semibold flex items-center transition-transform transform hover:scale-105">
          Learn More <FaArrowRight className="ml-2" />
        </button>
      </div>

      {/* Experience & Profile Cards */}
      <div className="lg:w-1/2 lg:pl-12 relative">
        {/* Experience Badge */}
        <div className="bg-lime-500 text-black font-semibold text-center py-6 px-8 rounded-full absolute top-0 right-0 lg:top-16 lg:right-16 w-32 h-32 flex items-center justify-center text-2xl lg:text-3xl">
          25+ <br /> <span className="text-sm font-normal">Years Of Experience</span>
        </div>

        {/* Profile Cards */}
        <div className="mt-32 lg:mt-0 space-y-6">
          <div className="flex items-center bg-white text-black p-4 rounded-full shadow-lg">
            <img src="/path-to-image-1" alt="Experience Designer" className="w-10 h-10 rounded-full mr-3" />
            <span className="flex-grow font-semibold">Experience Designer</span>
            <FaArrowRight />
          </div>
          <div className="flex items-center bg-white text-black p-4 rounded-full shadow-lg">
            <img src="/path-to-image-2" alt="Mark J. Collins" className="w-10 h-10 rounded-full mr-3" />
            <span className="flex-grow font-semibold">Mark J. Collins</span>
            <FaArrowRight />
          </div>
          <div className="flex items-center bg-white text-black p-4 rounded-full shadow-lg">
            <img src="/path-to-image-3" alt="Experience Designer" className="w-10 h-10 rounded-full mr-3" />
            <span className="flex-grow font-semibold">Experience Designer</span>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
