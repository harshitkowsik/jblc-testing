import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { modernServices } from '../data/modernServicesData'; // Import modern services data
import { ModernServiceMainHeading } from '../types'; // Import type

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [teamOpen, setTeamOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [careerOpen, setCareerOpen] = useState(false);
    // Changed to string | null for accordion behavior, tracking only the currently open main service slug
    const [openMobileServiceSlug, setOpenMobileServiceSlug] = useState<string | null>(null); 

    const navLinkClasses = "text-white hover:text-[#c5a47e] transition-colors duration-300 font-medium px-3 py-2 uppercase tracking-wider text-sm relative underline-hover";
    const activeLinkClasses = "text-[#c5a47e]";
    const mobileLinkClasses = "block px-4 py-3 text-white hover:bg-[#1a2530] transition-colors duration-300 font-medium uppercase tracking-wider text-sm relative";
    const mobileActiveLinkClasses = "bg-[#1a2530] text-[#c5a47e]";

    const closeAllMenus = () => {
        setIsMobileMenuOpen(false);
        setTeamOpen(false);
        setServicesOpen(false);
        setCareerOpen(false);
        setOpenMobileServiceSlug(null); // Close all mobile service dropdowns
    }

    const toggleMobileServiceDropdown = (slug: string) => {
        setOpenMobileServiceSlug(prevSlug => (prevSlug === slug ? null : slug)); // Toggle the current slug or open a new one
    };

    return (
        <nav className="bg-[#2e3e4d] sticky top-0 z-50 h-20">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                        <Link to="/" onClick={closeAllMenus}>
                            <img src="jblc-logo.webp" alt="JBLC INDIA Logo" className="h-14 w-auto rounded-lg" />
                        </Link>
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Home</NavLink>

                        <NavLink to="/about" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>About Us</NavLink>

                        <div className="relative" onMouseEnter={() => setTeamOpen(true)} onMouseLeave={() => setTeamOpen(false)}>
                            <NavLink to="/core-team" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''} flex items-center`}>
                                Our Team <i className="fas fa-chevron-down ml-2 text-xs"></i>
                            </NavLink>
                            {teamOpen && (
                                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-xl z-20 py-1 transition-all duration-300">
                                    <Link to="/core-team" onClick={() => setTeamOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#2e3e4d]">Core Team</Link>
                                    <Link to="/our-advocate-team" onClick={() => setTeamOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#2e3e4d]">Advocates Team</Link>
                                </div>
                            )}
                        </div>
                        <div className="relative" onMouseEnter={() => setCareerOpen(true)} onMouseLeave={() => setCareerOpen(false)}>
                            <NavLink to="/career" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''} flex items-center`}>
                                Career <i className="fas fa-chevron-down ml-2 text-xs"></i>
                            </NavLink>
                            {careerOpen && (
                                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-xl z-20 py-1 transition-all duration-300">
                                    <Link to="/career" onClick={() => setCareerOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#2e3e4d]">Open Roles</Link>
                                    <Link to="/empanelment" onClick={() => setCareerOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#2e3e4d]">Get Empanelled</Link>
                                </div>
                            )}
                        </div>

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

                    {/* Mobile Menu Icon */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:text-[#c5a47e] focus:outline-none">
                            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Side Menu */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-[#2e3e4d] transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden z-50`}>
                <div className="flex justify-between items-center h-20 px-4 border-b border-gray-700">
                    <Link to="/" onClick={closeAllMenus}>
                        <img src="jblc-logo.webp" alt="JBLC INDIA Logo" className="h-14 w-auto rounded-lg" />
                    </Link>
                    <button onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-[#c5a47e] focus:outline-none">
                        <i className="fas fa-times text-2xl"></i>
                    </button>
                </div>
                <div className="py-4 overflow-y-auto h-[calc(100%-80px)]"> {/* Scrollable content area */}
                    {/* Modern Services from Secondary Navbar content */}
                    <div className="mb-4">
                        <h3 className="px-4 py-2 text-gray-400 text-xs uppercase tracking-wider">Our Services</h3>
                        {modernServices.map((mainService: ModernServiceMainHeading) => (
                            <div key={mainService.slug} className="relative">
                                <button 
                                    onClick={() => toggleMobileServiceDropdown(mainService.slug)} 
                                    className={`${mobileLinkClasses} flex justify-between items-center w-full focus:outline-none ${openMobileServiceSlug === mainService.slug ? mobileActiveLinkClasses : ''}`}
                                >
                                    {mainService.title}
                                    <i className={`fas ${openMobileServiceSlug === mainService.slug ? 'fa-chevron-up' : 'fa-chevron-down'} text-xs ml-2`}></i>
                                </button>
                                {openMobileServiceSlug === mainService.slug && (
                                    <div className="bg-[#1a2530] py-1">
                                        <Link to={`/services/${mainService.slug}`} onClick={closeAllMenus} className={`${mobileLinkClasses} !pl-8 text-[#c5a47e] hover:text-white`}>
                                            All {mainService.title}
                                        </Link>
                                        {mainService.subHeadings.map(subService => (
                                            <Link 
                                                key={subService.slug} 
                                                to={`/services/${mainService.slug}/${subService.slug}`} 
                                                onClick={closeAllMenus} 
                                                className={`${mobileLinkClasses} !pl-8 text-gray-300 hover:text-white`}
                                            >
                                                {subService.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Existing Mobile Options (below modern services) */}
                    <h3 className="px-4 py-2 text-gray-400 text-xs uppercase tracking-wider mt-4">General Navigation</h3>
                    <NavLink to="/" className={({ isActive }) => `${mobileLinkClasses} ${isActive ? mobileActiveLinkClasses : ''}`} onClick={closeAllMenus}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => `${mobileLinkClasses} ${isActive ? mobileActiveLinkClasses : ''}`} onClick={closeAllMenus}>About Us</NavLink>
                    {/* Team dropdown - simplified for mobile side menu, can be expanded if needed */}
                    <NavLink to="/core-team" className={({ isActive }) => `${mobileLinkClasses} ${isActive ? mobileActiveLinkClasses : ''}`} onClick={closeAllMenus}>Core Team</NavLink>
                    <NavLink to="/our-advocate-team" className={({ isActive }) => `${mobileLinkClasses} ${isActive ? mobileActiveLinkClasses : ''}`} onClick={closeAllMenus}>Advocates Team</NavLink>
                    <NavLink to="/career" className={({ isActive }) => `${mobileLinkClasses} ${isActive ? mobileActiveLinkClasses : ''}`} onClick={closeAllMenus}>Career</NavLink>
                    <NavLink to="/empanelment" className={({ isActive }) => `${mobileLinkClasses} ${isActive ? mobileActiveLinkClasses : ''}`} onClick={closeAllMenus}>Get Empanelled</NavLink>
                    {/* Services dropdown - kept for existing services, though services are above */}
                    <NavLink to="/services" className={({ isActive }) => `${mobileLinkClasses} ${isActive ? mobileActiveLinkClasses : ''}`} onClick={closeAllMenus}>Practice Areas</NavLink>
                    <NavLink to="/finance" className={({ isActive }) => `${mobileLinkClasses} ${isActive ? mobileActiveLinkClasses : ''}`} onClick={closeAllMenus}>Finance Assistance</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `${mobileLinkClasses} ${isActive ? mobileActiveLinkClasses : ''}`} onClick={closeAllMenus}>Contact Us</NavLink>
                    
                    {/* Make an Appointment button */}
                    <div className="px-4 mt-6">
                        <Link to="/appointment" onClick={closeAllMenus} className="block bg-[#c5a47e] text-[#2e3e4d] text-center px-5 py-3 rounded-md hover:bg-[#2e3e4d] hover:text-white transition-colors text-sm font-bold tracking-wider uppercase">
                            Make an Appointment
                        </Link>
                    </div>
                </div>
            </div>
            {/* Overlay for mobile menu */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" 
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}
        </nav>
    );
};

export default Navbar;