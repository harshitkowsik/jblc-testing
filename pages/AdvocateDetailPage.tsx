import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { Advocates } from '../data/formTeamData';

const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <section 
        className="bg-cover bg-center h-60 flex items-center justify-center text-white relative" 
        style={{ backgroundImage: "url('/headerbg.webp')" }}
    >
        <div className="absolute inset-0 bg-[#2e3e4d] bg-opacity-70"></div>
        <div className="text-center z-10 p-4">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="mt-2 text-lg">{subtitle}</p>
        </div>
    </section>
);

const DetailCard = ({ icon, title, value, link }: { icon: string, title: string, value: string, link?: string }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#c5a47e]">
        <div className="flex items-center">
            <i className={`${icon} text-2xl text-[#2e3e4d] mr-4`}></i>
            <div className="min-w-0 flex-1">
                <h4 className="font-semibold text-gray-500">{title}</h4>
                {link ? (
                    <a href={link} className="text-lg text-gray-800 hover:text-[#c5a47e] transition-colors truncate block" title={value}>{value}</a>
                ) : (
                    <p className="text-lg text-gray-800 truncate" title={value}>{value}</p>
                )}
            </div>
        </div>
    </div>
);

const AdvocateDetailPage: React.FC = () => {
    const params = useParams();
    const reg_no = params['*']; // Get the splat parameter
    const advocate = Advocates.find(adv => adv.reg_no === reg_no); 

    if (!advocate) {
        return <Navigate to="/our-advocate-team" />;
    }

    return (
        <div>
            <SEO 
              title={`${advocate.name} | Advocate Profile | JBLC INDIA`}
              description={`Profile and contact details for ${advocate.name}, a specialized advocate at JBLC INDIA.`}
              keywords={`JBLC INDIA, ${advocate.name}, advocate profile, ${advocate.specialisation}`}
              canonicalPath={`/advocate-details/${advocate.reg_no}`}
            />
            <PageHeader title={advocate.name} subtitle={advocate.specialisation} />
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 text-sm text-gray-500">
                        <Link to="/" className="hover:text-[#c5a47e]">JBLC INDIA</Link>
                        <span className="mx-2">&gt;</span>
                        <Link to="/our-advocate-team" className="hover:text-[#c5a47e]">Our Advocate Team</Link>
                        <span className="mx-2">&gt;</span>
                        <span className="text-gray-800">{advocate.name}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <DetailCard icon="fas fa-id-card-alt" title="Registration No." value={advocate.reg_no} />
                        <DetailCard icon="fas fa-gavel" title="Specialisation" value={advocate.specialisation} />
                        <DetailCard icon="fas fa-envelope" title="Email Address" value={advocate.email} link={`mailto:${advocate.email}`} />
                        <DetailCard icon="fas fa-phone" title="Phone Number" value={advocate.phone_no} link={`tel:${advocate.phone_no}`} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvocateDetailPage;