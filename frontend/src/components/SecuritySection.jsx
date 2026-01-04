import React from 'react';
import { securityFeatures } from '../data/mockData';
import { Shield, UserCheck, Eye, BadgeCheck, Bell, Lock, Quote } from 'lucide-react';

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
        {/* Quote Section */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-black" />
              </div>
              
              <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8">
                "At 3dotpay, your security isn't a feature. It's the foundation. We treat every transaction like it's our own money on the line and every account like it belongs to someone we love."
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <span className="text-white font-semibold">JK</span>
                </div>
                <div>
                  <p className="text-white font-semibold">James Kim</p>
                  <p className="text-gray-400 text-sm">Co-Founder and CTO · 3dotpay</p>
                </div>
              </div>
            </div>
          </div>
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
