import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { BannerProvider } from './contexts/BannerContext';
import BlackFridayBanner from './components/BlackFridayBanner';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import HomeV2 from './pages/HomeV2';
import About from './pages/About';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import RealEstate from './pages/domains/RealEstate';
import Healthcare from './pages/domains/Healthcare';
import Ecommerce from './pages/domains/Ecommerce';
import CustomerSupport from './pages/domains/CustomerSupport';
import DebtCollection from './pages/domains/DebtCollection';
import FinancialServices from './pages/domains/FinancialServices';
import HomeServices from './pages/domains/HomeServices';
import Insurance from './pages/domains/Insurance';
import Logistics from './pages/domains/Logistics';
import RetailConsumer from './pages/domains/RetailConsumer';
import TravelHospitality from './pages/domains/TravelHospitality';
import Book from './pages/domains/Book';
import LeadQualificationUseCase from './pages/use-cases/LeadQualification';
import AppointmentBookingUseCase from './pages/use-cases/AppointmentBooking';
import CustomerSupportAgentUseCase from './pages/use-cases/CustomerSupportAgent';
import Integrations from './pages/Integrations';
import CalCom from './pages/integrations/CalCom';
import CustomLLM from './pages/integrations/CustomLLM';
import Make from './pages/integrations/Make';
import Twillio from './pages/integrations/Twillio';
import Telnyx from './pages/integrations/Telnyx';
import Airtel from './pages/integrations/Airtel';
import N8n from './pages/integrations/N8n';
import GoHighLevel from './pages/integrations/GoHighLevel';
import Automations from './pages/Automations';
import LeadManagementNurturing from './pages/automations/LeadManagementNurturing';
import BillingCollections from './pages/automations/BillingCollections';
import RecruitmentHRWorkflows from './pages/automations/RecruitmentHRWorkflows';
import MarketingSocialMedia from './pages/automations/MarketingSocialMedia';
import CRMDataSync from './pages/automations/CRMDataSync';
import AnalyticsReporting from './pages/automations/AnalyticsReporting';
import ContractsWorkflow from './pages/automations/ContractsWorkflow';
import EcommerceRetention from './pages/automations/EcommerceRetention';
import Partner from './pages/Partner';
import Careers from './pages/Careers';
import Internships from './pages/Internships';
import Languages from './pages/Languages';
import ThankYou from './pages/ThankYou';
import Trial from './pages/Trial';
import OfferExpired from './pages/OfferExpired';
import DashboardLayout from './pages/dashboard/DashboardLayout';
import DashboardOverview from './pages/dashboard/DashboardOverview';
import AgentsPage from './pages/dashboard/AgentsPage';
import CampaignsPage from './pages/dashboard/CampaignsPage';
import NumbersPage from './pages/dashboard/NumbersPage';
import AnalyticsPage from './pages/dashboard/AnalyticsPage';
import ContactsPage from './pages/dashboard/ContactsPage';
import DashboardLogin from './pages/DashboardLogin';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BannerProvider>
          <Router>
            <ScrollToTop />
            <AppContent />
          </Router>
        </BannerProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');
  const isOfferExpired = location.pathname === '/images/offer-expired.jpg';

  // Render OfferExpired page without any layout
  if (isOfferExpired) {
    return (
      <Routes>
        <Route path="/images/offer-expired.jpg" element={<OfferExpired />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen bg-euphoric-surface">
      {!isDashboard && <BlackFridayBanner />}
      {!isDashboard && <Header />}
      <main>
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/homev2" element={<HomeV2 />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/real-estate" element={<RealEstate />} />
                <Route path="/healthcare" element={<Healthcare />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                <Route path="/customer-support" element={<CustomerSupport />} />
                <Route path="/debt-collection" element={<DebtCollection />} />
                <Route path="/financial-services" element={<FinancialServices />} />
                <Route path="/home-services" element={<HomeServices />} />
                <Route path="/insurance" element={<Insurance />} />
                <Route path="/logistics" element={<Logistics />} />
                <Route path="/retail-consumer" element={<RetailConsumer />} />
                <Route path="/travel-hospitality" element={<TravelHospitality />} />
                <Route path="/book" element={<Book />} />
                {/* Redirect merged use case paths to domain pages */}
                <Route path="/use-cases/healthcare" element={<Navigate to="/healthcare" replace />} />
                <Route path="/use-cases/finance" element={<Navigate to="/financial-services" replace />} />
                <Route path="/use-cases/insurance" element={<Navigate to="/insurance" replace />} />
                <Route path="/use-cases/real-estate" element={<Navigate to="/real-estate" replace />} />
                <Route path="/use-cases/customer-support" element={<Navigate to="/customer-support" replace />} />
                <Route path="/use-cases/logistics" element={<Navigate to="/logistics" replace />} />
                <Route path="/use-cases/travel-hospitality" element={<Navigate to="/travel-hospitality" replace />} />
                <Route path="/use-cases/ecommerce" element={<Navigate to="/ecommerce" replace />} />
                <Route path="/use-cases/home-services" element={<Navigate to="/home-services" replace />} />
                <Route path="/use-cases/retail-consumer" element={<Navigate to="/retail-consumer" replace />} />
                
                {/* Keep remaining unique use case pages */}
                <Route path="/lead-qualification" element={<LeadQualificationUseCase />} />
                <Route path="/appointment-booking" element={<AppointmentBookingUseCase />} />
                <Route path="/customer-support-agent" element={<CustomerSupportAgentUseCase />} />
                <Route path="/integrations" element={<Integrations />} />
                <Route path="/integrations/cal-com" element={<CalCom />} />
                <Route path="/integrations/custom-llm" element={<CustomLLM />} />
                <Route path="/integrations/make" element={<Make />} />
                <Route path="/integrations/twillio" element={<Twillio />} />
                <Route path="/integrations/telnyx" element={<Telnyx />} />
                <Route path="/integrations/airtel" element={<Airtel />} />
                <Route path="/integrations/n8n" element={<N8n />} />
                <Route path="/integrations/go-high-level" element={<GoHighLevel />} />
                <Route path="/automations" element={<Automations />} />
                <Route path="/automations/lead-management-nurturing" element={<LeadManagementNurturing />} />
                <Route path="/automations/billing-collections" element={<BillingCollections />} />
                <Route path="/automations/recruitment-hr-workflows" element={<RecruitmentHRWorkflows />} />
                <Route path="/automations/marketing-social-media" element={<MarketingSocialMedia />} />
                <Route path="/automations/crm-data-sync" element={<CRMDataSync />} />
                <Route path="/automations/analytics-reporting" element={<AnalyticsReporting />} />
                <Route path="/automations/contracts-workflow" element={<ContractsWorkflow />} />
                <Route path="/automations/ecommerce-retention" element={<EcommerceRetention />} />
                <Route path="/partner" element={<Partner />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/internships" element={<Internships />} />
                <Route path="/languages" element={<Languages />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/trial" element={<Trial />} />

                {/* Dashboard Login (No Banner, No Footer) */}
                <Route path="/dashboard-login" element={<DashboardLogin />} />

                {/* Dashboard Routes (No Banner, No Footer) */}
                <Route path="/dashboard" element={<DashboardLayout />}>
                  <Route index element={<DashboardOverview />} />
                  <Route path="agents" element={<AgentsPage />} />
                  <Route path="campaigns" element={<CampaignsPage />} />
                  <Route path="numbers" element={<NumbersPage />} />
                  <Route path="contacts" element={<ContactsPage />} />
                  <Route path="analytics" element={<AnalyticsPage />} />
                </Route>
        </Routes>
      </main>
      {!isDashboard && <Footer />}
    </div>
  );
}

export default App;