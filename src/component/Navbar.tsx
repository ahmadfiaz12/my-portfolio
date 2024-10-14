import React, { useState, useEffect } from 'react';

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
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black bg-opacity-90 shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0">
                        {/* Logo */}
                        <a href="#">
                            <img
                                src="/path-to-your-logo.png"
                                alt="Logo"
                                className="h-8 w-auto"
                            />
                        </a>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
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
