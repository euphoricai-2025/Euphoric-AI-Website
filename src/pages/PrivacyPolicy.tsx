import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, Globe } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-16 bg-euphoric-surface min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-6"
            >
              <div className="w-16 h-16 rounded-full bg-brand-teal/10 flex items-center justify-center">
                <Shield className="w-8 h-8 text-brand-teal" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-sm text-gray-500"
            >
              <strong>Effective Date:</strong> 04 September 2025
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass p-8 md:p-12 space-y-8"
            >
              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  This Privacy Policy governs the information practices of <strong>Euphoric Innovations LLC</strong>, operating under the brand <strong>Euphoric AI</strong> ("Euphoric," "we," "us," "our"). It explains the types of data we collect, how we use it, and your rights in relation to your personal information when using our websites, digital platforms, and services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Euphoric AI builds and delivers AI-powered solutions, including voice and conversational AI services, for businesses worldwide. We process data in accordance with applicable laws, industry standards, and best practices to ensure security, transparency, and accountability.
                </p>
              </div>

              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Purpose & Scope</h2>
                <p className="text-gray-700 leading-relaxed mb-4">This Privacy Policy applies to information collected through:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Our websites and online platforms</li>
                  <li>Our AI-powered services and APIs</li>
                  <li>Email, phone, or other offline interactions</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Where we process information on behalf of our business customers (for example, when their clients interact with AI agents), the use of that information is primarily governed by the customer's own privacy policy and agreements with Euphoric.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Collect Data</h2>
                <p className="text-gray-700 leading-relaxed mb-4">We may collect data in different ways depending on how you interact with our services:</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">a. System & Technical Data</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>Device type, operating system, IP address, browser type, and related technical details.</li>
                      <li>Collected automatically to improve service performance, security, and analytics.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">b. User-Generated Data</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>Information you voluntarily provide (e.g., account details, uploaded content, customer interactions).</li>
                      <li>Interaction data when using AI services (calls, chat transcripts, responses).</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">c. Cookies & Tracking</h3>
                    <p className="text-gray-700 ml-4">
                      Cookies, web beacons, and similar technologies may be used for analytics, personalization, and service optimization. (See our Cookie Policy for details).
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information We Collect & Store</h2>
                <p className="text-gray-700 leading-relaxed mb-4">Personal data may include:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Location</li>
                  <li>IP address</li>
                  <li>Business information (company name, role, etc.)</li>
                  <li>Usage data from AI service interactions</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We do not intentionally collect sensitive personal information (such as health, biometric, or racial/ethnic data) unless required for a specific service and only with your explicit consent.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How We Use Your Data</h2>
                <p className="text-gray-700 leading-relaxed mb-4">We may use personal data for purposes including:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Delivering and improving our services</li>
                  <li>Providing login access and account management</li>
                  <li>Billing, subscription management, and telephony usage tracking</li>
                  <li>Customer support and communication</li>
                  <li>Business intelligence, analytics, and product optimization</li>
                  <li>Marketing (with opt-out options)</li>
                  <li>Legal compliance and responding to lawful requests</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Who Has Access Internally</h2>
                <p className="text-gray-700 leading-relaxed">
                  Access within Euphoric AI is restricted to employees and contractors who need it to perform their duties (e.g., support, development, billing). Access is granted on a strict "need-to-know" basis.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Sharing Data with Third Parties</h2>
                <p className="text-gray-700 leading-relaxed mb-4">We may share your information with:</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">a. Processors & Service Providers</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>For hosting, analytics, payment processing, communications, telephony services, and technical support.</li>
                      <li>All partners are bound by contracts to handle data securely and only for authorized purposes.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">b. Legal Authorities</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>If required by law, regulation, or legal process.</li>
                      <li>To enforce our rights, prevent fraud, or protect users' safety.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">c. Business Transfers</h3>
                    <p className="text-gray-700 ml-4">
                      In the event of a merger, acquisition, or asset transfer, your data may be part of the transferred assets.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
                <p className="text-gray-700 leading-relaxed mb-4">We retain personal data only as long as necessary for:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Service delivery and customer relationship management</li>
                  <li>Compliance with legal, tax, or accounting obligations</li>
                  <li>Fraud detection and security</li>
                  <li>Customer opt-out or deletion requests</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  When no longer needed, we delete, anonymize, or aggregate data to prevent re-identification.
                </p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement administrative, technical, and organizational safeguards to protect data from unauthorized access, loss, misuse, or disclosure. While we work to maintain high security standards, no system is 100% secure, and users must also take responsibility for protecting their account credentials.
                </p>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">Depending on where you live, you may have specific privacy rights:</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">a. Under GDPR (EU/UK users):</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>Right to access, rectification, and deletion</li>
                      <li>Right to restrict or object to processing</li>
                      <li>Right to data portability</li>
                      <li>Right to opt-out of marketing</li>
                      <li>Right to withdraw consent for sensitive data processing</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">b. Under CCPA (California users):</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>Right to know what data we collect</li>
                      <li>Right to request deletion</li>
                      <li>Right to opt out of the sale of personal data (we do not sell personal data)</li>
                      <li>Right to equal service without discrimination</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mt-4">
                  To exercise your rights, contact us at <a href="mailto:hello@euphoricai.io" className="text-brand-teal hover:underline">hello@euphoricai.io</a>.
                </p>
              </div>

              {/* Sections 10-14 */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. International Data Transfers</h2>
                  <p className="text-gray-700 leading-relaxed">
                    As a U.S.-registered company, we may transfer data across borders (including the U.S., EU, UAE, India, and other regions where our clients operate). We ensure appropriate safeguards are in place, such as contractual data protection agreements and compliance with applicable frameworks.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Children's Data</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our services are not directed to children under the age of 16. We do not knowingly collect personal information from children. If such data is inadvertently collected, we will delete it promptly.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Third-Party Websites</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our services may contain links to third-party websites. This Privacy Policy does not apply to those websites, and we are not responsible for their privacy practices. Please review their policies separately.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to this Policy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may update this Privacy Policy periodically. Material changes will be communicated via email or platform notices. The "Last Updated" date at the bottom of this document reflects the latest revision.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Us</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have questions or concerns about this Privacy Policy or our data practices, you can contact us at:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                    <div className="font-semibold text-gray-900">Euphoric Innovations LLC</div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail className="w-4 h-4" />
                      <span>Email: <a href="mailto:hello@euphoricai.io" className="text-brand-teal hover:underline">hello@euphoricai.io</a></span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Globe className="w-4 h-4" />
                      <span>Website: <a href="https://www.euphoricai.io" className="text-brand-teal hover:underline">www.euphoricai.io</a></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Last Updated */}
              <div className="border-t border-gray-200 pt-8 text-center">
                <p className="text-sm text-gray-500">
                  <strong>Last Updated:</strong> 04 September 2025
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;