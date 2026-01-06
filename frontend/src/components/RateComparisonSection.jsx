import React, { useState, useEffect, useMemo } from 'react';
import { Check, X, TrendingUp, RefreshCw, Loader2 } from 'lucide-react';

const RateComparisonSection = () => {
  const [amount, setAmount] = useState(500);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('THB');
  const [exchangeRates, setExchangeRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [error, setError] = useState(null);

  const currencies = [
    { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
    { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
    { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
  ];

  const destinationCurrencies = [
    { code: 'THB', name: 'Thai Baht', flag: '🇹🇭', symbol: '฿' },
    { code: 'PHP', name: 'Philippine Peso', flag: '🇵🇭', symbol: '₱' },
    { code: 'VND', name: 'Vietnamese Dong', flag: '🇻🇳', symbol: '₫' },
    { code: 'KHR', name: 'Cambodian Riel', flag: '🇰🇭', symbol: '៛' },
    { code: 'MYR', name: 'Malaysian Ringgit', flag: '🇲🇾', symbol: 'RM' },
    { code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬', symbol: 'S$' },
  ];

  // Fetch exchange rates from API
  const fetchExchangeRates = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Using exchangerate-api.com free tier (no key required for basic usage)
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch exchange rates');
      }
      
      const data = await response.json();
      setExchangeRates(data.rates);
      setLastUpdated(new Date().toLocaleTimeString());
    } catch (err) {
      console.error('Error fetching rates:', err);
      setError('Unable to fetch live rates. Using cached rates.');
      // Fallback rates if API fails
      setExchangeRates({
        THB: 33.50,
        PHP: 56.20,
        VND: 24500,
        KHR: 4100,
        MYR: 4.45,
        SGD: 1.34,
        USD: 1,
        GBP: 0.79,
        EUR: 0.92
      });
    } finally {
      setLoading(false);
    }
  };

  // Fetch rates on component mount and when source currency changes
  useEffect(() => {
    fetchExchangeRates();
    
    // Auto-refresh every 5 minutes
    const interval = setInterval(fetchExchangeRates, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fromCurrency]);

  // Get the base market rate for the selected currency pair
  const baseMarketRate = exchangeRates[toCurrency] || 0;
  
  // 3% higher rate for 3dotpay
  const rateBoost = 1.03;

  // Get currency symbol
  const getCurrencySymbol = (code) => {
    const currency = destinationCurrencies.find(c => c.code === code);
    return currency?.symbol || code;
  };

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
    if (!baseMarketRate) return [];

    const calculated = providerConfigs.map(config => {
      // Round rate to 2 decimal places
      const rate = Math.round(baseMarketRate * config.rateMultiplier * 100) / 100;
      const fees = config.feePercent < 0 
        ? (amount * Math.abs(config.feePercent) / 100) * -1 // Cashback
        : amount * config.feePercent / 100; // Fee
      
      // Spending power calculation
      let spendingPower;
      if (config.feePercent < 0) {
        // For cashback: amount * rate + cashback value in local currency
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
  }, [amount, baseMarketRate, toCurrency]);

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
          
          {/* Live Rate Indicator */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {loading ? (
              <Loader2 className="w-4 h-4 text-teal-400 animate-spin" />
            ) : (
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            )}
            <span className="text-gray-500 text-sm">
              {loading ? 'Fetching live rates...' : `Live rates • Updated ${lastUpdated}`}
            </span>
            <button 
              onClick={fetchExchangeRates}
              className="p-1 hover:bg-white/10 rounded-full transition-colors"
              title="Refresh rates"
            >
              <RefreshCw className={`w-4 h-4 text-gray-500 hover:text-teal-400 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
          {error && (
            <p className="text-yellow-500 text-sm mt-2">{error}</p>
          )}
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

        {/* Current Rate Display */}
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm">Mid-market rate</p>
          <p className="text-white text-2xl font-bold">
            1 {fromCurrency} = {getCurrencySymbol(toCurrency)}{baseMarketRate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 })} {toCurrency}
          </p>
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

          {/* Loading State */}
          {loading && rateComparison.length === 0 && (
            <div className="p-8 text-center">
              <Loader2 className="w-8 h-8 text-teal-400 animate-spin mx-auto mb-4" />
              <p className="text-gray-400">Loading exchange rates...</p>
            </div>
          )}

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
                <span className="text-white font-medium">
                  {provider.rate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
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
                  {getCurrencySymbol(toCurrency)}{provider.spendingPower.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                {provider.isCheapest ? (
                  <span className="block text-xs text-teal-400 font-medium">Cheapest</span>
                ) : (
                  <span className="block text-xs text-gray-500">
                    -{getCurrencySymbol(toCurrency)}{provider.savings?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          * Live rates from exchangerate-api.com. 3dotpay offers 3% better rates than mid-market.
        </p>
      </div>
    </section>
  );
};

export default RateComparisonSection;
