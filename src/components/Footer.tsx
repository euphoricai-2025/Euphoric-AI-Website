import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <style>{`
        .footer-logo {
          height: 28px;
          width: 198.4px; /* 28px * 7.1 */
        }
        @media (min-width: 640px) {
          .footer-logo {
            height: 32px;
            width: 227.2px; /* 32px * 7.1 */
          }
        }
        @media (min-width: 768px) {
          .footer-logo {
            height: 40px;
            width: 284px; /* 40px * 7.1 */
          }
        }
        @media (min-width: 1024px) {
          .footer-logo {
            height: 48px;
            width: 340.8px; /* 48px * 7.1 */
          }
        }
      `}</style>
      <footer className="glass-nav border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 justify-items-start">
          {/* Logo and Description */}
          <div className="relative">
            <div className="flex items-center mb-4">
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
          <div className="relative">
            <h3 className="text-gray-900 font-bold mb-4">INDUSTRIES</h3>
            <ul className="space-y-2">
              <li><Link to="/healthcare" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Healthcare</Link></li>
              <li><Link to="/financial-services" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Financial Services</Link></li>
              <li><Link to="/insurance" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Insurance</Link></li>
              <li><Link to="/logistics" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Logistics</Link></li>
              <li><Link to="/retail-consumer" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Retail & Consumer</Link></li>
              <li><Link to="/travel-hospitality" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Travel & Hospitality</Link></li>
              <li><Link to="/real-estate" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Real Estate</Link></li>
              <li><Link to="/ecommerce" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">E-commerce</Link></li>
            </ul>
          </div>

          {/* Use Cases */}
          <div className="relative">
            <h3 className="text-gray-900 font-bold mb-4">USE CASES</h3>
            <ul className="space-y-2">
              <li><Link to="/use-cases/healthcare" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Healthcare</Link></li>
              <li><Link to="/use-cases/finance" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Finance Services</Link></li>
              <li><Link to="/use-cases/insurance" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Insurance</Link></li>
              <li><Link to="/use-cases/real-estate" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Real Estate</Link></li>
              <li><Link to="/use-cases/logistics" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Logistics</Link></li>
              <li><Link to="/use-cases/retail-consumer" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Retail & Consumer</Link></li>
              <li><Link to="/use-cases/travel-hospitality" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Travel & Hospitality</Link></li>
              <li><Link to="/use-cases/ecommerce" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">E-commerce</Link></li>
              <li><Link to="/lead-qualification" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Lead Qualification Agent</Link></li>
              <li><Link to="/appointment-booking" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Appointment Booking Agent</Link></li>
              <li><Link to="/customer-support-agent" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Customer Support Agent</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="relative">
            <h3 className="text-gray-900 font-bold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Careers</Link></li>
              <li><Link to="/internships" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Internships</Link></li>
              <li><Link to="/partner" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Partner with Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Contact and Support</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">FAQ</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Terms of Service</Link></li>
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