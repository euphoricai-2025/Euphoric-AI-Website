import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Lazy load all pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const HomeV2 = lazy(() => import('./pages/HomeV2'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'));
const RealEstate = lazy(() => import('./pages/domains/RealEstate'));
const Healthcare = lazy(() => import('./pages/domains/Healthcare'));
const Ecommerce = lazy(() => import('./pages/domains/Ecommerce'));
const CustomerSupport = lazy(() => import('./pages/domains/CustomerSupport'));
const DebtCollection = lazy(() => import('./pages/domains/DebtCollection'));
const FinancialServices = lazy(() => import('./pages/domains/FinancialServices'));
const HomeServices = lazy(() => import('./pages/domains/HomeServices'));
const Insurance = lazy(() => import('./pages/domains/Insurance'));
const Logistics = lazy(() => import('./pages/domains/Logistics'));
const RetailConsumer = lazy(() => import('./pages/domains/RetailConsumer'));
const TravelHospitality = lazy(() => import('./pages/domains/TravelHospitality'));
const Book = lazy(() => import('./pages/domains/Book'));
const LeadQualificationUseCase = lazy(() => import('./pages/use-cases/LeadQualification'));
const AppointmentBookingUseCase = lazy(() => import('./pages/use-cases/AppointmentBooking'));
const CustomerSupportAgentUseCase = lazy(() => import('./pages/use-cases/CustomerSupportAgent'));
const Integrations = lazy(() => import('./pages/Integrations'));
const CalCom = lazy(() => import('./pages/integrations/CalCom'));
const CustomLLM = lazy(() => import('./pages/integrations/CustomLLM'));
const Make = lazy(() => import('./pages/integrations/Make'));
const Twillio = lazy(() => import('./pages/integrations/Twillio'));
const Telnyx = lazy(() => import('./pages/integrations/Telnyx'));
const Airtel = lazy(() => import('./pages/integrations/Airtel'));
const N8n = lazy(() => import('./pages/integrations/N8n'));
const GoHighLevel = lazy(() => import('./pages/integrations/GoHighLevel'));
const Automations = lazy(() => import('./pages/Automations'));
const LeadManagementNurturing = lazy(() => import('./pages/automations/LeadManagementNurturing'));
const BillingCollections = lazy(() => import('./pages/automations/BillingCollections'));
const RecruitmentHRWorkflows = lazy(() => import('./pages/automations/RecruitmentHRWorkflows'));
const MarketingSocialMedia = lazy(() => import('./pages/automations/MarketingSocialMedia'));
const CRMDataSync = lazy(() => import('./pages/automations/CRMDataSync'));
const AnalyticsReporting = lazy(() => import('./pages/automations/AnalyticsReporting'));
const ContractsWorkflow = lazy(() => import('./pages/automations/ContractsWorkflow'));
const EcommerceRetention = lazy(() => import('./pages/automations/EcommerceRetention'));
const Partner = lazy(() => import('./pages/Partner'));
const Careers = lazy(() => import('./pages/Careers'));
const Internships = lazy(() => import('./pages/Internships'));
const Languages = lazy(() => import('./pages/Languages'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const Trial = lazy(() => import('./pages/Trial'));
const OfferExpired = lazy(() => import('./pages/OfferExpired'));
const DashboardLayout = lazy(() => import('./pages/dashboard/DashboardLayout'));
const DashboardOverview = lazy(() => import('./pages/dashboard/DashboardOverview'));
const AgentsPage = lazy(() => import('./pages/dashboard/AgentsPage'));
const CampaignsPage = lazy(() => import('./pages/dashboard/CampaignsPage'));
const NumbersPage = lazy(() => import('./pages/dashboard/NumbersPage'));
const AnalyticsPage = lazy(() => import('./pages/dashboard/AnalyticsPage'));
const ContactsPage = lazy(() => import('./pages/dashboard/ContactsPage'));
const DashboardLogin = lazy(() => import('./pages/DashboardLogin'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-[#42a4bf]/30 border-t-[#42a4bf] animate-spin" />
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <AppContent />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');
  const isOfferExpired = location.pathname === '/images/offer-expired.jpg';

  if (isOfferExpired) {
    return (
      <Suspense fallback={<PageLoader />}>
        <OfferExpired />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-euphoric-surface">
      {!isDashboard && <Header />}
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/homev2" element={<HomeV2 />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/refund-cancellations" element={<RefundPolicy />} />
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
            <Route path="/images/offer-expired.jpg" element={<OfferExpired />} />
            <Route path="/dashboard-login" element={<DashboardLogin />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardOverview />} />
              <Route path="agents" element={<AgentsPage />} />
              <Route path="campaigns" element={<CampaignsPage />} />
              <Route path="numbers" element={<NumbersPage />} />
              <Route path="contacts" element={<ContactsPage />} />
              <Route path="analytics" element={<AnalyticsPage />} />
            </Route>
          </Routes>
        </Suspense>
      </main>
      {!isDashboard && <Footer />}
    </div>
  );
}

export default App;
