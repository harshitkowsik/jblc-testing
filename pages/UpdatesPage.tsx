import React from 'react';
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

const UpdatesPage: React.FC = () => {
    return (
        <div>
            <SEO
                title="Latest Updates & News | JBLC INDIA"
                description="Stay connected with the latest news, events, and insights from JBLC INDIA through our updates page."
                canonicalPath="/updates"
            />
            <PageHeader title="Latest Updates" subtitle="Stay Connected with JBLC INDIA" />

            <div className="container mx-auto px-4 py-20">
                <section className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#2e3e4d] mb-6">Our Latest Happenings</h2>
                    <div className="w-24 h-1 bg-[#c5a47e] mx-auto mb-8"></div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Follow us on social media for real-time updates, legal insights, and more.
                    </p>
                    <div className="flex justify-center space-x-6 mt-8">
                        <a href="https://www.facebook.com/JBLCINDIA" className="text-[#2e3e4d] hover:text-[#c5a47e] transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <i className="fab fa-facebook-f text-2xl"></i>
                        </a>
                        <a href="https://x.com/jblcindia/" className="text-[#2e3e4d] hover:text-[#c5a47e] transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <i className="fab fa-twitter text-2xl"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/jblcindia/" className="text-[#2e3e4d] hover:text-[#c5a47e] transition-colors" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in text-2xl"></i>
                        </a>
                        <a href="https://www.instagram.com/jblc.india/" className="text-[#2e3e4d] hover:text-[#c5a47e] transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <i className="fab fa-instagram text-2xl"></i>
                        </a>
                        <a href="http://www.youtube.com/@JBLCIndia" className="text-[#2e3e4d] hover:text-[#c5a47e] transition-colors" aria-label="JBLC India YouTube"><i className="fab fa-youtube text-2xl"></i></a>
                        <a href="https://www.youtube.com/@kanoonimadad" className="text-[#2e3e4d] hover:text-[#c5a47e] transition-colors" aria-label="Kanooni Madad YouTube"><i className="fab fa-youtube text-2xl"></i></a>
                    </div>
                </section>

                <section className="mt-5 bg-gray-50 p-4 rounded-lg shadow-xl text-center">
                   
                    
                    <div className="w-full h-[2900px] rounded-md overflow-hidden md:h-[700px]">
                        <iframe 
                            src="https://widget.taggbox.com/307892?website=1" 
                            style={{ width: '100%', height: '100%', border: 'none', overflow: 'auto' }}
                            title="JBLC India Instagram Feed"
                        ></iframe>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                        For the best viewing experience, visit our official <a href="https://www.instagram.com/jblc.india/" target="_blank" rel="noopener noreferrer" className="text-[#c5a47e] hover:underline">Instagram page</a>.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default UpdatesPage;