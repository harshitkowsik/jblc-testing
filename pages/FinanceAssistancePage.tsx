import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { financeServices } from '../data/financeServiceData';

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

const FinanceCard = ({ title, link }: { title: string; link: string; }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col justify-between">
        <h3 className="text-2xl font-bold mb-4 text-[#2e3e4d]">{title}</h3>
        <Link to={link} className="font-semibold text-blue-600 hover:text-blue-800 mt-4">Know More <i className="fas fa-arrow-right ml-1 text-xs"></i></Link>
    </div>
);

const FinanceAssistancePage: React.FC = () => {
    return (
        <div>
            <SEO 
              title="Finance Assistance & Legal Services | JBLC INDIA"
              description="Explore our finance assistance services, including personal, business, and home loans. Get expert legal and financial guidance from JBLC INDIA."
              keywords="JBLC INDIA, finance assistance, legal services, personal loans, business loans, home loans, financial guidance"
                canonicalPath="/finance"
            />
            <PageHeader title="Finance Assistance" subtitle="Guidance Through Financial Complexities" />

            <div className="container mx-auto px-4 py-20">
                 <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#2e3e4d]">Financial Legal Services</h2>
                    <div className="w-24 h-1 bg-[#c5a47e] mx-auto my-4"></div>
                    <p className="text-gray-600 text-lg">Our firm provides expert legal assistance across a wide spectrum of financial needs, ensuring compliance and favorable outcomes for our clients.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {financeServices.map(finance => <FinanceCard key={finance.title} title={finance.title} link={`/finance/${finance.slug}`} />)}
                </div>
            </div>
        </div>
    );
};

export default FinanceAssistancePage;