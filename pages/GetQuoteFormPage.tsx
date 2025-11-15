import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { useLocation } from 'react-router-dom';
import { modernServices } from '../data/modernServicesData'; 

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

interface ConditionalInput {
    id: string;
    name: string;
    label: string;
    type: 'text' | 'number' | 'email' | 'tel' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'date';
    placeholder?: string;
    options?: { value: string; label: string; }[];
    dependencies?: { field: string; value: string | boolean | string[]; }[]; // For conditional rendering based on other inputs
    required: boolean;
    pattern?: string; // For regex validation
    maxLength?: number;
    colSpan?: number; // To control layout for checkboxes specifically
}

// Define the mapping of main service titles to their conditional inputs
const conditionalInputsConfig: Record<string, ConditionalInput[]> = {
    "Startup": [
        { id: "proposedCompanyType", name: "proposedCompanyType", label: "Proposed Company Type*", type: "select", options: [
            { value: "", label: "Select Type" },
            { value: "Proprietorship", label: "Proprietorship" },
            { value: "Partnership", label: "Partnership" },
            { value: "One Person Company", label: "One Person Company (OPC)" },
            { value: "Limited Liability Partnership", label: "Limited Liability Partnership (LLP)" },
            { value: "Private Limited Company", label: "Private Limited Company" },
            { value: "Section 8 Company", label: "Section 8 Company (Non-Profit)" },
            { value: "Public Limited Company", label: "Public Limited Company" },
            { value: "Producer Company", label: "Producer Company" },
            { value: "Indian Subsidiary", label: "Indian Subsidiary" },
        ], required: true },
        { id: "numPartnersDirectors", name: "numPartnersDirectors", label: "Number of Partners/Directors*", type: "number", placeholder: "e.g., 2", required: true },
        { id: "estimatedTurnover", name: "estimatedTurnover", label: "Estimated Annual Turnover (first year) (₹)*", type: "number", placeholder: "e.g., 500000", required: true },
        { id: "existingBusinessName", name: "existingBusinessName", label: "Existing Business Name (if converting from another type)", type: "text", placeholder: "Optional", required: false },
    ],
    "Registrations": [
        { id: "entityType", name: "entityType", label: "Your Entity Type*", type: "select", options: [
            { value: "", label: "Select Type" },
            { value: "Proprietorship", label: "Proprietorship" },
            { value: "Partnership", label: "Partnership" },
            { value: "LLP", label: "LLP" },
            { value: "Pvt Ltd Company", label: "Pvt Ltd Company" },
            { value: "Public Ltd Company", label: "Public Ltd Company" },
            { value: "NGO/Trust", label: "NGO/Trust" },
            { value: "Other", label: "Other" },
        ], required: true },
        { id: "hasGSTIN", name: "hasGSTIN", label: "Do you have GSTIN?*", type: "radio", options: [{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }], required: true },
        { id: "gstinNumber", name: "gstinNumber", label: "GSTIN*", type: "text", placeholder: "Enter your GSTIN", required: true, dependencies: [{ field: "hasGSTIN", value: "Yes" }], pattern: "^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$", maxLength: 15 },
        { id: "hasCINLLPIN", name: "hasCINLLPIN", label: "Do you have CIN/LLPIN?*", type: "radio", options: [{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }], required: true },
        { id: "cinLlpinNumber", name: "cinLlpinNumber", label: "CIN/LLPIN*", type: "text", placeholder: "Enter your CIN/LLPIN", required: true, dependencies: [{ field: "hasCINLLPIN", value: "Yes" }], pattern: "^([LU]|[UG]|[UL]){1}([0-9]){5}([A-Za-z]){2}([0-9]){4}([A-Za-z]){3}([0-9]){6}$", maxLength: 21 },
    ],
    "Trademark": [
        { id: "proposedBrandName", name: "proposedBrandName", label: "Proposed Brand Name/Logo Description*", type: "text", placeholder: "e.g., 'SwiftKart' for e-commerce", required: true },
        { id: "goodsServicesDescription", name: "goodsServicesDescription", label: "Description of Goods/Services*", type: "textarea", placeholder: "Describe what your brand will be used for (e.g., 'Online retail services for electronics and apparel')", required: true },
        { id: "markInUse", name: "markInUse", label: "Is the mark currently in use?*", type: "radio", options: [{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }], required: true },
        { id: "firstUseDate", name: "firstUseDate", label: "Date of First Use (if Yes)*", type: "date", required: true, dependencies: [{ field: "markInUse", value: "Yes" }] },
    ],
    "GST": [
        { id: "annualTurnover", name: "annualTurnover", label: "Annual Turnover (Last Financial Year) (₹)*", type: "number", placeholder: "e.g., 2000000", required: true },
        { id: "businessNature", name: "businessNature", label: "Nature of Business*", type: "select", options: [
            { value: "", label: "Select Nature" },
            { value: "Trader", label: "Trader" },
            { value: "Manufacturer", label: "Manufacturer" },
            { value: "Service Provider", label: "Service Provider" },
            { value: "Other", label: "Other" },
        ], required: true },
        { id: "interStateSupply", name: "interStateSupply", label: "Are you engaged in inter-state supply?*", type: "radio", options: [{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }], required: true },
        { id: "existingGstin", name: "existingGstin", label: "Existing GSTIN (if any)", type: "text", placeholder: "Optional", required: false, pattern: "^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$", maxLength: 15 },
    ],
    "Income Tax": [
        { id: "incomeSources", name: "incomeSources", label: "Primary Income Source(s)*", type: "checkbox", options: [
            { value: "Salary", label: "Salary" },
            { value: "Business/Profession", label: "Business/Profession" },
            { value: "Capital Gains", label: "Capital Gains" },
            { value: "House Property", label: "House Property" },
            { value: "Other Sources", label: "Other Sources (Interest, Dividends, etc.)" },
        ], required: true, colSpan: 2 },
        { id: "taxAuditRequired", name: "taxAuditRequired", label: "Do you require tax audit?*", type: "radio", options: [{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }], required: true },
        { id: "estimatedGrossIncome", name: "estimatedGrossIncome", label: "Estimated Gross Income (₹)*", type: "number", placeholder: "e.g., 700000", required: true },
    ],
    "MCA": [
        { id: "existingCinLlpin", name: "existingCinLlpin", label: "Existing CIN/LLPIN*", type: "text", placeholder: "e.g., U12345MH2000PTC123456", required: true, pattern: "^([LU]|[UG]|[UL]){1}([0-9]){5}([A-Za-z]){2}([0-9]){4}([A-Za-z]){3}([0-9]){6}$", maxLength: 21 },
        { id: "natureOfChange", name: "natureOfChange", label: "Nature of Change/Service Required*", type: "select", options: [
            { value: "", label: "Select Change" },
            { value: "Name Change", label: "Name Change" },
            { value: "Registered Office Change", label: "Registered Office Change" },
            { value: "Director Addition", label: "Director Addition" },
            { value: "Director Removal", label: "Director Removal" },
            { value: "Capital Increase", label: "Authorized Capital Increase" },
            { value: "MOA Amendment", label: "MOA Amendment" },
            { value: "AOA Amendment", label: "AOA Amendment" },
            { value: "Annual Filing Support", label: "Annual Filing Support (AOC-4, MGT-7, etc.)" },
            { value: "Other", label: "Other" },
        ], required: true },
        { id: "reasonForChange", name: "reasonForChange", label: "Brief Reason for Change/Request*", type: "textarea", placeholder: "Provide a brief description of why this change is needed.", required: true },
    ],
    "Compliance": [
        { id: "entityTypeCompliance", name: "entityTypeCompliance", label: "Your Entity Type*", type: "select", options: [
            { value: "", label: "Select Type" },
            { value: "Proprietorship", label: "Proprietorship" },
            { value: "Partnership", label: "Partnership" },
            { value: "LLP", label: "LLP" },
            { value: "Pvt Ltd Company", label: "Pvt Ltd Company" },
            { value: "Public Ltd Company", label: "Public Ltd Company" },
            { value: "NGO/Trust", label: "NGO/Trust" },
            { value: "Other", label: "Other" },
        ], required: true },
        { id: "specificComplianceArea", name: "specificComplianceArea", label: "Specific Compliance Area*", type: "select", options: [
            { value: "", label: "Select Area" },
            { value: "FDI Filing with RBI", label: "FDI Filing with RBI" },
            { value: "FLA Return Filing", label: "FLA Return Filing" },
            { value: "FSSAI Renewal/Return", label: "FSSAI Renewal/Return" },
            { value: "PF/ESI Return Filing", label: "PF/ESI Return Filing" },
            { value: "HR & Payroll Compliance", label: "HR & Payroll Compliance" },
            { value: "Bookkeeping Services", label: "Bookkeeping Services" },
            { value: "Other", label: "Other" },
        ], required: true },
        { id: "numEmployees", name: "numEmployees", label: "Number of Employees (if applicable)", type: "number", placeholder: "e.g., 15", required: false },
    ],
    "Personal": [
        { id: "personalServiceType", name: "personalServiceType", label: "Type of Personal Legal Service*", type: "select", options: [
            { value: "", label: "Select Service" },
            { value: "Will Drafting", label: "Will Drafting" },
            { value: "Asset Transfer", label: "Asset Transfer" },
            { value: "Family Trust Setup", label: "Family Trust Setup" },
            { value: "Dubai Visa Assistance", label: "Dubai Visa Assistance" },
        ], required: true },
        { id: "assetValue", name: "assetValue", label: "Approximate Value of Assets (₹) (if applicable)", type: "number", placeholder: "e.g., 10000000", required: false, dependencies: [{field: "personalServiceType", value: ["Will Drafting", "Asset Transfer", "Family Trust Setup"]}] },
        { id: "numBeneficiaries", name: "numBeneficiaries", label: "Number of Beneficiaries (if applicable)", type: "number", placeholder: "e.g., 3", required: false, dependencies: [{field: "personalServiceType", value: ["Will Drafting", "Family Trust Setup"]}] },
        { id: "nationality", name: "nationality", label: "Your Nationality*", type: "text", placeholder: "e.g., Indian", required: true },
    ],
    "Global": [
        { id: "targetCountry", name: "targetCountry", label: "Target Country for Service*", type: "select", options: [
            { value: "", label: "Select Country" },
            { value: "UAE", label: "UAE" },
            { value: "USA", label: "USA" },
            { value: "Singapore", label: "Singapore" },
            { value: "UK", label: "UK" },
            { value: "Other", label: "Other (Please specify in message)" },
        ], required: true },
        { id: "proposedActivityGlobal", name: "proposedActivityGlobal", label: "Proposed Business Activity (Briefly)*", type: "textarea", placeholder: "e.g., Setting up an e-commerce platform for fashion in UAE.", required: true },
        { id: "countryResident", name: "countryResident", label: "Are you a resident of the target country?*", type: "radio", options: [{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }], required: true },
        { id: "existingBusinessHome", name: "existingBusinessHome", label: "Do you have an existing business in your home country?*", type: "radio", options: [{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }], required: true },
    ],
};

// Main form data structure
interface GetQuoteFormData {
    name: string;
    email: string;
    phone: string;
    mainServiceTitle: string; // From URL param
    subServiceTitle: string;  // From URL param
    extraMessage: string;
    [key: string]: string | number | boolean | string[] | undefined; // For dynamic fields
}

type FormErrors = Partial<Record<keyof GetQuoteFormData, string>>;

const GetQuoteFormPage: React.FC = () => {
    const location = useLocation();
    const [formData, setFormData] = useState<GetQuoteFormData>({
        name: '',
        email: '',
        phone: '',
        mainServiceTitle: '',
        subServiceTitle: '',
        extraMessage: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [submissionStatus, setSubmissionStatus] = useState<{ success: boolean | null, message: string }>({ success: null, message: '' });
    const commonInputClasses = "w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c5a47e] transition-shadow";
    const errorClasses = "border-red-500 focus:ring-red-500";

    // Effect to pre-fill form based on URL parameters
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const mainServiceParam = queryParams.get('mainService');
        const subServiceParam = queryParams.get('subService');

        setFormData(prev => ({
            ...prev,
            mainServiceTitle: mainServiceParam || '',
            subServiceTitle: subServiceParam || '',
        }));
    }, [location.search]);

    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        // Basic fields validation
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

        // Validate conditional fields based on the selected main service
        const mainServiceKey = formData.mainServiceTitle;
        const config = conditionalInputsConfig[mainServiceKey];

        if (config) {
            config.forEach(inputConfig => {
                // Check dependencies for conditional rendering/validation
                const isDependentAndHidden = inputConfig.dependencies?.some(dep => {
                    const dependentValue = formData[dep.field];
                    if (Array.isArray(dep.value)) { // For checkbox dependencies
                        return !dep.value.includes(dependentValue as string);
                    }
                    return dependentValue !== dep.value;
                });

                if (isDependentAndHidden) {
                    return; // Don't validate if dependent and hidden
                }

                const value = formData[inputConfig.name];

                if (inputConfig.required && (!value || (typeof value === 'string' && !value.trim()) || (Array.isArray(value) && value.length === 0))) {
                    newErrors[inputConfig.name] = `${inputConfig.label.replace('*', '').trim()} is required.`;
                }

                // Specific pattern validation for text/tel inputs
                if (value && typeof value === 'string' && inputConfig.pattern) {
                    const regex = new RegExp(inputConfig.pattern);
                    if (!regex.test(value)) {
                        newErrors[inputConfig.name] = `Invalid format for ${inputConfig.label.replace('*', '').trim()}.`;
                    }
                }
                
                // Specific validation for number types
                if (inputConfig.type === 'number' && typeof value === 'string' && value.trim() !== '') {
                    if (isNaN(Number(value))) {
                        newErrors[inputConfig.name] = `${inputConfig.label.replace('*', '').trim()} must be a number.`;
                    } else if (Number(value) <= 0) {
                        newErrors[inputConfig.name] = `${inputConfig.label.replace('*', '').trim()} must be a positive number.`;
                    }
                }
            });
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;

        // Handle checkbox group for incomeSources
        if (type === 'checkbox' && name === 'incomeSources') {
            setFormData(prev => {
                const currentSources = (prev.incomeSources || []) as string[];
                if (checked) {
                    return { ...prev, incomeSources: [...currentSources, value] };
                } else {
                    return { ...prev, incomeSources: currentSources.filter(src => src !== value) };
                }
            });
        } else if (type === 'radio') {
             // For radio buttons, set the value directly
            setFormData(prev => ({ ...prev, [name]: value }));
        }
        else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmissionStatus({ success: null, message: '' });

        if (validate()) {
            const web3FormData = new FormData(e.currentTarget);
            web3FormData.append("subject", `JBLC India - Quote Request for ${formData.mainServiceTitle}`);
            web3FormData.append("from_name", "JBLC India Quote Form");

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: web3FormData,
                });
                const result = await response.json();

                if (result.success) {
                    setSubmissionStatus({ success: true, message: "Thank you for your request. We will contact you shortly." });
                    const preservedData = {
                        mainServiceTitle: formData.mainServiceTitle,
                        subServiceTitle: formData.subServiceTitle,
                    };
                    // Reset form
                    setFormData({ name: '', email: '', phone: '', extraMessage: '', ...preservedData });
                    setErrors({});
                    // Reset dynamic fields
                    const mainServiceKey = formData.mainServiceTitle;
                    if (conditionalInputsConfig[mainServiceKey]) {
                        conditionalInputsConfig[mainServiceKey].forEach(inputConfig => {
                            setFormData(prev => ({ ...prev, [inputConfig.name]: inputConfig.type === 'checkbox' ? [] : '' }));
                        });
                    }
                } else {
                    setSubmissionStatus({ success: false, message: "Something went wrong. Please try again." });
                }
            } catch (error) {
                setSubmissionStatus({ success: false, message: "Something went wrong. Please try again." });
            }

        } else {
            setSubmissionStatus({ success: false, message: 'Please correct the errors in the form.' });
            // Scroll to the first error
            const errorFields = Object.keys(errors);
            if (errorFields.length > 0) {
                const firstErrorField = errorFields[0];
                const element = document.querySelector(`[name="${firstErrorField}"]`);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        }
    };

    const mainServiceKey = formData.mainServiceTitle;
    const currentConditionalInputs = conditionalInputsConfig[mainServiceKey] || [];

    const renderInputField = (inputConfig: ConditionalInput) => {
        const value = formData[inputConfig.name];
        const hasError = errors[inputConfig.name];
        const inputClass = `${commonInputClasses} ${hasError ? errorClasses : ''}`;
        
        // Check dependencies for conditional rendering
        const isDependentAndHidden = inputConfig.dependencies?.some(dep => {
            const dependentValue = formData[dep.field];
            if (Array.isArray(dep.value)) { // For checkbox dependencies (e.g., incomeSources)
                return !dep.value.some(val => (dependentValue as string[])?.includes(val));
            }
            return dependentValue !== dep.value;
        });

        if (isDependentAndHidden) {
            return null; // Don't render if dependent and hidden
        }

        switch (inputConfig.type) {
            case 'text':
            case 'email':
            case 'tel':
            case 'date':
                return (
                    <div>
                        <label htmlFor={inputConfig.id} className="block text-gray-700 font-semibold mb-2">{inputConfig.label}</label>
                        <input
                            type={inputConfig.type}
                            id={inputConfig.id}
                            name={inputConfig.name}
                            value={(value as string) || ''}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder={inputConfig.placeholder}
                            maxLength={inputConfig.maxLength}
                            aria-required={inputConfig.required}
                        />
                        {hasError && <p className="text-red-600 text-sm mt-1" role="alert">{hasError}</p>}
                    </div>
                );
            case 'number':
                return (
                    <div>
                        <label htmlFor={inputConfig.id} className="block text-gray-700 font-semibold mb-2">{inputConfig.label}</label>
                        <input
                            type="number"
                            id={inputConfig.id}
                            name={inputConfig.name}
                            value={(value as number | string) || ''}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder={inputConfig.placeholder}
                            min="0" // Assuming most numbers here should be positive
                            aria-required={inputConfig.required}
                        />
                        {hasError && <p className="text-red-600 text-sm mt-1" role="alert">{hasError}</p>}
                    </div>
                );
            case 'textarea':
                return (
                    <div className={inputConfig.colSpan ? `md:col-span-${inputConfig.colSpan}` : ''}>
                        <label htmlFor={inputConfig.id} className="block text-gray-700 font-semibold mb-2">{inputConfig.label}</label>
                        <textarea
                            id={inputConfig.id}
                            name={inputConfig.name}
                            value={(value as string) || ''}
                            onChange={handleChange}
                            rows={3}
                            className={inputClass}
                            placeholder={inputConfig.placeholder}
                            aria-required={inputConfig.required}
                        ></textarea>
                        {hasError && <p className="text-red-600 text-sm mt-1" role="alert">{hasError}</p>}
                    </div>
                );
            case 'select':
                return (
                    <div>
                        <label htmlFor={inputConfig.id} className="block text-gray-700 font-semibold mb-2">{inputConfig.label}</label>
                        <select
                            id={inputConfig.id}
                            name={inputConfig.name}
                            value={(value as string) || ''}
                            onChange={handleChange}
                            className={inputClass}
                            aria-required={inputConfig.required}
                        >
                            {inputConfig.options?.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                        {hasError && <p className="text-red-600 text-sm mt-1" role="alert">{hasError}</p>}
                    </div>
                );
            case 'radio':
                return (
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">{inputConfig.label}</label>
                        <div className="flex items-center space-x-4">
                            {inputConfig.options?.map(option => (
                                <label key={option.value} className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name={inputConfig.name}
                                        value={option.value}
                                        checked={value === option.value}
                                        onChange={handleChange}
                                        className="form-radio text-[#c5a47e]"
                                        aria-required={inputConfig.required}
                                    />
                                    <span className="ml-2 text-gray-700">{option.label}</span>
                                </label>
                            ))}
                        </div>
                        {hasError && <p className="text-red-600 text-sm mt-1" role="alert">{hasError}</p>}
                    </div>
                );
            case 'checkbox':
                return (
                    <div className={inputConfig.colSpan ? `md:col-span-${inputConfig.colSpan}` : ''}>
                        <label className="block text-gray-700 font-semibold mb-2">{inputConfig.label}</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {inputConfig.options?.map(option => (
                                <label key={option.value} className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name={inputConfig.name}
                                        value={option.value}
                                        checked={Array.isArray(value) && value.includes(option.value)}
                                        onChange={handleChange}
                                        className="form-checkbox text-[#c5a47e]"
                                        aria-required={inputConfig.required}
                                    />
                                    <span className="ml-2 text-gray-700">{option.label}</span>
                                </label>
                            ))}
                        </div>
                        {hasError && <p className="text-red-600 text-sm mt-1" role="alert">{hasError}</p>}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <SEO
                title={`Get a Quote for ${formData.subServiceTitle || 'Service'} | JBLC INDIA`}
                description={`Request a personalized quote for ${formData.subServiceTitle || 'our services'} from JBLC INDIA.`}
                keywords={`JBLC INDIA, get a quote, ${formData.mainServiceTitle}, ${formData.subServiceTitle}, legal quote, finance quote`}
                canonicalPath="/get-quote"
            />
            <PageHeader title="Request a Quote" subtitle="Personalized Solutions for Your Needs" />

            <div className="container mx-auto px-4 py-20">
                <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-2xl space-y-6">
                     <input type="hidden" name="access_key" value="0ffe4441-a576-411f-be97-0559b93e0932" />
                    <input type="hidden" name="redirect" value="https://web3forms.com/success" /><h2 className="text-3xl font-bold text-[#2e3e4d] mb-6 text-center">Get a Personalized Quote</h2>
                    <div className="w-24 h-1 bg-[#c5a47e] mx-auto mb-8"></div>

                    {/* Personal Information */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-[#c5a47e] mb-4 border-b-2 pb-2">Your Contact Details</h3>
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
                    </div>

                    {/* Service Selection - Pre-filled */}
                    <div className="space-y-4 pt-6">
                        <h3 className="text-2xl font-bold text-[#c5a47e] mb-4 border-b-2 pb-2">Requested Service Details</h3>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Main Service Category</label>
                            <input
                                type="text"
                                value={formData.mainServiceTitle || 'Not selected'}
                                className={`${commonInputClasses} bg-gray-100 cursor-not-allowed`}
                                readOnly
                                aria-label="Main service category"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Specific Service</label>
                            <input
                                type="text"
                                value={formData.subServiceTitle || 'Not selected'}
                                className={`${commonInputClasses} bg-gray-100 cursor-not-allowed`}
                                readOnly
                                aria-label="Specific service requested"
                            />
                        </div>
                    </div>

                    {/* Dynamic Conditional Fields */}
                    {currentConditionalInputs.length > 0 && (
                        <div className="space-y-4 pt-6">
                            <h3 className="text-2xl font-bold text-[#c5a47e] mb-4 border-b-2 pb-2">Additional Details for {formData.mainServiceTitle}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {currentConditionalInputs.map(inputConfig => (
                                    <React.Fragment key={inputConfig.id}>
                                        {renderInputField(inputConfig)}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Extra Message */}
                    <div className="pt-6">
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
                        {submissionStatus.message && (
                            <p className={`mt-4 text-sm ${submissionStatus.success ? 'text-green-600' : 'text-red-600'}`}>
                                {submissionStatus.message}
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GetQuoteFormPage;