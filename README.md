
# JBLC INDIA Law Firm Website

This repository contains the source code for the official website of JBLC INDIA, a leading ISO 9001:2015 certified law firm in India. The website is a modern, responsive single-page application (SPA) built with React, TypeScript, and Vite, designed to be professional, fast, and user-friendly.

## About The Project

The website serves as the primary digital presence for JBLC INDIA. It provides comprehensive information about the firm's history, mission, practice areas, and team. It also includes functional components for user engagement, such as an appointment booking system and a job application portal.

 <!-- Placeholder: Replace with an actual screenshot of the homepage -->
![JBLC INDIA Website Screenshot](https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L2thdGV2NjQ0N19waG90b19vZl93b29kZW5fZ2F2ZWxfaW5fdGhlX2NvdXJ0X2dhdmVsX3BsYWNlX29uX3RoZV83MmVhZDZjNS1lNGIxLTRlZDctYWIzNC03NThiMDVmZmY3YjRfMS5qcGc.jpg)

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
├── README.md             # This file
└── vite.config.ts        # Vite configuration (if customized)
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
*   Node.js (v18.x or higher recommended)
*   npm (v8.x or higher recommended)

You can download them from nodejs.org.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/jblc-website.git
    cd jblc-website
    ```

2.  **Install NPM packages:**
    This will install all the dependencies required for the project.
    ```sh
    npm install
    ```

3.  **Run the development server:**
    This command starts the Vite development server, typically on `http://localhost:5173`.
    ```sh
    npm run dev
    ```

The application will automatically reload if you change any of the source files.

## Available Scripts

In the project directory, you can run:

*   `npm run dev`
    Runs the app in development mode.

*   `npm run build`
    Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

*   `npm run preview`
    Serves the production build from the `dist` folder locally to preview it before deployment.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---
