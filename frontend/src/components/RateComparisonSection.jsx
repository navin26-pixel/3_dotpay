import React, { useState, useMemo } from 'react';
import { Check, X, TrendingUp } from 'lucide-react';

const RateComparisonSection = () => {
  const [amount, setAmount] = useState(500);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('THB');

  const currencies = [
    { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
    { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
    { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
  ];

  const destinationCurrencies = [
    { code: 'THB', name: 'Thai Baht', flag: '🇹🇭' },
    { code: 'PHP', name: 'Philippine Peso', flag: '🇵🇭' },
    { code: 'VND', name: 'Vietnamese Dong', flag: '🇻🇳' },
  ];

  // Base market rate (mid-market rate)
  const baseMarketRate = 31.44;
  
  // 3% higher rate for 3dotpay
  const rateBoost = 1.03;

  // Provider configurations with base rates and fees
  const providerConfigs = [
    {
      provider: '3dotpay',
      supportsQR: true,
      rateMultiplier: rateBoost, // 3% better than market
      feePercent: -1, // 1% cashback (negative fee)
      feeNote: '1% cashback',
      isCheapest: true
    },
    {
      provider: 'Wise',
      supportsQR: false,
      rateMultiplier: 0.994, // Slightly below market
      feePercent: 1.75, // 1.75% fee
      feeNote: '',
      isCheapest: false
    },
    {
      provider: 'Revolut',
      supportsQR: false,
      rateMultiplier: 0.990, // Below market
      feePercent: 2.0, // 2% fee
      feeNote: '',
      isCheapest: false
    },
    {
      provider: 'Cash ATM',
      supportsQR: false,
      rateMultiplier: 0.985, // Worst rate
      feePercent: 1.59, // ATM fees
      feeNote: '',
      isCheapest: false
    }
  ];

  // Calculate rates and spending power dynamically
  const rateComparison = useMemo(() => {
    const calculated = providerConfigs.map(config => {
      const rate = baseMarketRate * config.rateMultiplier;
      const fees = config.feePercent < 0 
        ? (amount * Math.abs(config.feePercent) / 100) * -1 // Cashback
        : amount * config.feePercent / 100; // Fee
      
      // Spending power calculation
      let spendingPower;
      if (config.feePercent < 0) {
        // For cashback: amount * rate + cashback value in THB
        spendingPower = (amount * rate) + (Math.abs(fees) * rate);
      } else {
        // For fees: (amount - fees) * rate
        spendingPower = (amount - fees) * rate;
      }

      return {
        ...config,
        rate,
        fees,
        spendingPower
      };
    });

    // Find the highest spending power (3dotpay)
    const maxSpendingPower = Math.max(...calculated.map(p => p.spendingPower));

    // Calculate savings for each provider
    return calculated.map(provider => ({
      ...provider,
      savings: provider.isCheapest ? null : maxSpendingPower - provider.spendingPower
    }));
  }, [amount]);

  return (
    <section id="rates" className="py-24 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            COMPARE <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">RATES</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get the full picture before you pay with side-by-side rates, fees, and total value.
          </p>
        </div>

        {/* Currency Selector */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4">
            <span className="text-gray-400 text-sm">You deposit</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{currencies.find(c => c.code === fromCurrency)?.flag}</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value) || 0)}
                className="w-24 bg-transparent text-white text-xl font-semibold outline-none"
              />
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="bg-transparent text-white font-medium cursor-pointer outline-none"
              >
                {currencies.map((c) => (
                  <option key={c.code} value={c.code} className="bg-gray-900">
                    {c.code}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-teal-400" />
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4">
            <span className="text-gray-400 text-sm">Spending in</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{destinationCurrencies.find(c => c.code === toCurrency)?.flag}</span>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="bg-transparent text-white font-medium cursor-pointer outline-none"
              >
                {destinationCurrencies.map((c) => (
                  <option key={c.code} value={c.code} className="bg-gray-900">
                    {c.code} ({c.name})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm">
          {/* Table Header */}
          <div className="grid grid-cols-5 gap-4 p-4 bg-white/5 border-b border-white/10 text-sm font-medium text-gray-400">
            <div>Provider</div>
            <div className="text-center">Supports QR?</div>
            <div className="text-center">Exchange Rate</div>
            <div className="text-center">Fees</div>
            <div className="text-right">Spending Power</div>
          </div>

          {/* Table Rows */}
          {rateComparison.map((provider, index) => (
            <div
              key={provider.provider}
              className={`grid grid-cols-5 gap-4 p-4 items-center transition-colors ${
                provider.isCheapest
                  ? 'bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border-l-4 border-teal-500'
                  : 'hover:bg-white/5'
              } ${index !== rateComparison.length - 1 ? 'border-b border-white/10' : ''}`}
            >
              {/* Provider */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  provider.provider === '3dotpay'
                    ? 'bg-gradient-to-br from-teal-400 to-cyan-500'
                    : 'bg-white/10'
                }`}>
                  <span className={`font-bold text-sm ${
                    provider.provider === '3dotpay' ? 'text-black' : 'text-white'
                  }`}>
                    {provider.provider.charAt(0)}
                  </span>
                </div>
                <span className="text-white font-medium">{provider.provider}</span>
              </div>

              {/* QR Support */}
              <div className="text-center">
                {provider.supportsQR ? (
                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-teal-500/20 rounded-full">
                    <Check className="w-4 h-4 text-teal-400" />
                    <span className="text-teal-400 text-sm">99%</span>
                  </div>
                ) : (
                  <X className="w-5 h-5 text-gray-500 mx-auto" />
                )}
              </div>

              {/* Rate */}
              <div className="text-center">
                <span className="text-white font-medium">{provider.rate.toFixed(4)}</span>
              </div>

              {/* Fees */}
              <div className="text-center">
                <span className={`font-medium ${
                  provider.fees < 0 ? 'text-teal-400' : 'text-white'
                }`}>
                  {provider.fees < 0 
                    ? `-$${Math.abs(provider.fees).toFixed(2)}` 
                    : `$${provider.fees.toFixed(2)}`
                  }
                </span>
                {provider.feeNote && (
                  <span className="block text-xs text-gray-500">{provider.feeNote}</span>
                )}
              </div>

              {/* Spending Power */}
              <div className="text-right">
                <span className={`font-semibold ${
                  provider.isCheapest ? 'text-teal-400' : 'text-white'
                }`}>
                  ฿{provider.spendingPower.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                {provider.isCheapest ? (
                  <span className="block text-xs text-teal-400 font-medium">Cheapest</span>
                ) : (
                  <span className="block text-xs text-gray-500">
                    -{provider.savings?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} THB
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          * Rates are indicative and updated in real-time. Actual rates may vary.
        </p>
      </div>
    </section>
  );
};

export default RateComparisonSection;
