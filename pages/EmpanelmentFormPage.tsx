
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

interface EmpanelmentFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

type FormErrors = Partial<Record<keyof EmpanelmentFormData, string>>;

const EmpanelmentFormPage: React.FC = () => {
    const [formData, setFormData] = useState<EmpanelmentFormData>({
        name: '',
        email: '',
        phone: '',
        message: '',
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
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required.';
        } else if (!/^\d{10}$/.test(formData.phone)) { // Assuming 10-digit Indian mobile
            newErrors.phone = 'Phone number must be 10 digits.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            console.log('Empanelment Application Submitted:', formData);
            // In a real application, you would send this to a backend API
            setIsSubmitted(true);
            setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
            setErrors({}); // Clear errors
        } else {
            // Optional: alert('Please correct the errors in the form.');
        }
    };

    return (
        <div>
            <SEO
                title="Empanelment Application | Join JBLC INDIA"
                description="Apply to become an empanelled lawyer with JBLC INDIA. Submit your contact details to begin your journey."
                canonicalPath="/empanelment-form"
            />
            <PageHeader title="Empanelment Application" subtitle="Start Your Journey with JBLC INDIA" />

            <div className="container mx-auto px-4 py-20">
                <div className="max-w-3xl mx-auto bg-white p-10 rounded-lg shadow-2xl text-center">
                    <h2 className="text-4xl font-bold text-[#2e3e4d] mb-6">Apply for Empanelment</h2>
                    <div className="w-24 h-1 bg-[#c5a47e] mx-auto mb-6"></div>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        Fill out the form below and our team will get in touch with you to discuss the empanelment process.
                    </p><div className="mb-8 flex justify-center">
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSeHJaPAJQt4eZ7IcOWg8gCsZcNguxkxE-p8QLvyb4JlyoZ5PQ/viewform?embedded=true"
                            className="w-full h-[2600px] md:w-[700px] md:h-[1900px]"
                            frameBorder="0" marginHeight={0} marginWidth={0}>
                            Loading…
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmpanelmentFormPage;
