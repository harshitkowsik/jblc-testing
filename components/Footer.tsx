import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2e3e4d] text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">

          <div className="lg:col-span-1">
            <img src="jblc-logo.png" alt="JBLC INDIA Logo" className="h-16 w-auto mb-4 bg-white p-2 rounded-md" />
            <p className="text-sm text-gray-400 mb-4">
              An ISO 9001:2015 Certified, Top 10 Ranked Law Firm with over 15+ years of experience in delivering legal excellence.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/JBLCINDIA" className="text-gray-400 hover:text-[#c5a47e] transition-colors" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="https://x.com/jblcindia/" className="text-gray-400 hover:text-[#c5a47e] transition-colors" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/company/jblcindia/" className="text-gray-400 hover:text-[#c5a47e] transition-colors" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="http://www.youtube.com/@JBLCIndia" className="text-gray-400 hover:text-[#c5a47e] transition-colors"><i className="fab fa-youtube text-xl"></i></a>
              <a href="https://www.youtube.com/@kanoonimadad" className="text-gray-400 hover:text-[#c5a47e] transition-colors"><i className="fab fa-youtube text-xl"></i></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white tracking-wider mb-4 border-b-2 border-[#c5a47e] pb-2 inline-block">Our Offices</h3>
            <div className="space-y-4 text-sm">
              <div>
                <strong className="text-[#c5a47e] block">Zonal Office (Delhi):</strong>
                <p>102, V85, 52A, First Floor, Vijay Block, Laxmi Nagar, Delhi</p>
                <p>Help Line: <a href="tel:+919483271000" className="hover:text-[#c5a47e]">+91 9483271000</a></p>
              </div>
              <div>
                <strong className="text-[#c5a47e] block">Regional Office (Lucknow):</strong>
                <p>511, 05th Floor, Skyline Plaza 1, Sushant Golf City Lucknow, UP</p>
                <p>Phone: <a href="tel:05222061000" className="hover:text-[#c5a47e]">0522 206 1000</a></p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white tracking-wider mb-4 border-b-2 border-[#c5a47e] pb-2 inline-block">Other Locations</h3>
            <ul className="space-y-2 text-sm">
              <li>Allahabad: <a href="tel:05322615610" className="hover:text-[#c5a47e]">0532 – 2615 610</a></li>
              <li>Jaipur: <a href="tel:01412313000" className="hover:text-[#c5a47e]">0141 – 2313 000</a></li>
              <li>Pune: <a href="tel:02026825666" className="hover:text-[#c5a47e]">020 – 2682 5666</a></li>
              <li>Ahmedabad: <a href="tel:07926586614" className="hover:text-[#c5a47e]">079 – 2658 6614</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white tracking-wider mb-4 border-b-2 border-[#c5a47e] pb-2 inline-block">Important Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms-and-conditions" className="hover:text-[#c5a47e] transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/career" className="hover:text-[#c5a47e] transition-colors">Career With JBLC INDIA</Link></li>
              <li><Link to="/hr-policy" className="hover:text-[#c5a47e] transition-colors">HR Policies</Link></li>
            </ul>
          </div>

        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>All Rights Reserved (2010 - {new Date().getFullYear()}) JBLC INDIA.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;