import React, { useState } from 'react';
import { faqs } from '../data/mockData';
import { ChevronDown, ChevronUp, Mail } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQSection = () => {
  const [showSupportEmail, setShowSupportEmail] = useState(false);

  return (
    <section id="faq" className="py-24 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            FREQUENTLY ASKED <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">QUESTIONS</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about 3dotpay
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={`item-${faq.id}`}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden data-[state=open]:border-teal-500/30 transition-all"
            >
              <AccordionTrigger className="px-6 py-5 text-left hover:no-underline group">
                <span className="text-white font-medium text-lg pr-4 group-hover:text-teal-400 transition-colors">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* More Questions CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <button 
            onClick={() => setShowSupportEmail(!showSupportEmail)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-colors"
          >
            <Mail size={18} />
            Contact Support
            {showSupportEmail ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          
          {showSupportEmail && (
            <div className="mt-4 animate-fadeIn">
              <a 
                href="mailto:support@3dotpay.com" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 rounded-full text-teal-400 font-medium hover:from-teal-500/30 hover:to-cyan-500/30 transition-all"
              >
                <Mail size={18} />
                support@3dotpay.com
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
