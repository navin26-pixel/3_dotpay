import React, { useState } from 'react';
import { howItWorks } from '../data/mockData';
import { 
  Wallet, PlusCircle, QrCode, CheckCircle, Sparkles, 
  Home, History, Settings, User, ChevronRight, 
  CreditCard, Building2, ArrowUpRight, ArrowDownLeft,
  Scan, X, Check, Bell, ChevronDown, Wifi, Battery, Signal
} from 'lucide-react';

const stepIcons = {
  1: Wallet,
  2: PlusCircle,
  3: QrCode,
  4: CheckCircle,
  5: Sparkles
};

// Phone Status Bar Component
const StatusBar = () => (
  <div className="flex items-center justify-between px-6 py-2 text-white text-xs">
    <span className="font-medium">9:41</span>
    <div className="flex items-center gap-1">
      <Signal size={14} />
      <Wifi size={14} />
      <Battery size={14} />
    </div>
  </div>
);

// App Header Component
const AppHeader = ({ title, showBack, showNotification }) => (
  <div className="flex items-center justify-between px-4 py-3">
    <div className="flex items-center gap-3">
      {showBack ? (
        <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
          <ChevronRight size={16} className="text-white rotate-180" />
        </button>
      ) : (
        <img 
          src="https://customer-assets.emergentagent.com/job_threedotpay/artifacts/2z7vuqp7_3dotpay%20logo.jpeg" 
          alt="3dotpay" 
          className="w-8 h-8 rounded-lg object-cover"
        />
      )}
      <span className="text-white font-semibold">{title}</span>
    </div>
    {showNotification && (
      <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center relative">
        <Bell size={16} className="text-white" />
        <div className="absolute top-1 right-1 w-2 h-2 bg-teal-400 rounded-full" />
      </button>
    )}
  </div>
);

// Bottom Navigation Component
const BottomNav = ({ activeTab = 'home' }) => (
  <div className="absolute bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur border-t border-white/10 px-4 py-2 flex items-center justify-around">
    {[
      { id: 'home', icon: Home, label: 'Home' },
      { id: 'scan', icon: Scan, label: 'Scan', isMain: true },
      { id: 'history', icon: History, label: 'History' },
    ].map((item) => (
      <button
        key={item.id}
        className={`flex flex-col items-center gap-1 ${
          item.isMain ? '-mt-6' : ''
        }`}
      >
        {item.isMain ? (
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-500/30">
            <item.icon size={24} className="text-black" />
          </div>
        ) : (
          <item.icon size={20} className={activeTab === item.id ? 'text-teal-400' : 'text-gray-500'} />
        )}
        <span className={`text-[10px] ${activeTab === item.id ? 'text-teal-400' : 'text-gray-500'} ${item.isMain ? 'mt-1' : ''}`}>
          {item.label}
        </span>
      </button>
    ))}
  </div>
);

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  // Step 1: Home Screen with Wallet
  const HomeScreen = () => (
    <div className="h-full flex flex-col animate-fadeIn">
      <StatusBar />
      <AppHeader title="3dotpay" showNotification />
      
      {/* Balance Card */}
      <div className="mx-4 mt-2 p-4 bg-gradient-to-br from-teal-500/20 to-cyan-500/10 rounded-2xl border border-teal-500/20">
        <p className="text-gray-400 text-xs mb-1">Total Balance</p>
        <p className="text-white text-2xl font-bold">$1,234.56</p>
        <p className="text-teal-400 text-xs mt-1">≈ ฿38,814 THB</p>
      </div>

      {/* Quick Actions */}
      <div className="flex justify-center gap-6 mt-6">
        {[
          { icon: ArrowUpRight, label: 'Send', color: 'from-blue-500 to-blue-600' },
          { icon: ArrowDownLeft, label: 'Receive', color: 'from-green-500 to-green-600' },
          { icon: PlusCircle, label: 'Add', color: 'from-teal-400 to-cyan-500' },
        ].map((action) => (
          <button key={action.label} className="flex flex-col items-center gap-2">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${action.color} flex items-center justify-center`}>
              <action.icon size={20} className="text-white" />
            </div>
            <span className="text-gray-400 text-xs">{action.label}</span>
          </button>
        ))}
      </div>

      {/* Payment Methods */}
      <div className="mx-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-white text-sm font-medium">Payment Methods</span>
          <ChevronRight size={16} className="text-gray-500" />
        </div>
        <div className="space-y-2">
          <div className="bg-white/5 rounded-xl p-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
              <Building2 size={18} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-medium">Chase Bank</p>
              <p className="text-gray-500 text-xs">••••4523</p>
            </div>
            <Check size={16} className="text-teal-400" />
          </div>
          <div className="bg-white/5 rounded-xl p-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">₮</span>
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-medium">USDT</p>
              <p className="text-gray-500 text-xs">Tether USD</p>
            </div>
          </div>
          <div className="bg-white/5 rounded-xl p-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">$</span>
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-medium">USDC</p>
              <p className="text-gray-500 text-xs">USD Coin</p>
            </div>
          </div>
          <div className="bg-white/5 border border-dashed border-white/20 rounded-xl p-3 flex items-center justify-center gap-2">
            <PlusCircle size={16} className="text-gray-500" />
            <span className="text-gray-500 text-xs">Add Payment Method</span>
          </div>
        </div>
      </div>

      <BottomNav activeTab="home" />
    </div>
  );

  // Step 2: Add Funds Screen
  const AddFundsScreen = () => (
    <div className="h-full flex flex-col animate-fadeIn">
      <StatusBar />
      <AppHeader title="Add Funds" showBack />
      
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <p className="text-gray-400 text-sm mb-2">Enter Amount</p>
        <div className="flex items-baseline gap-1">
          <span className="text-white text-4xl font-bold">$</span>
          <span className="text-white text-5xl font-bold">1,000</span>
        </div>
        <p className="text-teal-400 text-sm mt-2">≈ ฿31,440 THB</p>
        
        {/* Quick Amount Buttons */}
        <div className="flex gap-3 mt-6">
          {['$100', '$500', '$1,000'].map((amount) => (
            <button
              key={amount}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                amount === '$1,000' 
                  ? 'bg-teal-500/20 text-teal-400 border border-teal-500/50' 
                  : 'bg-white/5 text-gray-400'
              }`}
            >
              {amount}
            </button>
          ))}
        </div>

        {/* From Account */}
        <div className="w-full mt-8 bg-white/5 rounded-xl p-4">
          <p className="text-gray-500 text-xs mb-2">From</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
              <Building2 size={18} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-medium">Chase Bank</p>
              <p className="text-gray-500 text-xs">Available: $5,432.10</p>
            </div>
            <ChevronDown size={16} className="text-gray-500" />
          </div>
        </div>
      </div>

      {/* Add Button */}
      <div className="p-4 pb-8">
        <button className="w-full py-4 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-black font-semibold">
          Add $1,000
        </button>
      </div>
    </div>
  );

  // Step 3: Scan QR Screen
  const ScanQRScreen = () => (
    <div className="h-full flex flex-col bg-black animate-fadeIn">
      <StatusBar />
      <div className="flex items-center justify-between px-4 py-3">
        <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
          <X size={16} className="text-white" />
        </button>
        <span className="text-white font-semibold">Scan QR Code</span>
        <div className="w-8" />
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        {/* Scanner Frame */}
        <div className="relative w-56 h-56">
          {/* Corner Borders */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-teal-400 rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-teal-400 rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-teal-400 rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-teal-400 rounded-br-xl" />
          
          {/* Scanning Line */}
          <div className="absolute top-4 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent animate-pulse" />
          
          {/* QR Icon in Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <QrCode size={80} className="text-white/20" />
          </div>
        </div>

        <p className="text-gray-400 text-sm mt-8 text-center">
          Point your camera at the QR code
        </p>
        
        {/* Country Selector */}
        <div className="mt-6 px-4 py-2 bg-white/5 rounded-full flex items-center gap-2">
          <span className="text-lg">🇹🇭</span>
          <span className="text-white text-sm">Thailand</span>
          <ChevronDown size={14} className="text-gray-500" />
        </div>
      </div>

      <div className="p-4 pb-8 text-center">
        <p className="text-gray-500 text-xs">
          Supports PromptPay, TrueMoney, and more
        </p>
      </div>
    </div>
  );

  // Step 4: Confirm Payment Screen
  const ConfirmPaymentScreen = () => (
    <div className="h-full flex flex-col animate-fadeIn">
      <StatusBar />
      <AppHeader title="Confirm Payment" showBack />
      
      <div className="flex-1 px-4 pt-4">
        {/* Merchant Info */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-amber-600 mx-auto mb-3 flex items-center justify-center">
            <span className="text-2xl">☕</span>
          </div>
          <p className="text-white font-semibold">Café Amazon</p>
          <p className="text-gray-500 text-sm">Central World, Bangkok</p>
        </div>

        {/* Amount */}
        <div className="bg-white/5 rounded-2xl p-4 mb-4">
          <div className="text-center pb-4 border-b border-white/10">
            <p className="text-gray-400 text-xs mb-1">You Pay</p>
            <p className="text-white text-3xl font-bold">฿350.00</p>
            <p className="text-teal-400 text-sm">≈ $11.13 USD</p>
          </div>
          
          {/* Details */}
          <div className="pt-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400 text-sm">Exchange Rate</span>
              <span className="text-white text-sm">1 USD = ฿31.44</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 text-sm">Fee</span>
              <span className="text-teal-400 text-sm">$0.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 text-sm">Cashback</span>
              <span className="text-teal-400 text-sm">+$0.11 (1%)</span>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white/5 rounded-xl p-3 flex items-center gap-3">
          <img 
            src="https://customer-assets.emergentagent.com/job_threedotpay/artifacts/2z7vuqp7_3dotpay%20logo.jpeg" 
            alt="3dotpay" 
            className="w-10 h-10 rounded-lg object-cover"
          />
          <div className="flex-1">
            <p className="text-white text-sm font-medium">3dotpay Balance</p>
            <p className="text-gray-500 text-xs">$1,234.56 available</p>
          </div>
          <Check size={16} className="text-teal-400" />
        </div>
      </div>

      {/* Confirm Button */}
      <div className="p-4 pb-8">
        <button className="w-full py-4 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-black font-semibold flex items-center justify-center gap-2">
          <Check size={20} />
          Confirm Payment
        </button>
      </div>
    </div>
  );

  // Step 5: Success Screen
  const SuccessScreen = () => (
    <div className="h-full flex flex-col animate-fadeIn">
      <StatusBar />
      
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        {/* Success Animation */}
        <div className="relative mb-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
            <Check size={48} className="text-black" strokeWidth={3} />
          </div>
          <div className="absolute -inset-2 rounded-full border-2 border-teal-400/30 animate-ping" />
        </div>

        <h3 className="text-white text-xl font-bold mb-2">Payment Successful!</h3>
        <p className="text-gray-400 text-sm text-center mb-6">
          Your payment to Café Amazon has been completed
        </p>

        {/* Amount Card */}
        <div className="w-full bg-white/5 rounded-2xl p-4 text-center mb-4">
          <p className="text-white text-3xl font-bold">฿350.00</p>
          <p className="text-gray-500 text-sm mt-1">$11.13 USD</p>
        </div>

        {/* Cashback Banner */}
        <div className="w-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 rounded-xl p-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center">
            <Sparkles size={20} className="text-teal-400" />
          </div>
          <div className="flex-1">
            <p className="text-teal-400 text-sm font-medium">+$0.11 Cashback!</p>
            <p className="text-gray-400 text-xs">Added to your balance</p>
          </div>
        </div>

        {/* Transaction ID */}
        <p className="text-gray-600 text-xs mt-6">
          Transaction ID: 3DP-2025-0704-8X9K2
        </p>
      </div>

      {/* Done Button */}
      <div className="p-4 pb-8">
        <button className="w-full py-4 rounded-full bg-white/10 text-white font-semibold">
          Done
        </button>
      </div>
    </div>
  );

  // Render the appropriate screen based on active step
  const renderScreen = () => {
    switch (activeStep) {
      case 1: return <HomeScreen />;
      case 2: return <AddFundsScreen />;
      case 3: return <ScanQRScreen />;
      case 4: return <ConfirmPaymentScreen />;
      case 5: return <SuccessScreen />;
      default: return <HomeScreen />;
    }
  };

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
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-[280px] h-[580px]">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-[3rem] p-[3px] shadow-2xl">
                <div className="w-full h-full bg-black rounded-[2.8rem] overflow-hidden relative">
                  {/* Dynamic Island */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-gray-900 mr-8" />
                  </div>
                  
                  {/* Screen Content */}
                  <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black">
                    {renderScreen()}
                  </div>
                </div>
              </div>
              
              {/* Side Buttons */}
              <div className="absolute top-28 -left-[2px] w-[3px] h-8 bg-gray-700 rounded-l" />
              <div className="absolute top-44 -left-[2px] w-[3px] h-16 bg-gray-700 rounded-l" />
              <div className="absolute top-28 -right-[2px] w-[3px] h-12 bg-gray-700 rounded-r" />
              
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-[4rem] blur-2xl -z-10" />
            </div>
          </div>

          {/* Steps List */}
          <div className="space-y-4 order-1 lg:order-2">
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
