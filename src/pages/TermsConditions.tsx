import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail, Globe } from 'lucide-react';

const TermsConditions = () => {
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
                <FileText className="w-8 h-8 text-brand-teal" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900"
            >
              Terms and Conditions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              These terms govern your use of our AI voice agent services and platform.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-sm text-gray-500"
            >
              <strong>Effective Date:</strong> Date of Customer acceptance
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Content */}
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
                  This Agreement ("Terms") is entered into between <strong>Euphoric Innovations LLC</strong>, operating under the brand <strong>Euphoric AI</strong> ("Euphoric," "we," "us," or "our"), and the individual or entity ("Customer," "you," or "your") accessing or using our products and services (the "Services").
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By signing up, accessing, or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you are acting on behalf of a company, you represent and warrant that you are authorized to accept these Terms on behalf of that company. If you do not agree, do not use our Services. Persons under the age of 13 are not authorized to use our Services.
                </p>
              </div>

              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">Euphoric AI provides cloud-based artificial intelligence solutions including, but not limited to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Voice AI agents for sales, support, and customer engagement</li>
                  <li>Chat automation and conversational AI</li>
                  <li>APIs for call handling, number provisioning, and integrations</li>
                  <li>Dashboards, analytics, and customization tools</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We may expand or modify the Services at any time.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Fees & Payments</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Upfront Payment:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Customers are required to pay fees for subscriptions or service packages in advance at the time of purchase or renewal.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Telephony Usage:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      If Customer uses telephony services (e.g., phone numbers or minutes) provisioned under Euphoric's accounts, additional usage charges may apply. These will be billed post-usage, typically monthly, based on actual consumption.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Payment Method:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Customers must maintain a valid payment method on file for subscription renewals and telephony usage charges.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Billing Failure:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      If telephony usage charges cannot be collected, we may suspend number provisioning and outbound calling features until the outstanding balance is cleared.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Professional Services</h2>
                <p className="text-gray-700 leading-relaxed">
                  In addition to standard support, we may offer professional services such as consulting, implementation, optimization, and custom solutions. These services may require a separate agreement or additional fees.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use</h2>
                <p className="text-gray-700 leading-relaxed mb-4">You agree to use Euphoric AI's Services only for lawful, ethical, and authorized purposes. You may not:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Disrupt or attempt to disrupt the integrity of our systems or those of our partners.</li>
                  <li>Use Services for fraudulent, deceptive, or harmful activities.</li>
                  <li>Engage in harassment, abuse, defamation, or violations of privacy.</li>
                  <li>Misrepresent caller ID or impersonate individuals without authorization.</li>
                  <li>Use voices, scripts, or content that infringe intellectual property rights.</li>
                  <li>Handle personal data without consent or in violation of applicable privacy regulations.</li>
                  <li>Provide false or misleading information during account registration or usage.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We reserve the right to suspend or terminate accounts for violations of these rules.
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Compliance Responsibility</h2>
                <p className="text-gray-700 leading-relaxed">
                  While Euphoric AI provides the technology, Customers are solely responsible for ensuring their use of Services complies with local laws and regulations in the jurisdictions where they operate (e.g., data protection, telemarketing, call recording, or privacy laws).
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data & Privacy</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Customers remain the owners of their content.</li>
                  <li>By using our Services, you grant Euphoric a limited, non-exclusive license to process your data solely for delivering and improving Services.</li>
                  <li>We may aggregate and anonymize data to train and enhance AI models.</li>
                  <li>We will take commercially reasonable steps to secure data against unauthorized access.</li>
                </ul>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                  All intellectual property related to the Services—including software, designs, interfaces, trademarks, and brand elements—are owned by Euphoric Innovations LLC and its licensors. Customers are granted only a limited, non-transferable right to use the Services as permitted under these Terms.
                </p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Arbitration & Dispute Resolution</h2>
                <p className="text-gray-700 leading-relaxed">
                  Any disputes arising under these Terms shall first be attempted to be resolved amicably. If resolution is not possible, disputes shall be submitted to binding arbitration conducted by a neutral arbitrator under internationally recognized arbitration rules. The decision of the arbitrator shall be final and enforceable.
                </p>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to indemnify and hold harmless Euphoric Innovations LLC, its officers, employees, and partners from any claims, damages, liabilities, or expenses arising from your misuse of the Services, violation of these Terms, or breach of applicable law.
                </p>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Warranty Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed">
                  The Services are provided "as is" and "as available." Euphoric makes no warranties, express or implied, including but not limited to merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee uninterrupted or error-free operation of Services.
                </p>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  To the maximum extent permitted by law, Euphoric shall not be liable for indirect, incidental, or consequential damages, including loss of profits, goodwill, or data. Our aggregate liability shall not exceed the amount you paid for the Services in the twelve (12) months prior to the claim.
                </p>
              </div>

              {/* Section 12 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Termination</h2>
                <p className="text-gray-700 leading-relaxed mb-4">We may suspend or terminate Services if:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>You fail to pay telephony usage fees when due.</li>
                  <li>You violate these Terms or applicable laws.</li>
                  <li>Continued provision of Services is no longer feasible due to regulatory or operational reasons.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Upon termination, your right to access the Services ends immediately.
                </p>
              </div>

              {/* Section 13 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Publicity Rights</h2>
                <p className="text-gray-700 leading-relaxed">
                  You grant Euphoric permission to identify your company name and logo as a client in marketing materials unless otherwise agreed in writing.
                </p>
              </div>

              {/* Section 14 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update these Terms from time to time. Continued use of the Services after updates constitutes acceptance of the revised Terms.
                </p>
              </div>

              {/* Section 15 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For any questions or concerns, you can contact us at:
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

              {/* Effective Date */}
              <div className="border-t border-gray-200 pt-8 text-center">
                <p className="text-sm text-gray-500">
                  <strong>Effective Date:</strong> Date of Customer acceptance
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;