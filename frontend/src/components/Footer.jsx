import React, { useState } from 'react';
import { Button } from './ui/button';
import { Apple, Play, Twitter, Instagram, Linkedin, Mail, MapPin, Globe, ChevronDown, ChevronUp, Bell } from 'lucide-react';

const Footer = () => {
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showHelpEmail, setShowHelpEmail] = useState(false);
  const [showContactEmail, setShowContactEmail] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [showDownloadButtons, setShowDownloadButtons] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNotify = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-black relative overflow-hidden">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            {/* Coming Soon Title - Click to toggle description */}
            <button 
              type="button"
              className="text-4xl md:text-5xl font-bold text-white mb-6 cursor-pointer select-none hover:text-teal-400 transition-colors flex items-center justify-center gap-3 mx-auto"
              onClick={() => setShowComingSoon(!showComingSoon)}
            >
              The 3DotPay App is Coming Soon!
              {showComingSoon ? <ChevronUp size={32} /> : <ChevronDown size={32} />}
            </button>
            
            {showComingSoon && (
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto animate-fadeIn">
                Revolutionary payments in SE Asia – deposit with stablecoin, cards, or bank transfers. Pay seamlessly with local QR codes, P2P, and remittances.
              </p>
            )}

            {/* Email Notification Form */}
            <form onSubmit={handleNotify} className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:border-teal-500 transition-colors"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-black font-semibold px-8 py-4 rounded-full flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-teal-500/25"
                >
                  <Bell size={20} />
                  Notify Me
                </Button>
              </div>
              {isSubscribed && (
                <p className="text-teal-400 text-sm mt-3 animate-fadeIn">
                  ✓ Thank you! We'll notify you when the app launches.
                </p>
              )}
            </form>
            
            {/* Download Buttons - Click to toggle */}
            <button 
              type="button"
              className="text-gray-400 text-sm cursor-pointer select-none hover:text-teal-400 transition-colors mb-4 flex items-center justify-center gap-2 mx-auto"
              onClick={() => setShowDownloadButtons(!showDownloadButtons)}
            >
              {showDownloadButtons ? 'Hide download options' : 'Click for download options'}
              {showDownloadButtons ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            {showDownloadButtons && (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn">
                <Button 
                  className="bg-white text-black hover:bg-gray-100 px-8 py-6 rounded-full text-lg font-semibold flex items-center gap-3 transition-all hover:shadow-xl hover:shadow-white/10"
                >
                  <Apple size={24} />
                  Download for iOS
                </Button>
                <Button 
                  variant="outline"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20 px-8 py-6 rounded-full text-lg flex items-center gap-3"
                >
                  <Play size={24} />
                  Download for Android
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://customer-assets.emergentagent.com/job_threedotpay/artifacts/2z7vuqp7_3dotpay%20logo.jpeg" 
                  alt="3dotpay" 
                  className="h-10 w-auto rounded-lg"
                />
                <span className="text-white font-semibold text-xl">3dotpay</span>
              </div>
              <p className="text-gray-400 text-sm mb-6 max-w-xs">
                A global wallet to unlock Asia's local QR payment systems. Pay like a local, anywhere.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Twitter size={18} className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Instagram size={18} className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Linkedin size={18} className="text-white" />
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Countries</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Security</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="col-span-2 md:col-span-1">
              <button 
                type="button"
                className="text-white font-semibold mb-4 cursor-pointer flex items-center gap-2 hover:text-teal-400 transition-colors select-none"
                onClick={() => setShowAboutUs(!showAboutUs)}
              >
                About Us
                {showAboutUs ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {showAboutUs && (
                <p className="text-gray-400 text-sm leading-relaxed animate-fadeIn">
                  3DotPay is on a mission to make finance more open and inclusive. We connect digital money with traditional payments, allowing deposits into our e-wallet via stablecoins, bank transfers, and cards. This gives people everywhere—especially those who are underserved—real access to the global financial system through simple, practical payment solutions, including conversions to local currency for payments via local QR codes in SE Asia, P2P transfers, and QR code money remittances.
                </p>
              )}
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    type="button"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm cursor-pointer select-none flex items-center gap-1"
                    onClick={() => setShowHelpEmail(!showHelpEmail)}
                  >
                    Help Center
                    {showHelpEmail ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                  </button>
                  {showHelpEmail && (
                    <a href="mailto:Support@3dotpay.com" className="block text-teal-400 hover:text-teal-300 transition-colors text-sm animate-fadeIn mt-1">Support@3dotpay.com</a>
                  )}
                </li>
                <li>
                  <button 
                    type="button"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm cursor-pointer select-none flex items-center gap-1"
                    onClick={() => setShowContactEmail(!showContactEmail)}
                  >
                    Contact Us
                    {showContactEmail ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                  </button>
                  {showContactEmail && (
                    <a href="mailto:contact@3dotpay.com" className="block text-teal-400 hover:text-teal-300 transition-colors text-sm animate-fadeIn mt-1">contact@3dotpay.com</a>
                  )}
                </li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 3dotpay Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <MapPin size={14} />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Globe size={14} />
                <span>English</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
