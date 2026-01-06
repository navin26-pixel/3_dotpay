import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const supportedCountries = [
  { name: 'Thailand', flag: '🇹🇭', network: 'PromptPay' },
  { name: 'Vietnam', flag: '🇻🇳', network: 'VietQR' },
  { name: 'Philippines', flag: '🇵🇭', network: 'QR Ph' },
  { name: 'Singapore', flag: '🇸🇬', network: 'SGQR' },
  { name: 'Malaysia', flag: '🇲🇾', network: 'DuitNow' },
  { name: 'Cambodia', flag: '🇰🇭', network: 'KHQR' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCountriesOpen, setIsCountriesOpen] = useState(false);
  const [isMobileCountriesOpen, setIsMobileCountriesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <img 
              src="https://customer-assets.emergentagent.com/job_threedotpay/artifacts/2z7vuqp7_3dotpay%20logo.jpeg" 
              alt="3dotpay" 
              className="h-10 w-auto rounded-lg"
            />
            <span className="text-white font-semibold text-xl tracking-tight">3dotpay</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Countries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsCountriesOpen(true)}
              onMouseLeave={() => setIsCountriesOpen(false)}
            >
              <button 
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center gap-1"
                onClick={() => setIsCountriesOpen(!isCountriesOpen)}
              >
                Countries
                <ChevronDown size={16} className={`transition-transform ${isCountriesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isCountriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl shadow-black/50 overflow-hidden animate-fadeIn">
                  <div className="p-2">
                    <p className="text-gray-500 text-xs font-medium px-3 py-2">SUPPORTED COUNTRIES</p>
                    {supportedCountries.map((country) => (
                      <a
                        key={country.name}
                        href="#countries"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                      >
                        <span className="text-2xl">{country.flag}</span>
                        <div>
                          <p className="text-white text-sm font-medium group-hover:text-teal-400 transition-colors">{country.name}</p>
                          <p className="text-gray-500 text-xs">{country.network}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="border-t border-white/10 p-3">
                    <p className="text-gray-500 text-xs text-center">More countries coming soon!</p>
                  </div>
                </div>
              )}
            </div>

            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              How It Works
            </a>
            <a href="#rates" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Compare Rates
            </a>
            <a href="#security" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Security
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              FAQ
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#download-app">
              <Button 
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-black font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25"
              >
                Get the App
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-2">
              {/* Mobile Countries Dropdown */}
              <div>
                <button 
                  className="w-full text-left text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center justify-between py-2"
                  onClick={() => setIsMobileCountriesOpen(!isMobileCountriesOpen)}
                >
                  Countries
                  <ChevronDown size={16} className={`transition-transform ${isMobileCountriesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMobileCountriesOpen && (
                  <div className="pl-4 mt-2 space-y-1 border-l border-white/10 ml-2">
                    {supportedCountries.map((country) => (
                      <a
                        key={country.name}
                        href="#countries"
                        className="flex items-center gap-3 py-2 text-gray-400 hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="text-lg">{country.flag}</span>
                        <span className="text-sm">{country.name}</span>
                        <span className="text-xs text-gray-600">({country.network})</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors text-sm font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                How It Works
              </a>
              <a href="#rates" className="text-gray-300 hover:text-white transition-colors text-sm font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Compare Rates
              </a>
              <a href="#security" className="text-gray-300 hover:text-white transition-colors text-sm font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Security
              </a>
              <a href="#faq" className="text-gray-300 hover:text-white transition-colors text-sm font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                FAQ
              </a>
              <a href="#download-app" onClick={() => setIsMobileMenuOpen(false)}>
                <Button 
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-black font-semibold px-6 py-2 rounded-full w-full mt-2"
                >
                  Get the App
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
