import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Domains', 
      path: '#', 
      megaDropdown: {
        industries: [
          { name: 'Healthcare', path: '/healthcare' },
          { name: 'Financial Services', path: '/financial-services' },
          { name: 'Insurance', path: '/insurance' },
          { name: 'Logistics', path: '/logistics' },
          { name: 'Retail & Consumer', path: '/retail-consumer' },
          { name: 'Travel & Hospitality', path: '/travel-hospitality' },
          { name: 'Real Estate', path: '/real-estate' },
          { name: 'E-commerce', path: '/ecommerce' }
        ],
        useCases: [
          { name: 'Healthcare', path: '/use-cases/healthcare' },
          { name: 'Finance Services', path: '/use-cases/finance' },
          { name: 'Insurance', path: '/use-cases/insurance' },
          { name: 'Real Estate', path: '/use-cases/real-estate' },
          { name: 'Logistics', path: '/use-cases/logistics' },
          { name: 'Retail & Consumer', path: '/use-cases/retail-consumer' },
          { name: 'Travel & Hospitality', path: '/use-cases/travel-hospitality' },
          { name: 'E-commerce', path: '/use-cases/ecommerce' },
          { name: 'Lead Qualification Agent', path: '/lead-qualification' },
          { name: 'Appointment Booking Agent', path: '/appointment-booking' },
          { name: 'Customer Support Agent', path: '/customer-support-agent' }
        ],
        integrations: [
          { name: 'Cal.com', path: '/integrations/cal-com' },
          { name: 'Custom LLM', path: '/integrations/custom-llm' },
          { name: 'Make', path: '/integrations/make' },
          { name: 'Twillio', path: '/integrations/twillio' },
          { name: 'Telnyx', path: '/integrations/telnyx' },
          { name: 'Airtel', path: '/integrations/airtel' },
          { name: 'n8n', path: '/integrations/n8n' },
          { name: 'Go High Level', path: '/integrations/go-high-level' },
          { name: 'See All Integrations', path: '/integrations', isButton: true }
        ]
      }
    },
    { name: 'Pricing', path: '/pricing' },
    { 
      name: 'Automations', 
      path: '#', 
      megaDropdown: {
        salesMarketing: [
          { name: 'AI Calling Agents', path: '/automations/calling-agents' },
          { name: 'Lead Gen AI Agent', path: '/automations/lead-gen' },
          { name: 'AI Email Outreach', path: '/automations/email-outreach' },
          { name: 'Lead Scraping AI Agent', path: '/automations/lead-scraping' },
          { name: 'Ads Optimization AI Agent', path: '/automations/ads-optimization' }
        ],
        operationsHR: [
          { name: 'AI Chatbot for Websites', path: '/automations/website-chatbot' },
          { name: 'WhatsApp + Email Support', path: '/automations/whatsapp-support' },
          { name: 'Meeting Notes AI Agent', path: '/automations/meeting-notes' },
          { name: 'Recruitment & Resume Parsing AI Agent', path: '/automations/recruitment-resume-parsing' },
          { name: 'Employee Onboarding AI Agent', path: '/automations/employee-onboarding' }
        ],
        financeAdmin: [
          { name: 'Invoice Tracking AI Agent', path: '/automations/invoice-tracking' },
          { name: 'Payment Reminder AI Agent', path: '/automations/payment-reminder' },
          { name: 'Bookkeeping AI Agent', path: '/automations/bookkeeping' },
          { name: 'Expense Approval AI Agent', path: '/automations/expense-approval' }
        ],
        industrySpecific: [
          { name: 'Healthcare Appointment AI Agent', path: '/automations/healthcare-appointment' },
          { name: 'Real Estate Follow-up AI Agent', path: '/automations/real-estate-followup' },
          { name: 'Hospitality Booking AI Agent', path: '/automations/hospitality-booking' },
          { name: 'E-commerce Integrations', path: '/automations/ecommerce' }
        ]
      }
    },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
  ];

  const handleSignOut = async () => {
    try {
      await signOut();
      setIsUserMenuOpen(false);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const getUserDisplayName = () => {
    return user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User';
  };

  return (
    <header className="fixed w-full top-0 z-50 glass-nav">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center focus:outline-none">
            <img 
              src="/logo.svg" 
              alt="Euphoric AI" 
              className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto"
              onError={(e) => {
                e.currentTarget.src = "/Euphoric Logo.jpeg";
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.megaDropdown ? (
                  <>
                    <button className="text-sm font-medium text-gray-700 hover:text-brand-teal transition-colors duration-200 focus:outline-none">
                      {item.name}
                    </button>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[1000px] bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="p-6">
                        {/* Domains Dropdown */}
                        {item.name === 'Domains' && (
                          <div className="grid grid-cols-3 gap-8">
                            {/* Industries Column */}
                            <div>
                              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">INDUSTRIES</h3>
                              <div className="space-y-2">
                                {item.megaDropdown.industries.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.path}
                                    className="block text-sm text-gray-700 hover:text-brand-teal transition-colors focus:outline-none py-1"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                            
                            {/* Use Cases Column */}
                            <div>
                              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">USE CASES</h3>
                              <div className="space-y-2">
                                {item.megaDropdown.useCases.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.path}
                                    className="block text-sm text-gray-700 hover:text-brand-teal transition-colors focus:outline-none py-1"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                            
                            {/* Integrations Column */}
                            <div>
                              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">INTEGRATIONS</h3>
                              <div className="space-y-2">
                                {item.megaDropdown.integrations.map((subItem) => (
                                  subItem.isButton ? (
                                    <Link
                                      key={subItem.name}
                                      to={subItem.path}
                                      className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors focus:outline-none mt-4"
                                    >
                                      {subItem.name}
                                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                      </svg>
                                    </Link>
                                  ) : (
                                    <Link
                                      key={subItem.name}
                                      to={subItem.path}
                                      className="block text-sm text-gray-700 hover:text-brand-teal transition-colors focus:outline-none py-1"
                                    >
                                      {subItem.name}
                                    </Link>
                                  )
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Automations Dropdown */}
                        {item.name === 'Automations' && (
                          <div className="grid grid-cols-4 gap-8">
                            {/* Sales & Marketing Column */}
                            <div>
                              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">SALES & MARKETING</h3>
                              <div className="space-y-2">
                                {item.megaDropdown.salesMarketing.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.path}
                                    className="block text-sm text-gray-700 hover:text-brand-teal transition-colors focus:outline-none py-1"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Operations & HR Column */}
                            <div>
                              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">OPERATIONS & HR</h3>
                              <div className="space-y-2">
                                {item.megaDropdown.operationsHR.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.path}
                                    className="block text-sm text-gray-700 hover:text-brand-teal transition-colors focus:outline-none py-1"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Finance & Admin Column */}
                            <div>
                              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">FINANCE & ADMIN</h3>
                              <div className="space-y-2">
                                {item.megaDropdown.financeAdmin.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.path}
                                    className="block text-sm text-gray-700 hover:text-brand-teal transition-colors focus:outline-none py-1"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Industry-Specific Column */}
                            <div>
                              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">INDUSTRY-SPECIFIC</h3>
                              <div className="space-y-2 mb-6">
                                {item.megaDropdown.industrySpecific.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.path}
                                    className="block text-sm text-gray-700 hover:text-brand-teal transition-colors focus:outline-none py-1"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                              <Link
                                to="/automations"
                                className="inline-flex items-center px-4 py-2 bg-brand-teal text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors focus:outline-none"
                              >
                                Explore More
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                ) : item.dropdown ? (
                  <>
                    <button className="text-sm font-medium text-gray-700 hover:text-brand-teal transition-colors duration-200 focus:outline-none">
                      {item.name}
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-48 glass rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-3 text-sm text-gray-700 hover:text-brand-teal hover:bg-white/20 first:rounded-t-lg last:rounded-b-lg transition-colors focus:outline-none"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-sm font-medium transition-colors duration-200 focus:outline-none ${
                      location.pathname === item.path
                        ? 'text-brand-teal'
                        : 'text-gray-700 hover:text-brand-teal'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-3">
              {user ? (
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-700">
                    Welcome, {getUserDisplayName()}
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="btn-gold text-sm focus:outline-none"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    to="/signin"
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand-teal transition-colors rounded-lg hover:bg-white/20 focus:outline-none"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="btn-gold text-sm focus:outline-none"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors focus:outline-none"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.megaDropdown ? (
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-sm font-medium text-gray-700">
                        {item.name}
                      </div>
                      
                      {/* Domains Mobile Menu */}
                      {item.name === 'Domains' && (
                        <>
                          {/* Industries */}
                          <div className="ml-3">
                            <div className="px-3 py-1 text-xs font-bold text-gray-400 uppercase tracking-wider">INDUSTRIES</div>
                            {item.megaDropdown.industries.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-6 py-1 text-sm text-gray-600 hover:text-brand-teal hover:bg-white/20 rounded-lg transition-colors focus:outline-none"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                          
                          {/* Use Cases */}
                          <div className="ml-3">
                            <div className="px-3 py-1 text-xs font-bold text-gray-400 uppercase tracking-wider">USE CASES</div>
                            {item.megaDropdown.useCases.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-6 py-1 text-sm text-gray-600 hover:text-brand-teal hover:bg-white/20 rounded-lg transition-colors focus:outline-none"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                          
                          {/* Integrations */}
                          <div className="ml-3">
                            <div className="px-3 py-1 text-xs font-bold text-gray-400 uppercase tracking-wider">INTEGRATIONS</div>
                            {item.megaDropdown.integrations.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-6 py-1 text-sm transition-colors focus:outline-none rounded-lg ${
                                  subItem.isButton 
                                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium' 
                                    : 'text-gray-600 hover:text-brand-teal hover:bg-white/20'
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}

                      {/* Automations Mobile Menu */}
                      {item.name === 'Automations' && (
                        <>
                          {/* Sales & Marketing */}
                          <div className="ml-3">
                            <div className="px-3 py-1 text-xs font-bold text-gray-400 uppercase tracking-wider">SALES & MARKETING</div>
                            {item.megaDropdown.salesMarketing.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-6 py-1 text-sm text-gray-600 hover:text-brand-teal hover:bg-white/20 rounded-lg transition-colors focus:outline-none"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>

                          {/* Operations & HR */}
                          <div className="ml-3">
                            <div className="px-3 py-1 text-xs font-bold text-gray-400 uppercase tracking-wider">OPERATIONS & HR</div>
                            {item.megaDropdown.operationsHR.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-6 py-1 text-sm text-gray-600 hover:text-brand-teal hover:bg-white/20 rounded-lg transition-colors focus:outline-none"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>

                          {/* Finance & Admin */}
                          <div className="ml-3">
                            <div className="px-3 py-1 text-xs font-bold text-gray-400 uppercase tracking-wider">FINANCE & ADMIN</div>
                            {item.megaDropdown.financeAdmin.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-6 py-1 text-sm text-gray-600 hover:text-brand-teal hover:bg-white/20 rounded-lg transition-colors focus:outline-none"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>

                          {/* Industry-Specific */}
                          <div className="ml-3">
                            <div className="px-3 py-1 text-xs font-bold text-gray-400 uppercase tracking-wider">INDUSTRY-SPECIFIC</div>
                            {item.megaDropdown.industrySpecific.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-6 py-1 text-sm text-gray-600 hover:text-brand-teal hover:bg-white/20 rounded-lg transition-colors focus:outline-none"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>

                          {/* Explore More Button */}
                          <div className="ml-3 mt-4">
                            <Link
                              to="/automations"
                              onClick={() => setIsMenuOpen(false)}
                              className="inline-flex items-center px-4 py-2 bg-brand-teal text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors focus:outline-none"
                            >
                              Explore More
                              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        </>
                      )}
                    </div>
                  ) : item.dropdown ? (
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-sm font-medium text-gray-700">
                        {item.name}
                      </div>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-6 py-2 text-sm text-gray-600 hover:text-brand-teal hover:bg-white/20 rounded-lg ml-3 transition-colors focus:outline-none"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none ${
                        location.pathname === item.path
                          ? 'text-brand-teal bg-white/20'
                          : 'text-gray-700 hover:text-brand-teal hover:bg-white/20'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-2 border-t border-white/20">
                {user ? (
                  <>
                    <div className="flex items-center justify-between px-3 py-2">
                      <span className="text-sm font-medium text-gray-700">
                        Welcome, {getUserDisplayName()}
                      </span>
                      <button
                        onClick={handleSignOut}
                        className="btn-gold text-sm focus:outline-none ml-3"
                      >
                        Sign Out
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      to="/signin"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-teal hover:bg-white/20 rounded-lg transition-colors focus:outline-none"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-3 py-2 btn-gold text-sm text-center focus:outline-none"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;