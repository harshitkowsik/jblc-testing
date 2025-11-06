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

interface NewsletterFormData {
    name: string;
    email: string;
    consent: boolean;
}

type FormErrors = Partial<Record<keyof NewsletterFormData, string>>;

const NewsletterPage: React.FC = () => {
    const [formData, setFormData] = useState<NewsletterFormData>({
        name: '',
        email: '',
        consent: false,
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const commonInputClasses = "w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c5a47e] transition-shadow";
    const errorClasses = "border-red-500 focus:ring-red-500";

    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required.';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email address.';
        }
        if (!formData.consent) {
            newErrors.consent = 'You must agree to receive emails.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            console.log('Newsletter Subscription Data:', formData);
            // In a real application, you would send this to a backend API
            setIsSubmitted(true);
            setFormData({ name: '', email: '', consent: false }); // Reset form
            setErrors({}); // Clear errors
        } else {
            // Optional: alert('Please correct the errors in the form.');
        }
    };

    return (
        <div>
            <SEO
                title="Subscribe to Our Newsletter | JBLC INDIA"
                description="Stay updated with the latest legal insights, news, and events from JBLC INDIA. Subscribe to our newsletter today!"
                canonicalPath="/newsletter"
            />
            <PageHeader title="Subscribe to Our Newsletter" subtitle="Stay Updated with JBLC INDIA" />


            <div className="container mx-auto px-4 py-20">
                <div className="max-w-3xl mx-auto bg-white p-10 rounded-lg shadow-2xl text-center">
                    <h2 className="text-4xl font-bold text-[#2e3e4d] mb-6">Join Our Mailing List</h2>
                    <div className="w-24 h-1 bg-[#c5a47e] mx-auto mb-6"></div>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        Get the latest legal news, expert insights, and firm updates delivered straight to your inbox.
                        Don't miss out on important developments in the legal world.
                    </p>

                    {isSubmitted ? (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
                            <strong className="font-bold">Thank you!</strong>
                            <span className="block sm:inline ml-2">Your subscription has been successfully received.</span>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6 text-left">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name*</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`${commonInputClasses} ${errors.name ? errorClasses : ''}`}
                                    aria-required="true"
                                />
                                {errors.name && <p className="text-red-600 text-sm mt-1" role="alert">{errors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address*</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`${commonInputClasses} ${errors.email ? errorClasses : ''}`}
                                    aria-required="true"
                                />
                                {errors.email && <p className="text-red-600 text-sm mt-1" role="alert">{errors.email}</p>}
                            </div>
                            <div className="flex items-start">
                                <input
                                    type="checkbox"
                                    id="consent"
                                    name="consent"
                                    checked={formData.consent}
                                    onChange={handleChange}
                                    className={`form-checkbox h-5 w-5 text-[#c5a47e] rounded ${errors.consent ? errorClasses : ''}`}
                                    aria-required="true"
                                />
                                <label htmlFor="consent" className="ml-3 text-gray-700">
                                    I agree to receive marketing and promotional emails from JBLC INDIA.*
                                </label>
                            </div>
                            {errors.consent && <p className="text-red-600 text-sm mt-1 -mt-4 mb-4" role="alert">{errors.consent}</p>}

                            <div className="text-center mt-8">
                                <button type="submit" className="bg-[#2e3e4d] text-white font-bold py-3 px-8 rounded-md hover:bg-[#1a2530] transition-colors">
                                    Subscribe Now
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NewsletterPage;