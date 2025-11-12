import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { services as coreServices } from '../data/serviceData';
import { financeServices as allFinanceServices } from '../data/financeServiceData';
import { teamMembers } from '../data/teamData.ts';
import { modernServices } from '../data/modernServicesData.ts';


const ServiceCard = ({ icon, title, description, link }: { icon: string; title: string; description: string; link: string; }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col text-center group">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#2e3e4d] group-hover:bg-[#c5a47e] text-white text-3xl mb-5 mx-auto transition-colors duration-300">
            <i className={icon}></i>
        </div>
        <h3 className="text-xl font-bold mb-3 text-[#2e3e4d]">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow text-sm">{description}</p>
        <Link to={link} className="font-semibold text-blue-600 hover:text-blue-800 mt-auto">Learn More <i className="fas fa-arrow-right ml-1 text-xs"></i></Link>
    </div>
);

const ModernServiceCard = ({ icon, title, link }: { icon: string; title: string; link: string; }) => (
    <Link to={link} className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-[#c5a47e] text-[#2e3e4d] group-hover:text-white text-3xl mb-4 mx-auto transition-colors duration-300">
            <i className={icon}></i>
        </div>
        <h3 className="text-lg font-bold text-[#2e3e4d]">{title}</h3>
    </Link>
);

const FinanceCard = ({ title, link }: { title: string; link: string; }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col justify-center items-center h-full">
        <h3 className="text-xl font-bold mb-4 text-[#2e3e4d]">{title}</h3>
        <Link to={link} className="font-semibold text-blue-600 hover:text-blue-800 mt-auto">Read More <i className="fas fa-arrow-right ml-1 text-xs"></i></Link>
    </div>
);

const TeamMemberCard = ({ image, name, designation, facebookUrl, twitterUrl, linkedinUrl, instagramUrl }: { image: string; name: string; designation: string; facebookUrl: string; twitterUrl: string; linkedinUrl: string; instagramUrl: string; }) => (
    <div className="bg-white rounded-lg shadow-xl text-center overflow-hidden group">
        <div className="relative aspect-square">
            <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white text-left">
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="text-[#c5a47e] font-semibold">{designation}</p>
            </div>
            <div className="absolute top-4 right-4 flex flex-col space-y-2 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-[#c5a47e]"><i className="fab fa-facebook-f"></i></a>
                <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-[#c5a47e]"><i className="fab fa-twitter"></i></a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-[#c5a47e]"><i className="fab fa-linkedin-in"></i></a>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-[#c5a47e]"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
    </div>
);

const HomePage: React.FC = () => {
    const servicesPreview = coreServices.slice(0, 6);

    const financeServicesPreview = allFinanceServices.slice(0, 4);

    const stats = [
        { value: 9, label: "Domestic Offices", icon: "fas fa-building" },
        { value: 5, label: "Int'l Offices", icon: "fas fa-globe-americas" },
        { value: "15+", label: "Years of Experience", icon: "fas fa-award" },
        { value: 248, label: "Members", icon: "fas fa-user-tie" }
    ];

    return (
        <div>
            <SEO
                title="JBLC INDIA | Top ISO Certified Law Firm in India"
                description="JBLC INDIA is a top-ranked, ISO certified law firm with 15+ years of experience in M&A, corporate, and civil law. Contact our Supreme Court experts today."
            />
            <section
                className="bg-cover bg-center min-h-[70vh] flex items-center justify-center text-white relative"
                style={{ backgroundImage: "url('headerbg.webp')" }}
            >
                <div className="absolute inset-0 bg-[#2e3e4d] bg-opacity-60"></div>
                <div className="text-center z-10 p-4">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">Legacy of Trust, Future of Justice</h1>
                    <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto drop-shadow-md">An ISO 9001:2015 Certified, Top 10 Ranked Law Firm with over 15+ years of experience in M&A and Corporate Law.</p>
                    <div className="mt-8 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-center items-center">
                        <Link to="/about" className="bg-[#c5a47e] text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-colors text-lg">
                            Discover More
                        </Link>
                        <Link to="/contact" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-md hover:bg-white hover:text-[#2e3e4d] transition-colors text-lg">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold text-[#2e3e4d] mb-4">Welcome to JBLC INDIA</h2>
                        <div className="w-24 h-1 bg-[#c5a47e] mx-auto mb-6"></div>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            JBLC INDIA is a premier ISO 9001:2015 Certified law firm, ranked among the Top 10 in India. With over 15 years of dedicated experience, we specialize in delivering high-quality, timely, and customized legal solutions across various domains. Our team of highly skilled professionals is committed to maintaining the utmost confidentiality and dedication to achieve the best possible outcomes for our clients.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#2e3e4d]">Our Services</h2>
                        <p className="text-gray-600 mt-2">Digital, streamlined, and expert-driven legal services for today's world.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {modernServices.map((service, index) => (
                            <ModernServiceCard 
                                key={index} 
                                icon={service.features[0]?.icon || 'fas fa-concierge-bell'} 
                                title={service.title} 
                                link={`/services/${service.slug}`} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#2e3e4d]">Our Core Practice Areas</h2>
                        <p className="text-gray-600 mt-2">Comprehensive legal services tailored to your needs.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesPreview.map((service, index) => <ServiceCard key={index} {...service} link={`/services/${service.slug}`} />)}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/services" className="bg-[#2e3e4d] text-white font-bold py-3 px-8 rounded-md hover:bg-[#1a2530] transition-colors">
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#2e3e4d]">Finance Assistance</h2>
                        <p className="text-gray-600 mt-2">Expert legal guidance for your financial needs.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {financeServicesPreview.map((service, index) => <FinanceCard key={index} title={service.title} link={`/finance/${service.slug}`} />)}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/finance" className="bg-[#2e3e4d] text-white font-bold py-3 px-8 rounded-md hover:bg-[#1a2530] transition-colors">
                            View All Finance Services
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-cover bg-fixed relative" style={{ backgroundImage: "url('https://jblc.in/wp-content/themes/expert-lawyer/assets/images/headerbg.webp')" }}>
                <div className="absolute inset-0 bg-[#2e3e4d] bg-opacity-80"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                        {stats.map((stat, index) => (
                            <div key={index}>
                                <div className="text-5xl text-[#c5a47e] mb-3"><i className={stat.icon}></i></div>
                                <p className="text-5xl font-bold">{stat.value}</p>
                                <p className="text-lg mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#2e3e4d]">Meet Our Expert Team</h2>
                        <p className="text-gray-600 mt-2">Dedicated professionals committed to your success.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <TeamMemberCard key={index} {...member} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="pb-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-[#2e3e4d]">Stay Updated</h2>
                    <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">Subscribe to our newsletter to get the latest legal insights, news, and updates directly to your inbox.</p><br></br>

                    <Link to="/newsletter" className=" bg-[#c5a47e] text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-colors w-full sm:w-auto whitespace-nowrap flex-shrink-0">
                        Subscribe
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;