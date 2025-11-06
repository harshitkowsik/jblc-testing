import React from 'react';
import SEO from '../components/SEO';

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

const TeamMemberCard = ({ image, name, designation, bio }: { image: string; name: string; designation: string; bio: string; }) => (
    <div className="bg-white rounded-lg shadow-2xl text-center overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
        <div className="aspect-square">
            <img src={image} alt={name} className="w-full h-full object-cover object-center" />
        </div>
        <div className="p-8">
            <h3 className="text-2xl font-bold text-[#2e3e4d]">{name}</h3>
            <p className="text-[#c5a47e] font-semibold mb-3">{designation}</p>
            <p className="text-gray-600 mb-4 text-sm">{bio}</p>
            <div className="flex justify-center space-x-4 text-xl text-gray-500 mt-5">
                <a href="#" className="hover:text-[#c5a47e] transition-colors"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="hover:text-[#c5a47e] transition-colors"><i className="fab fa-twitter"></i></a>
                <a href="#" className="hover:text-[#c5a47e] transition-colors"><i className="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    </div>
);

const OurTeamPage: React.FC = () => {
    const teamMembers = [
        {
            image: "Adv-Ashutosh-Mishra.png",
            name: "Dr. Ashutosh Mishra",
            designation: "MBA, LL.M, PhD, Senior Vice President",
            bio: "The visionary founder of JBLC, Dr. Mishra is a Supreme Court lawyer and a leading authority in administrative and constitutional law."
        },
        {
            image: "Adv-Manish-Sharma.jpg",
            name: "Adv Manish Sharma",
            designation: "Chief People Officer",
            bio: "With deep expertise in labor and employment law, he is recognized for his skillful negotiation and commitment to fair workplace practices." 
        },
        {
            image: "Adv-Ravindra-Rai.jpg",
            name: "Adv. Ravindra Rai",
            designation: "Sr Law Officer",
            bio: "An expert in civil and criminal litigation, he is renowned for his courtroom presence and strategic approach to legal challenges."
        },
    ];


    return (
        <div>
            <SEO
                title="Our Expert Legal Team | Supreme Court Advocates | JBLC INDIA"
                description="Meet the esteemed legal team at JBLC INDIA. Our experienced advocates and partners are dedicated to providing expert counsel and achieving success for our clients."
            />
            <PageHeader title="Our Esteemed Team" subtitle="The Minds Behind Our Success" />

            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#2e3e4d]">Meet Our Legal Experts</h2>
                    <div className="w-24 h-1 bg-[#c5a47e] mx-auto my-4"></div>
                    <p className="text-gray-600 text-lg">We have assembled a team of passionate and dedicated legal professionals who are committed to upholding the highest standards of integrity and client service.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {teamMembers.map((member) => <TeamMemberCard key={member.name} {...member} />)}
                </div>
            </div>
        </div>
    );
};

export default OurTeamPage;