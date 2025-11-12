import { ModernServiceMainHeading } from './types.ts';

export const modernServices: ModernServiceMainHeading[] = [
    {
        slug: "startup",
        title: "Startup",
        features: [
            { icon: "fas fa-robot", text: "AI-Powered Business Name Approval" },
            { icon: "fas fa-file-invoice", text: "Digital & Paperless Process" },
            { icon: "fas fa-chart-line", text: "Over 1 Lakh Businesses Incorporated" },
            { icon: "fas fa-user-tie", text: "Expert Guidance on Business Entity" }
        ],
        subHeadings: [
            {
                slug: "proprietorship",
                title: "Proprietorship",
                description: "A Proprietorship is the simplest form of business organization, owned and managed by a single individual. It's easy to set up with minimal compliance, suitable for small businesses and individual professionals. This structure offers complete control to the owner but also comes with unlimited personal liability, meaning the owner is personally responsible for all business debts.",
                requiredDocuments: [
                    "PAN Card of Proprietor", "Aadhaar Card of Proprietor", "Bank Account Statement (last 3 months)",
                    "Registered Office Address Proof (Electricity Bill/Rent Agreement)", "Passport size Photograph"
                ]
            },
            {
                slug: "partnership",
                title: "Partnership",
                description: "A Partnership firm is a popular form of business for small and medium-sized businesses in India, requiring a minimum of two partners. It's relatively easy to form, but partners share unlimited liability. A detailed partnership deed is crucial to define roles, responsibilities, and profit-sharing ratios.",
                requiredDocuments: [
                    "PAN Cards of all Partners", "Aadhaar Cards of all Partners", "Partnership Deed (registered)",
                    "Registered Office Address Proof (Electricity Bill/Rent Agreement)", "Bank Account Details",
                    "Passport size Photographs of all Partners"
                ]
            },
            {
                slug: "one-person-company",
                title: "One Person Company (OPC)",
                description: "An OPC allows a single person to form a company with limited liability, bridging the gap between a sole proprietorship and a private limited company. It provides the benefits of corporate structure without requiring multiple shareholders, making it ideal for solo entrepreneurs.",
                requiredDocuments: [
                    "PAN Card of Shareholder & Nominee", "Aadhaar Card of Shareholder & Nominee", "Proof of Registered Office",
                    "Passport size Photographs of Shareholder & Nominee", "Digital Signature Certificate (DSC)",
                    "Director Identification Number (DIN)"
                ]
            },
            {
                slug: "limited-liability-partnership",
                title: "Limited Liability Partnership (LLP)",
                description: "An LLP combines the benefits of a partnership (flexibility) and a company (limited liability). Partners are not liable for the misconduct or negligence of other partners, and it's favored for professional services and startups seeking a more structured yet flexible approach.",
                requiredDocuments: [
                    "PAN Cards of Designated Partners", "Aadhaar Cards of Designated Partners", "LLP Agreement",
                    "Proof of Registered Office", "Digital Signature Certificate (DSC) for Partners",
                    "Address Proof for Partners (Bank Statement/Utility Bill)"
                ]
            },
            {
                slug: "private-limited-company",
                title: "Private Limited Company",
                description: "The most popular business structure for startups and growing businesses in India, offering limited liability to its shareholders and perpetual succession. It requires a minimum of two shareholders and two directors, making it suitable for raising capital and attracting investment.",
                requiredDocuments: [
                    "PAN Cards of Directors & Shareholders", "Aadhaar Cards of Directors & Shareholders", "Proof of Registered Office",
                    "Digital Signature Certificate (DSC) for Directors", "Director Identification Number (DIN)",
                    "Memorandum of Association (MOA)", "Articles of Association (AOA)"
                ]
            },
            {
                slug: "section-8-company",
                title: "Section 8 Company",
                description: "A Section 8 Company is registered under the Companies Act, 2013, for promoting commerce, art, science, sports, education, research, social welfare, religion, charity, protection of environment, or any such other object. It enjoys certain exemptions and benefits from the government, primarily for non-profit objectives.",
                requiredDocuments: [
                    "PAN Cards of Directors", "Aadhaar Cards of Directors", "Proof of Registered Office",
                    "Digital Signature Certificate (DSC) for Directors", "Director Identification Number (DIN)",
                    "MOA & AOA (drafted for Section 8 objectives)", "Declaration by Directors"
                ]
            },
            {
                slug: "trust-registration",
                title: "Trust Registration",
                description: "A Trust is a legal entity created to hold assets for the benefit of certain beneficiaries. It's often used for charitable, educational, or religious purposes, or for managing family wealth. Registration involves creating a trust deed and adhering to the Indian Trusts Act, 1882.",
                requiredDocuments: [
                    "Draft Trust Deed", "Identity & Address Proof of Settlor(s) and Trustee(s)",
                    "Registered Office Address Proof", "PAN Card of Trust (after registration)"
                ]
            },
            {
                slug: "public-limited-company",
                title: "Public Limited Company",
                description: "A Public Limited Company can offer its shares to the general public and has a minimum of seven shareholders. It is subject to more stringent regulatory compliance than a private limited company but offers greater scope for capital mobilization through public offerings.",
                requiredDocuments: [
                    "PAN Cards of Directors & Shareholders", "Aadhaar Cards of Directors & Shareholders", "Proof of Registered Office",
                    "Digital Signature Certificate (DSC) for Directors", "Director Identification Number (DIN)",
                    "MOA & AOA", "Consent to Act as Director"
                ]
            },
            {
                slug: "producer-company",
                title: "Producer Company",
                description: "A Producer Company is formed by primary producers (e.g., farmers, artisans, fishermen) for their mutual benefit. Its main objective is to facilitate the production, harvesting, processing, grading, pooling, handling, marketing, selling, and export of its members' produce. It functions like a private limited company but with specific objectives related to producers.",
                requiredDocuments: [
                    "PAN Cards of Directors", "Aadhaar Cards of Directors", "Proof of Registered Office",
                    "Digital Signature Certificate (DSC) for Directors", "Director Identification Number (DIN)",
                    "MOA & AOA (specific to Producer Company)", "Details of Producer Members"
                ]
            },
            {
                slug: "indian-subsidiary",
                title: "Indian Subsidiary",
                description: "An Indian Subsidiary is a company incorporated in India where a foreign entity holds more than 50% of the share capital. It allows foreign companies to establish a local presence, leverage the Indian market, and benefit from government incentives, while operating as a distinct legal entity under Indian laws.",
                requiredDocuments: [
                    "Certificate of Incorporation of Parent Company", "Board Resolution of Parent Company",
                    "Passport & Address Proof of Foreign Directors", "PAN & Aadhaar of Indian Directors",
                    "Proof of Registered Office in India", "Digital Signature Certificate (DSC) & DIN for Directors"
                ]
            }
        ]
    },
    {
        slug: "registrations",
        title: "Registrations",
        features: [
            { icon: "fas fa-hands-helping", text: "End-to-End Assistance for All Registrations" },
            { icon: "fas fa-lightbulb", text: "Smart Solutions Tailored to Your Business Needs" },
            { icon: "fas fa-globe", text: "100% Online and Paperless Process" },
            { icon: "fas fa-clock", text: "Quick Turnaround with Zero Hassle" },
            { icon: "fas fa-users-cog", text: "Dedicated Experts to Guide You at Every Step" }
        ],
        subHeadings: [
            {
                slug: "startup-india",
                title: "Startup India",
                description: "Startup India is a flagship initiative of the Government of India, intended to build a strong ecosystem for nurturing innovation and startups in the country. Registration under this initiative provides various benefits like tax exemptions, easy compliance, and access to a network of mentors and investors. Understanding the eligibility criteria and benefits is crucial before applying.",
                requiredDocuments: [
                    "Certificate of Incorporation/Registration", "PAN Number of Entity", "Proof of Funding (if any)",
                    "Nature of Business/Activity Description", "Details of Directors/Partners/Proprietor"
                ]
            },
            {
                slug: "trade-license",
                title: "Trade License",
                description: "A Trade License is a document/certificate issued by the municipal corporation that permits an applicant to conduct a particular trade or business at a particular address. It ensures that the business adheres to safety and health standards prescribed by the local authority.",
                requiredDocuments: [
                    "Aadhaar Card", "PAN Card", "Certificate of Incorporation/LLP Agreement/Partnership Deed (as applicable)",
                    "Address Proof of Business Premises (Utility Bill/Rent Agreement)", "Occupancy Certificate"
                ]
            },
            {
                slug: "fssai-registration",
                title: "FSSAI Registration",
                description: "FSSAI Registration is mandatory for all food businesses in India, issued by the Food Safety and Standards Authority of India. It ensures that the food products are safe for consumption and meet quality standards. Businesses with annual turnover up to ₹12 Lakhs generally fall under Basic Registration.",
                requiredDocuments: [
                    "Passport size Photo", "Identity Proof (Aadhaar/PAN/Voter ID)", "Address Proof (Utility Bill)",
                    "Business Premises Address Proof (Rent Agreement/Utility Bill)", "Partnership Deed/MOA & AOA (if applicable)"
                ]
            },
            {
                slug: "fssai-license",
                title: "FSSAI License",
                description: "FSSAI License (State or Central) is required for food businesses with an annual turnover exceeding ₹12 Lakhs. A State license covers businesses operating in one state, while a Central license is for businesses with operations in multiple states, large manufacturers, or exporters/importers. It involves more detailed compliance.",
                requiredDocuments: [
                    "Identity & Address Proof of Proprietor/Partners/Directors", "Business Premises Address Proof",
                    "Partnership Deed/MOA & AOA", "Food Safety Management System Plan", "List of Food Categories"
                ]
            },
            {
                slug: "halal-license-certification",
                title: "Halal License & Certification",
                description: "Halal certification confirms that products or services meet Islamic dietary and lifestyle requirements. It's crucial for businesses targeting Muslim consumers, ensuring products are free from haram (forbidden) ingredients and prepared according to Sharia law. This often involves a rigorous audit process.",
                requiredDocuments: [
                    "Company Registration Documents", "List of Products/Services", "Ingredients List & Suppliers",
                    "Manufacturing Process Flowchart", "Hygiene & Sanitation Certificates"
                ]
            },
            {
                slug: "icegate-registration",
                title: "ICEGATE Registration",
                description: "ICEGATE (Indian Customs Electronic Gateway) is a portal for traders, cargo carriers, and other clients of the Customs & Central Excise Department. Registration is essential for electronic filing of import/export documents (Bills of Entry, Shipping Bills) and facilitates faster customs clearance.",
                requiredDocuments: [
                    "IEC Code", "PAN Card", "GSTIN", "Bank Account Details", "Digital Signature Certificate (DSC)"
                ]
            },
            {
                slug: "import-export-code",
                title: "Import Export Code (IEC)",
                description: "An IEC is a mandatory 10-digit code issued by the Directorate General of Foreign Trade (DGFT) for importing or exporting goods and services from India. It's a key requirement for businesses involved in international trade and is required for customs clearance.",
                requiredDocuments: [
                    "PAN Card of Individual/Company", "Aadhaar Card", "Bank Account Details",
                    "Address Proof of Business Premises", "Cancelled Cheque"
                ]
            },
            {
                slug: "legal-entity-identifier-code",
                title: "Legal Entity Identifier (LEI) Code",
                description: "An LEI is a 20-character alphanumeric code used to uniquely identify parties to financial transactions worldwide. Mandated by RBI for large corporate borrowers, it enhances transparency in global financial markets and helps manage systemic risk.",
                requiredDocuments: [
                    "Certificate of Incorporation/Registration", "PAN Card", "Audited Financial Statements",
                    "Board Resolution/Partnership Authorization", "Proof of Authorized Signatory"
                ]
            },
            {
                slug: "iso-registration",
                title: "ISO Registration",
                description: "ISO (International Organization for Standardization) certification demonstrates a company's commitment to quality management, environmental responsibility, or other international standards. It enhances credibility, market access, and operational efficiency. Specific standards (e.g., ISO 9001, ISO 14001) apply to different aspects.",
                requiredDocuments: [
                    "Company Profile", "Scope of Operations", "Organizational Chart", "Quality Manual/Relevant Policies",
                    "Process Documentation", "Internal Audit Reports"
                ]
            },
            {
                slug: "pf-registration",
                title: "PF Registration",
                description: "Provident Fund (PF) registration is mandatory for establishments employing 20 or more persons, under the Employees' Provident Funds and Miscellaneous Provisions Act, 1952. It provides social security benefits to employees, including retirement savings. Voluntary registration is also possible for smaller establishments.",
                requiredDocuments: [
                    "Certificate of Incorporation/Registration", "PAN Card of Entity", "Aadhaar & PAN of Directors/Partners",
                    "Bank Account Details", "Address Proof of Establishment", "List of Employees"
                ]
            },
            {
                slug: "esi-registration",
                title: "ESI Registration",
                description: "ESI (Employees' State Insurance) registration is mandatory for establishments employing 10 or more persons (in some states, 20) and where employees' wages are up to ₹21,000 per month. It provides socio-economic protection to employees against health-related contingencies, including medical benefits, maternity benefits, and disablement benefits.",
                requiredDocuments: [
                    "Certificate of Incorporation/Registration", "PAN Card of Entity", "Aadhaar & PAN of Directors/Partners",
                    "Bank Account Details", "Address Proof of Establishment", "List of Employees with Salary Details"
                ]
            },
            {
                slug: "professional-tax-registration",
                title: "Professional Tax Registration",
                description: "Professional Tax is a state-level tax levied on salaried individuals and professionals practicing a profession (e.g., doctors, lawyers) or carrying on a trade. Registration is required for both employers (PTEC) and individuals/professionals (PTRC) in states where it's applicable.",
                requiredDocuments: [
                    "PAN Card", "Aadhaar Card", "Business Registration Certificate", "Address Proof of Business/Residence",
                    "Bank Statement", "Memorandum and Articles of Association (for companies)"
                ]
            },
            {
                slug: "rcmc-registration",
                title: "RCMC Registration",
                description: "RCMC (Registration-cum-Membership Certificate) is a certificate required by exporters to avail benefits under the Foreign Trade Policy. It's issued by Export Promotion Councils (EPCs) or Commodity Boards relevant to the exporter's product category. It also serves as proof of membership to an EPC.",
                requiredDocuments: [
                    "IEC Code", "PAN Card of Entity", "Bank Certificate", "MOA & AOA/Partnership Deed",
                    "GSTIN Certificate", "Provisional or Final Registration with EPB"
                ]
            },
            {
                slug: "tn-rera-registration-for-agents",
                title: "TN RERA Registration for Agents",
                description: "RERA (Real Estate Regulatory Authority) registration is mandatory for real estate agents in Tamil Nadu to ensure transparency and accountability in property transactions. It protects the interests of homebuyers and promotes fair practices in the real estate sector. Agents must comply with RERA guidelines.",
                requiredDocuments: [
                    "Aadhaar Card", "PAN Card", "Address Proof of Business/Residence", "Bank Account Details",
                    "Educational Qualification Certificates", "Passport size Photograph"
                ]
            },
            {
                slug: "12a-and-80g-registration",
                title: "12A and 80G Registration",
                description: "12A registration grants income tax exemption to NGOs/Trusts on their surplus income, while 80G registration allows donors to claim tax deductions on donations made to the registered entity. Both are crucial for charitable organizations to receive funding and operate effectively with tax benefits.",
                requiredDocuments: [
                    "Trust Deed/Memorandum of Association of NGO", "PAN Card of NGO", "Registration Certificate of NGO",
                    "Financial Statements (last 3 years)", "Activity Report", "List of Donors (if any)"
                ]
            },
            {
                slug: "12a-registration",
                title: "12A Registration",
                description: "12A registration is granted by the Income Tax Department to charitable trusts, NGOs, and other non-profit organizations, making their income exempt from income tax. This status is vital for such organizations to sustain their operations and utilize funds for their stated charitable objectives.",
                requiredDocuments: [
                    "Trust Deed/Memorandum of Association", "Registration Certificate of NGO", "PAN Card of NGO",
                    "Financial Statements (last 3 years)", "List of governing body members"
                ]
            },
            {
                slug: "80g-registration",
                title: "80G Registration",
                description: "80G registration, granted by the Income Tax Department, allows donors to claim a tax deduction for donations made to eligible charitable institutions. This encourages donations and is a significant advantage for NGOs to attract funding, enhancing their ability to serve public interest.",
                requiredDocuments: [
                    "12A Registration Certificate", "Trust Deed/MOA", "PAN Card of NGO", "Financial Statements",
                    "List of Donors", "No Objection Certificate from landlord (if rented premises)"
                ]
            },
            {
                slug: "apeda-registration",
                title: "APEDA Registration",
                description: "APEDA (Agricultural and Processed Food Products Export Development Authority) registration is mandatory for exporters of scheduled agricultural and processed food products. It facilitates market development, quality certification, and export promotion, enabling Indian exporters to compete globally.",
                requiredDocuments: [
                    "IEC Code", "Bank Account Statement", "Identity Proof of Authorized Signatory",
                    "Address Proof of Business Premises", "Copy of last three years' audited balance sheet"
                ]
            },
            {
                slug: "barcode-registration",
                title: "Barcode Registration",
                description: "Barcode registration assigns unique barcodes to products, essential for retail and inventory management. It facilitates efficient scanning at points of sale, tracking products through the supply chain, and is a prerequisite for listing products on many e-commerce platforms and in physical stores.",
                requiredDocuments: [
                    "Company/Firm Registration Certificate", "PAN Card of Entity", "GSTIN Certificate",
                    "Audited Financial Statements", "Product Details (name, category, brand)"
                ]
            },
            {
                slug: "bis-registration",
                title: "BIS Registration",
                description: "BIS (Bureau of Indian Standards) registration is mandatory for certain electronic and IT products for their sale and import in India. It ensures product quality, safety, and reliability, protecting consumers from substandard goods. Compliance involves testing products in BIS-recognized labs.",
                requiredDocuments: [
                    "Company Registration Documents", "Factory License", "Brand Registration Certificate",
                    "Test Report from BIS recognized lab", "Details of manufacturing process"
                ]
            },
            {
                slug: "certificate-of-incumbency",
                title: "Certificate of Incumbency",
                description: "A Certificate of Incumbency is an official document that lists the names of current directors, officers, and shareholders of a company. It also confirms the company's legal existence and good standing. Often required for international transactions, opening foreign bank accounts, or verifying corporate authority.",
                requiredDocuments: [
                    "Certificate of Incorporation", "Memorandum and Articles of Association", "Register of Directors/Shareholders",
                    "Latest Annual Return Filing"
                ]
            },
            {
                slug: "darpan-registration",
                title: "Darpan Registration",
                description: "NGO-DARPAN is a platform that facilitates a better partnership between government and NGOs/VOS. Registration is a prerequisite for NGOs seeking grants or aid from government bodies, promoting transparency and enabling policy making in the social sector.",
                requiredDocuments: [
                    "PAN Card of NGO", "Registration Certificate of NGO (Trust/Society/Section 8)",
                    "Aadhaar & PAN of Chief Functionary", "Bank Account Details", "Last 3 years Audited Financials"
                ]
            },
            {
                slug: "digital-signature",
                title: "Digital Signature Certificate (DSC)",
                description: "A Digital Signature Certificate (DSC) is an electronic equivalent of a physical signature, used to sign electronic documents securely. It's mandatory for various online filings, including MCA, income tax e-filing, GST returns, and e-tendering, ensuring authenticity and integrity of digital transactions.",
                requiredDocuments: [
                    "Aadhaar Card", "PAN Card", "Passport size Photograph",
                    "Address Proof (Utility Bill/Bank Statement)"
                ]
            },
            {
                slug: "shop-act-registration",
                title: "Shop Act Registration",
                description: "Shop and Establishment Act registration is mandatory for all shops, commercial establishments, hotels, restaurants, cafes, etc., in respective states. It regulates working conditions, hours, holidays, and wages, ensuring employee welfare and formalizing business operations.",
                requiredDocuments: [
                    "PAN Card of Proprietor/Partners/Directors", "Aadhaar Card", "Business Premises Address Proof",
                    "Passport size Photograph", "Partnership Deed/MOA & AOA (if applicable)"
                ]
            },
            {
                slug: "drug-license",
                title: "Drug License",
                description: "A Drug License is mandatory for businesses involved in the manufacturing, sale, or distribution of drugs and cosmetics in India. Issued by the State Drug Control Department, it ensures compliance with the Drugs and Cosmetics Act, 1940, and rules thereunder, safeguarding public health.",
                requiredDocuments: [
                    "Identity & Address Proof of Proprietor/Partners/Directors", "Registered Premises Ownership/Rent Proof",
                    "Layout Plan of Premises", "Qualification Certificate of Pharmacist/Competent Person",
                    "Company Registration Documents"
                ]
            },
            {
                slug: "udyam-registration",
                title: "Udyam Registration",
                description: "Udyam Registration is a government process for certifying MSMEs (Micro, Small, and Medium Enterprises) in India. It's a free, paperless, and instant registration that allows MSMEs to avail various government benefits, schemes, and priority sector lending, promoting their growth and competitiveness.",
                requiredDocuments: [
                    "Aadhaar Number of Proprietor/Managing Partner/Director", "PAN of Entity", "Bank Account Details",
                    "NIC Code (National Industrial Classification)"
                ]
            },
            {
                slug: "fcra-registration",
                title: "FCRA Registration",
                description: "FCRA (Foreign Contribution Regulation Act) registration is mandatory for NGOs and associations in India intending to receive foreign contributions for social, educational, religious, economic, or cultural programs. It ensures transparency and regulates the utilization of foreign funds.",
                requiredDocuments: [
                    "Registration Certificate of NGO (Trust/Society/Section 8)", "PAN Card of NGO",
                    "Aadhaar & PAN of Executive Members", "Bank Account Details (FCRA Account)",
                    "Activity Report (last 3 years)", "Audited Financial Statements (last 3 years)"
                ]
            },
            {
                slug: "fire-license",
                title: "Fire License",
                description: "A Fire License (No Objection Certificate from Fire Department) is essential for commercial, industrial, and residential buildings to ensure compliance with fire safety norms. It's a critical safety requirement, especially for public places and establishments dealing with flammable materials, protecting lives and property.",
                requiredDocuments: [
                    "Building Plan", "Site Plan", "Photographs of Premises", "Fire Safety Audit Report",
                    "NOC from local authority (if applicable)", "Details of Fire Fighting Equipment"
                ]
            }
        ]
    },
    {
        slug: "trademark",
        title: "Trademark",
        features: [
            { icon: "fas fa-file-signature", text: "Instant, Digital Trademark Filing" },
            { icon: "fas fa-search-dollar", text: "AI-Powered Trademark Search & Monitoring" },
            { icon: "fas fa-gavel", text: "Experienced Trademark Lawyers" },
            { icon: "fas fa-award", text: "Over 1 Lakh Brands Registered" }
        ],
        subHeadings: [
            {
                slug: "trademark-registration",
                title: "Trademark Registration",
                description: "Trademark registration secures exclusive rights to your brand name, logo, or slogan, preventing unauthorized use by others. It's crucial for brand protection, building goodwill, and providing a legal remedy against infringement.",
                requiredDocuments: [
                    "Applicant's Name, Address, Nationality", "Type of Business Entity", "Brand Name/Logo/Slogan",
                    "Description of Goods/Services", "Date of First Use (if already in use)", "Power of Attorney"
                ]
            },
            {
                slug: "trademark-objection",
                title: "Trademark Objection",
                description: "A Trademark Objection is raised by the examiner if your application is found to have discrepancies or similarities with existing marks. Responding effectively within the stipulated time with proper legal arguments and evidence is critical to overcome the objection and proceed with registration.",
                requiredDocuments: [
                    "Trademark Application Number", "Copy of Examination Report/Objection Letter",
                    "Evidence of Prior Use (if applicable)", "Affidavit in Support", "Power of Attorney"
                ]
            },
            {
                slug: "trademark-certificate",
                title: "Trademark Certificate",
                description: "The Trademark Certificate is the final document issued by the Trademark Registry upon successful registration of your mark. It serves as proof of your exclusive ownership and provides the legal basis for enforcing your trademark rights.",
                requiredDocuments: [
                    "Trademark Application Number", "Proof of Payment of Final Fees (if any)", "Copy of Provisional Registration"
                ]
            },
            {
                slug: "trademark-opposition",
                title: "Trademark Opposition",
                description: "Trademark Opposition occurs when a third party (often a competitor) files an objection against your trademark application after it's published in the journal. It requires a robust legal defense, involving filing a counter-statement and potentially attending hearings, to uphold your right to register the mark.",
                requiredDocuments: [
                    "Trademark Application Number", "Copy of Opposition Notice", "Evidence in Support of Application",
                    "Details of Opponent's Mark", "Power of Attorney"
                ]
            },
            {
                slug: "trademark-hearing",
                title: "Trademark Hearing",
                description: "A Trademark Hearing is scheduled when an application faces an objection or opposition that cannot be resolved through written submissions. It's an opportunity to present your case before a Trademark Officer or Board, requiring strong legal representation and arguments to defend your application.",
                requiredDocuments: [
                    "Hearing Notice", "All Previous Submissions (Reply to Examination Report, Counter Statement)",
                    "Evidence (if any)", "Affidavit in Support", "Power of Attorney"
                ]
            },
            {
                slug: "trademark-rectification",
                title: "Trademark Rectification",
                description: "Trademark Rectification involves correcting an error or omission in a registered trademark or removing a mark from the register. This can be initiated by the owner or a third party and is crucial for maintaining the accuracy and validity of the trademark register.",
                requiredDocuments: [
                    "Details of Registered Trademark", "Grounds for Rectification/Removal", "Supporting Evidence",
                    "Copy of Registration Certificate", "Power of Attorney"
                ]
            },
            {
                slug: "tm-infringement-notice",
                title: "TM Infringement Notice",
                description: "A Trademark Infringement Notice (Cease and Desist Letter) is a legal document sent to a party infringing on your registered trademark rights. It demands that the infringing activity cease and can be a precursor to legal action if ignored.",
                requiredDocuments: [
                    "Copy of Your Trademark Registration Certificate", "Evidence of Infringement (photos, screenshots, product samples)",
                    "Details of Infringer", "Date of Knowledge of Infringement", "Power of Attorney"
                ]
            },
            {
                slug: "trademark-renewal",
                title: "Trademark Renewal",
                description: "Trademark registration is valid for 10 years and must be renewed periodically to maintain its legal protection. Timely renewal ensures continued exclusive rights to your brand and avoids the risk of losing protection.",
                requiredDocuments: [
                    "Trademark Registration Number", "Copy of Registration Certificate", "Details of Registered Proprietor",
                    "Power of Attorney"
                ]
            },
            {
                slug: "trademark-transfer",
                title: "Trademark Transfer",
                description: "Trademark Transfer involves assigning the ownership of a registered or applied-for trademark from one entity to another. This can be done through assignment (with or without goodwill) or transmission (due to inheritance). Proper documentation is essential to ensure legal validity of the transfer.",
                requiredDocuments: [
                    "Trademark Registration/Application Number", "Deed of Assignment/Transfer Agreement",
                    "Identity & Address Proof of Assignor and Assignee", "Board Resolution (for companies)",
                    "Power of Attorney"
                ]
            },
            {
                slug: "expedited-tm-registration",
                title: "Expedited TM Registration",
                description: "Expedited Trademark Registration allows for faster processing of your trademark application, significantly reducing the time to registration. This option is typically available under specific conditions and involves higher government fees, suitable for businesses needing urgent protection.",
                requiredDocuments: [
                    "All documents required for normal Trademark Registration", "Declaration of intent to use the mark in commerce (or proof of use)",
                    "Justification for expedited processing (e.g., upcoming product launch, potential infringement)"
                ]
            },
            {
                slug: "logo-designing",
                title: "Logo Designing",
                description: "Professional logo designing services create a unique, memorable, and legally defensible brand identity. A well-designed logo is crucial for trademark registration and establishing brand recognition in the market.",
                requiredDocuments: [
                    "Company Name & Industry", "Target Audience", "Brand Vision & Values", "Preferred Colors & Styles",
                    "Competitor Analysis (optional)", "Any specific design ideas"
                ]
            },
            {
                slug: "design-registration",
                title: "Design Registration",
                description: "Design Registration protects the unique aesthetic features (shape, pattern, ornamentation) of an article, granting exclusive rights to the owner for a period. It's vital for products where visual appeal is a key differentiator, preventing others from copying the design.",
                requiredDocuments: [
                    "Applicant's Name, Address, Nationality", "Representations of the Design (drawings, photographs)",
                    "Description of the Design & Article", "Statement of Novelty", "Power of Attorney"
                ]
            },
            {
                slug: "design-objection",
                title: "Design Objection",
                description: "A Design Objection is raised by the examiner if your design application fails to meet novelty, originality, or other legal criteria. A timely and well-argued response, often accompanied by amendments or clarifications, is necessary to overcome the objection.",
                requiredDocuments: [
                    "Design Application Number", "Copy of Examination Report/Objection Letter",
                    "Amended Design Drawings/Description (if required)", "Power of Attorney"
                ]
            },
            {
                slug: "copyright-registration",
                title: "Copyright Registration",
                description: "Copyright registration protects original literary, artistic, musical, dramatic, and cinematographic works, granting exclusive rights to reproduce, distribute, perform, or display the work. It provides a public record of ownership and legal recourse against infringement.",
                requiredDocuments: [
                    "Applicant's Name, Address, Nationality", "Nature of Work (Literary, Artistic, etc.)",
                    "Title of Work", "Date of Publication (if any)", "Copy of the Work", "Statement of Originality",
                    "Power of Attorney"
                ]
            },
            {
                slug: "copyright-objection",
                title: "Copyright Objection",
                description: "A Copyright Objection can be raised by the examiner or a third party against a copyright application, often due to issues of originality or similarity to existing works. Addressing such objections swiftly with appropriate evidence and legal arguments is crucial for successful registration.",
                requiredDocuments: [
                    "Copyright Application Number", "Copy of Objection Letter", "Evidence of Originality",
                    "Affidavit in Support", "Power of Attorney"
                ]
            },
            {
                slug: "patent-registration",
                title: "Patent Registration",
                description: "Patent registration grants exclusive rights to an invention (a new product or process), preventing others from making, using, selling, or importing it without permission. It's essential for protecting innovation and monetizing R&D investments, valid for 20 years from the filing date.",
                requiredDocuments: [
                    "Applicant's Name, Address, Nationality", "Inventor's Name, Address, Nationality",
                    "Complete Specification (description, claims, drawings, abstract)", "Proof of Right to Apply",
                    "Declaration of Inventorship", "Power of Attorney"
                ]
            },
            {
                slug: "trademark-protection",
                title: "Trademark Protection",
                description: "Trademark Protection encompasses all strategies and legal actions to safeguard a registered or unregistered trademark from infringement, counterfeiting, and dilution. This includes monitoring, issuing cease and desist letters, and pursuing litigation to enforce brand rights.",
                requiredDocuments: [
                    "Trademark Registration Certificate (if registered)", "Evidence of Prior Use (if unregistered)",
                    "Evidence of Infringement", "Details of Infringer", "Client instructions on enforcement strategy"
                ]
            }
        ]
    },
    {
        slug: "gst",
        title: "GST",
        features: [
            { icon: "fas fa-hand-holding-usd", text: "Affordable GST Registration For Every Business" },
            { icon: "fas fa-calculator", text: "GST Filing Software" },
            { icon: "fas fa-file-check", text: "AI-Powered GST Document Validation" },
            { icon: "fas fa-user-friends", text: "Expert Guidance from GST Professionals" },
            { icon: "fas fa-briefcase", text: "Over 1 Lakh GST Registered" }
        ],
        subHeadings: [
            {
                slug: "gst-registration",
                title: "GST Registration",
                description: "GST (Goods and Services Tax) registration is mandatory for businesses exceeding certain turnover thresholds or engaged in inter-state supply. It allows businesses to collect GST from customers, claim Input Tax Credit (ITC), and maintain a transparent tax framework.",
                requiredDocuments: [
                    "PAN Card of Applicant", "Aadhaar Card of Applicant", "Business Registration Proof",
                    "Address Proof of Business Premises (Utility Bill/Rent Agreement)", "Bank Account Details",
                    "Passport size Photograph"
                ]
            },
            {
                slug: "gst-return-filing-by-accountant",
                title: "GST Return Filing by Accountant",
                description: "Professional assistance for preparing and filing various GST returns (GSTR-1, GSTR-3B, GSTR-9, etc.) by experienced accountants ensures accuracy, compliance, and timely submissions, minimizing penalties and optimizing Input Tax Credit.",
                requiredDocuments: [
                    "GSTIN", "Login Credentials (or OTP authorization)", "Sales Data (invoice-wise)",
                    "Purchase Data (invoice-wise)", "Bank Statements", "Relevant Expense Bills"
                ]
            },
            {
                slug: "gst-nil-return-filing",
                title: "GST NIL Return Filing",
                description: "GST NIL Return Filing is required for registered businesses that had no sales (outward supplies) and no purchases (inward supplies) during a particular tax period. Even if there's no business activity, a NIL return must be filed to maintain compliance and avoid penalties.",
                requiredDocuments: [
                    "GSTIN", "Login Credentials (or OTP authorization)"
                ]
            },
            {
                slug: "gst-e-invoicing-software",
                title: "GST E-Invoicing Software",
                description: "GST E-invoicing software helps businesses generate and manage electronic invoices as mandated by the government for certain turnovers. It automates the process of uploading invoices to the IRP (Invoice Registration Portal), generating IRN (Invoice Reference Number), and QR codes, ensuring seamless compliance.",
                requiredDocuments: [
                    "GSTIN", "Business Name & Address", "Details of Authorized Signatory", "Annual Turnover Details"
                ]
            },
            {
                slug: "gst-lut-form",
                title: "GST LUT Form (Letter of Undertaking)",
                description: "GST LUT Form is filed by exporters to export goods or services without paying IGST (Integrated Goods and Services Tax). It's a key facility for exporters to save working capital and simplify export procedures, subject to specific eligibility criteria.",
                requiredDocuments: [
                    "GSTIN", "IEC Code", "Details of Authorized Signatory", "Copy of Previous LUT (if applicable)"
                ]
            },
            {
                slug: "gst-notice",
                title: "GST Notice",
                description: "Receiving a GST Notice can indicate discrepancies, non-compliance, or a request for additional information from the tax authorities. Professional handling of GST notices involves understanding the issue, preparing a detailed response, and submitting it within the deadline to avoid further legal action.",
                requiredDocuments: [
                    "Copy of GST Notice Received", "GSTIN", "Relevant Sales/Purchase Invoices",
                    "Bank Statements", "Previous GST Returns"
                ]
            },
            {
                slug: "gst-annual-return-filing-gstr9",
                title: "GST Annual Return Filing (GSTR-9)",
                description: "GSTR-9 is the annual return that needs to be filed by all regular registered taxpayers under GST. It provides a summary of all outward supplies, inward supplies, tax paid, and ITC availed during a financial year. Accurate filing is crucial for year-end reconciliation and compliance.",
                requiredDocuments: [
                    "GSTIN", "All Monthly/Quarterly GSTR-1, GSTR-3B filings", "Audited Financial Statements",
                    "Reconciliation Statement (if any)", "Bank Statements"
                ]
            },
            {
                slug: "gst-registration-for-foreigners",
                title: "GST Registration for Foreigners",
                description: "Foreigners intending to supply goods or services in India as a non-resident taxable person must obtain temporary GST registration. This process involves specific documentation and compliance requirements, different from resident businesses, to ensure tax obligations are met.",
                requiredDocuments: [
                    "Passport & Visa Copy", "PAN Card (if applicable)", "Business Registration Certificate in Home Country",
                    "Authorized Representative in India", "Bank Account Details (NRE/NRO)"
                ]
            },
            {
                slug: "gst-invoicing-filing-software",
                title: "GST Invoicing & Filing Software",
                description: "Integrated GST invoicing and filing software simplifies the process of creating GST-compliant invoices, managing sales/purchase records, and directly filing GST returns. It reduces manual errors, saves time, and helps businesses stay compliant with evolving GST regulations.",
                requiredDocuments: [
                    "Basic Business Details", "GSTIN", "Bank Account Details", "Product/Service Catalogue"
                ]
            },
            {
                slug: "gst-amendment",
                title: "GST Amendment",
                description: "GST Amendment involves making changes to existing GST registration details, such as business name, address, or details of authorized signatories. Timely amendment ensures that your GST registration reflects the most current and accurate business information, maintaining compliance.",
                requiredDocuments: [
                    "GSTIN", "Proof of Change (e.g., new address proof, revised MOA)",
                    "Original Registration Certificate"
                ]
            },
            {
                slug: "gst-revocation",
                title: "GST Revocation",
                description: "GST Revocation is the process to reinstate a canceled GST registration. If a registration is canceled by the tax authorities (e.g., for non-filing of returns), businesses can apply for revocation within a stipulated period, providing valid reasons and ensuring compliance.",
                requiredDocuments: [
                    "GSTIN", "Copy of Cancellation Order", "Grounds for Revocation",
                    "Details of Pending Returns/Liabilities", "Proof of Compliance Post-Cancellation"
                ]
            },
            {
                slug: "gstr-10",
                title: "GSTR-10 (Final Return)",
                description: "GSTR-10, or Final Return, is filed by taxpayers whose GST registration has been canceled or surrendered. It's a one-time return that declares the stock of inputs, semi-finished goods, finished goods, and capital goods on which ITC has been availed, at the time of cancellation.",
                requiredDocuments: [
                    "GSTIN", "Effective Date of Cancellation", "Details of Stock on Hand",
                    "Details of ITC Reversed/Paid", "Final Balance Sheet"
                ]
            },
            {
                slug: "gst-software-for-accountants",
                title: "GST Software for Accountants",
                description: "Specialized GST software for accountants and tax professionals streamlines managing multiple client GST compliances. It offers features like bulk return filing, client management, reconciliation tools, and data analytics, enhancing efficiency and accuracy in their practice.",
                requiredDocuments: [
                    "Firm Registration Details", "GSTIN (for firm)", "List of Clients", "Details of Services Offered"
                ]
            },
            {
                slug: "virtual-office-gstin",
                title: "Virtual Office + GSTIN",
                description: "A Virtual Office provides a professional business address for GST registration without the need for physical office space. This allows businesses, especially startups and freelancers, to obtain a GSTIN in a prime location, enhancing credibility and accessibility while minimizing overheads.",
                requiredDocuments: [
                    "NOC from Virtual Office Provider", "Proof of Virtual Office Address (Utility Bill)",
                    "All standard GST Registration documents"
                ]
            }
        ]
    },
    {
        slug: "income-tax",
        title: "Income Tax",
        features: [
            { icon: "fas fa-file-invoice-dollar", text: "Assisted Tax Filing" },
            { icon: "fas fa-user-shield", text: "CA Support" },
            { icon: "fas fa-tachometer-alt", text: "Fast and Easy Filing" },
            { icon: "fas fa-desktop", text: "Income Tax Platform" },
            { icon: "fas fa-lock", text: "Protected and Confidential" }
        ],
        subHeadings: [
            {
                slug: "income-tax-e-filing",
                title: "Income Tax E-Filing",
                description: "Income Tax E-Filing involves electronically submitting your income tax returns to the Income Tax Department. It is a convenient, faster, and often mandatory method for taxpayers, ensuring quick processing of returns and refunds. Professional assistance can ensure accuracy and compliance.",
                requiredDocuments: [
                    "PAN Card", "Aadhaar Card", "Bank Account Details", "Form 16/Form 16A (for salary/TDS)",
                    "Investment Proofs (for deductions)", "Bank Statements"
                ]
            },
            {
                slug: "business-tax-filing",
                title: "Business Tax Filing",
                description: "Business Tax Filing involves submitting income tax returns for proprietorships, partnerships, LLPs, and companies. It requires accurate reporting of business income, expenses, profits, and compliance with specific ITR forms (e.g., ITR-3, ITR-4, ITR-5, ITR-6) based on the business structure and turnover.",
                requiredDocuments: [
                    "PAN Card of Business Entity", "Financial Statements (Profit & Loss, Balance Sheet)",
                    "Bank Statements", "GST Returns (if registered)", "TDS Certificates",
                    "Audit Report (if applicable)"
                ]
            },
            {
                slug: "itr-1-return-filing",
                title: "ITR-1 Return Filing (Sahaj)",
                description: "ITR-1 (Sahaj) is a simplified income tax return form for resident individuals with total income up to ₹50 Lakhs from Salary, One House Property, Other Sources (Interest, etc.), and agricultural income up to ₹5,000. It's the most common form for salaried employees.",
                requiredDocuments: [
                    "PAN Card", "Aadhaar Card", "Bank Account Details", "Form 16",
                    "Details of interest income (FD, Savings)"
                ]
            },
            {
                slug: "itr-2-return-filing",
                title: "ITR-2 Return Filing",
                description: "ITR-2 is for individuals and HUFs not having income from 'profits and gains of business or profession'. It covers income from salary, house property, capital gains, other sources, and foreign assets/income. It is used when ITR-1 is not applicable due to higher income or complex sources.",
                requiredDocuments: [
                    "PAN Card", "Aadhaar Card", "Bank Account Details", "Form 16/16A",
                    "Capital Gains Statement (for shares, property)", "Details of foreign assets/income"
                ]
            },
            {
                slug: "itr-3-return-filing",
                title: "ITR-3 Return Filing",
                description: "ITR-3 is for individuals and HUFs having income from 'profits and gains of business or profession'. It also covers income from salary, house property, capital gains, and other sources. This form is for taxpayers who run a proprietary business or are partners in a firm.",
                requiredDocuments: [
                    "PAN Card", "Aadhaar Card", "Bank Account Details", "Financial Statements of Business",
                    "Capital Gains Statement", "TDS Certificates", "Audit Report (if applicable)"
                ]
            },
            {
                slug: "itr-4-return-filing",
                title: "ITR-4 Return Filing (Sugam)",
                description: "ITR-4 (Sugam) is a simplified form for resident individuals, HUFs, and firms (other than LLP) opting for the presumptive income scheme under Sections 44AD, 44ADA, or 44AE of the Income Tax Act. It streamlines tax filing for small businesses and professionals.",
                requiredDocuments: [
                    "PAN Card", "Aadhaar Card", "Bank Account Details", "Total Gross Receipts/Turnover",
                    "Details of debtors/creditors (optional for presumptive scheme)"
                ]
            },
            {
                slug: "itr-5-return-filing",
                title: "ITR-5 Return Filing",
                description: "ITR-5 is for persons other than: (i) Individual, (ii) HUF, (iii) Company, and (iv) Person filing Form ITR-7. This form is applicable to LLPs, partnership firms, Association of Persons (AOPs), Body of Individuals (BOIs), etc., having business or professional income.",
                requiredDocuments: [
                    "PAN Card of Entity", "Financial Statements", "Bank Statements", "Partnership Deed/LLP Agreement",
                    "Audit Report (if applicable)", "Details of Partners/Members"
                ]
            },
            {
                slug: "itr-6-return-filing",
                title: "ITR-6 Return Filing",
                description: "ITR-6 is filed by companies other than those claiming exemption under Section 11 (income from property held for charitable or religious purposes). This form is mandatory for all private limited and public limited companies and requires detailed financial reporting.",
                requiredDocuments: [
                    "PAN Card of Company", "Audited Financial Statements (P&L, Balance Sheet)", "Audit Report",
                    "Details of Directors", "TDS Certificates", "Bank Statements"
                ]
            },
            {
                slug: "itr-7-return-filing",
                title: "ITR-7 Return Filing",
                description: "ITR-7 is for persons including companies required to furnish return under sections 139(4A) or 139(4B) or 139(4C) or 139(4D) or 139(4E) or 139(4F). This typically includes charitable/religious trusts, political parties, universities, scientific research institutions, etc.",
                requiredDocuments: [
                    "PAN Card of Entity", "Registration Certificate (e.g., 12A, 80G)", "Audited Financial Statements",
                    "Audit Report", "Details of corpus/donations received"
                ]
            },
            {
                slug: "15ca-15cb-filing",
                title: "15CA - 15CB Filing",
                description: "Forms 15CA and 15CB are declarations required for making remittances to non-residents. Form 15CB is a certificate from a Chartered Accountant certifying tax deducted/deductible, while 15CA is a declaration by the remitter. These ensure compliance with income tax provisions related to foreign remittances.",
                requiredDocuments: [
                    "Nature of Remittance", "Remittee Details (Name, Address, PAN/Tax ID)", "Remitter Details",
                    "Invoice/Contract for Remittance", "Form 15CB (for CA certified cases)"
                ]
            },
            {
                slug: "tan-registration",
                title: "TAN Registration",
                description: "TAN (Tax Deduction and Collection Account Number) is a 10-digit alphanumeric number required for all persons who are liable to deduct or collect tax at source (TDS/TCS). It's mandatory for employers, businesses, or organizations deducting tax.",
                requiredDocuments: [
                    "Name of Applicant", "Address of Applicant", "PAN Card of Applicant",
                    "Proof of Business/Organization"
                ]
            },
            {
                slug: "tds-return-filing",
                title: "TDS Return Filing",
                description: "TDS (Tax Deducted at Source) Return Filing involves submitting quarterly statements (Form 24Q, 26Q, 27Q, 27EQ) to the Income Tax Department, detailing the tax deducted from various payments (e.g., salary, rent, professional fees). Timely and accurate filing is crucial to avoid penalties.",
                requiredDocuments: [
                    "TAN Number", "Details of Deductor", "Details of Deductees (PAN, Name)",
                    "Details of Payments Made & Tax Deducted", "Challan Details of TDS Deposited"
                ]
            },
            {
                slug: "income-tax-notice",
                title: "Income Tax Notice",
                description: "An Income Tax Notice can be issued for various reasons like discrepancies in return, non-filing, or scrutiny. Professional assistance in understanding the notice, preparing a comprehensive response, and submitting it within the deadline is essential to avoid further complications and penalties.",
                requiredDocuments: [
                    "Copy of Income Tax Notice Received", "PAN Card", "Relevant ITRs", "Bank Statements",
                    "Supporting Documents for Income/Deductions"
                ]
            }
        ]
    },
    {
        slug: "mca",
        title: "MCA",
        features: [
            { icon: "fas fa-lightbulb", text: "Simple, Transparent & Affordable" },
            { icon: "fas fa-user-shield", text: "Expert Advisors & Timely Filings" },
            { icon: "fas fa-compass", text: "All-in-One Compliance Platform" },
            { icon: "fas fa-handshake", text: "Trusted by 1 Million+ Businesses" }
        ],
        subHeadings: [
            {
                slug: "company-compliance",
                title: "Company Compliance",
                description: "Company compliance involves adhering to the regulations set by the Ministry of Corporate Affairs (MCA), including annual filings (AOC-4, MGT-7), board meetings, statutory registers maintenance, and other event-based filings. Non-compliance can lead to significant penalties and disqualification of directors.",
                requiredDocuments: [
                    "Certificate of Incorporation", "MOA & AOA", "Audited Financial Statements",
                    "Board Meeting Minutes", "Shareholding Pattern", "PAN Card of Company"
                ]
            },
            {
                slug: "llp-compliance",
                title: "LLP Compliance",
                description: "LLP (Limited Liability Partnership) compliance requires annual filings (Form 8, Form 11), maintenance of statutory records, and adherence to the LLP Agreement. It ensures the LLP remains in good standing with the MCA, offering flexibility while maintaining limited liability benefits.",
                requiredDocuments: [
                    "LLP Agreement", "PAN Card of LLP", "Financial Statements", "Details of Designated Partners",
                    "Bank Statements", "Previous Filing Records"
                ]
            },
            {
                slug: "opc-compliance",
                title: "OPC Compliance",
                description: "OPC (One Person Company) compliance includes annual filings (AOC-4, MGT-7), maintaining statutory registers, and holding board meetings. Although having a single member, OPCs must adhere to company law regulations, ensuring proper governance and transparency.",
                requiredDocuments: [
                    "Certificate of Incorporation", "MOA & AOA", "Audited Financial Statements",
                    "Board Meeting Minutes", "PAN Card of OPC"
                ]
            },
            {
                slug: "name-change-company",
                title: "Name Change - Company",
                description: "Changing a company's name requires approval from the MCA, involves passing a special resolution, and updating the MOA and AOA. This process ensures the new name is unique and legally compliant, reflecting changes in brand identity or business focus.",
                requiredDocuments: [
                    "Board Resolution", "Special Resolution", "Amended MOA & AOA",
                    "Application for Name Availability (RUN Form)", "DIR-12 (for director changes, if any)"
                ]
            },
            {
                slug: "registered-office-change",
                title: "Registered Office Change",
                description: "Changing a company's registered office address requires formal procedures with the MCA, varying by whether the change is within the same city, state, or to a different state. It involves board resolutions, special resolutions, and filing specific forms (INC-22, MGT-14).",
                requiredDocuments: [
                    "Board Resolution", "Special Resolution (if applicable)", "NOC from Landlord (if rented)",
                    "New Address Proof (Utility Bill)", "E-Form INC-22"
                ]
            },
            {
                slug: "din-ekyc-filing",
                title: "DIN eKYC Filing",
                description: "DIN eKYC filing is an annual requirement for all individuals holding a Director Identification Number (DIN). It involves updating and verifying the KYC details of directors to ensure that MCA records are current and accurate, preventing disqualification.",
                requiredDocuments: [
                    "DIN", "PAN Card", "Aadhaar Card", "Mobile Number & Email ID (linked to Aadhaar)",
                    "Digital Signature Certificate (DSC)"
                ]
            },
            {
                slug: "din-reactivation",
                title: "DIN Reactivation",
                description: "DIN Reactivation is the process to activate a DIN that has been deactivated due to non-filing of DIR-3 KYC. It requires filing the pending DIR-3 KYC form with late fees, restoring the director's ability to serve on company boards.",
                requiredDocuments: [
                    "Deactivated DIN", "PAN Card", "Aadhaar Card", "Mobile Number & Email ID",
                    "Digital Signature Certificate (DSC)"
                ]
            },
            {
                slug: "director-change",
                title: "Director Change",
                description: "Adding or removing a director from a company requires board resolutions, special resolutions (if applicable), and filing Form DIR-12 with the MCA. This ensures the company's directorship is legally updated and compliant.",
                requiredDocuments: [
                    "Board Resolution", "Consent to Act as Director (DIR-2) / Resignation Letter (DIR-11)",
                    "Identity & Address Proof of New Director", "PAN of New Director", "DIR-12 Form"
                ]
            },
            {
                slug: "remove-director",
                title: "Remove Director",
                description: "Removing a director can occur due to resignation, disqualification, or resolution. The process involves board meetings, shareholder meetings, and filing Form DIR-12 with the MCA to officially update the company's management structure.",
                requiredDocuments: [
                    "Resignation Letter / Board Resolution for Removal", "MGT-14 (if special resolution passed)",
                    "DIR-12 Form", "Proof of Service (if removed by company)"
                ]
            },
            {
                slug: "adt-1-filing",
                title: "ADT-1 Filing",
                description: "ADT-1 filing is mandatory for companies to inform the MCA about the appointment of an auditor within 15 days of the board meeting in which the auditor was appointed. This ensures that the statutory auditor's details are on record.",
                requiredDocuments: [
                    "Board Resolution for Auditor Appointment", "Consent of Auditor", "Appointment Letter of Auditor",
                    "Certificate from Auditor (as per Companies Act)"
                ]
            },
            {
                slug: "dpt-3-filing",
                title: "DPT-3 Filing",
                description: "DPT-3 is an annual return of deposits and particulars of transactions not considered as deposits, required by companies. It's a crucial compliance to disclose details of outstanding loans or money received from various sources not classified as deposits.",
                requiredDocuments: [
                    "Audited Financial Statements", "Details of Outstanding Loans/Receipts",
                    "Auditor's Certificate", "Board Resolution"
                ]
            },
            {
                slug: "llp-form-11-filing",
                title: "LLP Form 11 Filing",
                description: "LLP Form 11 (Annual Return) is a summary of the LLP's affairs, including details of its partners and their contributions. It's an annual filing to be submitted with the MCA, ensuring transparency and compliance of the LLP structure.",
                requiredDocuments: [
                    "LLP Agreement", "Financial Statements of LLP", "Details of Partners",
                    "Designated Partner Identification Numbers (DPINs)"
                ]
            },
            {
                slug: "dormant-status-filing",
                title: "Dormant Status Filing",
                description: "A company can apply for Dormant Status if it has been formed for a future project or to hold an asset/intellectual property and has no significant accounting transaction. This allows companies to temporarily reduce compliance burden while preserving their corporate structure.",
                requiredDocuments: [
                    "Board Resolution", "Special Resolution", "Application in Form MSC-1",
                    "Audited Financial Statements (latest)", "Undertaking from Directors"
                ]
            },
            {
                slug: "moa-amendment",
                title: "MOA Amendment",
                description: "MOA (Memorandum of Association) Amendment involves altering the object clause, name clause, or registered office clause of a company. This requires shareholder approval via special resolution and MCA approval, fundamentally changing the company's scope or identity.",
                requiredDocuments: [
                    "Board Resolution", "Special Resolution", "Amended MOA Draft",
                    "E-Form MGT-14", "E-Form INC-24 (for name change)"
                ]
            },
            {
                slug: "aoa-amendment",
                title: "AOA Amendment",
                description: "AOA (Articles of Association) Amendment involves altering the internal rules and regulations governing a company's operations. This typically requires a special resolution from shareholders and MCA approval, impacting internal management, share transfers, or voting rights.",
                requiredDocuments: [
                    "Board Resolution", "Special Resolution", "Amended AOA Draft",
                    "E-Form MGT-14"
                ]
            },
            {
                slug: "authorized-capital-increase",
                title: "Authorized Capital Increase",
                description: "Increasing a company's Authorized Share Capital involves amending the MOA's capital clause. This requires shareholder approval through ordinary resolution and filing with the MCA (Form SH-7), allowing the company to issue more shares in the future.",
                requiredDocuments: [
                    "Board Resolution", "Ordinary Resolution", "Amended MOA",
                    "E-Form SH-7", "Payment of ROC fees (based on increased capital)"
                ]
            },
            {
                slug: "share-transfer",
                title: "Share Transfer",
                description: "Share Transfer involves the change of ownership of shares from one person to another. This is typically done through a Share Transfer Deed and requires the company to record the transfer in its register of members, ensuring legal ownership changes.",
                requiredDocuments: [
                    "Share Transfer Deed (Form SH-4)", "Share Certificates", "Board Resolution for Transfer Approval",
                    "PAN & Aadhaar of Transferor and Transferee", "Stamp Duty Payment Proof"
                ]
            },
            {
                slug: "demat-of-shares",
                title: "Demat of Shares",
                description: "Demat (dematerialization) of shares converts physical share certificates into electronic form. This facilitates easy trading, reduces risks associated with physical certificates (loss, theft), and is mandatory for trading on stock exchanges. It requires opening a Demat account.",
                requiredDocuments: [
                    "Physical Share Certificates", "Demat Request Form (DRF)", "PAN Card", "Aadhaar Card",
                    "Demat Account Details with Depository Participant (DP)"
                ]
            },
            {
                slug: "winding-up-llp",
                title: "Winding Up - LLP",
                description: "Winding up an LLP involves formally closing its operations, settling liabilities, and distributing remaining assets. This can be voluntary or by tribunal, requiring specific declarations and filings (Form 24) with the MCA to legally dissolve the LLP.",
                requiredDocuments: [
                    "Declaration of Solvency (Form 4)", "LLP Agreement", "Financial Statements",
                    "Bank Account Closure Certificate", "Affidavit of Partners"
                ]
            },
            {
                slug: "winding-up-company",
                title: "Winding Up - Company",
                description: "Winding up a company involves formally closing its legal existence, settling all debts, and distributing surplus assets. This can be voluntary (Members' or Creditors' Voluntary Winding Up) or compulsory (by Tribunal order), following detailed procedures under the Companies Act.",
                requiredDocuments: [
                    "Board Resolution", "Special Resolution", "Statement of Affairs",
                    "Audited Financial Statements", "Liquidator Appointment (if voluntary)"
                ]
            },
            {
                slug: "commencement-inc-20a",
                title: "Commencement (INC-20A)",
                description: "INC-20A is a declaration for Commencement of Business. Companies incorporated after November 2, 2018, having share capital, must file this form within 180 days of incorporation, confirming that subscribers have paid for their shares and the company is ready to commence business.",
                requiredDocuments: [
                    "Proof of Payment for Subscribed Shares", "Auditor's Certificate",
                    "Declaration by Director(s)"
                ]
            }
        ]
    },
    {
        slug: "compliance",
        title: "Compliance",
        features: [
            { icon: "fas fa-clipboard-check", text: "Comprehensive Compliance Review" },
            { icon: "fas fa-chart-pie", text: "Strategic Regulatory Advice" },
            { icon: "fas fa-calendar-check", text: "Timely Filings & Reporting" },
            { icon: "fas fa-shield-alt", text: "Risk Management & Mitigation" }
        ],
        subHeadings: [
            {
                slug: "fdi-filing-with-rbi",
                title: "FDI Filing with RBI",
                description: "FDI (Foreign Direct Investment) filing with RBI involves reporting foreign capital inflows and outflows through specific forms (e.g., Form FC-GPR, Form FC-TRS). Compliance with RBI regulations is crucial for foreign investors and Indian recipient companies to ensure legitimate investment flows.",
                requiredDocuments: [
                    "FIRC (Foreign Inward Remittance Certificate)", "KYC of Investor and Investee Company",
                    "Board Resolution of Investee Company", "Valuation Report (if applicable)",
                    "Statutory Auditor's Certificate"
                ]
            },
            {
                slug: "fla-return-filing",
                title: "FLA Return Filing",
                description: "FLA (Foreign Liabilities and Assets) Return filing is an annual mandatory reporting for Indian resident entities that have received FDI or made ODI (Overseas Direct Investment). It's submitted to RBI, providing data on foreign assets and liabilities, contributing to national balance of payments statistics.",
                requiredDocuments: [
                    "Audited/Unaudited Balance Sheet & P&L Statement", "Details of Foreign Liabilities & Assets",
                    "Details of ODI/FDI", "Contact Details of Authorized Person"
                ]
            },
            {
                slug: "fssai-renewal",
                title: "FSSAI Renewal",
                description: "FSSAI registration/license is valid for a specific period (1 to 5 years) and requires timely renewal to avoid penalties and continue operations legally. Renewal ensures ongoing compliance with food safety standards and uninterrupted business activities.",
                requiredDocuments: [
                    "Current FSSAI Registration/License Copy", "Updated Address Proof (if changed)",
                    "Latest Annual Turnover (for license type determination)", "Self-Declaration of Compliance"
                ]
            },
            {
                slug: "fssai-return-filing",
                title: "FSSAI Return Filing",
                description: "FSSAI-licensed food businesses must file annual returns (Form D-1/D-2) detailing the types and quantities of food products manufactured, sold, or distributed. This ensures transparency in operations and helps FSSAI monitor food production and supply chain activities.",
                requiredDocuments: [
                    "FSSAI License Number", "Records of Production/Sales (quantity & type of food products)",
                    "Purchases of Raw Materials", "Stock Details"
                ]
            },
            {
                slug: "business-plan",
                title: "Business Plan",
                description: "A well-structured Business Plan outlines a company's objectives, strategies, financial projections, and operational details. It's crucial for fundraising, strategic planning, and guiding business growth. Professional assistance ensures a comprehensive and persuasive plan.",
                requiredDocuments: [
                    "Business Idea & Vision", "Market Research Data", "Financial Projections",
                    "Team Details & Organizational Structure", "Product/Service Description"
                ]
            },
            {
                slug: "hr-payroll",
                title: "HR & Payroll",
                description: "HR & Payroll compliance involves adhering to labor laws, provident fund (PF), Employees' State Insurance (ESI), professional tax, and other employment-related regulations. Ensuring accurate payroll processing, timely tax deductions, and proper employee record-keeping is vital for legal compliance and employee satisfaction.",
                requiredDocuments: [
                    "Employee Data (Name, Address, PAN, Aadhaar)", "Salary Structure Details",
                    "Attendance Records", "Leave Records", "PF/ESI/Professional Tax Registration Details"
                ]
            },
            {
                slug: "pf-return-filing",
                title: "PF Return Filing",
                description: "PF (Provident Fund) return filing is a monthly obligation for registered establishments, detailing employee and employer contributions. Timely and accurate filing ensures compliance with EPFO regulations and proper credit to employees' PF accounts.",
                requiredDocuments: [
                    "EPF Code", "Employee UANs", "Monthly Salary Data", "Contribution Details (Employee & Employer)",
                    "Challan Details of PF Deposit"
                ]
            },
            {
                slug: "esi-return-filing",
                title: "ESI Return Filing",
                description: "ESI (Employees' State Insurance) return filing is a half-yearly obligation for registered establishments, detailing employee and employer contributions. Accurate filing ensures compliance with ESIC regulations and provides employees access to various medical and sickness benefits.",
                requiredDocuments: [
                    "ESI Code", "Employee IP Numbers", "Monthly Salary Data", "Contribution Details (Employee & Employer)",
                    "Challan Details of ESI Deposit"
                ]
            },
            {
                slug: "professional-tax-return-filing",
                title: "Professional Tax Return Filing",
                description: "Professional Tax Return Filing is a periodic (monthly/quarterly/annually, depending on state and turnover) requirement for employers and individuals liable to pay professional tax. It involves submitting details of tax collected/paid to the respective State's Commercial Tax Department.",
                requiredDocuments: [
                    "PTEC/PTRC Registration Number", "Details of Employees/Professionals Liable",
                    "Amount of Professional Tax Deducted/Paid", "Challan Details of Tax Deposit"
                ]
            },
            {
                slug: "partnership-compliance",
                title: "Partnership Compliance",
                description: "Partnership compliance includes adhering to the Indian Partnership Act, 1932, maintaining partnership deeds, annual financial statements, and any applicable tax filings. While simpler than corporate compliance, ensuring proper record-keeping and agreement adherence is crucial for smooth operations.",
                requiredDocuments: [
                    "Partnership Deed", "PAN Card of Firm", "Financial Statements", "Bank Statements",
                    "Identity & Address Proof of Partners"
                ]
            },
            {
                slug: "proprietorship-compliance",
                title: "Proprietorship Compliance",
                description: "Proprietorship compliance primarily revolves around individual income tax filings, GST compliance (if registered), and any other local trade licenses. While it has minimal legal formalities, accurate financial record-keeping is essential for tax purposes.",
                requiredDocuments: [
                    "PAN Card of Proprietor", "Aadhaar Card", "Bank Statements", "Sales/Purchase Records",
                    "GSTIN (if applicable)"
                ]
            },
            {
                slug: "bookkeeping",
                title: "Bookkeeping",
                description: "Bookkeeping involves recording all financial transactions of a business (sales, purchases, receipts, payments). Accurate and up-to-date bookkeeping is fundamental for financial reporting, tax compliance, and making informed business decisions, providing a clear financial picture.",
                requiredDocuments: [
                    "Bank Statements", "Sales Invoices", "Purchase Bills", "Expense Receipts",
                    "Credit/Debit Notes", "GST Records (if applicable)"
                ]
            }
        ]
    },
    {
        slug: "personal",
        title: "Personal",
        features: [
            { icon: "fas fa-user-check", text: "Personalized Legal Planning" },
            { icon: "fas fa-hand-holding-usd", text: "Secure Asset Management" },
            { icon: "fas fa-shield-alt", text: "Confidential Expert Advice" },
            { icon: "fas fa-redo-alt", text: "Seamless Process Management" }
        ],
        subHeadings: [
            {
                slug: "will-drafting",
                title: "Will Drafting",
                description: "Will Drafting involves legally documenting your wishes for the distribution of your assets after your demise. A professionally drafted will ensures that your estate is managed according to your intentions, preventing family disputes and simplifying the probate process.",
                requiredDocuments: [
                    "Identity & Address Proof of Testator", "List of Assets (Properties, Bank Accounts, Investments)",
                    "List of Beneficiaries (Names, Relationships)", "Details of Executor(s)",
                    "Witness Details (2 required, not beneficiaries)"
                ]
            },
            {
                slug: "asset-transfer",
                title: "Asset Transfer",
                description: "Asset Transfer involves legally transferring ownership of properties, shares, or other assets from one individual to another. This can occur through sale, gift, or inheritance, requiring proper documentation, stamp duty, and registration to ensure legal validity.",
                requiredDocuments: [
                    "Proof of Ownership of Asset", "Identity & Address Proof of Transferor and Transferee",
                    "Transfer Deed/Gift Deed/Sale Deed", "Valuation Report (if applicable)",
                    "No Objection Certificate (if required)"
                ]
            },
            {
                slug: "family-trust",
                title: "Family Trust",
                description: "A Family Trust is a legal arrangement where assets are held by a trustee for the benefit of family members. It's a powerful tool for estate planning, wealth preservation, succession planning, and minimizing tax liabilities, ensuring assets are managed and distributed as desired over generations.",
                requiredDocuments: [
                    "Draft Trust Deed", "Identity & Address Proof of Settlor(s) and Trustee(s)",
                    "List of Assets to be held in Trust", "List of Beneficiaries", "PAN Card of Trust (after registration)"
                ]
            },
            {
                slug: "dubai-visa",
                title: "Dubai Visa Assistance",
                description: "Dubai Visa Assistance helps individuals navigate the application process for various types of visas (tourist, transit, work, residence) to Dubai, UAE. Professional support ensures accurate documentation, timely submissions, and adherence to UAE immigration laws for a smooth travel or relocation experience.",
                requiredDocuments: [
                    "Passport Copy (valid for 6 months)", "Passport size Photograph", "Visa Application Form",
                    "Return Flight Tickets", "Hotel Booking/Accommodation Proof", "Bank Statement (if required)"
                ]
            }
        ]
    },
    {
        slug: "global",
        title: "Global",
        features: [
            { icon: "fas fa-lightbulb", text: "Simple, Transparent & Affordable" },
            { icon: "fas fa-user-shield", text: "Expert Advisors & Fast Processing" },
            { icon: "fas fa-compass", text: "All-in-One Business Setup Platform" }
        ],
        subHeadings: [
            {
                slug: "uae-company",
                title: "UAE Company Formation",
                description: "UAE Company Formation assists businesses in establishing their presence in the United Arab Emirates, including mainland, free zone, and offshore company setups. It offers strategic advantages like tax benefits, access to international markets, and a business-friendly environment.",
                requiredDocuments: [
                    "Passport Copy of Shareholders & Directors", "Visa Copy (if applicable)",
                    "NOC from Sponsor (if employed in UAE)", "Business Plan", "Trade Name Options",
                    "Details of Business Activity"
                ]
            },
            {
                slug: "usa-company",
                title: "USA Company Formation",
                description: "USA Company Formation guides entrepreneurs through incorporating various business entities (LLC, C-Corp, S-Corp) in the United States. It provides access to a large consumer market, robust legal protections, and a stable economic environment, but requires careful selection of state and legal structure.",
                requiredDocuments: [
                    "Passport Copy of Founder(s)", "US Address for Correspondence", "Employer Identification Number (EIN)",
                    "Operating Agreement (for LLC) / Bylaws (for C-Corp)", "Details of Business Activity"
                ]
            },
            {
                slug: "singapore-company",
                title: "Singapore Company Formation",
                description: "Singapore Company Formation assists with incorporating private limited companies (Pte Ltd) in Singapore, a global business hub known for its tax efficiency, political stability, and ease of doing business. It's an attractive jurisdiction for international startups and businesses seeking regional expansion.",
                requiredDocuments: [
                    "Passport Copy of Shareholders & Directors", "Proof of Overseas Address",
                    "Details of Singapore Resident Director", "Company Name Options", "Business Activity Description"
                ]
            },
            {
                slug: "uk-company",
                title: "UK Company Formation",
                description: "UK Company Formation helps establish limited companies (Ltd) in the United Kingdom, offering access to the European market (post-Brexit, with trade agreements), a strong legal framework, and a prestigious business address. It's a straightforward process, often completed quickly.",
                requiredDocuments: [
                    "Passport Copy of Shareholders & Directors", "Proof of Address (Non-UK Residents)",
                    "UK Registered Office Address", "Company Name Options", "Memorandum & Articles of Association (standard available)"
                ]
            },
            {
                slug: "usa-trademark-registration",
                title: "USA Trademark Registration",
                description: "USA Trademark Registration secures your brand name or logo with the USPTO (United States Patent and Trademark Office), granting exclusive rights to use the mark across the United States. It's crucial for brand protection in the significant US market and preventing infringement.",
                requiredDocuments: [
                    "Applicant's Name, Address, Nationality", "Brand Name/Logo/Slogan",
                    "Description of Goods/Services", "Date of First Use in US Commerce", "Specimen of Use (for marks in use)",
                    "Power of Attorney"
                ]
            },
            {
                slug: "international-trademark",
                title: "International Trademark Registration",
                description: "International Trademark Registration, often facilitated through the Madrid Protocol, allows a single application to seek protection in multiple member countries. It streamlines the process and reduces costs for businesses operating globally, securing brand rights worldwide.",
                requiredDocuments: [
                    "Basic Trademark Application/Registration (in home country)", "Applicant Details",
                    "List of Countries for Protection", "Brand Name/Logo/Slogan", "Goods/Services Description"
                ]
            },
            {
                slug: "uae-ecommerce",
                title: "UAE eCommerce License",
                description: "A UAE eCommerce License is required for businesses selling goods or services online within the UAE. Obtaining this license ensures legal compliance, builds consumer trust, and provides access to the rapidly growing digital market in the Emirates, with specific regulations for free zones and mainland.",
                requiredDocuments: [
                    "Passport Copy of Shareholders & Directors", "Visa Copy (if applicable)", "Business Plan",
                    "Trade Name Options", "Details of eCommerce Platform", "NOC from Sponsor (if employed in UAE)"
                ]
            },
            {
                slug: "uae-embassy-attestation",
                title: "UAE Embassy Attestation",
                description: "UAE Embassy Attestation is the process of certifying documents (educational, personal, commercial) to be legally recognized in the United Arab Emirates. It's a multi-step process involving various government departments (Notary, MEA, UAE Embassy/Consulate) and is mandatory for employment, visa, or business purposes in the UAE.",
                requiredDocuments: [
                    "Original Document to be Attested", "Passport Copy of Document Holder",
                    "Authorization Letter (if submitted by third party)", "Relevant Visa Copy (if applicable)"
                ]
            }
        ]
    }
];