import React from 'react';
import logo from "../assets/images/logo.png"
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import Colors from '../contants/colors';


const Footer: React.FC = () => {
  return (
    <footer className=" text-white ">
      <div className="w-full bg-black px-24 h-[300px] items-center flex justify-between ">
        {/* Left Section */}
        <div className="flex flex-col ">
          <img src={logo} className='w-20 object-cover' alt="" data-aos="fade-up" data-aos-duration="1000" />
          <p data-aos="fade-up" data-aos-duration="1000">I Design Experiences, Not Just Interfaces.</p>
        </div>

        {/* Center Section - Menu */}


        <div className="quick-links ">
          <div className="title text-xl" data-aos="fade-up" data-aos-duration="1000">Quick Links</div>
          <div className="flex flex-col mt-10">
            <nav className="md:flex md:space-x-6">
              <a href="#" className="text-gray-300 hover:text-lime-400" data-aos="fade-up" data-aos-duration="1000">Service</a>
              <a href="#" className="text-gray-300 hover:text-lime-400" data-aos="fade-up" data-aos-duration="1010">Projects</a>
              <a href="#" className="text-gray-300 hover:text-lime-400" data-aos="fade-up" data-aos-duration="1020">Pricing</a>
              <a href="#" className="text-gray-300 hover:text-lime-400" data-aos="fade-up" data-aos-duration="1030">News</a>
              <a href="#" className="text-gray-300 hover:text-lime-400" data-aos="fade-up" data-aos-duration="1040">Contact</a>
            </nav>
          </div>
        </div>
        {/*  */}
        <div className="address">
          <div className="title text-xl" data-aos="fade-up" data-aos-duration="1000">Address</div>
          <div className='flex flex-col gap-3 mt-5'>
            <p className="flex gap-2 cursor-pointer items-center text-gray-300" data-aos="fade-up" data-aos-duration="1010">
              <span className="mr-2"><FaLocationDot color={Colors.primaryColor} />
              </span> Multan, Pakistan
            </p>
            <p className="flex gap-2 cursor-pointer items-center text-gray-300" data-aos="fade-up" data-aos-duration="1020">
              <span className="mr-2"><MdEmail color={Colors.primaryColor} />
              </span> ahmadfiaz9089@gmail.com
            </p>
            <p className="flex gap-2 cursor-pointer items-center text-gray-300" data-aos="fade-up" data-aos-duration="1030">
              <span className="mr-2"><FaPhoneAlt color={Colors.primaryColor} />
              </span> +92 306 6495894
            </p>
          </div>

        </div>
      </div>


      {/* Terms Section */}

      {/* Social Media & Copyright Section */}
      <div className="w-full py-5 text-center  bg-[#131313] px-24 flex justify-between text-gray-400">
        <p >
          Copyright &copy;2024, Made by <span className="text-lime-400">Ahmad</span>
        </p>
        <div className="social space-x-14" >
          <a href="">Linkdin</a>
          <a href="">Whatsapp</a>
          <a href="">Facebook</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
