import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Domains', path: '#', dropdown: [
      { name: 'Real Estate', path: '/real-estate' },
      { name: 'Healthcare', path: '/healthcare' },
      { name: 'Ecommerce', path: '/ecommerce' }
    ]},
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 glass-nav">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center focus:outline-none">
            <img 
              src="/logo.png" 
              alt="Euphoric AI" 
              className="h-40 w-55"
              onError={(e) => {
                e.currentTarget.src = "/Euphoric Logo.jpeg";
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
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
                  {item.dropdown ? (
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
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;