import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
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
const AdvocateCard = ({ name, reg_no, specialisation }: Advocate) => (
    <div className="bg-white rounded-lg shadow-2xl p-8 flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
        <h3 className="text-2xl font-bold text-[#2e3e4d] mb-2">{name}</h3>
        <p className="text-[#c5a47e] font-semibold mb-4">{specialisation}</p>
        <div className="flex-grow"></div>
        <Link to={`/advocate-details/${reg_no}`} className="mt-6 bg-[#2e3e4d] text-white text-center font-bold py-2 px-4 rounded-md hover:bg-[#1a2530] transition-colors">
            View Details
        </Link>
    </div>
);

const OurAdvocateTeamPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState<'name' | 'phone_no'>('name');
    const [searchResults, setSearchResults] = useState<Advocate[]>([]);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setHasSearched(true);

        if (!searchQuery.trim()) {
            setSearchResults([]);
            return;
        }

        const query = searchQuery.toLowerCase().trim();
        const filtered = Advocates.filter(advocate => {
            if (searchType === 'name') {
                return advocate.name.toLowerCase().includes(query);
            }
            if (searchType === 'phone_no') {
                return advocate.phone_no.toLowerCase().includes(query);
            }
            return false;
        });

        setSearchResults(filtered);
    };

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

                <div className="max-w-2xl mx-auto mb-16 bg-white p-6 rounded-lg shadow-lg">
                    <form onSubmit={handleSearch}>
                        <div className="flex flex-col gap-3">
                            <select 
                                value={searchType} 
                                onChange={(e) => setSearchType(e.target.value as 'name' | 'phone_no')}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c5a47e] focus:border-[#c5a47e]"
                            >
                                <option value="name">By Name</option>
                                <option value="phone_no">By Phone No.</option>
                            </select>
                            <input 
                                type="text" 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder={`Enter advocate's ${searchType === 'name' ? 'name' : 'phone number'}`}
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c5a47e] focus:border-[#c5a47e]"
                            />
                            <button type="submit" className="w-full inline-flex justify-center items-center px-6 py-3 bg-[#2e3e4d] text-white font-bold rounded-md hover:bg-[#1a2530] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2e3e4d]">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {hasSearched && searchResults.length === 0 && (
                        <p className="col-span-full text-center text-gray-500 text-lg">No advocates found matching your search criteria.</p>
                    )}
                    {searchResults.map((advocate, index) => <AdvocateCard key={index} {...advocate} />)}
                </div>
            </div>
        </div>
    );
};

export default OurAdvocateTeamPage;