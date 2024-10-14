import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Let's Talk For your <span className="text-lime-400">Next Projects</span></h2>
          <p className="text-gray-400">
            Sed ut perspiciatis unde omnis natus totam rem aperiam eaque inventore veritatis
          </p>
          <div>
            <h3 className="text-xl font-semibold">Main Office</h3>
            <p className="flex items-center text-gray-300">
              <span className="mr-2">📍</span> 55 Main Street, 2nd block, New York City
            </p>
            <p className="flex items-center text-gray-300">
              <span className="mr-2">✉️</span> support@gmail.com
            </p>
            <p className="flex items-center text-gray-300">
              <span className="mr-2">📞</span> +880 (123) 456 88
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl">🌐</a>
              <a href="#" className="text-2xl">🌐</a>
              <a href="#" className="text-2xl">🌐</a>
              <a href="#" className="text-2xl">🌐</a>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Richard D. Hammond"
                  className="w-full bg-gray-900 text-gray-300 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-lime-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="support@gmail.com"
                  className="w-full bg-gray-900 text-gray-300 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-lime-400"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300">Phone Number</label>
                <input
                  type="text"
                  id="phoneNumber"
                  placeholder="+880 (123) 456 88"
                  className="w-full bg-gray-900 text-gray-300 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-lime-400"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="w-full bg-gray-900 text-gray-300 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-lime-400"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                placeholder="Write message"
                rows={4}
                className="w-full bg-gray-900 text-gray-300 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-lime-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-lime-400 text-black font-semibold py-3 rounded-lg shadow-md hover:bg-lime-500 transition-colors"
            >
              Send Us Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
