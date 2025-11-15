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
  location: string[];
}

export interface ModernServiceFeature {
    icon: string; 
    text: string;
}

export interface ModernServiceSubHeading {
    slug: string; 
    title: string; 
    description: string; 
    requiredDocuments: string[]; 
}

export interface ModernServiceMainHeading {
    slug: string; 
    title: string; 
    features: ModernServiceFeature[]; 
    subHeadings: ModernServiceSubHeading[];
}
