import React from 'react';
import SEO from '../components/SEO';
import { Advocates } from '../data/formTeamData';
import { Advocate } from '../types';

// Reusable PageHeader component
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

// Card component for displaying advocate details
const AdvocateCard = ({ name, reg_no, email, phone_no, specialisation }: Advocate) => (
    <div className="bg-white rounded-lg shadow-2xl p-8 flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
        <h3 className="text-2xl font-bold text-[#2e3e4d] mb-2">{name}</h3>
        <p className="text-[#c5a47e] font-semibold mb-4">{specialisation}</p>
        
        {/* <div className="text-gray-600 space-y-3 mt-auto border-t pt-4">
            <div className="flex items-center">
                <i className="fas fa-id-card-alt w-6 text-gray-500 mr-2"></i>
                <span><strong>Reg. No:</strong> {reg_no}</span>
            </div>
            <div className="flex items-center">
                <i className="fas fa-envelope w-6 text-gray-500 mr-2"></i>
                <a href={`mailto:${email}`} className="hover:text-[#c5a47e] transition-colors">{email}</a>
            </div>
            <div className="flex items-center">
                <i className="fas fa-phone w-6 text-gray-500 mr-2"></i>
                <a href={`tel:${phone_no}`} className="hover:text-[#c5a47e] transition-colors">{phone_no}</a>
            </div>
        </div> */}
    </div>
);

const OurAdvocateTeamPage: React.FC = () => {
    return (
        <div>
            <SEO 
              title="Our Advocate Team | JBLC INDIA"
              description="Meet the dedicated advocates at JBLC INDIA. Find details about their specialisations, registration, and contact information."
              keywords="JBLC INDIA, advocate team, lawyers, legal experts, meet the team, Indian advocates"
              canonicalPath="/team/advocates"
            />
            <PageHeader title="Our Advocate Team" subtitle="Dedicated Experts in Their Fields" />
            
            <div className="container mx-auto px-4 py-20">
                 <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#2e3e4d]">Meet Our Advocates</h2>
                    <div className="w-24 h-1 bg-[#c5a47e] mx-auto my-4"></div>
                    <p className="text-gray-600 text-lg">Our advocates are seasoned professionals, each with a deep specialisation and a commitment to delivering justice and expert counsel.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {Advocates.map((advocate, index) => <AdvocateCard key={index} {...advocate} />)}
                </div>
            </div>
        </div>
    );
};

export default OurAdvocateTeamPage;