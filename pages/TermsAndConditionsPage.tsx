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
                    <p className="text-sm text-gray-500 mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                    <Section title="1. Introduction">
                        <p>Welcome to JBLC INDIA. These terms and conditions outline the rules and regulations for the use of JBLC INDIA's Website, located at this domain. By accessing this website we assume you accept these terms and conditions. Do not continue to use JBLC INDIA if you do not agree to take all of the terms and conditions stated on this page.</p>
                    </Section>

                    <Section title="2. Intellectual Property Rights">
                        <p>Other than the content you own, under these Terms, JBLC INDIA and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website.</p>
                    </Section>

                    <Section title="3. Restrictions">
                        <p>You are specifically restricted from all of the following:</p>
                        <ul className="list-disc list-inside ml-4">
                            <li>publishing any Website material in any other media;</li>
                            <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
                            <li>publicly performing and/or showing any Website material;</li>
                            <li>using this Website in any way that is or may be damaging to this Website;</li>
                            <li>using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>
                        </ul>
                    </Section>

                     <Section title="4. No advice">
                        <p>This Website contains general information about legal matters. The information is not advice, and should not be treated as such. The legal information on this Website is provided without any representations or warranties, express or implied. Using this website or communicating with JBLC INDIA through this site does not form an attorney/client relationship.</p>
                    </Section>

                    <Section title="5. Limitation of liability">
                        <p>In no event shall JBLC INDIA, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. JBLC INDIA, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>
                    </Section>

                     <Section title="6. Variation of Terms">
                        <p>JBLC INDIA is permitted to revise these terms at any time as it sees fit, and by using this Website you are expected to review these terms on a regular basis.</p>
                    </Section>

                </div>
            </div>
        </div>
    );
};

export default TermsAndConditionsPage;