import React from 'react';
import { securityFeatures } from '../data/mockData';
import { Shield, UserCheck, Eye, BadgeCheck, Bell, Lock } from 'lucide-react';

const iconComponents = {
  Shield,
  UserCheck,
  Eye,
  BadgeCheck,
  Bell,
  Lock
};

const SecuritySection = () => {
  return (
    <section id="security" className="py-24 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            YOUR SECURITY IS OUR <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">PRIORITY</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Bank-level protection for every transaction. Your money is always safe with us.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => {
            const IconComponent = iconComponents[feature.icon];
            return (
              <div
                key={feature.id}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-teal-500/30 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:from-teal-500/30 group-hover:to-cyan-500/30 transition-colors">
                  <IconComponent className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-teal-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
