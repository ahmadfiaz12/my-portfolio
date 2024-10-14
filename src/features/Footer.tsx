import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 md:flex md:justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <div className="text-lime-400 text-3xl">✳</div>
          <h2 className="text-2xl font-bold">Noxfolio</h2>
        </div>

        {/* Center Section - Menu */}
        <nav className="my-4 md:my-0 md:flex md:space-x-6">
          <a href="#" className="text-gray-300 hover:text-lime-400">Service</a>
          <a href="#" className="text-gray-300 hover:text-lime-400">Projects</a>
          <a href="#" className="text-gray-300 hover:text-lime-400">Pricing</a>
          <a href="#" className="text-gray-300 hover:text-lime-400">Faqs</a>
          <a href="#" className="text-gray-300 hover:text-lime-400">News</a>
          <a href="#" className="text-gray-300 hover:text-lime-400">Contact</a>
        </nav>
      </div>

      {/* Terms Section */}
      <div className="max-w-7xl mx-auto px-4 text-center mt-6 text-gray-400">
        <p>
          These Terms will be applied fully and affect to your use of this Website. By using
          this Website, you agreed to accept all terms and conditions written in here.
        </p>
      </div>

      {/* Social Media & Copyright Section */}
      <div className="max-w-7xl mx-auto px-4 mt-6 flex flex-col md:flex-row items-center justify-between text-gray-400">
        {/* Social Media */}
        <div className="flex space-x-4 items-center">
          <span>Follow:</span>
          <a href="#" className="text-xl hover:text-lime-400">🐦</a>
          <a href="#" className="text-xl hover:text-lime-400">📘</a>
          <a href="#" className="text-xl hover:text-lime-400">📸</a>
          <a href="#" className="text-xl hover:text-lime-400">📌</a>
        </div>

        {/* Copyright */}
        <div className="mt-4 md:mt-0 text-gray-500">
          <p>
            Copyright &copy;2024, <span className="text-lime-400">Noxfolio</span> All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
