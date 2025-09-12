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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Logo and Description */}
          <div className="relative flex flex-col items-start lg:col-span-1">
            <div className="flex items-center mb-8">
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
            <p className="text-gray-600 text-sm mb-8 leading-relaxed">
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

          {/* Quick Links */}
          <div className="relative flex flex-col items-start">
            <h3 className="text-gray-900 font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><Link to="/pricing" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Pricing</Link></li>
              <li><a href="https://calendly.com/euphoricai-aivoiceagents-demo/30min" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Book Demo</a></li>
              <li><Link to="/healthcare" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Healthcare Solutions</Link></li>
              <li><Link to="/financial-services" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Financial Services</Link></li>
              <li><Link to="/real-estate" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Real Estate</Link></li>
              <li><Link to="/integrations" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Integrations</Link></li>
            </ul>
          </div>

          {/* Company & Support */}
          <div className="relative flex flex-col items-start">
            <h3 className="text-gray-900 font-bold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Contact & Support</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">FAQ</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Careers</Link></li>
              <li><Link to="/partner" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Partner with Us</Link></li>
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