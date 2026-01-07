import React from 'react';
import { testimonials } from '../data/mockData';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Voices from Our <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Community</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Listen to influencers and fellow travelers as they share their favorite features of 3DotPay
          </p>
        </div>

        {/* Testimonial Cards - Text Only */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-teal-500/30 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                <Quote className="w-5 h-5 text-teal-400" />
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-teal-400 text-xs">{testimonial.handle}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-xs">{testimonial.followers}</p>
                  <p className="text-gray-600 text-xs">followers</p>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '2K+', label: 'Beta Users' },
            { value: '5', label: 'Countries' },
            { value: '$5K+', label: 'Transactions' },
            { value: '4.9', label: 'App Rating' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
            >
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
