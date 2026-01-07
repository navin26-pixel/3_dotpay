import React, { useState } from 'react';
import { Twitter, Instagram, Linkedin, MapPin, Globe, ChevronDown, ChevronUp, X } from 'lucide-react';

const Footer = () => {
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showHelpEmail, setShowHelpEmail] = useState(false);
  const [showContactEmail, setShowContactEmail] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Privacy Policy Full Screen Modal */}
      {showPrivacyPolicy && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg overflow-y-auto">
          <div className="min-h-screen">
            {/* Close Button */}
            <button
              onClick={() => setShowPrivacyPolicy(false)}
              className="fixed top-6 right-6 z-[101] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Privacy Policy Content */}
            <div className="max-w-4xl mx-auto px-6 py-20">
              <div className="bg-gray-900/50 border border-white/10 rounded-3xl p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  3DotPay Global — Privacy Policy
                </h1>
                <p className="text-teal-400 mb-8">Version 1.0 · January 2026</p>

                <div className="space-y-8 text-gray-300">
                  {/* Section 1 */}
                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
                    <p className="mb-4 leading-relaxed">
                      This Privacy Policy explains how 3DotPay Global Pte. Ltd., a company registered in Singapore ("3DotPay," "we," "us," or "our"), collects, uses, discloses, and protects your personal data when you use the 3DotPay mobile application, website, and related services ("Services").
                    </p>
                    <p className="mb-4 leading-relaxed">
                      By using the Services, you agree to this Policy in accordance with Singapore's Personal Data Protection Act 2012 (PDPA).
                    </p>
                    <p className="mb-4 leading-relaxed">
                      3DotPay enables payments using stablecoins onchain and, where supported, via licensed third-party payment networks.
                    </p>
                    <p className="leading-relaxed">
                      We have appointed a Data Protection Officer (DPO) for PDPA compliance (contact details in Section 9).
                    </p>
                  </section>

                  {/* Section 2 */}
                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4">2. Information We Collect</h2>
                    <ul className="space-y-3">
                      <li className="flex gap-2">
                        <span className="text-teal-400">•</span>
                        <span><strong className="text-white">Account Information:</strong> Email address and, where applicable, display name or identifier.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-teal-400">•</span>
                        <span><strong className="text-white">Identity and Verification Data:</strong> Limited data collected or shared with licensed third-party providers for identity verification where required by law or for higher limits.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-teal-400">•</span>
                        <span><strong className="text-white">Payment and Transaction Data:</strong> Transaction identifiers, amounts, currencies, memos, and counterparties to operate the Services, prevent fraud, and meet legal obligations.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-teal-400">•</span>
                        <span><strong className="text-white">Technical and Usage Data:</strong> Device type, OS, IP address, app version, usage metrics, crash logs, and approximate location (for routing, relevant options, and compliance).</span>
                      </li>
                    </ul>
                  </section>

                  {/* Section 3 */}
                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
                    <p className="mb-4 leading-relaxed">We use personal data only for reasonable purposes, including to:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex gap-2">
                        <span className="text-teal-400">•</span>
                        <span>Provide and maintain the Services;</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-teal-400">•</span>
                        <span>Process payments via third-party partners;</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-teal-400">•</span>
                        <span>Verify identity where required;</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-teal-400">•</span>
                        <span>Prevent fraud and misuse;</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-teal-400">•</span>
                        <span>Improve performance and user experience;</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-teal-400">•</span>
                        <span>Send service updates and support messages.</span>
                      </li>
                    </ul>
                    <p className="leading-relaxed">
                      Processing is based on consent, deemed consent, contractual necessity, legal obligations, or legitimate interests under the PDPA.
                    </p>
                  </section>

                  {/* Section 4 */}
                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4">4. Information Sharing</h2>
                    <p className="mb-4 leading-relaxed">We disclose personal data only as necessary and in compliance with the PDPA to:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex gap-2">
                        <span className="text-teal-400">•</span>
                        <span>Technology partners (wallet creation and authentication);</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-teal-400">•</span>
                        <span>Licensed payment partners (settlement and compliance);</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-teal-400">•</span>
                        <span>Verification providers (identity checks);</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-teal-400">•</span>
                        <span>Infrastructure/analytics providers (hosting and monitoring).</span>
                      </li>
                    </ul>
                    <p className="leading-relaxed">
                      We do not sell personal data. Recipients must protect it to PDPA-comparable standards.
                    </p>
                  </section>

                  {/* Section 5 */}
                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4">5. Data Storage and Security</h2>
                    <p className="mb-4 leading-relaxed">
                      We apply appropriate technical and organisational measures to secure your data against unauthorised access, loss, or misuse. No system is fully secure.
                    </p>
                    <p className="leading-relaxed">
                      Data is retained only as long as needed for the Services or legal requirements. You may request deletion, subject to legal obligations.
                    </p>
                  </section>

                  {/* Section 6 */}
                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4">6. Your Rights</h2>
                    <p className="mb-4 leading-relaxed">Under the PDPA, you may:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex gap-2">
                        <span className="text-teal-400">•</span>
                        <span>Access or correct your data;</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-teal-400">•</span>
                        <span>Withdraw consent (may affect Service use);</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-teal-400">•</span>
                        <span>Request details of past-year use/disclosure.</span>
                      </li>
                    </ul>
                    <p className="leading-relaxed">
                      Submit requests to our DPO (Section 9). We will verify identity and respond promptly.
                    </p>
                  </section>

                  {/* Section 7 */}
                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4">7. International Transfers</h2>
                    <p className="leading-relaxed">
                      Personal data may be transferred outside Singapore. We ensure recipients provide PDPA-comparable protection via enforceable obligations or approved mechanisms.
                    </p>
                  </section>

                  {/* Section 8 */}
                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4">8. Policy Updates</h2>
                    <p className="leading-relaxed">
                      We may update this Policy. Material changes will be notified in-app, on our website, or by email. Continued use constitutes acceptance.
                    </p>
                  </section>

                  {/* Section 9 */}
                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4">9. Contact</h2>
                    <p className="mb-4 leading-relaxed">
                      Contact our Data Protection Officer for queries or requests:
                    </p>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <p className="text-white font-semibold">3DotPay Global Pte. Ltd.</p>
                      <a href="mailto:info@3dotpay.com" className="text-teal-400 hover:text-teal-300 transition-colors">
                        info@3dotpay.com
                      </a>
                    </div>
                  </section>
                </div>

                {/* Close Button at Bottom */}
                <div className="mt-12 text-center">
                  <button
                    onClick={() => setShowPrivacyPolicy(false)}
                    className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-black font-semibold rounded-full hover:from-teal-400 hover:to-cyan-400 transition-all"
                  >
                    Close Privacy Policy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Links */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://customer-assets.emergentagent.com/job_threedotpay/artifacts/2z7vuqp7_3dotpay%20logo.jpeg" 
                  alt="3dotpay" 
                  className="h-10 w-auto rounded-lg"
                />
                <span className="text-white font-semibold text-xl">3dotpay</span>
              </div>
              <p className="text-gray-400 text-sm mb-6 max-w-xs">
                A global wallet to unlock Asia's local QR payment systems. Pay like a local, anywhere.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Twitter size={18} className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Instagram size={18} className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Linkedin size={18} className="text-white" />
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Countries</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Security</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="col-span-2 md:col-span-1">
              <button 
                type="button"
                className="text-white font-semibold mb-4 cursor-pointer flex items-center gap-2 hover:text-teal-400 transition-colors select-none"
                onClick={() => setShowAboutUs(!showAboutUs)}
              >
                About Us
                {showAboutUs ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {showAboutUs && (
                <p className="text-gray-400 text-sm leading-relaxed animate-fadeIn">
                  3DotPay is on a mission to make finance more open and inclusive. We connect digital money with traditional payments, allowing deposits into our e-wallet via stablecoins, bank transfers, and cards. This gives people everywhere—especially those who are underserved—real access to the global financial system through simple, practical payment solutions, including conversions to local currency for payments via local QR codes in SE Asia, P2P transfers, and QR code money remittances.
                </p>
              )}
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    type="button"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm cursor-pointer select-none flex items-center gap-1"
                    onClick={() => setShowHelpEmail(!showHelpEmail)}
                  >
                    Help Center
                    {showHelpEmail ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                  </button>
                  {showHelpEmail && (
                    <a href="mailto:Support@3dotpay.com" className="block text-teal-400 hover:text-teal-300 transition-colors text-sm animate-fadeIn mt-1">Support@3dotpay.com</a>
                  )}
                </li>
                <li>
                  <button 
                    type="button"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm cursor-pointer select-none flex items-center gap-1"
                    onClick={() => setShowContactEmail(!showContactEmail)}
                  >
                    Contact Us
                    {showContactEmail ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                  </button>
                  {showContactEmail && (
                    <a href="mailto:contact@3dotpay.com" className="block text-teal-400 hover:text-teal-300 transition-colors text-sm animate-fadeIn mt-1">contact@3dotpay.com</a>
                  )}
                </li>
                <li>
                  <button 
                    type="button"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm cursor-pointer select-none"
                    onClick={() => setShowPrivacyPolicy(true)}
                  >
                    Privacy Policy
                  </button>
                </li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 3dotpay Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <MapPin size={14} />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Globe size={14} />
                <span>English</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
