import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const navLinkClasses = "text-white hover:text-[#c5a47e] transition-colors duration-300 font-medium px-3 py-2 uppercase tracking-wider text-sm relative underline-hover";
    const activeLinkClasses = "text-[#c5a47e]";

    const closeAllMenus = () => {
        setIsOpen(false);
        setServicesOpen(false);
    }

    return (
        <nav className="bg-[#2e3e4d] shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                        <Link to="/" onClick={closeAllMenus}>
                            <img src="jblc-logo.jpg" alt="JBLC INDIA Logo" className="h-14 w-auto rounded-lg" />
                        </Link>
                    </div>
                    <div className="hidden lg:flex items-center space-x-4">
                        <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Home</NavLink>
                        
                        <NavLink to="/about" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>About Us</NavLink>

                        <NavLink to="/team" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Our Team</NavLink>
                        <NavLink to="/career" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Career</NavLink>

                        <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                             <NavLink to="/services" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''} flex items-center`}>
                                Services <i className="fas fa-chevron-down ml-2 text-xs"></i>
                            </NavLink>
                            {servicesOpen && (
                                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-xl z-20 py-1 transition-all duration-300">
                                    <Link to="/services" onClick={() => setServicesOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#2e3e4d]">Practice Areas</Link>
                                    <Link to="/finance" onClick={() => setServicesOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#2e3e4d]">Finance Assistance</Link>
                                </div>
                            )}
                        </div>

                        <NavLink to="/contact" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Contact Us</NavLink>
                    </div>

                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-[#c5a47e] focus:outline-none">
                             <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="lg:hidden px-4 pt-2 pb-4 space-y-2 bg-[#1a2530]">
                    <NavLink to="/" className={({ isActive }) => `block ${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={closeAllMenus}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => `block ${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={closeAllMenus}>About Us</NavLink>
                    <NavLink to="/team" className={({ isActive }) => `block ${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={closeAllMenus}>Our Team</NavLink>
                    <NavLink to="/career" className={({ isActive }) => `block ${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={closeAllMenus}>Career</NavLink>
                    <NavLink to="/services" className={({ isActive }) => `block ${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={closeAllMenus}>Practice Areas</NavLink>
                    <NavLink to="/finance" className={({ isActive }) => `block ${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={closeAllMenus}>Finance Assistance</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `block ${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={closeAllMenus}>Contact Us</NavLink>
                     <Link to="/appointment" onClick={closeAllMenus} className="block bg-[#c5a47e] text-[#2e3e4d] text-center mt-2 px-5 py-3 rounded-md hover:bg-[#2e3e4d] hover:text-white transition-colors text-sm font-bold tracking-wider uppercase">
                        Make an Appointment
                     </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;