import React from 'react';

const networks = [
  { name: 'QRIS', country: 'Indonesia' },
  { name: 'PromptPay', country: 'Thailand' },
  { name: 'VietQR', country: 'Vietnam' },
  { name: 'DuitNow', country: 'Malaysia' },
  { name: 'SGQR', country: 'Singapore' },
  { name: 'QR Ph', country: 'Philippines' },
  { name: 'PayNow', country: 'Singapore' },
  { name: 'Zero Pay', country: 'South Korea' },
];

const NetworksMarquee = () => {
  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent z-10" />
      
      <div className="text-center mb-12 relative z-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          A world of QR codes at your fingertips
        </h2>
        <p className="text-gray-400 text-lg">
          Built for international travelers, expats, and digital nomads.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

        {/* First Row - Moving Left */}
        <div className="flex animate-marquee-left mb-4">
          {[...networks, ...networks, ...networks].map((network, index) => (
            <div
              key={`left-${index}`}
              className="flex-shrink-0 mx-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  {network.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-white font-semibold group-hover:text-teal-400 transition-colors">{network.name}</p>
                <p className="text-gray-500 text-sm">{network.country}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - Moving Right */}
        <div className="flex animate-marquee-right">
          {[...networks.reverse(), ...networks, ...networks].map((network, index) => (
            <div
              key={`right-${index}`}
              className="flex-shrink-0 mx-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  {network.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-white font-semibold group-hover:text-teal-400 transition-colors">{network.name}</p>
                <p className="text-gray-500 text-sm">{network.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworksMarquee;
