

import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

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

const FeatureBlock = ({ icon, title, children }: { icon: string, title: string, children: React.ReactNode }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#c5a47e] hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        <div className="flex items-center mb-4">
            <i className={`${icon} text-3xl text-[#2e3e4d] mr-4`}></i>
            <h3 className="text-2xl font-bold text-[#2e3e4d]">{title}</h3>
        </div>
        <div className="text-gray-700 leading-relaxed space-y-3 flex-grow">
            {children}
        </div>
    </div>
);

const ListItem = ({ children }: { children: React.ReactNode }) => (
    <li className="bg-gray-100 text-[#2e3e4d] font-medium py-2 px-4 rounded-full shadow-sm flex items-center">
        <i className="fas fa-check-circle text-[#c5a47e] mr-2"></i>
        {children}
    </li>
);

const EmpanelmentPage: React.FC = () => {
    return (
        <div>
            <SEO
                title="Benefits for Empanelled Lawyers | JBLC INDIA"
                description="Discover the extensive benefits and growth opportunities for lawyers empanelled with JBLC INDIA, a leading legal network."
                canonicalPath="/empanelment"
                keywords="JBLC INDIA, empanelled lawyers, legal career growth, lawyer benefits, legal network India,JBLC India Lawyer Empanelment, Advocate Opportunities India, Legal Career Benefits, Corporate Law Assignments, Group Insurance for Lawyers, Annual Bonus for Advocates, Apply for Lawyer Panel, JBLC India Empanelled Lawyers Benefits: Lawyer empanelment India, Best law firm to join in India, Legal career growth opportunities, Law firm insurance benefits for lawyers, Annual bonus for lawyers, Empanelment for advocates, Corporate law practice India, High court lawyer empanelment, District court empanelment program, Law firm hiring advocates India, Legal associate opportunities India, Transparent payouts law firm, Group insurance for lawyers, Top ISO certified law firm India, Best platform for young lawyers, Legal mentorship program India, Multi-state law firm empanelment, Apply for lawyer empanelment, Litigation and corporate law work India, Lucknow law firm advocate empanelment, Term insurance for advocates, Health insurance for lawyers, Become a JBLC empanelled advocate."
            />
            <PageHeader title="Empanelment" subtitle="A Career Platform That Actually Invests in You" />

            <div className="container mx-auto px-4 py-20 space-y-20">
                <section className="text-center max-w-3xl mx-auto">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Empanelment with JBLC INDIA isn't just signing up for a panel — it's stepping into a
                        legal ecosystem that pushes your career forward with real work, real mentorship,
                        and real financial stability. Lawyers across India join us for one simple reason: the
                        growth here is tangible.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-4">
                        Below is a clear picture of what you gain when you become part of our legal network.
                    </p>
                </section>

                <section>
                    {/* FIX: FeatureBlock components were self-closing, but expect children. Changed to wrap content. */}
                    <div className="grid md:grid-cols-2 gap-10">
                        <FeatureBlock icon="fas fa-gavel" title="Work That Elevates Your Legal Standing">
                            <p>Empanelled lawyers receive regular assignments across civil, criminal, corporate,
                                arbitration, RERA, consumer, and writ matters.</p>
                            <p>Cases are assigned based on expertise, not hierarchy, which means your practice
                                grows with meaningful work instead of routine drafting.</p>
                            <p>With our multi-state operations, you also get branch-to-branch referrals —
                                something that instantly expands your reach beyond your home court.</p>
                        </FeatureBlock>

                        <FeatureBlock icon="fas fa-hand-holding-usd" title="Clear Payouts & Fair Recognition">
                            <p>We don't believe in hidden conditions or inconsistent fee structures.</p>
                            <p>Your payouts are processed transparently and on time, and every assignment
                                comes with documented billing. Clients also recognize your contribution directly —
                                your name stands beside the work you deliver.</p>
                            <p>Professional dignity matters. We protect it.</p>
                        </FeatureBlock>
                    </div>
                </section>

                <section>
                    <h2 className="text-4xl font-bold text-[#2e3e4d] text-center mb-10">Corporate, Institutional & High-Value Client Exposure</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto text-center">
                        Breaking into premium clientele is often the hardest part of legal practice.
                        Empanelment with JBLC INDIA opens that door for you through a steady flow of:
                    </p>
                    <ul className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        <ListItem>Corporate legal matters</ListItem>
                        <ListItem>MSME & startup advisory</ListItem>
                        <ListItem>NGO and CSR-related compliance</ListItem>
                        <ListItem>High-stake individual litigation</ListItem>
                        <ListItem>Government & semi-government assignments</ListItem>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed mt-6 max-w-3xl mx-auto text-center">
                        Your portfolio becomes stronger, more credible, and future-ready.
                    </p>
                </section>

                <section>
                    {/* FIX: FeatureBlock components were self-closing, but expect children. Changed to wrap content. */}
                    <FeatureBlock icon="fas fa-award" title="Annual Bonus & Performance Rewards">
                        <p>Active empanelled lawyers who consistently deliver high-quality work receive
                            Annual Performance Bonuses directly from the Firm.</p>
                        <p>These rewards recognize your contribution, client feedback, delivery timelines, and
                            professional conduct.</p>
                        <p>Simply put - good work gets celebrated here.</p>
                    </FeatureBlock>
                </section>

                <section>
                    <h2 className="text-4xl font-bold text-[#2e3e4d] text-center mb-10">Group Insurance + Term & Health Cover for Active Members</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto text-center">
                        We understand that a lawyer's career comes with unpredictable pressures.
                        To support our active members, we provide access to:
                    </p>
                    <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
                            <h4 className="font-bold text-xl text-[#2e3e4d] mb-2"><i className="fas fa-check-circle text-blue-500 mr-2"></i>Group Insurance Coverage</h4>
                            <p className="text-gray-700">Protection against unforeseen risks while working on firm-related matters.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
                            <h4 className="font-bold text-xl text-[#2e3e4d] mb-2"><i className="fas fa-check-circle text-green-500 mr-2"></i>Term Insurance Benefits</h4>
                            <p className="text-gray-700">Security for your family through accidental or natural risk coverage.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
                            <h4 className="font-bold text-xl text-[#2e3e4d] mb-2"><i className="fas fa-check-circle text-purple-500 mr-2"></i>Health Insurance Support</h4>
                            <p className="text-gray-700">Coverage for medical emergencies, hospitalization benefits, and preventive healthcare assistance.</p>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mt-10 max-w-3xl mx-auto text-center">
                        These benefits are extended to active empanelled lawyers who meet
                        participation and performance criteria. It's our way of ensuring your wellbeing is as secure as your career.
                    </p>
                </section>

                <section>
                    <h2 className="text-4xl font-bold text-[#2e3e4d] text-center mb-10">Mentorship, Training & Practical Skill Growth</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto text-center">
                        Every week, our panel interacts with senior litigators, corporate counsels,
                        researchers, and industry experts. These sessions sharpen your:
                    </p>
                    <ul className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        <ListItem>Drafting finesse</ListItem>
                        <ListItem>Courtroom strategy</ListItem>
                        <ListItem>Negotiation skills</ListItem>
                        <ListItem>Corporate advisory capabilities</ListItem>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed mt-6 max-w-3xl mx-auto text-center">
                        You also get internal support for research, document vetting, and case briefs —
                        making your work sharper and more efficient.
                    </p>
                </section>

                <section>
                    <h2 className="text-4xl font-bold text-[#2e3e4d] text-center mb-10">Professional Identity That Stands Out</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto text-center">
                        Your name appears in the JBLC INDIA Advocate Directory, giving you nationwide
                        visibility and instant credibility in front of clients.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto text-center">
                        Many panel members grow into roles like:
                    </p>
                    <ul className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        <ListItem>District Coordinator</ListItem>
                        <ListItem>Zonal Legal Lead</ListItem>
                        <ListItem>Senior Advisor</ListItem>
                        <ListItem>State Legal Officer</ListItem>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed mt-6 max-w-3xl mx-auto text-center">
                        Your journey doesn't stall here — it accelerates.
                    </p>
                </section>

                <section>
                    <h2 className="text-4xl font-bold text-[#2e3e4d] text-center mb-10">Opportunities Beyond Litigation</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto text-center">
                        With JBLC INDIA's multi-vertical presence, you can explore:
                    </p>
                    <ul className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        <ListItem>Cyber law</ListItem>
                        <ListItem>IPR</ListItem>
                        <ListItem>Corporate compliance</ListItem>
                        <ListItem>Arbitration</ListItem>
                        <ListItem>Real estate advisory</ListItem>
                        <ListItem>Financial regulations</ListItem>
                        <ListItem>Internal investigations</ListItem>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed mt-6 max-w-3xl mx-auto text-center">
                        This diversification prepares you for high-value roles across industries.
                    </p>
                </section>

                <section className="bg-gray-50 p-10 rounded-lg shadow-xl text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#2e3e4d] mb-6">A Zero-Cost, Merit-Based Platform</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Empanelment is 100% free.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Your growth depends on your skill, commitment, and performance — nothing else.
                    </p>
                </section>

                <section className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#2e3e4d] mb-6">Your Legal Career Deserves a Bigger Platform</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        When you join JBLC INDIA, you get a mix of structured assignments, financial
                        clarity, mentorship, insurance coverage, and a professional identity that genuinely
                        upgrades your career. This is one step that can shape your entire professional future.
                    </p>
                    <Link to="/empanelment-form" className="bg-[#c5a47e] text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-colors text-lg">
                        Apply for Empanelment Today
                    </Link>
                </section>
            </div>
        </div>
    );
};

export default EmpanelmentPage;
