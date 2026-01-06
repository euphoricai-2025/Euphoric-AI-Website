import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Mail, Globe } from 'lucide-react';

const RefundPolicy = () => {
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
                <CreditCard className="w-8 h-8 text-brand-teal" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900"
            >
              Refunds and Cancellations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              This policy explains our subscription billing and refund terms for Euphoric AI services.
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

      {/* Refund Policy Content */}
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
                  <strong>Euphoric Innovations LLC</strong>, operating under the brand <strong>Euphoric AI</strong> ("Euphoric," "we," "us," or "our"), provides AI-powered voice and conversational services on a monthly subscription basis. This Refund Policy outlines the terms and conditions regarding billing, subscription renewals, cancellations, and refunds.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By subscribing to our services, you acknowledge and agree to the terms set forth in this Refund Policy. Please read this policy carefully before making a purchase.
                </p>
              </div>

              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Subscription Model</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Euphoric AI operates on a <strong>monthly subscription basis</strong>. All subscription plans are billed in advance on a recurring monthly cycle unless you cancel your subscription.
                </p>
                <div className="bg-brand-teal/5 border-l-4 border-brand-teal p-4 rounded">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Key Points:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>Subscriptions automatically renew each month on your billing date</li>
                    <li>You will be charged the monthly subscription fee in advance</li>
                    <li>Your subscription remains active until you cancel it</li>
                    <li>No long-term contracts or commitments required</li>
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. No Refund Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>All subscription payments are non-refundable.</strong> Once you have been charged for a monthly subscription period, we do not provide refunds, credits, or prorated amounts for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Partial months of service</li>
                  <li>Unused calling minutes or features</li>
                  <li>Subscription downgrades or plan changes</li>
                  <li>Service cancellations during an active billing period</li>
                  <li>Any reason related to dissatisfaction with the service</li>
                </ul>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mt-4">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Important:</strong> If you cancel your subscription, you will retain access to the service until the end of your current billing period. However, no refund will be issued for the remaining days of that period.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Auto-Renewal</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your subscription will <strong>automatically renew</strong> at the end of each billing cycle unless you cancel it before the renewal date. You authorize Euphoric AI to charge your payment method on file for the applicable subscription fee.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Renewal Process:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>Subscriptions renew automatically on the same date each month</li>
                      <li>You will be charged the then-current subscription price</li>
                      <li>We may send you a reminder email before renewal (not guaranteed)</li>
                      <li>It is your responsibility to cancel before the renewal date if you do not wish to continue</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Payment Method:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      You must maintain a valid payment method on file. If your payment fails, we may suspend your service until payment is received. Failure to update payment information may result in service interruption.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cancellation Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may cancel your subscription at any time through your account dashboard or by contacting our support team. Cancellations take effect at the end of your current billing period.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">How to Cancel:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>Log in to your Euphoric AI dashboard</li>
                      <li>Navigate to Account Settings → Billing</li>
                      <li>Click "Cancel Subscription" and follow the prompts</li>
                      <li>Alternatively, contact us at <a href="mailto:hello@euphoricai.io" className="text-brand-teal hover:underline">hello@euphoricai.io</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">After Cancellation:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>Your service remains active until the end of the current billing period</li>
                      <li>You will not be charged for subsequent months</li>
                      <li>No refunds will be issued for the remainder of the current period</li>
                      <li>Your data may be retained for a limited time as per our Privacy Policy</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Plan Changes & Downgrades</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may upgrade or downgrade your subscription plan at any time. Changes to your plan will take effect as follows:
                </p>
                <div className="space-y-3">
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Upgrades:</strong> Take effect immediately. You will be charged the prorated difference for the remainder of your current billing period, and the new rate will apply on your next renewal.
                    </p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Downgrades:</strong> Take effect at the end of your current billing period. No refunds or credits are provided for the difference between plans during the current period.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Usage Charges</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In addition to your monthly subscription fee, you may incur usage charges for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Overage Minutes:</strong> Calling minutes exceeding your plan's included amount are billed at $0.16 per minute</li>
                  <li><strong>Telephony Services:</strong> Phone number provisioning and carrier charges</li>
                  <li><strong>Additional Features:</strong> Any add-on services not included in your base plan</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Usage charges are billed separately and are also <strong>non-refundable</strong>. You are responsible for monitoring your usage to avoid unexpected charges.
                </p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Billing Disputes</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you believe you have been incorrectly charged or have questions about your billing, please contact our support team within <strong>30 days</strong> of the charge:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                  <div className="font-semibold text-gray-900">Contact Information:</div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Mail className="w-4 h-4" />
                    <span>Email: <a href="mailto:hello@euphoricai.io" className="text-brand-teal hover:underline">hello@euphoricai.io</a></span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Globe className="w-4 h-4" />
                    <span>Website: <a href="https://www.euphoricai.io" className="text-brand-teal hover:underline">www.euphoricai.io</a></span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We will investigate all billing disputes in good faith. However, please note that our no-refund policy applies unless the charge was made in error due to a technical issue on our end.
                </p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Exceptions</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Euphoric AI reserves the right to issue refunds on a case-by-case basis at our sole discretion in exceptional circumstances, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Technical errors resulting in duplicate charges</li>
                  <li>Service outages lasting more than 72 consecutive hours (prorated credit may be offered)</li>
                  <li>Unauthorized transactions (subject to verification and fraud investigation)</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Any exceptions to this policy do not create an obligation for future refunds or establish a precedent.
                </p>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Service Termination by Euphoric AI</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We reserve the right to suspend or terminate your account if:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>You violate our Terms and Conditions or Acceptable Use Policy</li>
                  <li>Your payment method fails and you do not update it within the grace period</li>
                  <li>Your usage is deemed harmful, fraudulent, or illegal</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  In cases of termination due to policy violations, <strong>no refunds will be issued</strong> for the current billing period or any prepaid services.
                </p>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Refund Policy from time to time to reflect changes in our services or legal requirements. Any changes will be posted on this page with an updated effective date. Continued use of our services after changes constitutes acceptance of the revised policy.
                </p>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions or concerns about this Refund Policy, please contact us:
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
                  <strong>Effective Date:</strong> 04 September 2025
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;
