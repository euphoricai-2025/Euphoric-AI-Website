import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Mail, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass-nav border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 relative">
            <div className="flex items-center mb-4">
              <Link to="/" className="flex items-center focus:outline-none">
                <img
                  src="/logo-zoomed.png"
                  alt="Euphoric AI"
                  className="h-15 w-118"
                  onError={(e) => {
                    e.currentTarget.src = "/Euphoric Logo.jpeg";
                  }}
                />
              </Link>
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Hire specialized AI voice agents for your business. Transform customer communication with intelligent automation that works 24/7.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="icon-badge">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="icon-badge">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="icon-badge">
                <Github className="w-4 h-4" />
              </a>
              <a href="mailto:support@euphoricai.com" className="icon-badge">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="relative">
            <h3 className="text-gray-900 font-bold mb-4">PRODUCTS</h3>
            <ul className="space-y-2">
              <li><Link to="/real-estate" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Real Estate AI</Link></li>
              <li><Link to="/healthcare" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Healthcare AI</Link></li>
              <li><Link to="/ecommerce" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Ecommerce AI</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="relative">
            <h3 className="text-gray-900 font-bold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">FAQ</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="relative">
            <h3 className="text-gray-900 font-bold mb-4">SUPPORT</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="relative border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 Euphoric AI. All rights reserved. Transforming business communication with AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;