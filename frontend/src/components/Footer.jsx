import React, { useState } from 'react';
import { Twitter, Instagram, Linkedin, MapPin, Globe, ChevronDown, ChevronUp, X } from 'lucide-react';

const Footer = () => {
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showHelpEmail, setShowHelpEmail] = useState(false);
  const [showContactEmail, setShowContactEmail] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);

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

      {/* Terms of Service Full Screen Modal */}
      {showTermsOfService && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg overflow-y-auto">
          <div className="min-h-screen">
            {/* Close Button */}
            <button
              onClick={() => setShowTermsOfService(false)}
              className="fixed top-6 right-6 z-[101] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Terms of Service Content */}
            <div className="max-w-4xl mx-auto px-6 py-20">
              <div className="bg-gray-900/50 border border-white/10 rounded-3xl p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  3DotPay Global — Terms of Service
                </h1>
                <p className="text-teal-400 mb-8">Version 1.0 · January 2026</p>

                <div className="space-y-8 text-gray-300">
                  {/* Section 1 */}
                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
                    <p className="mb-4 leading-relaxed">
                      These Terms of Service ("Terms") govern your use of the 3DotPay mobile application, website, and related services ("Services"). The Services are operated by 3DotPay Global Pte. Ltd., a company registered in Singapore ("3DotPay," "we," "us," or "our").
                    </p>
                    <p className="mb-4 leading-relaxed">
                      By accessing or using the Services, you agree to these Terms. If you do not agree, you must stop using the Services.
                    </p>
                    <p className="mb-4 leading-relaxed">
                      3DotPay is a payment platform that enables users to make payments using stablecoins onchain and, where supported, through connected payment networks via licensed third-party partners. 3DotPay does not hold user funds, execute transactions on behalf of users, or provide custodial or money transmission services. It is not a bank or other regulated financial entity. At no time does 3DotPay have possession, custody, control, or authority over user crypto-assets or fiat funds, whether directly or indirectly.
                    </p>
                    <p className="leading-relaxed">
                      Any regulated activities, such as currency conversion or settlement into traditional payment networks, are performed solely by licensed third-party partners under their own regulatory authorisations. 3DotPay acts solely as a technology provider connecting users to such partners and does not itself engage in regulated activity.
                    </p>
                  </section>

                  {/* Section 2 */}
                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4">2. Eligibility</h2>
                    <p className="leading-relaxed">
                      You must be at least 18 years old (or the age of majority in your jurisdiction) and legally capable of entering binding agreements. Certain features may require identity verification to comply with requirements set by third-party providers or applicable laws.
                    </p>
                  </section>

                  {/* Section 3 */}
                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4">3. Account and Wallet</h2>
                    <p className="mb-4 leading-relaxed">
                      When you create an account, 3DotPay generates a self-custodial wallet through our technology partner. You remain the sole owner and controller of that wallet. 3DotPay never has access to your private keys or funds.
                    </p>
                    <p className="leading-relaxed">
                      You are solely responsible for securing your wallet and recovery credentials. Loss of access may result in permanent loss of assets, and 3DotPay cannot recover them.
                    </p>
                  </section>

                  {/* Section 4 */}
                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4">4. Location of Funds</h2>
                    <p className="leading-relaxed">
                      3DotPay never holds user funds. All crypto-assets remain either (i) under your exclusive control in your self-custodial wallet, or (ii) under the custody of an independent third-party provider once transferred by you.
                    </p>
                  </section>

                  {/* Section 5 */}
                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4">5. Payments</h2>
                    <p className="mb-4 leading-relaxed">
                      3DotPay enables onchain payments from your self-custodial wallet. For payments settling into supported local or traditional payment networks, the Services connect to independent licensed third-party providers that handle conversion, settlement, and compliance. 3DotPay does not receive, hold, or process funds at any point.
                    </p>
                    <p className="mb-4 leading-relaxed">
                      When a payment is initiated into a supported network, funds are transferred directly to the provider's designated address. Settlement occurs between you and the provider. 3DotPay is not a counterparty, does not intermediate funds, and does not perform regulated financial activity.
                    </p>
                    <p className="mb-4 leading-relaxed">
                      Identity verification, where required, is facilitated technically by 3DotPay on behalf of the provider. All onboarding decisions, risk assessments, approvals, suspensions, and terminations are made exclusively by the third-party provider.
                    </p>
                    <p className="mb-4 leading-relaxed">
                      Provider-specific terms, limits, processing times, exchange rates, fees, and refund processes vary. The total amount shown in a payment quote includes all applicable provider fees or rates.
                    </p>
                    <p className="mb-4 leading-relaxed">
                      Use of settlement features may require acceptance of the provider's terms. 3DotPay does not control these terms and is not responsible for provider availability or performance.
                    </p>
                    <p className="leading-relaxed">
                      Any disputes, losses, delays, refunds, or claims related to settlement must be directed exclusively to the relevant third-party provider.
                    </p>
                  </section>

                  {/* Section 6 */}
                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4">6. Fees</h2>
                    <p className="mb-4 leading-relaxed">
                      3DotPay does not charge fees for same-token payments. A convenience fee may apply for token swaps or conversions.
                    </p>
                    <p className="leading-relaxed">
                      Third-party providers may apply their own fees, rates, or spreads for settlement services, which are included in the quote shown before confirmation. 3DotPay does not add additional fees beyond the quoted amount.
                    </p>
                  </section>

                  {/* Section 7 */}
                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4">7. Acceptable Use</h2>
                    <p className="mb-4 leading-relaxed">You agree not to use the Services to:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex gap-2">
                        <span className="text-teal-400">•</span>
                        <span>Violate any applicable law, regulation, or sanction;</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-teal-400">•</span>
                        <span>Engage in fraud, scams, or unlawful activity;</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-teal-400">•</span>
                        <span>Interfere with or disrupt the Services;</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-teal-400">•</span>
                        <span>Attempt unauthorised access to the Services or related systems;</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-teal-400">•</span>
                        <span>Infringe intellectual property rights.</span>
                      </li>
                    </ul>
                    <p className="leading-relaxed">
                      3DotPay may suspend or restrict access for misuse or non-compliance.
                    </p>
                  </section>

                  {/* Section 8 */}
                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4">8. Third-Party Services</h2>
                    <p className="mb-4 leading-relaxed">
                      The Services rely on independent third-party providers for wallet infrastructure, identity verification, and settlement. These providers operate under their own terms and regulatory requirements. 3DotPay does not control them and is not responsible for their availability, performance, or compliance.
                    </p>
                    <p className="leading-relaxed">
                      Interactions with third-party services are at your own risk and subject to their terms.
                    </p>
                  </section>

                  {/* Section 9 */}
                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4">9. No Agency</h2>
                    <p className="leading-relaxed">
                      Use of the Services does not create any agency, partnership, joint venture, or fiduciary relationship between you and 3DotPay, or between 3DotPay and any third-party provider.
                    </p>
                  </section>

                  {/* Section 10 */}
                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4">10. Disclaimers</h2>
                    <p className="mb-4 leading-relaxed">
                      The Services are provided "as is" and "as available" without warranties of any kind. 3DotPay does not guarantee uninterrupted or error-free operation and provides no financial, investment, legal, or tax advice.
                    </p>
                    <p className="mb-4 leading-relaxed">
                      All settlement-related obligations and risks lie solely with the third-party provider. 3DotPay is not responsible for provider performance, rates, refunds, or availability.
                    </p>
                    <p className="leading-relaxed">
                      You are responsible for ensuring your use complies with laws in your jurisdiction.
                    </p>
                  </section>

                  {/* Section 11 */}
                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4">11. Limitation of Liability</h2>
                    <p className="mb-4 leading-relaxed">
                      To the fullest extent permitted by law, 3DotPay and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of funds, profits, or data, arising from use of the Services or third-party provider actions/omissions.
                    </p>
                    <p className="leading-relaxed">
                      Nothing in these Terms excludes liability that cannot be limited or excluded under applicable law.
                    </p>
                  </section>

                  {/* Section 12 */}
                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4">12. Privacy</h2>
                    <p className="leading-relaxed">
                      Your use of the Services is subject to our Privacy Policy, available in the app and on our website.
                    </p>
                  </section>

                  {/* Section 13 */}
                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4">13. Termination</h2>
                    <p className="leading-relaxed">
                      You may delete your account at any time. We may suspend or terminate access for breach of these Terms or unlawful use. Termination does not affect your control over your wallet or assets.
                    </p>
                  </section>

                  {/* Section 14 */}
                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4">14. Intellectual Property</h2>
                    <p className="leading-relaxed">
                      All trademarks, software, and content associated with 3DotPay are owned by 3DotPay Global Pte. Ltd. or its licensors. You may not copy, modify, or redistribute them without written permission.
                    </p>
                  </section>

                  {/* Section 15 */}
                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4">15. Governing Law and Jurisdiction</h2>
                    <p className="leading-relaxed">
                      These Terms are governed by the laws of Singapore, without regard to conflict of law principles. Any disputes shall be subject to the non-exclusive jurisdiction of the courts of Singapore, subject to mandatory local consumer-protection laws.
                    </p>
                  </section>

                  {/* Section 16 */}
                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4">16. Changes to Terms</h2>
                    <p className="leading-relaxed">
                      We may update these Terms periodically. Material changes will be notified in-app, on our website, or via email. Continued use constitutes acceptance of the revised Terms.
                    </p>
                  </section>

                  {/* Section 17 */}
                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4">17. Contact</h2>
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
                    onClick={() => setShowTermsOfService(false)}
                    className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-black font-semibold rounded-full hover:from-teal-400 hover:to-cyan-400 transition-all"
                  >
                    Close Terms of Service
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
                <li>
                  <button 
                    type="button"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm cursor-pointer select-none"
                    onClick={() => setShowTermsOfService(true)}
                  >
                    Terms of Service
                  </button>
                </li>
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
