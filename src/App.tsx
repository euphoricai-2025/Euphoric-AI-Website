import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
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
import HealthcareUseCase from './pages/use-cases/Healthcare';
import FinanceUseCase from './pages/use-cases/Finance';
import InsuranceUseCase from './pages/use-cases/Insurance';
import HomeServicesUseCase from './pages/use-cases/HomeServices';
import RealEstateUseCase from './pages/use-cases/RealEstate';
import CustomerSupportUseCase from './pages/use-cases/CustomerSupport';
import Integrations from './pages/Integrations';
import CalCom from './pages/integrations/CalCom';
import CustomLLM from './pages/integrations/CustomLLM';
import Make from './pages/integrations/Make';
import Twillio from './pages/integrations/Twillio';
import Telnyx from './pages/integrations/Telnyx';
import Airtel from './pages/integrations/Airtel';
import N8n from './pages/integrations/N8n';
import GoHighLevel from './pages/integrations/GoHighLevel';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-euphoric-surface">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
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
                <Route path="/use-cases/healthcare" element={<HealthcareUseCase />} />
                <Route path="/use-cases/finance" element={<FinanceUseCase />} />
                <Route path="/use-cases/insurance" element={<InsuranceUseCase />} />
                <Route path="/use-cases/home-services" element={<HomeServicesUseCase />} />
                <Route path="/use-cases/real-estate" element={<RealEstateUseCase />} />
                <Route path="/use-cases/customer-support" element={<CustomerSupportUseCase />} />
                <Route path="/integrations" element={<Integrations />} />
                <Route path="/integrations/cal-com" element={<CalCom />} />
                <Route path="/integrations/custom-llm" element={<CustomLLM />} />
                <Route path="/integrations/make" element={<Make />} />
                <Route path="/integrations/twillio" element={<Twillio />} />
                <Route path="/integrations/telnyx" element={<Telnyx />} />
                <Route path="/integrations/airtel" element={<Airtel />} />
                <Route path="/integrations/n8n" element={<N8n />} />
                <Route path="/integrations/go-high-level" element={<GoHighLevel />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;