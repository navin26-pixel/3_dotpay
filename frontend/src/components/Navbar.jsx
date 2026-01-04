import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
              <span className="text-black font-bold text-lg">3.</span>
            </div>
            <span className="text-white font-semibold text-xl tracking-tight">3dotpay</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#countries" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Countries
            </a>
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
            <Button 
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-black font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25"
            >
              Get the App
            </Button>
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
            <div className="flex flex-col gap-4">
              <a href="#countries" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Countries
              </a>
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
              <Button 
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-black font-semibold px-6 py-2 rounded-full w-full mt-2"
              >
                Get the App
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
