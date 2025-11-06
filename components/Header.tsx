import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 p-3 border-b border-gray-200 hidden md:block">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm text-gray-600">
          <span><i className="fa-regular fa-clock mr-2 text-[#c5a47e]"></i>Mon-Fri : 9am-6pm</span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-sm">
            <i className="fas fa-phone-alt text-[#c5a47e]"></i>
            <a href="tel:05224609329" className="hover:text-blue-600 transition-colors text-gray-600">05224609329</a>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <i className="fas fa-envelope text-[#c5a47e]"></i>
            <a href="mailto:corp@jblc.in" className="hover:text-blue-600 transition-colors text-gray-600">corp@jblc.in</a>
          </div>
          <Link to="/appointment" className="bg-[#c5a47e] text-[#2e3e4d] px-5 py-2 rounded-md hover:bg-[#2e3e4d] hover:text-white transition-colors text-xs font-bold tracking-wider uppercase">
            Make an Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;