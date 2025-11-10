import React, { useState } from 'react';
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
                    </p><div className="mb-8 flex justify-center">
                    <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLSdN_XSOdNbKTU3ZI8jcA-OFcSHbP9HUaE-_pyXBvPu9ewvxwQ/viewform?embedded=true"
                        className="w-full h-[800px] md:w-[700px] md:h-[650px]" 
                        frameBorder="0" marginHeight={0} marginWidth={0}>
                            Loading…
                    </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsletterPage;