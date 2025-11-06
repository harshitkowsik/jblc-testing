import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { teamMembers } from '../data/teamData';


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

interface AppointmentFormData {
    location: string;
    service: string;
    worker: string;
    date: string;
    time: string;
    email: string;
    name: string;
    phone: string;
    description: string;
}

type FormErrors = Partial<Record<keyof AppointmentFormData, string>>;


const AppointmentPage: React.FC = () => {
    const initialFormData: AppointmentFormData = {
        location: '',
        service: '',
        worker: '',
        date: '',
        time: '',
        email: '',
        name: '',
        phone: '',
        description: '',
    };

    const [formData, setFormData] = useState<AppointmentFormData>(initialFormData);
    const [errors, setErrors] = useState<FormErrors>({});
    const [price, setPrice] = useState(0);

    const services = [
        { name: 'Legal Notice', price: 10000 },
        { name: 'Civil Case Filing', price: 25000 },
        { name: 'Anticipatory Bail', price: 50000 },
        { name: 'Criminal Matter Bail Cases', price: 100000 },
        { name: 'Workplace Harresment', price: 29999 },
        { name: 'Domestic Violence', price: 24999 },
        { name: 'NI Act Case', price: 24999 },
        { name: 'Criminal Matter Consultation', price: 75000 },
        { name: 'Civil Matter Consultation', price: 24999 },
        { name: 'Property Cases', price: 25000 },
        { name: 'Family Matter', price: 24999 },
    ];

    const workers = teamMembers.map(member => member.name);

    useEffect(() => {
        const selectedService = services.find(s => s.name === formData.service);
        setPrice(selectedService ? selectedService.price : 0);
    }, [formData.service]);


    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};

        const requiredFields: (keyof AppointmentFormData)[] = [
            'location', 'service', 'worker', 'date', 'time', 'email', 'name', 'phone'
        ];

        requiredFields.forEach(field => {
            if (!formData[field].trim()) {
                newErrors[field] = 'This field is required.';
            }
        });

        if (formData.time && parseInt(formData.time.split(':')[1], 10) % 30 !== 0) {
            newErrors.time = 'Appointments can only be booked at 30-minute intervals (e.g., 09:00, 09:30).';
        }

        if (formData.date && formData.time) {
            const selectedDateTime = new Date(`${formData.date}T${formData.time}`);
            if (selectedDateTime < new Date()) {
                newErrors.date = 'Cannot book an appointment in the past.';
            }
        }

        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid.';
        }
        
        if (formData.phone && (!/^\d{10}$/.test(formData.phone))) {
            newErrors.phone = 'Phone number must be 10 digits.';
        }

        setErrors(newErrors);
        return newErrors;
    };

    const handleReset = () => {
        setFormData(initialFormData);
        setErrors({});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            // No errors, submission is successful
            alert('Appointment submitted successfully! We will contact you shortly.');
            console.log(formData);
            // Reset the form after a short delay
            setTimeout(handleReset, 500);
        } else {
            // Errors found, scroll to the first invalid field
            const errorFields = Object.keys(validationErrors);
            if (errorFields.length > 0) {
                const firstErrorField = errorFields[0];
                const element = document.querySelector(`[name="${firstErrorField}"]`);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Optionally, clear the error for this field as the user types
        if (errors[name as keyof AppointmentFormData]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const commonInputClasses = "w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c5a47e] transition-shadow";
    const errorClasses = "border-red-500 focus:ring-red-500";

    return (
        <div>
            <SEO
                title="Book a Legal Consultation Online | JBLC INDIA"
                description="Schedule a confidential legal consultation with our expert advocates. Use our secure online form to book your appointment with JBLC INDIA today."
            />
            <PageHeader title="Book an Appointment" subtitle="Secure Your Legal Consultation Today" />

            <div className="container mx-auto px-4 py-20">
                <form onSubmit={handleSubmit} className="max-w-5xl mx-auto bg-white p-10 rounded-lg shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
                        <div className="mb-8 md:mb-0">
                            <h2 className="text-3xl font-bold text-[#2e3e4d] mb-6">1. Appointment Details</h2>

                            <div className="mb-5">
                                <label htmlFor="location" className="block text-gray-700 font-semibold mb-2">Location *</label>
                                <select id="location" name="location" value={formData.location} onChange={handleChange} className={`${commonInputClasses} ${errors.location ? errorClasses : ''}`}>
                                    <option value="">Select Location</option>
                                    <option value="Zonal Office">Zonal Office (Delhi)</option>
                                    <option value="Regional Office">Regional Office (Lucknow)</option>
                                </select>
                                {errors.location && <p className="text-red-600 text-sm mt-1">{errors.location}</p>}
                            </div>

                            <div className="mb-5">
                                <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">Service *</label>
                                <select id="service" name="service" value={formData.service} onChange={handleChange} className={`${commonInputClasses} ${errors.service ? errorClasses : ''}`}>
                                    <option value="">Select Service</option>
                                    {services.map(s => <option key={s.name} value={s.name}>{`${s.name} - ₹${s.price.toFixed(2)}`}</option>)}
                                </select>
                                {errors.service && <p className="text-red-600 text-sm mt-1">{errors.service}</p>}
                            </div>

                            <div className="mb-5">
                                <label htmlFor="worker" className="block text-gray-700 font-semibold mb-2">Advocate *</label>
                                <select id="worker" name="worker" value={formData.worker} onChange={handleChange} className={`${commonInputClasses} ${errors.worker ? errorClasses : ''}`}>
                                    <option value="">Select Advocate</option>
                                    {workers.map(w => <option key={w} value={w}>{w}</option>)}
                                </select>
                                {errors.worker && <p className="text-red-600 text-sm mt-1">{errors.worker}</p>}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">Date *</label>
                                    <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className={`${commonInputClasses} ${errors.date ? errorClasses : ''} dark:[color-scheme:light]`} />
                                    {errors.date && <p className="text-red-600 text-sm mt-1">{errors.date}</p>}
                                </div>
                                <div>
                                    <label htmlFor="time" className="block text-gray-700 font-semibold mb-2">Time *</label>
                                    <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} className={`${commonInputClasses} ${errors.time ? errorClasses : ''} dark:[color-scheme:light]`} min="09:00" max="18:00" step="1800" />
                                    {errors.time && <p className="text-red-600 text-sm mt-1">{errors.time}</p>}
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-[#2e3e4d] mb-6">2. Personal Information</h2>
                            <div className="mb-5">
                                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`${commonInputClasses} ${errors.name ? errorClasses : ''}`} />
                                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`${commonInputClasses} ${errors.email ? errorClasses : ''}`} />
                                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                            </div>
                            <div className="mb-5">
                                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} maxLength={10} className={`${commonInputClasses} ${errors.phone ? errorClasses : ''}`} />
                                {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                            </div>
                            <div className="mb-5">
                                <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Brief Description</label>
                                <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows={3} className={commonInputClasses} />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-2 mt-10 border-t pt-8">
                        <h2 className="text-3xl font-bold text-[#2e3e4d] mb-4">3. Booking Overview</h2>
                        <div className="bg-gray-50 p-6 rounded-lg space-y-3 border border-gray-200">
                            <div className="flex justify-between items-center"><span className="font-semibold text-gray-600">Location:</span> <span>{formData.location || 'N/A'}</span></div>
                            <div className="flex justify-between items-center"><span className="font-semibold text-gray-600">Service:</span> <span>{formData.service || 'N/A'}</span></div>
                            <div className="flex justify-between items-center"><span className="font-semibold text-gray-600">Advocate:</span> <span>{formData.worker || 'N/A'}</span></div>
                            <div className="flex justify-between items-center"><span className="font-semibold text-gray-600">Date & Time:</span> <span>{formData.date && formData.time ? new Date(`${formData.date}T${formData.time}`).toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' }) : 'N/A'}</span></div>
                            <div className="border-t my-3"></div>
                            <div className="flex justify-between items-center text-2xl font-bold"><span className="text-[#2e3e4d]">Total Price:</span> <span className="text-[#c5a47e]">₹{price.toFixed(2)}</span></div>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-2 mt-10 flex flex-col space-y-4 md:flex-row md:justify-end md:space-y-0 md:space-x-4">
                        <button type="button" onClick={handleReset} className="bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-md hover:bg-gray-300 transition-colors w-full md:w-auto">Cancel</button>
                        <button type="submit" className="bg-[#2e3e4d] text-white font-bold py-3 px-8 rounded-md hover:bg-[#1a2530] transition-colors w-full md:w-auto">Confirm Appointment</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AppointmentPage;