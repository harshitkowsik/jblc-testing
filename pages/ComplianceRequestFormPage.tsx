import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { detailedComplianceData } from '../data/complianceData';
import { ComplianceSection, ComplianceCardItem } from '../types';

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

interface ComplianceRequestFormData {
    name: string;
    email: string;
    phone: string;
    complianceMainField: string;
    complianceField: string;
    complianceSubField: string;
    extraMessage: string;
}

type FormErrors = Partial<Record<keyof ComplianceRequestFormData, string>>;

const ComplianceRequestFormPage: React.FC = () => {
    const [formData, setFormData] = useState<ComplianceRequestFormData>({
        name: '',
        email: '',
        phone: '',
        complianceMainField: '',
        complianceField: '',
        complianceSubField: '',
        extraMessage: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [availableHeadings, setAvailableHeadings] = useState<ComplianceSection[]>([]);
    const [availableSubFields, setAvailableSubFields] = useState<ComplianceCardItem[]>([]);
    const [selectedPrice, setSelectedPrice] = useState<string>('');
    const [submissionStatus, setSubmissionStatus] = useState<{ submitted: boolean; message: string }>({ submitted: false, message: '' });

    const commonInputClasses = "w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c5a47e] transition-shadow";
    const errorClasses = "border-red-500 focus:ring-red-500";

    // Update available headings when main field changes
    useEffect(() => {
        const selectedPackage = detailedComplianceData.find(
            (pkg) => pkg.packageName === formData.complianceMainField
        );
        if (selectedPackage) {
            setAvailableHeadings(selectedPackage.sections);
            setFormData((prev) => ({ ...prev, complianceField: '', complianceSubField: '' }));
        } else {
            setAvailableHeadings([]);
            setAvailableSubFields([]);
            setFormData((prev) => ({ ...prev, complianceField: '', complianceSubField: '' }));
        }
    }, [formData.complianceMainField]);

    // Update available sub-fields and price when compliance field changes
    useEffect(() => {
        const selectedSection = availableHeadings.find(
            (section) => section.heading === formData.complianceField
        );
        if (selectedSection) {
            setAvailableSubFields(selectedSection.cards);
            setFormData((prev) => ({ ...prev, complianceSubField: '' }));
        } else {
            setAvailableSubFields([]);
            setFormData((prev) => ({ ...prev, complianceSubField: '' }));
        }
    }, [formData.complianceField, availableHeadings]);

    // Update selected price when sub-field changes
    useEffect(() => {
        const selectedCard = availableSubFields.find(
            (card) => `${card.subHeading} (${card.price})` === formData.complianceSubField
        );
        setSelectedPrice(selectedCard ? selectedCard.price : '');
    }, [formData.complianceSubField, availableSubFields]);


    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required.';
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
        if (!formData.complianceMainField) newErrors.complianceMainField = 'Compliance Main Field is required.';
        if (!formData.complianceField) newErrors.complianceField = 'Compliance Field is required.';
        if (!formData.complianceSubField) newErrors.complianceSubField = 'Compliance Sub Field is required.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmissionStatus({ submitted: false, message: '' });

        if (validate()) {
            const web3FormData = new FormData();
            web3FormData.append("access_key", "e79d8866-b6df-490d-89f0-e1b9402c1d99" );
            web3FormData.append("from_name", "JBLC India Compliance Request Form");
            web3FormData.append("subject", "JBLC India - Compliance Request");

            web3FormData.append("Name", formData.name);
            web3FormData.append("Email", formData.email);
            web3FormData.append("Phone", formData.phone);
            web3FormData.append("Package", formData.complianceMainField);
            web3FormData.append("Category", formData.complianceField);
            web3FormData.append("Service", formData.complianceSubField);
            web3FormData.append("Message", formData.extraMessage);

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: web3FormData,
                });

                const result = await response.json();

                if (result.success) {
                    setSubmissionStatus({ submitted: true, message: "Your request has been submitted successfully! We will contact you shortly." });
                    setFormData({
                        name: '', email: '', phone: '', complianceMainField: '',
                        complianceField: '', complianceSubField: '', extraMessage: '',
                    });
                    setErrors({});
                    setSelectedPrice('');
                } else {
                    setSubmissionStatus({ submitted: true, message: "Something went wrong. Please try again." });
                }
            } catch (error) {
                setSubmissionStatus({ submitted: true, message: "Something went wrong. Please try again." });
            }
        } else {
            setSubmissionStatus({ submitted: true, message: "Please correct the errors in the form." });
        }
    };

    return (
        <div>
            <SEO
                title="Compliance Request Form | JBLC INDIA"
                description="Submit a request for JBLC INDIA's compliance packages: Smart, CFO, GST, and Tax services."
                canonicalPath="/compliance-request"
            />
            <PageHeader title="Compliance Request" subtitle="Tell Us About Your Needs" />

            <div className="container mx-auto px-4 py-20">
                <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-2xl space-y-6">
                    <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                    <h2 className="text-3xl font-bold text-[#2e3e4d] mb-6 text-center">Request a Compliance Package</h2>
                    <div className="w-24 h-1 bg-[#c5a47e] mx-auto mb-8"></div>

                    {/* Personal Information */}
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name *</label>
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
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address *</label>
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
                    <div>
                        <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`${commonInputClasses} ${errors.phone ? errorClasses : ''}`}
                            maxLength={10}
                            aria-required="true"
                        />
                        {errors.phone && <p className="text-red-600 text-sm mt-1" role="alert">{errors.phone}</p>}
                    </div>

                    {/* Compliance Selection */}
                    <div>
                        <label htmlFor="complianceMainField" className="block text-gray-700 font-semibold mb-2">Compliance Main Field (Package Name) *</label>
                        <select
                            id="complianceMainField"
                            name="complianceMainField"
                            value={formData.complianceMainField}
                            onChange={handleChange}
                            className={`${commonInputClasses} ${errors.complianceMainField ? errorClasses : ''}`}
                            aria-required="true"
                        >
                            <option value="">Select a Package</option>
                            {detailedComplianceData.map((pkg) => (
                                <option key={pkg.packageName} value={pkg.packageName}>
                                    {pkg.packageName}
                                </option>
                            ))}
                        </select>
                        {errors.complianceMainField && <p className="text-red-600 text-sm mt-1" role="alert">{errors.complianceMainField}</p>}
                    </div>

                    <div>
                        <label htmlFor="complianceField" className="block text-gray-700 font-semibold mb-2">Compliance Fields (Heading) *</label>
                        <select
                            id="complianceField"
                            name="complianceField"
                            value={formData.complianceField}
                            onChange={handleChange}
                            className={`${commonInputClasses} ${errors.complianceField ? errorClasses : ''}`}
                            disabled={!formData.complianceMainField}
                            aria-required="true"
                        >
                            <option value="">Select a Category</option>
                            {availableHeadings.map((section) => (
                                <option key={section.heading} value={section.heading}>
                                    {section.heading}
                                </option>
                            ))}
                        </select>
                        {errors.complianceField && <p className="text-red-600 text-sm mt-1" role="alert">{errors.complianceField}</p>}
                    </div>

                    <div>
                        <label htmlFor="complianceSubField" className="block text-gray-700 font-semibold mb-2">Compliance Sub Field (Sub Heading) *</label>
                        <select
                            id="complianceSubField"
                            name="complianceSubField"
                            value={formData.complianceSubField}
                            onChange={handleChange}
                            className={`${commonInputClasses} ${errors.complianceSubField ? errorClasses : ''}`}
                            disabled={!formData.complianceField}
                            aria-required="true"
                        >
                            <option value="">Select a Sub-Service</option>
                            {availableSubFields.map((card) => (
                                <option key={card.subHeading} value={`${card.subHeading} (${card.price})`}>
                                    {card.subHeading} ({card.price})
                                </option>
                            ))}
                        </select>
                        {errors.complianceSubField && <p className="text-red-600 text-sm mt-1" role="alert">{errors.complianceSubField}</p>}
                    </div>

                    {selectedPrice && (
                        <div className="bg-gray-50 p-4 rounded-md border border-gray-200 text-right">
                            <span className="font-bold text-[#2e3e4d] text-lg">Estimated Price: </span>
                            <span className="text-[#c5a47e] font-bold text-xl">{selectedPrice}</span>
                        </div>
                    )}

                    {/* Extra Message */}
                    <div>
                        <label htmlFor="extraMessage" className="block text-gray-700 font-semibold mb-2">Any extra message from your side?</label>
                        <textarea
                            id="extraMessage"
                            name="extraMessage"
                            value={formData.extraMessage}
                            onChange={handleChange}
                            rows={4}
                            className={commonInputClasses}
                        ></textarea>
                    </div>

                    <div className="text-center mt-8">
                        <button type="submit" className="bg-[#2e3e4d] text-white font-bold py-3 px-8 rounded-md hover:bg-[#1a2530] transition-colors">
                            Submit Request
                        </button>
                        {submissionStatus.submitted && (
                            <p className={`mt-4 ${submissionStatus.message.includes("successfully") ? "text-green-600" : "text-red-600"}`}>{submissionStatus.message}</p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ComplianceRequestFormPage;