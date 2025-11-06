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

const Opening = ({ title, location, experience, responsibilities, requirements }: { title: string, location: string, experience: string, responsibilities: string[], requirements: string[] }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#c5a47e] mb-8 transition-shadow hover:shadow-xl">
        <div className="flex justify-between items-start mb-4">
            <div>
                 <h3 className="text-2xl font-bold text-[#2e3e4d]">{title}</h3>
                <div className="text-sm text-gray-500 mt-1">
                    <span><i className="fas fa-map-marker-alt mr-2"></i>{location}</span> | <span className="ml-2"><i className="fas fa-briefcase mr-2"></i>{experience}</span>
                </div>
            </div>
             <a href="/#/apply" className="bg-[#c5a47e] text-white font-bold py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors text-sm whitespace-nowrap">
                Apply Now
            </a>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6 border-t pt-6">
            <div>
                <h4 className="font-bold text-lg text-gray-800 mb-2">Key Responsibilities:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                    {responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-lg text-gray-800 mb-2">Requirements:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                    {requirements.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
            </div>
        </div>
    </div>
);


const CareerPage: React.FC = () => {
    const openings = [
        {
            title: "Law Interns",
            location: "Offices across India",
            experience: "Fresh graduates / Final-year law students",
            responsibilities: [
                "Assist senior lawyers in legal research, drafting, and case analysis.",
                "Prepare briefs, opinions, and reports on corporate and civil matters.",
                "Attend client meetings and court proceedings (where applicable).",
                "Contribute to strategic legal planning and documentation."
            ],
            requirements: [
                "LLB / LLM students or recent graduates with strong academic credentials.",
                "Excellent research, analytical, and drafting skills.",
                "High ethical standards and professional integrity.",
                "Eagerness to learn and grow in a challenging legal environment."
            ]
        },
        {
            title: "Legal Associates",
            location: "Pan-India (Multiple Offices)",
            experience: "1–5 years of relevant legal experience",
            responsibilities: [
                "Handle corporate, administrative, and civil litigation matters independently.",
                "Draft contracts, agreements, and legal notices.",
                "Advise clients on regulatory compliance, corporate governance, and risk mitigation.",
                "Represent clients before courts, tribunals, and regulatory authorities."
            ],
            requirements: [
                "LLB / LLM from a recognized university; additional certifications preferred.",
                "Proven experience in corporate, civil, or administrative law.",
                "Strong communication and negotiation skills.",
                "Ability to work under pressure with precision and discretion."
            ]
        },
        {
            title: "Legal Officers",
            location: "Corporate Office, Lucknow / Remote support possible",
            experience: "3–7 years of legal experience",
            responsibilities: [
                "Oversee legal compliance and risk management for corporate clients.",
                "Draft and review contracts, agreements, and internal policies.",
                "Provide strategic legal advice to senior management.",
                "Ensure adherence to statutory regulations and legal frameworks."
            ],
            requirements: [
                "LLB / LLM, with specialization in Corporate or Administrative Law.",
                "Strong analytical, drafting, and advisory skills.",
                "Ability to manage multiple clients and deadlines efficiently.",
                "High integrity, professionalism, and client management skills."
            ]
        },
        {
            title: "Empanelled Lawyers",
            location: "Pan-India",
            experience: "5+ years of practice in respective fields",
            responsibilities: [
                "Represent clients in courts, tribunals, and regulatory bodies.",
                "Provide expert advice on corporate, civil, criminal, and administrative matters.",
                "Work collaboratively with in-house teams on complex legal issues.",
                "Uphold the reputation and standards of JBLC INDIA in all legal matters."
            ],
            requirements: [
                "Enrolled as an Advocate with the Bar Council of India.",
                "Demonstrated expertise and track record in legal practice.",
                "Strong advocacy, negotiation, and client management skills.",
                "Commitment to ethical practice and professional excellence."
            ]
        }
    ];

    return (
        <div>
            <SEO 
              title="Legal Careers & Job Openings | Join JBLC INDIA"
              description="Explore career opportunities at a top-10 ranked law firm in India. JBLC INDIA offers a dynamic environment for legal interns, associates, and experienced lawyers."
            />
            <PageHeader title="Career With JBLC INDIA" subtitle="Building the Future of Law, Leadership & Justice" />

            <div className="container mx-auto px-4 py-20">
                <section className="mb-16 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-[#2e3e4d] mb-4">An Ecosystem of Excellence</h2>
                        <div className="w-20 h-1 bg-[#c5a47e] mb-4"></div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            JBLC INDIA is not just a workplace — it’s a legal ecosystem of excellence. With 7 domestic offices, 3 international alliance offices, 350+ empanelled lawyers, and 800+ associates and interns, we’re redefining how law firms operate in a fast-changing world.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            As a top-ranked ISO 9001:2015 Certified Law Firm, we offer unmatched opportunities for legal professionals to grow under the mentorship of Dr. Ashutosh Mishra, Supreme Court Lawyer and IIM Ahmedabad Alumnus. Our culture blends discipline with dynamism, precision with purpose, and law with leadership.
                        </p>
                    </div>
                     <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-[#c5a47e]">
                        <h3 className="text-2xl font-bold text-[#2e3e4d] mb-4">Our Work Culture</h3>
                        <p className="text-gray-600 mb-4">At JBLC INDIA, we believe in the power of performance and the discipline of ethics. We reward merit, value punctuality, and promote professional grooming.</p>
                        <ul className="space-y-2 text-gray-700">
                           <li className="flex items-start"><i className="fas fa-check-circle text-[#c5a47e] mt-1 mr-3"></i><span><strong>Integrity:</strong> Structured discipline in work conduct.</span></li>
                           <li className="flex items-start"><i className="fas fa-check-circle text-[#c5a47e] mt-1 mr-3"></i><span><strong>Teamwork:</strong> Transparent communication and collaboration.</span></li>
                           <li className="flex items-start"><i className="fas fa-check-circle text-[#c5a47e] mt-1 mr-3"></i><span><strong>Commitment:</strong> Respect for timelines and client trust.</span></li>
                           <li className="flex items-start"><i className="fas fa-check-circle text-[#c5a47e] mt-1 mr-3"></i><span><strong>Growth:</strong> Continuous learning through mentorship.</span></li>
                        </ul>
                         <p className="mt-4 text-sm font-semibold text-gray-500 italic">Performance is our language. Ethics is our foundation. Growth is our outcome.</p>
                    </div>
                </section>
                
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-[#2e3e4d] text-center mb-10">Current Openings</h2>
                    {openings.map(o => <Opening key={o.title} {...o} />)}
                </section>

                <section className="mb-16 bg-white p-10 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-[#2e3e4d] text-center mb-6">Why Join JBLC INDIA?</h2>
                    <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
                        <li className="flex items-center p-3 rounded-md hover:bg-gray-50"><i className="fas fa-landmark text-2xl text-[#c5a47e] w-12 text-center"></i><span className="ml-4">Exposure to high-profile cases and diverse legal domains.</span></li>
                        <li className="flex items-center p-3 rounded-md hover:bg-gray-50"><i className="fas fa-users text-2xl text-[#c5a47e] w-12 text-center"></i><span className="ml-4">Mentorship from senior advocates and legal strategists.</span></li>
                        <li className="flex items-center p-3 rounded-md hover:bg-gray-50"><i className="fas fa-chart-line text-2xl text-[#c5a47e] w-12 text-center"></i><span className="ml-4">Dynamic, inclusive, and growth-oriented work environment.</span></li>
                        <li className="flex items-center p-3 rounded-md hover:bg-gray-50"><i className="fas fa-hand-holding-usd text-2xl text-[#c5a47e] w-12 text-center"></i><span className="ml-4">Competitive remuneration and performance-based incentives.</span></li>
                    </ul>
                </section>
                
                <section className="bg-gray-100 p-10 rounded-lg text-center border">
                    <h2 className="text-3xl font-bold text-[#2e3e4d] mb-4">How to Apply</h2>
                    <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                        Interested candidates may send their updated CV, cover letter, and relevant documents to 
                        <a href="mailto:corp@jblc.in" className="font-semibold text-blue-600 hover:underline"> corp@jblc.in </a>
                        with the subject line:
                        <br/>
                        <strong className="text-gray-800">Application for [Position Name] – [Your Name]</strong>.
                    </p>
                    <p className="text-sm text-gray-600">JBLC INDIA is an equal opportunity employer and welcomes applications from candidates across India, promoting diversity, excellence, and innovation in legal practice.</p>
                </section>
            </div>
        </div>
    );
};

export default CareerPage;