import React, { useState } from 'react';
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

const InfoCard = ({icon, title, children} : {icon:string, title:string, children: React.ReactNode}) => (
    <div className="bg-white p-8 rounded-lg shadow-lg h-full">
        <div className="flex items-center mb-4">
            <i className={`${icon} text-3xl text-[#c5a47e] mr-4`}></i>
            <h3 className="text-2xl font-bold text-[#2e3e4d]">{title}</h3>
        </div>
        <div className="text-gray-700 space-y-2">
            {children}
        </div>
    </div>
)

const AccordionItem = ({ question, answer, isOpen, onClick }: { question: string, answer: React.ReactNode, isOpen: boolean, onClick: () => void }) => (
    <div className="border-b border-gray-200">
        <button
            onClick={onClick}
            className="w-full text-left py-5 px-6 flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
        >
            <span className="text-lg font-semibold text-[#2e3e4d]">{question}</span>
            <span className="transform transition-transform duration-300">
                <i className={`fas ${isOpen ? 'fa-minus' : 'fa-plus'} text-[#c5a47e]`}></i>
            </span>
        </button>
        <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
        >
            <div className="p-6 pt-0 text-gray-600">
                {answer}
            </div>
        </div>
    </div>
);


const AboutPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqs = [
        {
            question: "What are your consultation fees?",
            answer: <p>Our initial consultation fees vary depending on the complexity of the matter and the seniority of the advocate. We offer a transparent fee structure which will be discussed with you upfront before any engagement. Please contact us to schedule a preliminary discussion.</p>
        },
        {
            question: "What is your process for handling new cases?",
            answer: <p>Our process begins with an initial consultation to understand the details of your case. Following this, we conduct a thorough legal review and devise a strategic plan. We maintain open communication throughout the process, ensuring you are informed at every stage, from documentation to representation.</p>
        },
        {
            question: "Which areas of law do you specialize in?",
            answer: <p>JBLC INDIA is a full-service law firm with expertise in a wide range of practice areas, including Corporate & M&A, Civil and Criminal Litigation, Tax, Intellectual Property, Real Estate, and more. Please visit our 'Practice Areas' page for a comprehensive list.</p>
        },
        {
            question: "How can I schedule an appointment?",
            answer: <p>You can schedule an appointment by using the "Make an Appointment" button on our website, calling our office directly, or sending us an email. Our team will assist you in setting up a consultation with the appropriate legal expert for your needs.</p>
        }
    ];

    return (
        <div>
            <SEO 
              title="About JBLC INDIA | Our Legacy, Mission & Vision"
              description="Learn about JBLC INDIA, a leading law firm in India. Discover our history, our mission to deliver justice with precision, and the leadership of Dr. Ashutosh Mishra."
            />
            <PageHeader title="About JBLC INDIA" subtitle="Your Trusted Legal Companion Since 2010" />

            <div className="container mx-auto px-4 py-20 space-y-20">
                <section id="about" className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-[#2e3e4d] mb-4">A Legacy of Excellence</h2>
                        <div className="w-20 h-1 bg-[#c5a47e] mb-4"></div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Established in 2010, JBLC INDIA is a leading ISO 9001:2015 Certified Full-Service Law Firm, ranked among the Top 10 Law Firms in India for its ethical practice, professional excellence, and client trust.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            With PAN-India operations and a network of domestic and international offices, JBLC INDIA serves clients across jurisdictions with seamless legal and corporate solutions. Supported by a team of over 350 empanelled lawyers, we offer unmatched expertise across every major field of law.
                        </p>
                    </div>
                    <div>
                        <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L2thdGV2NjQ0N19waG90b19vZl93b29kZW5fZ2F2ZWxfaW5fdGhlX2NvdXJ0X2dhdmVsX3BsYWNlX29uX3RoZV83MmVhZDZjNS1lNGIxLTRlZDctYWIzNC03NThiMDVmZmY3YjRfMS5qcGc.jpg" alt="Law Firm Interior" className="rounded-lg shadow-2xl"/>
                    </div>
                </section>

                <section id="mission" className="grid md:grid-cols-2 gap-8">
                    <InfoCard icon="fas fa-eye" title="Our Vision">
                        <p>To emerge as India’s most respected and socially responsible law firm — delivering justice with precision, promoting legal awareness, and empowering society through ethical advocacy.</p>
                    </InfoCard>
                    <InfoCard icon="fas fa-bullseye" title="Our Mission">
                        <ul className="list-disc list-inside space-y-1">
                            <li>Deliver transparent, research-driven, and result-oriented legal services.</li>
                            <li>Integrate social responsibility with professional excellence.</li>
                            <li>Promote legal literacy and access to justice for all.</li>
                        </ul>
                    </InfoCard>
                </section>

                <section id="leadership" className="bg-white p-10 rounded-lg shadow-xl">
                     <div className="text-center mb-8">
                         <h2 className="text-4xl font-bold text-[#2e3e4d]">Leadership & Ethos</h2>
                         <p className="text-gray-600 mt-2">Guided by integrity and driven by precision.</p>
                    </div>
                    <div className="grid md:grid-cols-5 gap-8 items-center">
                        <div className="md:col-span-2">
                             <img src="Adv-Ashutosh-Mishra.png" alt="Dr. Ashutosh Mishra" className="rounded-full shadow-lg mx-auto w-48 h-48 object-cover border-4 border-[#c5a47e]"/>
                        </div>
                        <div className="md:col-span-3">
                             <h3 className="text-2xl font-semibold text-[#2e3e4d] mb-2">Dr. Ashutosh Mishra, Managing Partner</h3>
                             <p className="text-gray-700 leading-relaxed">With over 25 years of experience, Dr. Mishra has set a benchmark in ethical advocacy and policy consulting. Under his vision, JBLC INDIA has evolved into a multi-practice legal institution with national and international reach, providing clients with comprehensive, compliant, and cutting-edge solutions.</p>
                        </div>
                    </div>
                </section>
                
                <section id="csr" className="grid md:grid-cols-2 gap-8">
                     <InfoCard icon="fas fa-gavel" title="Our Practice Areas">
                        <ul className="list-disc list-inside columns-2 space-y-1">
                            <li>Corporate & M&A</li>
                            <li>Civil Litigation</li>
                            <li>Criminal Litigation</li>
                            <li>Taxation Law</li>
                            <li>Intellectual Property</li>
                            <li>Real Estate</li>
                            <li>Start-up Advisory</li>
                        </ul>
                    </InfoCard>
                     <InfoCard icon="fas fa-hands-helping" title="Our CSR Commitment">
                         <p>As the legal advisory partner of Atal Foundation, JBLC INDIA extends its expertise to promote legal awareness, pro bono aid, and professional mentorship, creating access to justice for all.</p>
                    </InfoCard>
                </section>
            </div>
            
            <section id="faq" className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                     <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#2e3e4d]">Frequently Asked Questions</h2>
                         <p className="text-gray-600 mt-2">Answers to common inquiries about our services and processes.</p>
                    </div>
                    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openFaq === index}
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;