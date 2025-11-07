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

const ContactPage: React.FC = () => {
    const commonInputClasses = "w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c5a47e] transition-shadow";
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submissionMessage, setSubmissionMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        // Add subject to form data
        formData.append("subject", "JBLC India - Contact Response");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
                setIsSubmitted(true);
                setSubmissionMessage("Thank you for your message. We will contact you back shortly.");
                form.reset(); // Reset the form fields
            }
        } catch (error) {
            setSubmissionMessage("Something went wrong. Please try again.");
        }
    };

    return (
        <div>
            <SEO
                title="Contact a Top Law Firm in India | JBLC INDIA"
                description="Get in touch with JBLC INDIA. Find our office locations in Delhi, Lucknow, and across India, or use our contact form to reach our legal experts."
            />
            <PageHeader title="Contact Us" subtitle="We're Here to Help" />

            <div className="container mx-auto px-4 py-20">
                <div className="grid md:grid-cols-5 gap-12">
                    <div className="md:col-span-3 bg-white p-8 rounded-lg shadow-xl">
                        <h2 className="text-3xl font-bold text-[#2e3e4d] mb-6">Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="hidden" name="access_key" value="e79d8866-b6df-490d-89f0-e1b9402c1d99" />
                            <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                            <div className="mb-5">
                                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name *</label>
                                <input type="text" id="name" name="name" required className={commonInputClasses} />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email *</label>
                                <input type="email" id="email" name="email" required className={commonInputClasses} />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message *</label>
                                <textarea id="message" name="message" rows={5} required className={commonInputClasses}></textarea>
                            </div>
                            <div className="text-left">
                                <button type="submit" className="bg-[#2e3e4d] text-white font-bold py-3 px-8 rounded-md hover:bg-[#1a2530] transition-colors">
                                    Send Message
                                </button>
                                {isSubmitted && (
                                    <p className="mt-4 text-green-600 ">{submissionMessage}</p>
                                )}
                            </div>
                        </form>
                    </div>
                    <div className="md:col-span-2 space-y-6">
                        <h3 className="text-3xl font-bold text-[#2e3e4d]">Our Offices</h3>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h4 className="font-bold text-xl text-[#c5a47e]">Zonal Office (Delhi)</h4>
                            <p className="text-gray-600 mt-2"><i className="fas fa-map-marker-alt mr-2"></i>102, V85, 52A, First Floor, Vijay Block, Laxmi Nagar, Delhi</p>
                            <p className="text-gray-600 mt-1"><i className="fas fa-phone-alt mr-2"></i><a href="tel:+919483271000" className="text-blue-600 hover:underline">Help Line: +91 9483271000</a></p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h4 className="font-bold text-xl text-[#c5a47e]">Regional Office (Lucknow)</h4>
                            <p className="text-gray-600 mt-2"><i className="fas fa-map-marker-alt mr-2"></i>511, 05th Floor, Skyline Plaza 1, Sushant Golf City Lucknow, UP</p>
                            <p className="text-gray-600 mt-1"><i className="fas fa-phone-alt mr-2"></i><a href="tel:05222061000" className="text-blue-600 hover:underline">Phone: 0522 206 1000</a></p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h4 className="font-bold text-xl text-[#c5a47e]">Other Locations</h4>
                            <ul className="text-gray-600 mt-2 space-y-1">
                                <li><i className="fas fa-phone-alt mr-2"></i>Allahabad: <a href="tel:05322615610" className="text-blue-600 hover:underline">0532 – 2615 610</a></li>
                                <li><i className="fas fa-phone-alt mr-2"></i>Jaipur: <a href="tel:01412313000" className="text-blue-600 hover:underline">0141 – 2313 000</a></li>
                                <li><i className="fas fa-phone-alt mr-2"></i>Pune: <a href="tel:02026825666" className="text-blue-600 hover:underline">020 – 2682 5666</a></li>
                                <li><i className="fas fa-phone-alt mr-2"></i>Ahmedabad: <a href="tel:07926586614" className="text-blue-600 hover:underline">079 – 2658 6614</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;