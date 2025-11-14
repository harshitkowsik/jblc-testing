import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { modernServices } from '../data/modernServicesData'; // Import the new services data

const SecondaryNavbar: React.FC = () => {
    const [hoveredMainService, setHoveredMainService] = useState<string | null>(null); // State for managing which main service dropdown is open

    const navLinkClasses = "text-[#2E3E4D] hover:text-[#c5a47e] transition-colors duration-300 font-medium px-2 py-2 uppercase tracking-wider text-sm relative underline-hover flex items-center h-full";
    const dropdownItemClasses = "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#2e3e4d]";

    // This navbar is designed to be visible only on large screens (lg)
    return (
        <nav className="bg-white shadow-md sticky top-20 z-40 hidden lg:block">
            <div className="container mx-auto px-4 h-14 flex items-center justify-center space-x-6"> 
                {modernServices.map(mainService => (
                    <div 
                        key={mainService.slug} 
                        className="relative h-full flex items-center"
                        onMouseEnter={() => setHoveredMainService(mainService.slug)}
                        onMouseLeave={() => setHoveredMainService(null)}
                    >
                        <NavLink 
                            to={`/services/${mainService.slug}`} 
                            className={({ isActive }) => `${navLinkClasses} ${isActive ? 'text-[#c5a47e]' : ''}`}
                        >
                            {mainService.title} <i className="fas fa-chevron-down ml-2 text-xs"></i>
                        </NavLink>
                        {hoveredMainService === mainService.slug && mainService.subHeadings.length > 0 && (() => {
                            const itemCount = mainService.subHeadings.length;
                            let dropdownContainerClasses = 'absolute top-full left-0 mt-0 bg-white rounded-md shadow-xl z-20 py-2 transition-all duration-300 transform origin-top-left w-64';
                            let dropdownContentClasses = '';

                            if (itemCount > 24) { // More than 24 items -> 3 columns
                                dropdownContainerClasses = dropdownContainerClasses.replace('w-64', 'w-[48rem]');
                                dropdownContentClasses = 'columns-3 gap-0';
                            } else if (itemCount > 12) { // 13 to 24 items -> 2 columns
                                dropdownContainerClasses = dropdownContainerClasses.replace('w-64', 'w-[32rem]');
                                dropdownContentClasses = 'columns-2 gap-0';
                            }
                            // Default is 1 column (w-64)

                            return (
                                <div className={dropdownContainerClasses}>
                                    <div className={dropdownContentClasses}>
                                        <Link to={`/services/${mainService.slug}`} className={`${dropdownItemClasses} font-bold break-inside-avoid`}>
                                            All {mainService.title} Services
                                        </Link>
                                        <div className="border-t border-gray-100 my-1 break-inside-avoid"></div>
                                        {mainService.subHeadings.map(subService => (
                                            <Link 
                                                key={subService.slug} 
                                                to={`/services/${mainService.slug}/${subService.slug}`} 
                                                className={`${dropdownItemClasses} break-inside-avoid`}
                                            >
                                                {subService.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            );
                        })()}
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default SecondaryNavbar;
                           