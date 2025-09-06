import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Calendar, Phone, UserCheck, ArrowRight, CheckCircle, TrendingUp, Clock, Shield } from 'lucide-react';

const HealthcareUseCase = () => {
  const useCases = [
    {
      icon: Calendar,
      title: 'Appointment Reminders',
      description: 'Reduce no-shows with automated appointment reminders, confirmations, and rescheduling assistance.',
      stats: 'Reduce no-shows by up to 60%',
      features: [
        'Multi-channel reminder delivery (voice, SMS, email)',
        'Customizable reminder schedules (24hrs, 48hrs, 1 week)',
        'Appointment confirmation and rescheduling',
        'Patient information updates',
        'Insurance verification reminders'
      ]
    },
    {
      icon: UserCheck,
      title: 'Patient Follow-ups',
      description: 'Ensure continuity of care with post-appointment follow-ups, medication reminders, and health monitoring.',
      stats: 'Improve patient outcomes by 40%',
      features: [
        'Post-discharge follow-up calls',
        'Medication adherence monitoring',
        'Symptom tracking and escalation',
        'Care plan compliance checks',
        'Patient satisfaction surveys'
      ]
    },
    {
      icon: Phone,
      title: 'Test Result Notifications',
      description: 'Deliver test results professionally and ensure patient comprehension with follow-up scheduling.',
      stats: 'Faster result delivery by 70%',
      features: [
        'HIPAA-compliant result delivery',
        'Patient comprehension verification',
        'Follow-up appointment scheduling',
        'Question and concern handling',
        'Provider notification system'
      ]
    }
  ];

  const industries = [
    { name: 'Hospitals & Health Systems', description: 'Large-scale patient communication and care coordination' },
    { name: 'Private Practice Clinics', description: 'Streamlined appointment management and patient follow-ups' },
    { name: 'Specialty Practices', description: 'Specialized care reminders and treatment compliance monitoring' },
    { name: 'Urgent Care Centers', description: 'Rapid patient communication and follow-up care' },
    { name: 'Mental Health Services', description: 'Sensitive patient outreach and therapy appointment management' },
    { name: 'Dental Practices', description: 'Appointment reminders and preventive care scheduling' }
  ];

  const testimonials = [
    {
      name: 'Dr. Jennifer Wu',
      role: 'Family Medicine Physician',
      company: 'Riverside Medical Center',
      content: 'AI CallAgent has dramatically reduced our no-show rates. Patients love the gentle reminders, and our staff can focus more on direct patient care.',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Mark Thompson',
      role: 'Practice Manager',
      company: 'Central Valley Clinic',
      content: 'The follow-up agent ensures no patient falls through the cracks. We\'ve seen improved medication compliance and better health outcomes across the board.',
      image: 'https://images.pexels.com/photos/6205509/pexels-photo-6205509.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="pt-16 bg-euphoric-surface min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="icon-badge-lg mx-auto mb-6"
            >
              <Heart className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-gray-900">Healthcare</span><br />
              <span className="text-euphoric-gradient">Use Cases</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Discover how healthcare organizations are using AI voice agents to improve patient care, reduce administrative burden, and enhance clinical outcomes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/signup"
                className="btn-gold inline-flex items-center justify-center px-8 py-3 text-base font-medium"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/healthcare"
                className="btn-glass inline-flex items-center justify-center px-8 py-3 text-base font-medium"
              >
                View Healthcare Solutions
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Healthcare Use Cases
            </h2>
            <p className="text-lg text-gray-600">
              AI voice agents are transforming healthcare communication across these critical areas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card h-full"
              >
                <div className="icon-badge mb-6">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {useCase.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {useCase.description}
                </p>

                <div className="bg-brand-teal/10 rounded-lg p-3 mb-6">
                  <p className="text-brand-teal font-semibold text-sm">{useCase.stats}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Healthcare Industries We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Our AI voice agents are tailored for various healthcare settings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {industry.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-lg text-gray-600">
              See how healthcare providers are transforming patient care
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-brand-teal">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-teal to-gold">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Patient Care?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join healthcare organizations using AI voice agents to improve patient outcomes and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-white text-brand-teal hover:bg-gray-100 inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-teal inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthcareUseCase;