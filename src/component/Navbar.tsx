import React, { useState, useEffect } from 'react';
import logo from "../assets/images/logo.png"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Listen to scroll event and update navbar state
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50  transition-all duration-500 ${isScrolled ? 'bg-black bg-opacity-90 shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="w-[100%] lg:px-24 flex justify-between">
                <div className="flex justify-between w-full h-[80px]">
                    <div className="cursor-pointer" onClick={() => {
                            window.scrollTo({
                                behavior: 'smooth',
                                top: 0
                            })
                        }}>
                     
                            <img
                                src={logo}
                                alt="Logo"
                                className="h-24 w-auto"
                            />
                   
                    </div>
                    <div className="hidden md:flex items-center space-x-16">
                        {/* Menu items */}
                        <a href="#home" className="text-white hover:text-lime-400">
                            Home
                        </a>
                        <a href="#about" className="text-white hover:text-lime-400">
                            About
                        </a>
                        <a href="#resume" className="text-white hover:text-lime-400">
                            Resume
                        </a>
                        <a href="#services" className="text-white hover:text-lime-400">
                            Services
                        </a>
                        <a href="#projects" className="text-white hover:text-lime-400">
                            Projects
                        </a>
                        <a href="#contact" className="text-white hover:text-lime-400">
                            Contact
                        </a>
                    </div>
                    <div className="flex items-center">
                        {/* Let's Talk button */}
                        <a
                            href="#contact"
                            className="bg-lime-400 text-black font-bold py-2 px-4 rounded-full hover:bg-lime-500 transition-all duration-300"
                        >
                            Let's Talk
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
