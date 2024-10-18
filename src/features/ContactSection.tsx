import React from 'react';
import { FaPhoneAlt,  FaWhatsapp, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import Colors from '../contants/colors';

const ContactSection: React.FC = () => {
  return (
    <section className="text-white p-10 py-24">
      <div className="flex px-10 gap-14">
        {/* Left Section - Contact Info */}
        <div className="space-y-6 w-[35%]">
          <p className="text-gray-400 font-semibold">
            Get in Touch
          </p>
          <h2 className="text-5xl font-normal">Let's Talk For your <span className="text-lime-400">Next Projects</span></h2>
          <p className="text-gray-400">
  Ready to bring your ideas to life? Let's create something remarkable together. Reach out, and let's turn your vision into reality.
</p>
          <div className='space-y-3'>
            <p className="flex gap-2 cursor-pointer items-center text-gray-300">
              <span className="mr-2"><FaLocationDot color={Colors.primaryColor} />
              </span> Multan, Pakistan
            </p>
            <p className="flex gap-2 cursor-pointer items-center text-gray-300">
              <span className="mr-2"><MdEmail color={Colors.primaryColor} />
              </span> ahmadfiaz9089@gmail.com
            </p>
            <p className="flex gap-2 cursor-pointer items-center text-gray-300">
              <span className="mr-2"><FaPhoneAlt color={Colors.primaryColor} />
              </span> +92 306 6495894
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Follow Me</h3>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="text-sm bg-white p-3 rounded-3xl hover:bg-[#c9f31d] transition-all delay-100 text-black"><FaLinkedinIn />

              </a>
              <a href="#" className="text-sm bg-white p-3 rounded-3xl hover:bg-[#c9f31d] transition-all delay-100 text-black"><FaFacebookF />

              </a>
              <a href="#" className="text-sm bg-white p-3 rounded-3xl hover:bg-[#c9f31d] transition-all delay-100 text-black"><FaWhatsapp />

              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-[#1F1F1F] flex-1 p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Richard D. Hammond"
                  className="w-full bg-[#2F2F2F] text-gray-300 border mt-2 font-semibold border-gray-700 rounded-lg px-4 py-4 focus:bg-black focus:text-white focus:outline-none focus:border-lime-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="support@gmail.com"
                  className="w-full bg-[#2F2F2F] text-gray-300 border mt-2 font-semibold border-gray-700 rounded-lg px-4 py-4 focus:bg-black focus:text-white focus:outline-none focus:border-lime-400"
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
                  className="w-full bg-[#2F2F2F] text-gray-300 border mt-2 font-semibold border-gray-700 rounded-lg px-4 py-4 focus:bg-black focus:text-white focus:outline-none focus:border-lime-400"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="w-full bg-[#2F2F2F] text-gray-300 border mt-2 font-semibold border-gray-700 rounded-lg px-4 py-4 focus:bg-black focus:text-white focus:outline-none focus:border-lime-400"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                placeholder="Write message"
                rows={4}
                className="w-full bg-[#2F2F2F] text-gray-300 border mt-2 font-semibold border-gray-700 rounded-lg px-4 py-4 focus:bg-black focus:text-white focus:outline-none focus:border-lime-400"              ></textarea>
            </div>
            <button
              type="submit"
              className="w-[max-content] px-10 bg-lime-400 text-black font-semibold py-3 rounded-lg shadow-md hover:bg-lime-500 transition-colors"
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
