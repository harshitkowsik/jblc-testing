export interface TeamMember {
    name: string;
    image: string;
    designation: string;
    bio: string;
    facebookUrl: string;
    twitterUrl: string;
    linkedinUrl: string;
    instagramUrl: string;
}


// New types for detailed compliance data structure
export interface ComplianceCardItem {
  subHeading: string;
  price: string;
}

export interface ComplianceSection {
  heading: string;
  cards: ComplianceCardItem[];
}

export interface CompliancePackageDetailed {
  packageName: string;
  driveLink?: string; 
  sections: ComplianceSection[];
}

export interface CompliancePackageSummary {
    icon: string;
    title: string; 
    description: string;
    driveLink: string; 
}

export interface Advocate {
  name: string;
  reg_no: string;
  email: string;
  phone_no: string;
  specialisation: string;
}

// New types for the modern services structure
export interface ModernServiceFeature {
    icon: string; // Font Awesome icon class
    text: string;
}

export interface ModernServiceSubHeading {
    slug: string; // Used for URL, e.g., "proprietorship"
    title: string; // Displayed title, e.g., "Proprietorship"
    description: string; // What user should know before quote
    requiredDocuments: string[]; // List of documents
}

export interface ModernServiceMainHeading {
    slug: string; // Used for URL, e.g., "startup"
    title: string; // Displayed title, e.g., "Startup"
    features: ModernServiceFeature[]; // Features for the main heading
    subHeadings: ModernServiceSubHeading[];
}
