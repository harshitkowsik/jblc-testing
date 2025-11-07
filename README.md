
# JBLC INDIA Law Firm Website

This repository contains the source code for the official website of JBLC INDIA, a leading ISO 9001:2015 certified law firm in India. The website is a modern, responsive single-page application (SPA) built with React, TypeScript, and Vite, designed to be professional, fast, and user-friendly.

## About The Project

The website serves as the primary digital presence for JBLC INDIA. It provides comprehensive information about the firm's history, mission, practice areas, and team. It also includes functional components for user engagement, such as an appointment booking system and a job application portal.

## Key Features

*   **Responsive Design**: Fully responsive layout for seamless viewing on desktops, tablets, and mobile devices using Tailwind CSS.
*   **Component-Based Architecture**: Built with reusable React components for consistency and maintainability.
*   **Static Typing**: Developed with TypeScript for improved code quality and developer experience.
*   **Client-Side Routing**: Smooth navigation between pages using `react-router-dom`.
*   **Dynamic Pages**:
    *   **Homepage**: Features a hero section, core practice areas, financial services, company stats, and a team showcase.
    *   **About Us**: Details the firm's legacy, mission, vision, and leadership, including an FAQ section.
    *   **Our Team**: Displays profiles of the legal team members.
    *   **Career Page**: Lists current job openings with detailed descriptions and responsibilities.
    *   **Services & Finance Pages**: Detailed pages for each legal and financial service offered, with dynamic routing.
*   **Interactive Forms**:
    *   **Appointment Booking**: A multi-step form for clients to book consultations, with service selection, date/time picking, and validation.
    *   **Job Application**: A comprehensive, multi-section form for candidates to apply for open positions, including file uploads for resumes and documents.
*   **SEO Optimized**: A dedicated `SEO` component to manage meta titles and descriptions for each page, improving search engine visibility.
*   **Fast Development & Build**: Utilizes Vite for a fast development server with Hot Module Replacement (HMR) and an optimized production build process.

## Tech Stack

*   **Frontend Library**: React
*   **Language**: TypeScript
*   **Build Tool**: Vite
*   **Routing**: React Router v6
*   **Styling**: Tailwind CSS
*   **Icons**: Font Awesome

## Project Structure

The project follows a standard React application structure:

```
/
├── public/               # Static assets (images, favicon, etc.)
├── src/
│   ├── components/       # Reusable components (Navbar, Footer, SEO, etc.)
│   ├── data/             # Static data files (services, team members, FAQs)
│   ├── pages/            # Page-level components (HomePage, AboutPage, etc.)
│   ├── App.tsx           # Main application component with routing setup
│   ├── index.css         # Global styles
│   └── index.tsx         # Application entry point
├── index.html            # Main HTML template
├── package.json          # Project dependencies and scripts
└── README.md             # This file
```

## In-Depth Component & Page Overview

### Core Pages (`src/pages/`)

*   **`HomePage.tsx`**: The landing page. It provides an overview of the firm by composing several sections and using data from `serviceData.ts` and `teamData.ts`.
*   **`AboutPage.tsx`**: Presents the firm's history, vision, mission, and leadership. It features an interactive FAQ accordion.
*   **`OurTeamPage.tsx`**: Displays a grid of all team members with their detailed profiles, pulling data from `teamData.ts`.
*   **`ServicesPage.tsx` & `ServiceDetailPage.tsx`**: Lists all practice areas and provides detailed views for each one. Content is dynamically rendered from `serviceData.ts` using slugs for routing.
*   **`FinancePage.tsx` & `FinanceDetailPage.tsx`**: Similar to services, but for financial assistance services, using `financeServiceData.ts`.
*   **`CareerPage.tsx` & `JobDetailPage.tsx`**: Lists available job openings and provides detailed descriptions for each role.
*   **`AppointmentPage.tsx`**: Contains the multi-step form for booking appointments.
*   **`ContactPage.tsx`**: Provides contact information and a contact form.

### Reusable Components (`src/components/`)

*   **`Navbar.tsx`**: The main navigation bar, providing links to all major pages.
*   **`Footer.tsx`**: The site-wide footer with contact details, social media links, and quick links.
*   **`SEO.tsx`**: A crucial component for search engine optimization. It takes `title` and `description` props and uses `react-helmet` (or a similar library) to update the document head.
*   **`PageHeader.tsx`**: A standardized header component used across multiple pages to display a title and subtitle over a background image.
*   **`TeamMemberCard.tsx`**: A card to display a team member's photo, name, designation, and social media links. Used on both the `HomePage` and `OurTeamPage`.
*   **`ServiceCard.tsx`**: A summary card for practice areas, used on the `HomePage`.

### Data Management (`src/data/`)

The application is heavily data-driven to simplify content management.

*   **`teamData.ts`**: An array of `TeamMember` objects. Each object contains personal details and social media links. The `image` property corresponds to a file in the `/public` directory.
*   **`serviceData.ts`**: An array of service objects. Each object includes a `slug` for URL generation, an `icon` (Font Awesome class), `title`, `description`, and detailed `content`. The `content` is written using `React.createElement` to allow for rich text formatting within the data file itself.
*   **`financeServiceData.ts`**: Similar structure to `serviceData.ts` but for financial services.
*   **`jobData.ts`**: An array of job objects, each detailing a role, its responsibilities, and requirements.

### Styling

Styling is handled primarily with **Tailwind CSS**. Custom theme values (colors, fonts, etc.) are configured in `tailwind.config.js`.

*   **Primary Colors**:
    *   `#2e3e4d` (Dark Blue/Gray)
    *   `#c5a47e` (Gold/Tan)
*   **Utility-First**: The codebase uses Tailwind's utility classes directly in the JSX, promoting rapid development and consistency.

### Routing

Client-side routing is managed by **React Router v6** in `App.tsx`.

*   **Static Routes**: `/`, `/about`, `/team`, `/contact`, etc.
*   **Dynamic Routes**:
    *   `/services/:slug`: Renders `ServiceDetailPage` based on the `slug` parameter.
    *   `/finance/:slug`: Renders `FinanceDetailPage`.
    *   `/career/:jobId`: Renders `JobDetailPage`.

The `App.tsx` file likely contains a layout component that includes the `Navbar` and `Footer`, with an `<Outlet />` to render the matched route component.

## How to Contribute

### Adding a New Team Member

1.  Add the new member's image to the `/public` directory.
2.  Open `src/data/teamData.ts`.
3.  Add a new object to the `teamMembers` array with the required information (name, image filename, designation, bio, social media URLs).
4.  The website will automatically update to include the new member on the homepage and team page.

### Adding a New Service

1.  Open `src/data/serviceData.ts`.
2.  Add a new service object to the `services` array.
3.  Define a unique `slug`, a `title`, a short `description`, a Font Awesome `icon` class, and the detailed `content` using `React.createElement`.
4.  The new service will appear on the services page and, if it's one of the first six, on the homepage.
