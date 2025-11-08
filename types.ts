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