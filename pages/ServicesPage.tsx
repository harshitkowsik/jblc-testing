import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { services as coreServices } from '../data/serviceData';


const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <section 
        className="bg-cover bg-center h-60 flex items-center justify-center text-white relative" 
        style={{ backgroundImage: "url('headerbg.png')" }}
    >
        <div className="absolute inset-0 bg-[#2e3e4d] bg-opacity-70"></div>
        <div className="text-center z-10 p-4">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="mt-2 text-lg">{subtitle}</p>
        </div>
    </section>
);

const ServiceCard = ({ icon, title, description, link }: { icon: string; title: string; description: string; link: string; }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col text-center group">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#2e3e4d] group-hover:bg-[#c5a47e] text-white text-3xl mb-5 mx-auto transition-colors duration-300">
            <i className={icon}></i>
        </div>
        <h3 className="text-2xl font-bold mb-3 text-[#2e3e4d]">{title}</h3>
        <p className="text-gray-600 mb-5 flex-grow text-sm">{description}</p>
        <Link to={link} className="font-semibold text-blue-600 hover:text-blue-800 mt-auto">Learn More <i className="fas fa-arrow-right ml-1 text-xs"></i></Link>
    </div>
);

const ServicesPage: React.FC = () => {

    return (
        <div>
            <SEO 
              title="Our Practice Areas | Comprehensive Legal Services | JBLC INDIA"
              description="Discover the comprehensive legal services offered by JBLC INDIA. Our expertise spans Tax, IPR, Property, Cyber Crime, Family Law, and more."
            />
            <PageHeader title="Practice Areas" subtitle="Comprehensive Legal Solutions" />
            <div className="container mx-auto px-4 py-20">
                 <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#2e3e4d]">Our Expertise</h2>
                    <div className="w-24 h-1 bg-[#c5a47e] mx-auto my-4"></div>
                    <p className="text-gray-600 text-lg">We provide a wide array of legal services, ensuring expert counsel and representation across numerous fields of law.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {coreServices.map(service => <ServiceCard key={service.title} {...service} link={`/services/${service.slug}`} />)}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;