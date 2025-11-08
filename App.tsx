import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
// FIX: Corrected import paths to be relative.
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OurTeamPage from './pages/OurTeamPage';
import CareerPage from './pages/CareerPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AppointmentPage from './pages/AppointmentPage';
import FinanceAssistancePage from './pages/FinanceAssistancePage';
import ScrollToTop from './components/ScrollToTop';
import ServiceDetailPage from './pages/ServiceDetailPage';
import FinanceDetailPage from './pages/FinanceDetailPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import HrPolicyPage from './pages/HrPolicyPage';
import JobApplicationPage from './pages/JobApplicationPage';
import NewsletterPage from './pages/NewsletterPage';
import CompliancesPage from './pages/CompliancesPage';
import ComplianceRequestFormPage from './pages/ComplianceRequestFormPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<OurTeamPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/finance" element={<FinanceAssistancePage />} />
            <Route path="/finance/:slug" element={<FinanceDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
            <Route path="/hr-policy" element={<HrPolicyPage />} />
            <Route path="/apply" element={<JobApplicationPage />} />
            <Route path="/newsletter" element={<NewsletterPage />} />
            <Route path="/compliances" element={<CompliancesPage />} />
            <Route path="/compliances-request" element={<ComplianceRequestFormPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;