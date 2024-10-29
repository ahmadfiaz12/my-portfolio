import React from 'react';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import AboutMe from "../assets/images/aboutMe.png"


const AboutMeSection: React.FC = () => {
  return (
    <section id='about' className="bg-black text-white py-12 px-6 lg:p-24 flex flex-col lg:flex-row items-start">
      {/* Text Content */}
      <div className="lg:w-1/2 space-y-6 mb-12 lg:mb-0">
        <h3 className="text-lg font-light text-gray-400" data-aos="fade-up" data-aos-duration="500">About Me</h3>
        <h2 className="text-4xl font-semibold leading-snug" data-aos="fade-up" data-aos-duration="500">
          Professional <span className="text-lime-500">Problem Solutions</span> For Digital Products
        </h2>
        <p className="text-gray-400" data-aos="fade-up" data-aos-duration="500">
          At vero eos et accusamus etodio dignissimos ducimus praesentium voluptatum corrupti quos dolores quas molestias excepturi sint occaecati cupiditate provident qui officia deserunt mollitia animi, id est laborum et dolorum.
        </p>

        {/* Services List */}
        <ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-lg">
          <li className="flex items-center text-lime-500" data-aos="fade-up" data-aos-duration="1000">
            <FaCheck className="mr-2" /> Branding & Design
          </li>
          <li className="flex items-center text-lime-500" data-aos="fade-up" data-aos-duration="1010">
            <FaCheck className="mr-2" /> E-ccomerece Development
          </li>
          <li className="flex items-center text-lime-500" data-aos="fade-up" data-aos-duration="1020">
            <FaCheck className="mr-2" /> Web Development
          </li>
          <li className="flex items-center text-lime-500" data-aos="fade-up" data-aos-duration="1030">
            <FaCheck className="mr-2" /> Product Design
          </li>
        </ul>

        {/* Learn More Button */}
        <button data-aos="fade-up" data-aos-duration="500" className="mt-6 px-6 py-3 rounded-full bg-lime-500 text-black font-semibold flex items-center transition-transform transform hover:scale-105">
          Learn More <FaArrowRight className="ml-2" />
        </button>
      </div>

      {/* Experience & Profile Cards */}
      <div className="lg:w-1/2 lg:pl-12 relative">
      
      <img src={AboutMe} data-aos="fade-left" data-aos-duration="1000" className="h-auto w-[500px]" alt="" />
      </div>
    </section>
  );
};

export default AboutMeSection;
