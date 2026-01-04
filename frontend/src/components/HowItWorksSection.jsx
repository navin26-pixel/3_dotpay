import React, { useState } from 'react';
import { howItWorks } from '../data/mockData';
import { Wallet, PlusCircle, QrCode, CheckCircle, Sparkles } from 'lucide-react';

const stepIcons = {
  1: Wallet,
  2: PlusCircle,
  3: QrCode,
  4: CheckCircle,
  5: Sparkles
};

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="how-it-works" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            HOW <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">3DOTPAY</span> WORKS
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Scan QR codes like a local for easy, cashless payments. 
            Say goodbye to the hassle of using cash & ATM's.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone Mockup */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-[580px]">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-10" />
                  
                  {/* Screen Content */}
                  <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black p-6 pt-10">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                          <span className="text-black font-bold text-sm">3.</span>
                        </div>
                        <span className="text-white font-semibold">3dotpay</span>
                      </div>
                    </div>

                    {/* Dynamic Step Content */}
                    <div className="text-center">
                      {activeStep === 1 && (
                        <div className="animate-fadeIn">
                          <Wallet className="w-16 h-16 text-teal-400 mx-auto mb-4" />
                          <p className="text-white font-medium">Link Your Bank</p>
                          <div className="mt-6 space-y-3">
                            <div className="bg-white/10 rounded-xl p-3 flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                <span className="text-blue-400 text-xl">🏦</span>
                              </div>
                              <div className="text-left">
                                <p className="text-white text-sm font-medium">Chase Bank</p>
                                <p className="text-gray-500 text-xs">****4523</p>
                              </div>
                            </div>
                            <div className="bg-white/5 border border-dashed border-white/20 rounded-xl p-3 flex items-center justify-center gap-2 cursor-pointer hover:bg-white/10 transition-colors">
                              <PlusCircle className="w-5 h-5 text-gray-500" />
                              <span className="text-gray-500 text-sm">Add Payment Method</span>
                            </div>
                          </div>
                        </div>
                      )}
                      {activeStep === 2 && (
                        <div className="animate-fadeIn">
                          <PlusCircle className="w-16 h-16 text-teal-400 mx-auto mb-4" />
                          <p className="text-white font-medium">Add Funds</p>
                          <div className="mt-6 bg-white/10 rounded-2xl p-4">
                            <p className="text-gray-400 text-sm mb-2">Amount to add</p>
                            <p className="text-4xl font-bold text-white">$1,000</p>
                            <p className="text-gray-500 text-sm mt-1">≈ ฿31,440 THB</p>
                          </div>
                        </div>
                      )}
                      {activeStep === 3 && (
                        <div className="animate-fadeIn">
                          <QrCode className="w-16 h-16 text-teal-400 mx-auto mb-4" />
                          <p className="text-white font-medium">Scan to Pay</p>
                          <div className="mt-6 w-40 h-40 mx-auto bg-white rounded-2xl p-3">
                            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center">
                              <QrCode className="w-20 h-20 text-white" />
                            </div>
                          </div>
                        </div>
                      )}
                      {activeStep === 4 && (
                        <div className="animate-fadeIn">
                          <CheckCircle className="w-16 h-16 text-teal-400 mx-auto mb-4" />
                          <p className="text-white font-medium">Confirm Payment</p>
                          <div className="mt-6 bg-white/10 rounded-2xl p-4 text-left space-y-3">
                            <div className="flex justify-between">
                              <span className="text-gray-400 text-sm">Amount</span>
                              <span className="text-white text-sm">฿350</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400 text-sm">Rate</span>
                              <span className="text-white text-sm">1 USD = 31.44 THB</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400 text-sm">Merchant</span>
                              <span className="text-white text-sm">Café Amazon</span>
                            </div>
                          </div>
                        </div>
                      )}
                      {activeStep === 5 && (
                        <div className="animate-fadeIn">
                          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                            <Sparkles className="w-10 h-10 text-black" />
                          </div>
                          <p className="text-white font-medium">Payment Successful!</p>
                          <div className="mt-6">
                            <p className="text-3xl font-bold text-teal-400">฿350</p>
                            <p className="text-gray-500 text-sm mt-1">+$0.11 cashback earned</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-[4rem] blur-2xl -z-10" />
            </div>
          </div>

          {/* Steps List */}
          <div className="space-y-4">
            {howItWorks.map((step) => {
              const IconComponent = stepIcons[step.step];
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(step.step)}
                  className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                    activeStep === step.step
                      ? 'bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border-teal-500/50'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      activeStep === step.step
                        ? 'bg-gradient-to-br from-teal-400 to-cyan-500'
                        : 'bg-white/10 group-hover:bg-white/20'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${
                        activeStep === step.step ? 'text-black' : 'text-white'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-sm font-medium ${
                          activeStep === step.step ? 'text-teal-400' : 'text-gray-500'
                        }`}>
                          Step {step.step}
                        </span>
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
