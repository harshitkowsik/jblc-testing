import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
// FIX: Corrected import paths to be relative.
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OurCoreTeamPage from './pages/OurCoreTeamPage';
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
import OurAdvocateTeamPage from './pages/OurAdvocateTeamPage';
import SecondaryNavbar from './components/SecondaryNavbar'; 
import SubServiceListPage from './pages/SubServiceListPage.tsx';
import ModernServiceDetailPage from './pages/ModernServiceDetailPage.tsx'; 
import GetQuoteFormPage from './pages/GetQuoteFormPage.tsx';
import EmpanelmentPage from './pages/EmpanelmentPage.tsx';
import EmpanelmentFormPage from './pages/EmpanelmentFormPage.tsx';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <Navbar />
         <SecondaryNavbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/core-team" element={<OurCoreTeamPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:mainHeadingSlug" element={<SubServiceListPage />} /> 
            <Route path="/get-quote" element={<GetQuoteFormPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/finance" element={<FinanceAssistancePage />} />
            <Route path="/finance/:slug" element={<FinanceDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
            <Route path="/hr-policy" element={<HrPolicyPage />} />
            <Route path="/apply" element={<JobApplicationPage />} />
            <Route path="/services/:mainHeadingSlug/:subHeadingSlug" element={<ModernServiceDetailPage />} />
            <Route path="/newsletter" element={<NewsletterPage />} />
            <Route path="/our-advocate-team" element={<OurAdvocateTeamPage />} />
              <Route path="/empanelment" element={<EmpanelmentPage />} />
            <Route path="/empanelment-form" element={<EmpanelmentFormPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;