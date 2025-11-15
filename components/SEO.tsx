import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, canonicalPath }) => {
  useEffect(() => {
    // Set the page title
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (keywords) {
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const newMetaKeywords = document.createElement('meta');
        newMetaKeywords.setAttribute('name', 'keywords');
        newMetaKeywords.setAttribute('content', keywords);
        document.head.appendChild(newMetaKeywords);
      }
    } else if (metaKeywords) {
      metaKeywords.remove(); // Remove keywords meta tag if not provided
    }

    // Handle the canonical link tag
    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalPath) {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      // Assuming your domain is https://www.jblc.in. Adjust if necessary.
      canonicalLink.setAttribute('href', `https://www.jblc.in/#${canonicalPath}`);
    } else if (canonicalLink) {
      canonicalLink.remove(); // Clean up canonical link if not needed for a page
    }

  }, [title, description, keywords, canonicalPath]);

  return null;
};

export default SEO;
