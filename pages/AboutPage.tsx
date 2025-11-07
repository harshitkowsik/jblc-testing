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
        },
        {
            question: "What should I bring to my first consultation?",
            answer: <p>For a productive first consultation, please bring all documents related to your case, including any correspondence, contracts, court notices, and a written summary of the events. Also, prepare a list of any questions you may have for us.</p>
        },
        {
            question: "How long will my case take to resolve?",
            answer: <p>The duration of a legal case varies significantly depending on its complexity, the court's schedule, and the cooperation of the opposing party. While we strive for a swift resolution, we prioritize achieving the best possible outcome. We will provide a realistic timeline estimate after our initial assessment.</p>
        },
        {
            question: "Do you handle cases outside of your main office locations?",
            answer: <p>Yes. With a PAN-India presence and international alliances, JBLC INDIA is equipped to handle legal matters across various jurisdictions. Our network of empanelled lawyers allows us to provide seamless representation wherever our clients need us.</p>
        },
        {
            question: "What is your policy on client confidentiality?",
            answer: <p>We adhere to the strictest standards of attorney-client privilege. All information and communication shared with our firm are held in absolute confidence. Our commitment to confidentiality is a cornerstone of our professional ethics.</p>
        },
        {
            question: "How will I be kept updated on the progress of my case?",
            answer: <p>We believe in transparent and regular communication. You will be assigned a dedicated point of contact and will receive regular updates via email, phone calls, or scheduled meetings, depending on your preference and the case's requirements.</p>
        },
        {
            question: "Can you represent me in the Supreme Court of India?",
            answer: <p>Yes, our firm is led by Supreme Court advocates, including our Managing Partner, Dr. Ashutosh Mishra. We have extensive experience in representing clients before the Supreme Court of India and various High Courts across the country.</p>
        },
        {
            question: "What are the potential outcomes of my case?",
            answer: <p>While we cannot guarantee a specific outcome, we will provide you with a realistic and honest assessment of your case's strengths, weaknesses, and potential outcomes. Our advice is always aimed at protecting your best interests and achieving the most favorable result possible.</p>
        },
        {
            question: "What does it mean that JBLC INDIA is an ISO 9001:2015 certified firm?",
            answer: <p>Being ISO 9001:2015 certified means our firm adheres to internationally recognized standards for quality management. This certification reflects our commitment to systematic processes, consistent service quality, and continuous improvement to ensure client satisfaction.</p>
        },
        {
            question: "Do you offer any pro bono services?",
            answer: <p>As part of our Corporate Social Responsibility (CSR) commitment and our partnership with the Atal Foundation, we are dedicated to promoting access to justice. We selectively take on pro bono cases for individuals and organizations in need. Please contact us to inquire about our pro bono program.</p>
        },
        {
            question: "What is the difference between a lawyer and an advocate in India?",
            answer: <p>In the Indian legal system, an 'advocate' is a lawyer who is enrolled with a State Bar Council and has the right to practice in courts of law. While all advocates are lawyers, not all law graduates are advocates. Our team consists of experienced advocates qualified to represent clients at all judicial levels.</p>
        },
        {
            question: "How are your legal fees structured for ongoing cases?",
            answer: <p>Our fee structure is flexible and tailored to the nature of the case. We offer various models, including hourly rates, fixed fees for specific services, and retainers for ongoing counsel. We discuss and agree upon the most suitable arrangement during our initial engagement to ensure full transparency with no hidden costs.</p>
        },
        {
            question: "Who will be my primary point of contact at the firm?",
            answer: <p>Each client is assigned a dedicated case manager or a lead advocate who will be your primary point of contact. This ensures clear, consistent communication and a deep understanding of your case's progress. You will always know who to reach out to with your questions.</p>
        },
        {
            question: "What is Alternative Dispute Resolution (ADR) and do you recommend it?",
            answer: <p>Alternative Dispute Resolution (ADR) includes methods like mediation and arbitration to resolve disputes outside of court. We often recommend ADR as it can be faster, more cost-effective, and less confrontational than traditional litigation. We will assess your case to determine if ADR is a viable and beneficial option for you.</p>
        },
        {
            question: "What happens if I lose my case? Can I file an appeal?",
            answer: <p>If an unfavorable judgment is passed, we will provide a detailed analysis of the decision and advise you on the merits of filing an appeal. The appeals process has strict deadlines and legal grounds, and our team is experienced in navigating appellate courts to seek a review of the decision.</p>
        },
        {
            question: "How does your firm stay updated with the latest legal developments?",
            answer: <p>Continuous learning is a core value at JBLC INDIA. Our advocates regularly participate in legal seminars, workshops, and continuing legal education (CLE) programs. We also maintain subscriptions to leading legal journals and databases to stay abreast of the latest statutes, precedents, and legal trends.</p>
        },
        {
            question: "Can you explain the attorney-client privilege?",
            answer: <p>Attorney-client privilege is a legal principle that protects confidential communications between a client and their advocate from being disclosed. This means you can speak freely and honestly with us, knowing that your information is legally protected and will be kept in the strictest confidence.</p>
        },
        {
            question: "What is the typical process for filing a lawsuit?",
            answer: <p>The process generally involves drafting and filing a plaint or petition, serving notice to the opposing party (summons), filing of a written statement by the defendant, framing of issues by the court, presenting evidence, arguments, and finally, the judgment. We guide our clients through each step of this complex process.</p>
        },
        {
            question: "How do you handle conflicts of interest?",
            answer: <p>We have a rigorous conflict-of-interest check system. Before taking on any new matter, we conduct a thorough search of our database to ensure that representing a new client will not conflict with the interests of any current or former clients. Upholding our ethical duties is paramount.</p>
        },
        {
            question: "What role does technology play in how you manage cases?",
            answer: <p>We leverage modern legal technology for case management, legal research, document management, and secure client communication. This allows us to work more efficiently, collaborate effectively, and provide our clients with timely updates and access to their case information.</p>
        },
        {
            question: "Do you collaborate with other professionals, like accountants or investigators?",
            answer: <p>Yes, for complex cases that require multi-disciplinary expertise, we often collaborate with a trusted network of professionals, including chartered accountants, forensic experts, investigators, and technical specialists. This ensures that every aspect of your case is handled with the highest level of skill.</p>
        },
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