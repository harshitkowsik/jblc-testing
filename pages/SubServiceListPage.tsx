import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { modernServices } from '../data/modernServicesData';
import { ModernServiceSubHeading } from '../types';

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

interface SubServiceCardProps {
    mainHeadingSlug: string;
    subService: ModernServiceSubHeading;
}

const SubServiceCard: React.FC<SubServiceCardProps> = ({ mainHeadingSlug, subService }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
        <div>
            <h3 className="text-xl font-bold text-[#2e3e4d] mb-2">{subService.title}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{subService.description}</p>
        </div>
        <div className="mt-auto">
            <Link 
                to={`/services/${mainHeadingSlug}/${subService.slug}`} 
                className="font-semibold text-blue-600 hover:text-blue-800"
            >
                Learn More <i className="fas fa-arrow-right ml-1 text-xs"></i>
            </Link>
        </div>
    </div>
);

const SubServiceListPage: React.FC = () => {
    const { mainHeadingSlug } = useParams<{ mainHeadingSlug: string }>();
    const mainService = modernServices.find(s => s.slug === mainHeadingSlug);

    if (!mainService) {
        return <Navigate to="/services" />; // Redirect if main heading not found
    }

    return (
        <div>
            <SEO
                title={`${mainService.title} Services | JBLC INDIA`}
                description={`Explore ${mainService.title} services offered by JBLC INDIA, including ${mainService.subHeadings.map(s => s.title).join(', ')}.`}
                keywords={`JBLC INDIA, ${mainService.title}, legal services, ${mainService.subHeadings.map(s => s.title).join(', ')}`}
                canonicalPath={`/services/${mainService.slug}`}
            />
            <PageHeader title={mainService.title} subtitle={`Specialized Legal Solutions for ${mainService.title}`} />

            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#2e3e4d]">{`Our ${mainService.title} Expertise`}</h2>
                    <div className="w-24 h-1 bg-[#c5a47e] mx-auto my-4"></div>
                    <p className="text-gray-600 text-lg">
                        {`Delivering precise and effective legal assistance across various aspects of ${mainService.title}.`}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mainService.subHeadings.map(subService => (
                        <SubServiceCard 
                            key={subService.slug} 
                            mainHeadingSlug={mainService.slug} 
                            subService={subService} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SubServiceListPage;