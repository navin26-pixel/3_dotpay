import React from 'react';
import { testimonials } from '../data/mockData';
import { Instagram, ExternalLink } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            OUR COMMUNITY <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">SPEAKS</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Hear from influencers and fellow travelers about their favorite 3dotpay features.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-teal-500/30 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                {/* Instagram Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                {/* Quote */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-teal-400 text-xs">{testimonial.handle}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-xs">{testimonial.followers}</p>
                    <p className="text-gray-600 text-xs">followers</p>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '1000+', label: 'Beta Users' },
            { value: '5', label: 'Countries' },
            { value: '$5M+', label: 'Transactions' },
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
