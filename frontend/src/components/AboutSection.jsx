import React from 'react';
import { Globe, Wallet, QrCode, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              3DotPay is on a mission to make finance more open and inclusive. We connect digital money with traditional payments, allowing deposits into our e-wallet via stablecoin, bank transfers, and cards.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              This gives people everywhere—especially those who are underserved—real access to the global financial system through simple, practical payment solutions, including conversions to local currency for payments via local QR codes in SE Asia, P2P transfers, and QR code money remittances.
            </p>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-teal-500/30">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                <Wallet className="w-7 h-7 text-teal-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Multi-Currency Wallet</h3>
              <p className="text-gray-400 text-sm">Stablecoin, bank transfers, and card deposits</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-teal-500/30">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                <QrCode className="w-7 h-7 text-teal-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Local QR Payments</h3>
              <p className="text-gray-400 text-sm">Pay with local QR codes across SE Asia</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-teal-500/30">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-teal-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">P2P Transfers</h3>
              <p className="text-gray-400 text-sm">Send money to anyone, anywhere</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-teal-500/30">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                <Globe className="w-7 h-7 text-teal-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Global Remittances</h3>
              <p className="text-gray-400 text-sm">QR code money remittances worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
