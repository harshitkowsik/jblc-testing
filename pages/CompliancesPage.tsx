import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { compliancePackages } from '../data/complianceData'; // Updated import
import { CompliancePackageSummary } from '../types'; // Updated type import

const ComplianceCard = ({ icon, title, description, driveLink }: CompliancePackageSummary) => (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col text-center group">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#2e3e4d] group-hover:bg-[#c5a47e] text-white text-3xl mb-5 mx-auto transition-colors duration-300">
            <i className={icon}></i>
        </div>
        <h3 className="text-2xl font-bold mb-3 text-[#2e3e4d]">{title}</h3>
        <p className="text-gray-600 mb-5 flex-grow text-sm">{description}</p>
        <div className="mt-auto flex flex-col space-y-2">
            <a 
                href={driveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-semibold text-white bg-[#c5a47e] hover:bg-opacity-90 py-2 px-4 rounded-md transition-colors"
            >
                Learn More <i className="fas fa-arrow-right ml-1 text-xs"></i>
            </a>
            <Link 
                to="/compliances-request" // Changed to new compliance request page
                className="font-semibold text-white bg-[#2e3e4d] hover:bg-[#1a2530] py-2 px-4 rounded-md transition-colors"
            >
                Contact Us
            </Link>
        </div>
    </div>
);

const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <section
        className="bg-cover bg-center h-60 flex items-center justify-center text-white relative"
        style={{ backgroundImage: "url('headerbg.webp')" }}
    >
        <div className="absolute inset-0 bg-[#2e3e4d] bg-opacity-70"></div>
        <div className="text-center z-10 p-4">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="mt-2 text-lg">{subtitle}</p>
        </div>
    </section>
);

const CompliancesPage: React.FC = () => {
    return (
        <div>
            <SEO 
              title="Compliance Packages | Smart, CFO, GST & Tax Services | JBLC INDIA"
              description="Explore JBLC INDIA's compliance packages. We offer Smart Packages, Virtual CFO services, and specialized GST and Income Tax solutions to keep your business compliant."
            />
            <PageHeader title="Compliance Packages" subtitle="Streamlined Solutions for Your Business" />
            <div className="container mx-auto px-4 py-20">
                 <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#2e3e4d]">Our Compliance Services</h2>
                    <div className="w-24 h-1 bg-[#c5a47e] mx-auto my-4"></div>
                    <p className="text-gray-600 text-lg">We offer a range of tailored packages to manage your financial and legal compliance, allowing you to focus on growing your business.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {compliancePackages.map(pkg => <ComplianceCard key={pkg.title} {...pkg} />)}
                </div>
            </div>
        </div>
    );
};

export default CompliancesPage;