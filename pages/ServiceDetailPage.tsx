import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { services } from '../data/serviceData';

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

const ServiceDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const service = services.find(s => s.slug === slug);

    if (!service) {
        return <Navigate to="/services" />;
    }

    return (
        <div>
            <SEO 
              title={`${service.title} Legal Services | JBLC INDIA`}
              description={`${service.description} Contact JBLC INDIA for expert legal counsel and representation in ${service.title} matters.`}
            />
            <PageHeader title={service.title} subtitle="Detailed Legal Services Information" />
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-2xl">
                    <div className="mb-6 text-sm text-gray-500">
                        <Link to="/" className="hover:text-blue-600">JBLC INDIA</Link>
                        <span className="mx-2">&gt;</span>
                        <Link to="/services" className="hover:text-blue-600">Practice Areas</Link>
                        <span className="mx-2">&gt;</span>
                        <span className="text-gray-800">{service.title}</span>
                    </div>
                    <div className="prose lg:prose-lg max-w-none text-gray-700 leading-relaxed">
                        {service.content}
                    </div>
                     <div className="mt-10 text-center">
                        <Link to="/appointment" className="bg-[#c5a47e] text-white font-bold py-3 px-3 rounded-md hover:bg-opacity-90 transition-colors text-lg">
                            Book a Consultation
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailPage;