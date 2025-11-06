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

interface JobApplicationFormData {
    stateApplyingFor: string;
    districtApplyingFor: string;
    pincode: string;
    candidateFirstName: string;
    candidateMiddleName: string;
    candidateLastName: string;
    motherName: string;
    fatherHusbandName: string;
    dob: string;
    email: string;
    gender: string;
    mobile: string;
    corrHouseStreet: string;
    corrCityTownVillage: string;
    corrPincode: string;
    corrState: string;
    eduBoardUniversity: string;
    eduCourseType: string;
    eduPassingYear: string;
    eduPercentage: string;
    docsToUpload: string[];
    consent: boolean;
}

type FormErrors = Partial<Record<keyof JobApplicationFormData, string>>;

const JobApplicationPage: React.FC = () => {
    const [formData, setFormData] = useState<JobApplicationFormData>({
        stateApplyingFor: '',
        districtApplyingFor: '',
        pincode: '',
        candidateFirstName: '',
        candidateMiddleName: '',
        candidateLastName: '',
        motherName: '',
        fatherHusbandName: '',
        dob: '',
        email: '',
        gender: '',
        mobile: '',
        corrHouseStreet: '',
        corrCityTownVillage: '',
        corrPincode: '',
        corrState: '',
        eduBoardUniversity: '',
        eduCourseType: '',
        eduPassingYear: '',
        eduPercentage: '',
        docsToUpload: [],
        consent: false,
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const commonInputClasses = "w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c5a47e] transition-shadow";
    const errorClasses = "border-red-500 focus:ring-red-500";

    const indianStates = [
        'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
        'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
        'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
        'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
        'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi',
        'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
    ];

    const currentYear = new Date().getFullYear();
    const passingYears = Array.from({ length: 50 }, (_, i) => (currentYear - i).toString());

    const documentCheckboxes = [
        'Updated CV', 'Identity Proof', 'Address Proof', 'Recent Photograph',
        '10th Marksheet', '12th Marksheet', 'LLB Marksheet', 'LLM Marksheet',
        'Internship Certificate (If Any)'
    ];

    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        const stringRequiredFields: (keyof JobApplicationFormData)[] = [
            'stateApplyingFor', 'districtApplyingFor', 'pincode',
            'candidateFirstName', 'motherName', 'fatherHusbandName', 'dob', 'email', 'gender', 'mobile',
            'corrHouseStreet', 'corrCityTownVillage', 'corrPincode', 'corrState',
            'eduBoardUniversity', 'eduCourseType', 'eduPassingYear', 'eduPercentage',
        ];

        stringRequiredFields.forEach(field => {
            const value = formData[field];
            if (typeof value === 'string' && !value.trim()) {
                newErrors[field] = 'This field is required.';
            }
        });

        if (formData.docsToUpload.length === 0) {
            newErrors.docsToUpload = 'At least one document type must be selected.';
        }

        if (formData.pincode && (!/^\d{6}$/.test(formData.pincode))) {
            newErrors.pincode = 'Pincode must be 6 digits.';
        }
        if (formData.corrPincode && (!/^\d{6}$/.test(formData.corrPincode))) {
            newErrors.corrPincode = 'Pincode must be 6 digits.';
        }
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email address.';
        }
        if (formData.mobile && (!/^\d{10}$/.test(formData.mobile))) {
            newErrors.mobile = 'Mobile number must be 10 digits.';
        }
        if (formData.dob) {
            const birthDate = new Date(formData.dob);
            if (isNaN(birthDate.getTime()) || birthDate >= new Date()) {
                newErrors.dob = 'Invalid Date of Birth.';
            }
        }
        if (formData.eduPercentage && (!/^(100|[1-9]?[0-9])$/.test(formData.eduPercentage))) {
            newErrors.eduPercentage = 'Percentage must be between 0-100.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        if (type === 'checkbox') {
            if (name === 'consent') {
                setFormData(prev => ({ ...prev, [name]: checked }));
            } else { 
                setFormData(prev => ({
                    ...prev,
                    docsToUpload: checked
                        ? [...prev.docsToUpload, value]
                        : prev.docsToUpload.filter(doc => doc !== value)
                }));
            }
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const encodeMailtoLink = (data: JobApplicationFormData) => {
        const recipient = 'jsh@gmail.com'; // Replace with your email
        const subject = encodeURIComponent('Job Application from ' + data.candidateFirstName + ' ' + data.candidateLastName);
      
        const bodyLines = [
          `Candidate Name: ${data.candidateFirstName} ${data.candidateMiddleName} ${data.candidateLastName}`,
          `Mother's Name: ${data.motherName}`,
          `Father's/Husband's Name: ${data.fatherHusbandName}`,
          `Date of Birth: ${data.dob}`,
          `Email: ${data.email}`,
          `Gender: ${data.gender}`,
          `Mobile: ${data.mobile}`,
          `State Applying For: ${data.stateApplyingFor}`,
          `District Applying For: ${data.districtApplyingFor}`,
          `PIN Code: ${data.pincode}`,
          `Correspondence Address: ${data.corrHouseStreet}, ${data.corrCityTownVillage}, ${data.corrState} - ${data.corrPincode}`,
          `Education: ${data.eduBoardUniversity}, ${data.eduCourseType}, Passing Year: ${data.eduPassingYear}, Percentage: ${data.eduPercentage}%`,
          `Documents To Upload: ${data.docsToUpload.join(', ')}`,
          `Consent Given: ${data.consent ? 'Yes' : 'No'}`
        ];
      
        const body = encodeURIComponent(bodyLines.join('\n'));
      
        return `mailto:${recipient}?subject=${subject}&body=${body}`;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            const mailtoLink = encodeMailtoLink(formData);
            window.location.href = mailtoLink;
        } else {
            alert('Please correct the errors in the form.');
        }
    };

    const handleReset = () => {
        setFormData({
            stateApplyingFor: '',
            districtApplyingFor: '',
            pincode: '',
            candidateFirstName: '',
            candidateMiddleName: '',
            candidateLastName: '',
            motherName: '',
            fatherHusbandName: '',
            dob: '',
            email: '',
            gender: '',
            mobile: '',
            corrHouseStreet: '',
            corrCityTownVillage: '',
            corrPincode: '',
            corrState: '',
            eduBoardUniversity: '',
            eduCourseType: '',
            eduPassingYear: '',
            eduPercentage: '',
            docsToUpload: [],
            consent: false,
        });
        setErrors({});
    };

    return (
        <div>
            <SEO 
                title="Job Application Form | JBLC INDIA"
                description="Apply for career opportunities at JBLC INDIA. Fill out our job application form for various legal positions."
                canonicalPath="/apply"
            />
            <PageHeader title="Application Form" subtitle="JBLC INDIA  >  Job Application Form" />

            <div className="container mx-auto px-4 py-20">
                <form onSubmit={handleSubmit} className="max-w-6xl mx-auto bg-white p-10 rounded-lg shadow-2xl space-y-10">
                    <h2 className="text-4xl font-bold text-[#2e3e4d] text-center mb-8">Job Application Form</h2>

                    {/* Personal Details Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-[#c5a47e] mb-6 border-b-2 pb-2">Personal Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div>
                                <label htmlFor="candidateFirstName" className="block text-gray-700 font-semibold mb-2">Candidate First Name*</label>
                                <input type="text" id="candidateFirstName" name="candidateFirstName" value={formData.candidateFirstName} onChange={handleChange} className={`${commonInputClasses} ${errors.candidateFirstName ? errorClasses : ''}`} aria-required="true" />
                                {errors.candidateFirstName && <p className="text-red-600 text-sm mt-1" role="alert">{errors.candidateFirstName}</p>}
                            </div>
                            <div>
                                <label htmlFor="candidateMiddleName" className="block text-gray-700 font-semibold mb-2">Middle Name</label>
                                <input type="text" id="candidateMiddleName" name="candidateMiddleName" value={formData.candidateMiddleName} onChange={handleChange} className={commonInputClasses} />
                            </div>
                            <div>
                                <label htmlFor="candidateLastName" className="block text-gray-700 font-semibold mb-2">Last Name</label>
                                <input type="text" id="candidateLastName" name="candidateLastName" value={formData.candidateLastName} onChange={handleChange} className={commonInputClasses} />
                            </div>
                            <div>
                                <label htmlFor="motherName" className="block text-gray-700 font-semibold mb-2">Mother's Name*</label>
                                <input type="text" id="motherName" name="motherName" value={formData.motherName} onChange={handleChange} className={`${commonInputClasses} ${errors.motherName ? errorClasses : ''}`} aria-required="true" />
                                {errors.motherName && <p className="text-red-600 text-sm mt-1" role="alert">{errors.motherName}</p>}
                            </div>
                            <div>
                                <label htmlFor="fatherHusbandName" className="block text-gray-700 font-semibold mb-2">Father's/Husband's Name*</label>
                                <input type="text" id="fatherHusbandName" name="fatherHusbandName" value={formData.fatherHusbandName} onChange={handleChange} className={`${commonInputClasses} ${errors.fatherHusbandName ? errorClasses : ''}`} aria-required="true" />
                                {errors.fatherHusbandName && <p className="text-red-600 text-sm mt-1" role="alert">{errors.fatherHusbandName}</p>}
                            </div>
                            <div>
                                <label htmlFor="dob" className="block text-gray-700 font-semibold mb-2">Date Of Birth*</label>
                                <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} className={`${commonInputClasses} ${errors.dob ? errorClasses : ''}`} aria-required="true" />
                                <span className="text-xs text-gray-500">Date Format: YYYY-MM-DD</span> 
                                {errors.dob && <p className="text-red-600 text-sm mt-1" role="alert">{errors.dob}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email*</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`${commonInputClasses} ${errors.email ? errorClasses : ''}`} aria-required="true" />
                                {errors.email && <p className="text-red-600 text-sm mt-1" role="alert">{errors.email}</p>}
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Gender*</label>
                                <div className="flex items-center space-x-4">
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} className="form-radio text-[#c5a47e]" aria-required="true" />
                                        <span className="ml-2 text-gray-700">Male</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} className="form-radio text-[#c5a47e]" aria-required="true" />
                                        <span className="ml-2 text-gray-700">Female</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="gender" value="Other" checked={formData.gender === 'Other'} onChange={handleChange} className="form-radio text-[#c5a47e]" aria-required="true" />
                                        <span className="ml-2 text-gray-700">Other</span>
                                    </label>
                                </div>
                                {errors.gender && <p className="text-red-600 text-sm mt-1" role="alert">{errors.gender}</p>}
                            </div>
                            <div>
                                <label htmlFor="mobile" className="block text-gray-700 font-semibold mb-2">Mobile*</label>
                                <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} maxLength={10} className={`${commonInputClasses} ${errors.mobile ? errorClasses : ''}`} aria-required="true" />
                                {errors.mobile && <p className="text-red-600 text-sm mt-1" role="alert">{errors.mobile}</p>}
                            </div>

                            {/* State, District, Pincode */}
                            <div>
                                <label htmlFor="stateApplyingFor" className="block text-gray-700 font-semibold mb-2">State Applying For*</label>
                                <input type="text" id="stateApplyingFor" name="stateApplyingFor" value={formData.stateApplyingFor} onChange={handleChange} placeholder="Enter State" className={`${commonInputClasses} ${errors.stateApplyingFor ? errorClasses : ''}`} aria-required="true" />
                                {errors.stateApplyingFor && <p className="text-red-600 text-sm mt-1" role="alert">{errors.stateApplyingFor}</p>}
                            </div>
                            <div>
                                <label htmlFor="districtApplyingFor" className="block text-gray-700 font-semibold mb-2">District Applying For*</label>
                                <input type="text" id="districtApplyingFor" name="districtApplyingFor" value={formData.districtApplyingFor} onChange={handleChange} placeholder="Enter District" className={`${commonInputClasses} ${errors.districtApplyingFor ? errorClasses : ''}`} aria-required="true" />
                                {errors.districtApplyingFor && <p className="text-red-600 text-sm mt-1" role="alert">{errors.districtApplyingFor}</p>}
                            </div>
                            <div>
                                <label htmlFor="pincode" className="block text-gray-700 font-semibold mb-2">PIN CODE*</label>
                                <input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} maxLength={6} placeholder="Enter Pincode" className={`${commonInputClasses} ${errors.pincode ? errorClasses : ''}`} aria-required="true" />
                                {errors.pincode && <p className="text-red-600 text-sm mt-1" role="alert">{errors.pincode}</p>}
                            </div>
                        </div>
                    </div>

                    {/* Correspondence Address Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-[#c5a47e] mb-6 border-b-2 pb-2">Correspondence Address</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="md:col-span-2">
                                <label htmlFor="corrHouseStreet" className="block text-gray-700 font-semibold mb-2">Correspondence House No./ Street*</label>
                                <input type="text" id="corrHouseStreet" name="corrHouseStreet" value={formData.corrHouseStreet} onChange={handleChange} className={`${commonInputClasses} ${errors.corrHouseStreet ? errorClasses : ''}`} aria-required="true" />
                                {errors.corrHouseStreet && <p className="text-red-600 text-sm mt-1" role="alert">{errors.corrHouseStreet}</p>}
                            </div>
                            <div>
                                <label htmlFor="corrCityTownVillage" className="block text-gray-700 font-semibold mb-2">Corr. City/Town/Village*</label>
                                <input type="text" id="corrCityTownVillage" name="corrCityTownVillage" value={formData.corrCityTownVillage} onChange={handleChange} className={`${commonInputClasses} ${errors.corrCityTownVillage ? errorClasses : ''}`} aria-required="true" />
                                {errors.corrCityTownVillage && <p className="text-red-600 text-sm mt-1" role="alert">{errors.corrCityTownVillage}</p>}
                            </div>
                             <div>
                                <label htmlFor="corrPincode" className="block text-gray-700 font-semibold mb-2">Correspondence Pincode*</label>
                                <input type="text" id="corrPincode" name="corrPincode" value={formData.corrPincode} onChange={handleChange} maxLength={6} className={`${commonInputClasses} ${errors.corrPincode ? errorClasses : ''}`} aria-required="true" />
                                {errors.corrPincode && <p className="text-red-600 text-sm mt-1" role="alert">{errors.corrPincode}</p>}
                            </div>
                            <div>
                                <label htmlFor="corrState" className="block text-gray-700 font-semibold mb-2">Correspondence State*</label>
                                <select id="corrState" name="corrState" value={formData.corrState} onChange={handleChange} className={`${commonInputClasses} ${errors.corrState ? errorClasses : ''}`} aria-required="true">
                                    <option value="">Select State</option>
                                    {indianStates.map(state => <option key={state} value={state}>{state}</option>)}
                                </select>
                                {errors.corrState && <p className="text-red-600 text-sm mt-1" role="alert">{errors.corrState}</p>}
                            </div>
                        </div>
                    </div>

                    {/* Education Qualification Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-[#c5a47e] mb-6 border-b-2 pb-2">Education Qualification</h3>
                        <p className="text-gray-600 mb-4">Enter your Education Qualification that meets the eligibility criteria prescribed for this category. निर्धारित शैक्षिक पात्रता को पूरा करने वाली अपनी शिक्षा योग्यता / डिग्री दर्ज करें।</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div>
                                <label htmlFor="eduBoardUniversity" className="block text-gray-700 font-semibold mb-2">Board/University*</label>
                                <input type="text" id="eduBoardUniversity" name="eduBoardUniversity" value={formData.eduBoardUniversity} onChange={handleChange} className={`${commonInputClasses} ${errors.eduBoardUniversity ? errorClasses : ''}`} aria-required="true" />
                                {errors.eduBoardUniversity && <p className="text-red-600 text-sm mt-1" role="alert">{errors.eduBoardUniversity}</p>}
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Course Type*</label>
                                <div className="flex items-center space-x-4">
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="eduCourseType" value="Regular" checked={formData.eduCourseType === 'Regular'} onChange={handleChange} className="form-radio text-[#c5a47e]" aria-required="true" />
                                        <span className="ml-2 text-gray-700">Regular</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="eduCourseType" value="Distance" checked={formData.eduCourseType === 'Distance'} onChange={handleChange} className="form-radio text-[#c5a47e]" aria-required="true" />
                                        <span className="ml-2 text-gray-700">Distance</span>
                                    </label>
                                </div>
                                {errors.eduCourseType && <p className="text-red-600 text-sm mt-1" role="alert">{errors.eduCourseType}</p>}
                            </div>
                            <div>
                                <label htmlFor="eduPassingYear" className="block text-gray-700 font-semibold mb-2">Passing year*</label>
                                <select id="eduPassingYear" name="eduPassingYear" value={formData.eduPassingYear} onChange={handleChange} className={`${commonInputClasses} ${errors.eduPassingYear ? errorClasses : ''}`} aria-required="true">
                                    <option value="">Year</option>
                                    {passingYears.map(year => <option key={year} value={year}>{year}</option>)}
                                </select>
                                {errors.eduPassingYear && <p className="text-red-600 text-sm mt-1" role="alert">{errors.eduPassingYear}</p>}
                            </div>
                            <div>
                                <label htmlFor="eduPercentage" className="block text-gray-700 font-semibold mb-2">Percentage (%)*</label>
                                <input type="number" id="eduPercentage" name="eduPercentage" value={formData.eduPercentage} onChange={handleChange} min="0" max="100" className={`${commonInputClasses} ${errors.eduPercentage ? errorClasses : ''}`} aria-required="true" />
                                {errors.eduPercentage && <p className="text-red-600 text-sm mt-1" role="alert">{errors.eduPercentage}</p>}
                            </div>
                        </div>
                    </div>

                    {/* Documents Upload Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-[#c5a47e] mb-6 border-b-2 pb-2">Documents Upload</h3>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-semibold mb-2">I'm Uploading the Below Mentioned Documents*</label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2">
                                {documentCheckboxes.map(doc => (
                                    <label key={doc} className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            name="docsToUpload"
                                            value={doc}
                                            checked={formData.docsToUpload.includes(doc)}
                                            onChange={handleChange}
                                            className="form-checkbox text-[#c5a47e]"
                                        />
                                        <span className="ml-2 text-gray-700">{doc}</span>
                                    </label>
                                ))}
                            </div>
                            {errors.docsToUpload && <p className="text-red-600 text-sm mt-1" role="alert">{errors.docsToUpload}</p>}
                        </div>
                    </div>

                    {/* Declaration and Consent Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-[#c5a47e] mb-6 border-b-2 pb-2">Declaration</h3>
                        <p className="text-gray-700 mb-4">Please check all the information filled by you are correct before you submit. After submission you will not be permitted to make any changes.</p>
                        <p className="text-gray-600 text-sm mb-4">
                            <strong>DISCLAIMER :</strong> I have read terms and conditions of detail advertisement and the selection methodology published on the website of JBLC INDIA and I will abide by them. I have read the eligibility criteria for the same I am applying for and I declare that I meet all the eligibility criteria for this. I confirm and certify that the particulars furnished above by me are correct and complete to the best of my knowledge and belief I declare that if any of the information submitted by me is found to be incorrect or incomplete at ANY stage of the selection process or after my selection, OR I do not meet the prescribed eligibility criteria for this position, my application is may be rejected and that I will not have any claim for the same.
                        </p>
                        <p className="text-gray-600 text-sm mb-6">
                            मैंने वेबसाइट पर विवरण और चयन प्रक्रिया को अच्छी तरह से पढ़ और समझ लिया है और मैं इनका पालन करूँगा/ करुँगी | मैंने इसकी पात्रता को अच्छी तरह से पढ़ और समझ लिया है और मैं यह प्रमाणित करता/ करती हूँ की मैं इसकी सभी पात्रता पूरी करता/ करती हूँ | मैं ये प्रमाणित करता/ करती हूँ की इस आवेदन में मेरे द्वारा दिया गया सभी विवरण सही और सम्पूर्ण हैं. अगर मेरे द्वारा दिया गया कोई भी विवरण गलत या अपूर्ण पाया जाता है, तो मेरा आवेदन, चयन प्रक्रिया के किसी भी चरण में अथवा चयन के पश्चात् भी निरस्त किया जा सकता है. किसी भी गलत या अपूर्ण विवरण की जिम्मेदारी सिर्फ मेरी ही होगी |
                        </p>
                        <div className="flex items-start mb-6">
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
                                Tick the box to state that you have carefully read and agree to terms and conditions of applying for this position.*
                            </label>
                        </div>
                        {errors.consent && <p className="text-red-600 text-sm mt-1 -mt-4 mb-4" role="alert">{errors.consent}</p>}
                    </div>

                    <div className="flex justify-end space-x-4 border-t pt-8">
                        <button type="button" onClick={handleReset} className="bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-md hover:bg-gray-300 transition-colors">Reset</button>
                        <button type="submit" className="bg-[#2e3e4d] text-white font-bold py-3 px-8 rounded-md hover:bg-[#1a2530] transition-colors">Submit Application</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default JobApplicationPage;
