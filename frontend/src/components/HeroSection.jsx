import React, { useState } from 'react';
import { Button } from './ui/button';
import { Apple, Play, ArrowRight } from 'lucide-react';
import { supportedCountries } from '../data/mockData';

const HeroSection = () => {
  const [showIOSComingSoon, setShowIOSComingSoon] = useState(false);
  const [showAndroidComingSoon, setShowAndroidComingSoon] = useState(false);

  return (
    <section className="min-h-screen bg-black relative overflow-hidden pt-24">
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            PAY LIKE A LOCAL
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              ACROSS ASIA VIA QR
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            A global wallet to unlock Asia's local QR payment systems. 
            Skip the ATM hassle, earn cashback, and avoid high exchange fees.
          </p>

          {/* CTA Buttons with Coming Soon on Click */}
          <div id="download-app" className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            {/* iOS Button */}
            <div className="flex flex-col items-center">
              <Button 
                type="button"
                onClick={() => setShowIOSComingSoon(!showIOSComingSoon)}
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-black font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/25 flex items-center gap-3"
              >
                <Apple size={24} />
                Download for iOS
              </Button>
              {showIOSComingSoon && (
                <p className="text-teal-400 text-sm mt-3 animate-fadeIn font-medium">
                  The 3DotPay App is Coming Soon!
                </p>
              )}
            </div>
            
            {/* Android Button */}
            <div className="flex flex-col items-center">
              <Button 
                type="button"
                onClick={() => setShowAndroidComingSoon(!showAndroidComingSoon)}
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg flex items-center gap-3"
              >
                <Play size={24} />
                Download for Android
              </Button>
              {showAndroidComingSoon && (
                <p className="text-teal-400 text-sm mt-3 animate-fadeIn font-medium">
                  The 3DotPay App is Coming Soon!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Country Cards Carousel */}
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide justify-center flex-wrap md:flex-nowrap">
            {supportedCountries.map((country, index) => (
              <div
                key={country.id}
                className="group relative flex-shrink-0 w-40 h-56 rounded-2xl overflow-hidden cursor-pointer snap-center transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-2xl mb-1">{country.flag}</p>
                  <h3 className="text-white font-semibold text-sm">{country.name}</h3>
                  <p className="text-gray-400 text-xs">{country.network}</p>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={14} className="text-white" />
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Cards */}
          <div className="flex justify-center gap-4 mt-4">
            {[
              { name: 'Japan', flag: '🇯🇵' },
              { name: 'South Korea', flag: '🇰🇷' },
              { name: 'Taiwan', flag: '🇹🇼' }
            ].map((country) => (
              <div
                key={country.name}
                className="w-36 h-20 rounded-xl bg-white/5 border border-white/10 border-dashed flex flex-col items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span className="text-xl mb-1">{country.flag}</span>
                <span className="text-gray-500 text-xs">{country.name}</span>
                <span className="text-gray-600 text-[10px]">Coming Soon</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
              <span className="text-xs">🔒</span>
            </div>
            <span>Bank-level Security</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
              <span className="text-xs">💰</span>
            </div>
            <span>1% Cashback</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
              <span className="text-xs">⚡</span>
            </div>
            <span>Instant Payments</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
