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

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#2e3e4d] mb-3">{title}</h2>
        <div className="space-y-3 text-gray-700 leading-relaxed">
            {children}
        </div>
    </div>
);


const TermsAndConditionsPage: React.FC = () => {
    return (
        <div>
            <SEO
                title="Terms & Conditions | JBLC INDIA"
                description="Read the official terms and conditions for using the JBLC INDIA website and its services."
            />
            <PageHeader title="Terms & Conditions" subtitle="Please read our terms carefully" />
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-2xl">

                    <Section title="JBLC INDIA – Legal, Privacy & HR Policies">
                        <p>Effective Date: 01.01.2020</p>
                        <p>Website: <a href="https://jblc.in" target="_blank" rel="noopener noreferrer">https://jblc.in</a></p>
                        <p>JBLC INDIA (“we”, “our”, “us”) is committed to privacy, confidentiality, ethical standards, and compliance with Indian and international laws. By accessing or using our Website, you agree to the following terms and policies.</p>
                    </Section>

                    <Section title="1. Acceptance of Terms">
                        <ul className="list-disc list-inside ml-4">
                            <li>By visiting or using this Website, you agree to comply with all applicable laws and regulations.</li>
                            <li>You accept all terms in this Legal, Privacy & HR Policy document.</li>
                            <li>Unauthorized use of Website content, proprietary information, or violation of these terms may result in legal action.</li>
                        </ul>
                    </Section>

                    <Section title="2. Privacy Policy">
                        <Section title="2.1 Information We Collect">
                            <ul className="list-disc list-inside ml-4">
                                <li><strong>Personal Data:</strong> Name, email, phone, postal address, professional details submitted via forms.</li>
                                <li><strong>Professional Data:</strong> CVs, resumes, proposals, collaboration details.</li>
                                <li><strong>Technical Data:</strong> IP address, browser, operating system, pages visited, cookies, analytics.</li>
                            </ul>
                        </Section>

                        <Section title="2.2 Use of Information">
                            <ul className="list-disc list-inside ml-4">
                                <li>Respond to inquiries and provide consultation services.</li>
                                <li>Process job applications, internships, or collaborations.</li>
                                <li>Send newsletters or updates (with consent).</li>
                                <li>Enhance Website functionality and security.</li>
                                <li>Comply with legal obligations or investigations.</li>
                            </ul>
                        </Section>

                        <Section title="2.3 Sharing of Information">
                            <ul className="list-disc list-inside ml-4">
                                <li>With service providers assisting with Website operations or analytics.</li>
                                <li>As legally required by law, court orders, or government authorities.</li>
                                <li>In case of mergers, acquisitions, or sale of assets.</li>
                            </ul>
                        </Section>

                        <Section title="2.4 Data Retention">
                            <p>Data is retained only as long as necessary for services, legal compliance, or dispute resolution.</p>
                        </Section>

                        <Section title="2.5 User Rights">
                            <p>Users may request access, correction, deletion, or restriction of personal data as permitted by law.</p>
                        </Section>

                        <Section title="2.6 Children’s Privacy">
                            <p>This Website is not intended for users under 18 years of age.</p>
                        </Section>
                    </Section>

                    <Section title="3. Cookies & Tracking">
                        <ul className="list-disc list-inside ml-4">
                            <li>Cookies used for analytics, performance improvement, and personalized content.</li>
                            <li>Users may disable cookies, but some features may not function properly.</li>
                            <li>Third-party analytics may also track usage.</li>
                        </ul>
                    </Section>

                    <Section title="4. Terms & Conditions">
                        <Section title="4.1 Intellectual Property">
                            <p>All content, logos, images, software, and text belong to JBLC INDIA or its licensors. Unauthorized reproduction, distribution, or commercial use is prohibited.</p>
                        </Section>

                        <Section title="4.2 Legal Disclaimer">
                            <p>Content is informational and does not constitute legal advice. Using the Website does not establish a lawyer-client relationship.</p>
                        </Section>

                        <Section title="4.3 User Submissions">
                            <p>All submitted content (CVs, proposals, messages) becomes JBLC INDIA property. Users warrant submissions do not infringe third-party rights or violate laws.</p>
                        </Section>

                        <Section title="4.4 Limitation of Liability">
                            <p>JBLC INDIA is not liable for direct or indirect damages from Website use or technical interruptions.</p>
                        </Section>

                        <Section title="4.5 Indemnification">
                            <p>Users indemnify JBLC INDIA against claims arising from misuse or violation of terms.</p>
                        </Section>

                        <Section title="4.6 Governing Law & Jurisdiction">
                            <p>Terms are governed by the laws of India. Exclusive jurisdiction: Courts of [City, State], India.</p>
                        </Section>

                        <Section title="4.7 Modifications & Termination">
                            <p>JBLC INDIA may revise Terms anytime; continued use indicates acceptance. Access may be suspended or terminated for violations.</p>
                        </Section>
                    </Section>

                    <Section title="5. Standard HR Policies">
                        <Section title="5.1 Recruitment & Selection">
                            <p>Merit-based, non-discriminatory hiring. Accurate information mandatory; false info leads to disqualification.</p>
                        </Section>

                        <Section title="5.2 Confidentiality & Non-Disclosure (NDA)">
                            <p>Employees, interns, and collaborators must maintain strict confidentiality of client data, legal documents, firm strategies, business plans, and internal communications. NDA applies during and after engagement. Unauthorized disclosure may result in civil or criminal action.</p>
                        </Section>

                        <Section title="5.3 Code of Conduct">
                            <p>Maintain professionalism, integrity, and ethical behavior. Harassment, bullying, or unlawful conduct is strictly prohibited.</p>
                        </Section>

                        <Section title="5.4 CCTV, Audio & Video Monitoring">
                            <p>JBLC INDIA maintains audio and video surveillance (CCTV) in all office premises for safety and security. Recordings are stored securely and used only for legitimate purposes, including investigations or legal proceedings. Tampering, misuse, or unauthorized disclosure is prohibited.</p>
                        </Section>

                        <Section title="5.5 Non-Compete & Anti-Competition">
                            <p>Employees shall not engage in any business competing with JBLC INDIA during employment and for [specify period] after termination. Prohibited from soliciting clients, employees, or using proprietary information to compete. Compliant with the Competition Act, 2002.</p>
                        </Section>

                        <Section title="5.6 Intellectual Property Rights (IPR)">
                            <p>All work products, documents, presentations, designs, and software created during engagement belong exclusively to JBLC INDIA. Unauthorized external use or distribution may result in legal action.</p>
                        </Section>

                        <Section title="5.7 Data Security & IT Policy">
                            <p>Adherence to IT security protocols is mandatory. Firm devices, emails, and accounts are for professional use only. Sharing credentials or unauthorized access is prohibited.</p>
                        </Section>

                        <Section title="5.8 Leave, Attendance & Working Hours">
                            <p>Leave policies follow statutory compliance under Indian labor laws. Unauthorized absences are subject to disciplinary action.</p>
                        </Section>

                        <Section title="5.9 Termination Policy">
                            <p>Termination may occur for cause, misconduct, breach of NDA/IPR/Anti-competition, or violation of law.</p>
                        </Section>
                    </Section>

                    <Section title="6. Data Protection Compliance">
                        <p>JBLC INDIA complies with the Information Technology Act, 2000 (India) and GDPR principles for international visitors. Users may request access, correction, or deletion of personal data.</p>
                    </Section>

                    <Section title="7. External Links">
                        <p>JBLC INDIA is not responsible for third-party website content or privacy practices. Users must review third-party policies independently.</p>
                    </Section>

                    <Section title="8. Contact Us">
                        <p>Email: <a href="mailto:info@jblc.in">info@jblc.in</a></p>
                        <p>Phone: 0522 2061000</p>
                        <p>Address: JBLC INDIA, 511, 05th Floor, Skyline Plaza 1, Sushant Golf City, Lucknow – 226030</p>
                    </Section>

                </div>
            </div>
        </div>
    );
};

export default TermsAndConditionsPage;