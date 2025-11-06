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

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div>
            <SEO 
              title="Privacy Policy | JBLC INDIA"
              description="Learn how JBLC INDIA collects, uses, and protects your personal information. Read our complete privacy policy."
            />
            <PageHeader title="Privacy Policy" subtitle="Your privacy is important to us" />
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-2xl">
                    <p className="text-sm text-gray-500 mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                    <Section title="1. Information We Collect">
                        <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, fill out a form (such as the contact or appointment form), and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, and phone number.</p>
                    </Section>

                    <Section title="2. How We Use Collected Information">
                        <p>JBLC INDIA may collect and use Users personal information for the following purposes:</p>
                        <ul className="list-disc list-inside ml-4">
                            <li>To run and operate our Site: We may need your information to display content on the Site correctly.</li>
                            <li>To improve customer service: Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
                            <li>To respond to inquiries: We may use the email address to respond to their inquiries, questions, and/or other requests.</li>
                        </ul>
                    </Section>

                    <Section title="3. How We Protect Your Information">
                        <p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.</p>
                    </Section>

                    <Section title="4. Sharing Your Personal Information">
                        <p>We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.</p>
                    </Section>

                    <Section title="5. Your Acceptance of These Terms">
                        <p>By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.</p>
                    </Section>
                    
                    <Section title="6. Contacting Us">
                         <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at corp@jblc.in.</p>
                    </Section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;