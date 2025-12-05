import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [openMobileSubDropdown, setOpenMobileSubDropdown] = useState<string | null>(null);
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
          { name: 'Debt Collection', path: '/debt-collection' },
          { name: 'Logistics', path: '/logistics' },
          { name: 'Retail & Consumer', path: '/retail-consumer' },
          { name: 'Travel & Hospitality', path: '/travel-hospitality' },
          { name: 'Real Estate', path: '/real-estate' },
          { name: 'E-commerce', path: '/ecommerce' }
        ],
        useCases: [
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
      name: 'AI Automations', 
      path: '#', 
      megaDropdown: {
        leadManagement: [
          { name: 'Lead Qualification & Scoring', path: '/automations/lead-qualification' },
          { name: 'Lead Nurturing Campaigns', path: '/automations/lead-nurturing' },
          { name: 'Appointment Scheduling', path: '/automations/appointment-scheduling' },
          { name: 'Follow-up Automation', path: '/automations/follow-up-automation' }
        ],
        billingCollections: [
          { name: 'Automated Invoicing', path: '/automations/automated-invoicing' },
          { name: 'Payment Reminders', path: '/automations/payment-reminders' },
          { name: 'Collections Workflow', path: '/automations/collections-workflow' },
          { name: 'Revenue Recovery', path: '/automations/revenue-recovery' }
        ],
        recruitmentHR: [
          { name: 'Resume Screening', path: '/automations/resume-screening' },
          { name: 'Interview Scheduling', path: '/automations/interview-scheduling' },
          { name: 'Employee Onboarding', path: '/automations/employee-onboarding' },
          { name: 'Performance Tracking', path: '/automations/performance-tracking' }
        ],
        marketingSocial: [
          { name: 'Social Media Posting', path: '/automations/social-media-posting' },
          { name: 'Content Distribution', path: '/automations/content-distribution' },
          { name: 'Engagement Tracking', path: '/automations/engagement-tracking' },
          { name: 'Campaign Management', path: '/automations/campaign-management' }
        ],
        crmDataSync: [
          { name: 'Data Synchronization', path: '/automations/data-sync' },
          { name: 'Contact Management', path: '/automations/contact-management' },
          { name: 'Pipeline Automation', path: '/automations/pipeline-automation' },
          { name: 'Customer Journey Mapping', path: '/automations/customer-journey' }
        ],
        analyticsReporting: [
          { name: 'Performance Dashboards', path: '/automations/performance-dashboards' },
          { name: 'Automated Reports', path: '/automations/automated-reports' },
          { name: 'KPI Tracking', path: '/automations/kpi-tracking' },
          { name: 'Business Intelligence', path: '/automations/business-intelligence' }
        ],
        contractsWorkflow: [
          { name: 'Contract Generation', path: '/automations/contract-generation' },
          { name: 'Approval Workflows', path: '/automations/approval-workflows' },
          { name: 'Document Management', path: '/automations/document-management' },
          { name: 'Compliance Tracking', path: '/automations/compliance-tracking' }
        ],
        ecommerceRetention: [
          { name: 'Cart Recovery', path: '/automations/cart-recovery' },
          { name: 'Customer Retention', path: '/automations/customer-retention' },
          { name: 'Order Management', path: '/automations/order-management' },
          { name: 'Loyalty Programs', path: '/automations/loyalty-programs' }
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

  const handleMobileDropdownToggle = (dropdownName: string) => {
    if (openMobileDropdown === dropdownName) {
      setOpenMobileDropdown(null);
      setOpenMobileSubDropdown(null);
    } else {
      setOpenMobileDropdown(dropdownName);
      setOpenMobileSubDropdown(null);
    }
  };

  const handleMobileSubDropdownToggle = (subDropdownName: string) => {
    if (openMobileSubDropdown === subDropdownName) {
      setOpenMobileSubDropdown(null);
    } else {
      setOpenMobileSubDropdown(subDropdownName);
    }
  };

  return (
    <header className={`fixed w-full z-50 glass-nav transition-all duration-300 top-0`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center focus:outline-none">
            <img 
              src="/euphoric-logo-final.png" 
              alt="Euphoric AI" 
              className="h-4 sm:h-5 md:h-6 lg:h-7 w-auto"
              onError={(e) => {
                e.currentTarget.src = "/euphoric-logo-final.png";
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

                        {/* AI Automations Dropdown */}
                        {item.name === 'AI Automations' && (
                          <div className="grid grid-cols-4 gap-8">
                            {/* Column 1 */}
                            <div>
                              <Link
                                to="/automations/lead-management-nurturing"
                                className="block text-sm font-semibold text-gray-700 hover:text-brand-teal transition-colors focus:outline-none py-2 mb-4"
                              >
                                Lead Management & Nurturing
                              </Link>
                              <Link
                                to="/automations/billing-collections"
                                className="block text-sm font-semibold text-gray-700 hover:text-brand-teal transition-colors focus:outline-none py-2"
                              >
                                Billing & Collections
                              </Link>
                            </div>

                            {/* Column 2 */}
                            <div>
                              <Link
                                to="/automations/recruitment-hr-workflows"
                                className="block text-sm font-semibold text-gray-700 hover:text-brand-teal transition-colors focus:outline-none py-2 mb-4"
                              >
                                Recruitment & HR Workflows
                              </Link>
                              <Link
                                to="/automations/marketing-social-media"
                                className="block text-sm font-semibold text-gray-700 hover:text-brand-teal transition-colors focus:outline-none py-2"
                              >
                                Marketing & Social Media
                              </Link>
                            </div>

                            {/* Column 3 */}
                            <div>
                              <Link
                                to="/automations/crm-data-sync"
                                className="block text-sm font-semibold text-gray-700 hover:text-brand-teal transition-colors focus:outline-none py-2 mb-4"
                              >
                                CRM & Data Sync
                              </Link>
                              <Link
                                to="/automations/analytics-reporting"
                                className="block text-sm font-semibold text-gray-700 hover:text-brand-teal transition-colors focus:outline-none py-2"
                              >
                                Analytics & Reporting
                              </Link>
                            </div>

                            {/* Column 4 */}
                            <div>
                              <Link
                                to="/automations/contracts-workflow"
                                className="block text-sm font-semibold text-gray-700 hover:text-brand-teal transition-colors focus:outline-none py-2 mb-4"
                              >
                                Contracts & Workflow
                              </Link>
                              <Link
                                to="/automations/ecommerce-retention"
                                className="block text-sm font-semibold text-gray-700 hover:text-brand-teal transition-colors focus:outline-none py-2 mb-6"
                              >
                                E-commerce Retention
                              </Link>
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
          <div className="md:hidden border-t border-white/20">
            <nav className="py-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.megaDropdown ? (
                    <>
                      <button
                        onClick={() => handleMobileDropdownToggle(item.name)}
                        className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-700 hover:text-brand-teal hover:bg-white/5 transition-colors focus:outline-none"
                      >
                        <span>{item.name}</span>
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform ${
                            openMobileDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {openMobileDropdown === item.name && (
                        <div className="bg-white/5 border-l-2 border-brand-teal ml-4">
                          {/* Domains Dropdown */}
                          {item.name === 'Domains' && (
                            <>
                              {/* Industries */}
                              <button
                                onClick={() => handleMobileSubDropdownToggle('industries')}
                                className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-teal transition-colors focus:outline-none"
                              >
                                <span>INDUSTRIES</span>
                                <ChevronDown 
                                  className={`w-3 h-3 transition-transform ${
                                    openMobileSubDropdown === 'industries' ? 'rotate-180' : ''
                                  }`} 
                                />
                              </button>
                              {openMobileSubDropdown === 'industries' && (
                                <div className="bg-white/5 ml-4">
                                  {item.megaDropdown.industries.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      to={subItem.path}
                                      onClick={() => setIsMenuOpen(false)}
                                      className="block px-4 py-2 text-sm text-gray-600 hover:text-brand-teal transition-colors focus:outline-none"
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              )}

                              {/* Use Cases */}
                              <button
                                onClick={() => handleMobileSubDropdownToggle('usecases')}
                                className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-teal transition-colors focus:outline-none"
                              >
                                <span>USE CASES</span>
                                <ChevronDown 
                                  className={`w-3 h-3 transition-transform ${
                                    openMobileSubDropdown === 'usecases' ? 'rotate-180' : ''
                                  }`} 
                                />
                              </button>
                              {openMobileSubDropdown === 'usecases' && (
                                <div className="bg-white/5 ml-4">
                                  {item.megaDropdown.useCases.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      to={subItem.path}
                                      onClick={() => setIsMenuOpen(false)}
                                      className="block px-4 py-2 text-sm text-gray-600 hover:text-brand-teal transition-colors focus:outline-none"
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              )}

                              {/* Integrations */}
                              <button
                                onClick={() => handleMobileSubDropdownToggle('integrations')}
                                className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-teal transition-colors focus:outline-none"
                              >
                                <span>INTEGRATIONS</span>
                                <ChevronDown 
                                  className={`w-3 h-3 transition-transform ${
                                    openMobileSubDropdown === 'integrations' ? 'rotate-180' : ''
                                  }`} 
                                />
                              </button>
                              {openMobileSubDropdown === 'integrations' && (
                                <div className="bg-white/5 ml-4">
                                  {item.megaDropdown.integrations.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      to={subItem.path}
                                      onClick={() => setIsMenuOpen(false)}
                                      className={`block px-4 py-2 text-sm transition-colors focus:outline-none ${
                                        subItem.isButton 
                                          ? 'text-brand-teal font-medium' 
                                          : 'text-gray-600 hover:text-brand-teal'
                                      }`}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          )}

                          {/* AI Automations Dropdown */}
                          {item.name === 'AI Automations' && (
                            <div className="space-y-1">
                              <Link
                                to="/automations/lead-management-nurturing"
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-teal transition-colors focus:outline-none"
                              >
                                Lead Management & Nurturing
                              </Link>
                              <Link
                                to="/automations/billing-collections"
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-teal transition-colors focus:outline-none"
                              >
                                Billing & Collections
                              </Link>
                              <Link
                                to="/automations/recruitment-hr-workflows"
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-teal transition-colors focus:outline-none"
                              >
                                Recruitment & HR Workflows
                              </Link>
                              <Link
                                to="/automations/marketing-social-media"
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-teal transition-colors focus:outline-none"
                              >
                                Marketing & Social Media
                              </Link>
                              <Link
                                to="/automations/crm-data-sync"
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-teal transition-colors focus:outline-none"
                              >
                                CRM & Data Sync
                              </Link>
                              <Link
                                to="/automations/analytics-reporting"
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-teal transition-colors focus:outline-none"
                              >
                                Analytics & Reporting
                              </Link>
                              <Link
                                to="/automations/contracts-workflow"
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-teal transition-colors focus:outline-none"
                              >
                                Contracts & Workflow
                              </Link>
                              <Link
                                to="/automations/ecommerce-retention"
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-teal transition-colors focus:outline-none"
                              >
                                E-commerce Retention
                              </Link>
                              <Link
                                to="/automations"
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-2 text-sm font-medium text-brand-teal hover:bg-white/5 transition-colors focus:outline-none"
                              >
                                Explore More →
                              </Link>
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 text-base font-medium transition-colors focus:outline-none ${
                        location.pathname === item.path
                          ? 'text-brand-teal bg-white/10'
                          : 'text-gray-700 hover:text-brand-teal hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 mt-4 border-t border-white/20">
                {user ? (
                  <div className="flex items-center justify-between px-4 py-3">
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
                  <div className="space-y-2">
                    <Link
                      to="/signin"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-brand-teal hover:bg-white/5 transition-colors focus:outline-none"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      onClick={() => setIsMenuOpen(false)}
                      className="block mx-4 py-3 btn-gold text-base text-center focus:outline-none"
                    >
                      Register
                    </Link>
                  </div>
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