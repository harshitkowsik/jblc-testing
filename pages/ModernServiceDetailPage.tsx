import React from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { modernServices } from '../data/modernServicesData';
import { ModernServiceFeature } from '../types';

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

const FeatureItem: React.FC<ModernServiceFeature> = ({ icon, text }) => (
    <div className="flex items-center p-3 bg-gray-50 rounded-lg shadow-sm">
        <i className={`${icon} text-xl text-[#c5a47e] mr-4`}></i>
        <span className="text-gray-700 text-sm md:text-base">{text}</span>
    </div>
);

const ModernServiceDetailPage: React.FC = () => {
    const { mainHeadingSlug, subHeadingSlug } = useParams<{ mainHeadingSlug: string; subHeadingSlug: string }>();
    const navigate = useNavigate();

    const mainService = modernServices.find(s => s.slug === mainHeadingSlug);
    const subService = mainService?.subHeadings.find(ss => ss.slug === subHeadingSlug);

    if (!mainService || !subService) {
        return <Navigate to="/new-services" />; // Redirect if service not found
    }

    const handleGetQuoteClick = () => {
        // Use specific query parameters for new modern services to the new GetQuoteFormPage
        navigate(`/get-quote?mainService=${encodeURIComponent(mainService.title)}&subService=${encodeURIComponent(subService.title)}`);
    };

    return (
        <div>
            <SEO
                title={`${subService.title} | ${mainService.title} Services | JBLC INDIA`}
                description={subService.description}
                canonicalPath={`/new-services/${mainService.slug}/${subService.slug}`} // Updated canonical path
            />
            <PageHeader title={subService.title} subtitle={`${mainService.title} Services`} />

            <div className="container mx-auto px-4 py-20">
                <div className="max-w-5xl mx-auto bg-white p-10 rounded-lg shadow-2xl">
                    <div className="mb-8 text-sm text-gray-500">
                        <Link to="/" className="hover:text-blue-600">JBLC INDIA</Link>
                        <span className="mx-2">&gt;</span>
                        <Link to="/new-services" className="hover:text-blue-600">New Services</Link> {/* Updated breadcrumb */}
                        <span className="mx-2">&gt;</span>
                        <Link to={`/new-services/${mainService.slug}`} className="hover:text-blue-600">{mainService.title}</Link> {/* Updated breadcrumb */}
                        <span className="mx-2">&gt;</span>
                        <span className="text-gray-800">{subService.title}</span>
                    </div>

                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-bold text-[#2e3e4d] mb-4">{subService.title}</h2>
                        <button 
                            onClick={handleGetQuoteClick}
                            className="bg-[#c5a47e] text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-colors text-lg inline-flex items-center"
                        >
                            Get a Quote <i className="fas fa-arrow-alt-circle-right ml-3"></i>
                        </button>
                    </div>

                    {mainService.features && mainService.features.length > 0 && (
                        <div className="mb-10 p-6 bg-blue-50 rounded-lg border border-blue-200">
                            <h3 className="text-2xl font-bold text-[#2e3e4d] mb-5 text-center">Key Features of {mainService.title} Services</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {mainService.features.map((feature, index) => (
                                    <FeatureItem key={index} {...feature} />
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="prose lg:prose-lg max-w-none text-gray-700 leading-relaxed mb-10">
                        <h3 className="text-2xl font-bold text-[#2e3e4d] mb-4">About This Service</h3>
                        <p>{subService.description}</p>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-2xl font-bold text-[#2e3e4d] mb-4">Required Documents</h3>
                        {subService.requiredDocuments && subService.requiredDocuments.length > 0 ? (
                            <ul className="list-disc list-inside space-y-2 text-gray-700 text-base md:columns-2">
                                {subService.requiredDocuments.map((doc, index) => (
                                    <li key={index}>{doc}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-600">No specific documents listed for this service. Please contact us for more details.</p>
                        )}
                    </div>

                    <div className="mt-10 text-center">
                        <button 
                            onClick={handleGetQuoteClick}
                            className="bg-[#2e3e4d] text-white font-bold py-3 px-8 rounded-md hover:bg-[#1a2530] transition-colors text-lg inline-flex items-center"
                        >
                            Get a Quote <i className="fas fa-arrow-alt-circle-right ml-3"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModernServiceDetailPage;