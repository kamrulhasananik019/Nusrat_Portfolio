import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className=' bg-blue-800 text-white static top-0 '>
            <div className="container mx-auto px-4 py-4 md:flex md:items-center md:justify-between">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Nusrat Jahan</h1>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                <ul className={`md:flex md:items-center md:space-x-6 mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden'}`}>
                <li><a href="#Home" className="block py-2 md:py-0 hover:text-blue-400">Home</a></li>
                    <li><a href="#about" className="block py-2 md:py-0 hover:text-blue-400">About</a></li>
                    <li><a href="#experience" className="block py-2 md:py-0 hover:text-blue-400">Experience</a></li>
                    <li><a href="#services" className="block py-2 md:py-0 hover:text-blue-400">Services</a></li>
                    <li><a href="#portfolio" className="block py-2 md:py-0 hover:text-blue-400">Portfolio</a></li>
                    <li><a href="#clients" className="block py-2 md:py-0 hover:text-blue-400">Clients</a></li>
                    <li><a href="#contact" className="block py-2 md:py-0 hover:text-blue-400">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
