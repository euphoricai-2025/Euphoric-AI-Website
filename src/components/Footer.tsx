import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <style>{`
        .footer-logo {
          height: 22.4px; /* 28px * 0.8 */
          width: 158.72px; /* 22.4px * 7.1 */
        }
        @media (min-width: 640px) {
          .footer-logo {
            height: 25.6px; /* 32px * 0.8 */
            width: 181.76px; /* 25.6px * 7.1 */
          }
        }
        @media (min-width: 768px) {
          .footer-logo {
            height: 32px; /* 40px * 0.8 */
            width: 227.2px; /* 32px * 7.1 */
          }
        }
        @media (min-width: 1024px) {
          .footer-logo {
            height: 38.4px; /* 48px * 0.8 */
            width: 272.64px; /* 38.4px * 7.1 */
          }
        }
      `}</style>
      <footer className="glass-nav border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="relative flex flex-col items-start col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center mb-6">
              <Link to="/" className="flex items-center focus:outline-none">
                <img
                  src="/euphoric-logo-final.png"
                  alt="Euphoric AI - Advanced AI Voice Agents for Business Automation"
                  className="footer-logo"
                  onError={(e) => {
                    e.currentTarget.src = "/euphoric-logo-final.png";
                  }}
                />
              </Link>
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Leading AI voice agent platform for business automation. Transform customer communication with intelligent AI agents that work 24/7 across all industries.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.linkedin.com/company/euphoricai" target="_blank" rel="noopener noreferrer" className="icon-badge" aria-label="Follow Euphoric AI on LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/euphoricai_official/" target="_blank" rel="noopener noreferrer" className="icon-badge" aria-label="Follow Euphoric AI on Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61579584882789" target="_blank" rel="noopener noreferrer" className="icon-badge" aria-label="Follow Euphoric AI on Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="mailto:hello@euphoricai.io" className="icon-badge" aria-label="Email Euphoric AI">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Industries */}
          <div className="relative flex flex-col items-start">
            <h3 className="text-gray-900 font-bold mb-4 text-sm">INDUSTRIES</h3>
            <ul className="space-y-2">
              <li><Link to="/healthcare" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Healthcare</Link></li>
              <li><Link to="/financial-services" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Financial Services</Link></li>
              <li><Link to="/insurance" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Insurance</Link></li>
              <li><Link to="/real-estate" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Real Estate</Link></li>
              <li><Link to="/ecommerce" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Ecommerce</Link></li>
              <li><Link to="/customer-support" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Customer Support</Link></li>
              <li><Link to="/logistics" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Logistics</Link></li>
              <li><Link to="/travel-hospitality" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Travel & Hospitality</Link></li>
              <li><Link to="/home-services" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Home Services</Link></li>
              <li><Link to="/retail-consumer" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Retail & Consumer</Link></li>
              <li><Link to="/debt-collection" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Debt Collection</Link></li>
            </ul>
          </div>

          {/* Use Cases */}
          <div className="relative flex flex-col items-start">
            <h3 className="text-gray-900 font-bold mb-4 text-sm">USE CASES</h3>
            <ul className="space-y-2">
              <li><Link to="/lead-qualification" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Lead Qualification</Link></li>
              <li><Link to="/appointment-booking" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Appointment Booking</Link></li>
              <li><Link to="/customer-support-agent" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Customer Support Agent</Link></li>
            </ul>
          </div>

          {/* Platform */}
          <div className="relative flex flex-col items-start">
            <h3 className="text-gray-900 font-bold mb-4 text-sm">PLATFORM</h3>
            <ul className="space-y-2">
              <li><Link to="/integrations" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Integrations</Link></li>
              <li><Link to="/integrations/cal-com" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Cal.com</Link></li>
              <li><Link to="/integrations/make" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Make</Link></li>
              <li><Link to="/integrations/twillio" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Twilio</Link></li>
              <li><Link to="/integrations/go-high-level" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">GoHighLevel</Link></li>
              <li><Link to="/automations" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Automations</Link></li>
              <li><Link to="/automations/lead-management-nurturing" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Lead Management</Link></li>
              <li><Link to="/automations/crm-data-sync" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">CRM Data Sync</Link></li>
              <li><Link to="/automations/analytics-reporting" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Analytics</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="relative flex flex-col items-start">
            <h3 className="text-gray-900 font-bold mb-4 text-sm">COMPANY</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">About Us</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Pricing</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">FAQ</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Careers</Link></li>
              <li><Link to="/internships" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Internships</Link></li>
              <li><Link to="/partner" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Partner Program</Link></li>
              <li><a href="https://calendly.com/euphoricai-ai-voiceagents-demo/45" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Book Demo</a></li>
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Terms of Service</Link></li>
              <li><Link to="/refund-policy" className="text-gray-600 hover:text-brand-teal text-sm transition-colors focus:outline-none focus:ring-0 active:outline-none">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="relative border-t border-white/10 mt-12 pt-8">
          <div className="text-center mb-4">
            <p className="text-gray-600 text-sm mb-2">
              © 2025 Euphoric AI. All rights reserved. Leading provider of AI voice agents for business automation across healthcare, finance, real estate, ecommerce, and enterprise industries.
            </p>
            <p className="text-gray-500 text-xs">
              AI Voice Agents | Business Automation | Customer Support AI | Lead Generation | CRM Integration | New York, NY USA
            </p>
          </div>
        </div>
      </div>
      </footer>
    </>
  );
};

export default Footer;