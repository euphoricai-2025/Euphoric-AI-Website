import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, FileText, Calendar, Award, UserCheck, ArrowRight, CheckCircle, TrendingUp, Shield, Zap } from 'lucide-react';

const RecruitmentHRWorkflows = () => {
  const automations = [
    {
      icon: FileText,
      name: 'Resume Screening & Parsing',
      description: 'Automatically screen resumes, extract key information, and rank candidates based on job requirements and qualifications.',
      features: [
        'AI-powered resume parsing and analysis',
        'Keyword matching and skills assessment',
        'Automated candidate ranking and scoring',
        'Integration with ATS systems',
        'Bias reduction in initial screening',
        'Custom scoring criteria setup'
      ],
      benefits: [
        'Reduce screening time by 80%',
        'Improve candidate quality by 60%',
        'Eliminate unconscious bias',
        'Process 10x more applications efficiently'
      ],
      platforms: ['BambooHR', 'Workday', 'Greenhouse', 'Lever']
    },
    {
      icon: Calendar,
      name: 'Interview Scheduling Automation',
      description: 'Coordinate complex interview schedules across multiple stakeholders with automated calendar management.',
      features: [
        'Multi-interviewer calendar coordination',
        'Automated interview slot booking',
        'Candidate self-scheduling portal',
        'Interview reminder notifications',
        'Rescheduling and conflict resolution',
        'Video meeting link generation'
      ],
      benefits: [
        'Save 15+ hours weekly on scheduling',
        'Reduce scheduling conflicts by 90%',
        'Improve candidate experience',
        'Accelerate hiring process by 40%'
      ],
      platforms: ['Calendly', 'Google Calendar', 'Outlook', 'Zoom']
    },
    {
      icon: UserCheck,
      name: 'Employee Onboarding Workflows',
      description: 'Streamline new hire onboarding with automated task assignment, document collection, and progress tracking.',
      features: [
        'Personalized onboarding checklists',
        'Automated document collection',
        'IT equipment and access provisioning',
        'Training schedule management',
        'Progress tracking and reminders',
        'Manager and buddy assignment'
      ],
      benefits: [
        'Reduce onboarding time by 50%',
        'Improve new hire satisfaction by 75%',
        'Ensure compliance and documentation',
        'Accelerate time-to-productivity'
      ],
      platforms: ['BambooHR', 'Workday', 'Slack', 'Microsoft Teams']
    },
    {
      icon: Award,
      name: 'Performance Tracking System',
      description: 'Automate performance reviews, goal tracking, and employee development planning with intelligent workflows.',
      features: [
        'Automated performance review cycles',
        'Goal setting and progress tracking',
        '360-degree feedback collection',
        'Performance analytics and insights',
        'Development plan automation',
        'Manager coaching recommendations'
      ],
      benefits: [
        'Increase performance review completion by 95%',
        'Improve employee engagement by 40%',
        'Reduce manager administrative time',
        'Data-driven performance decisions'
      ],
      platforms: ['15Five', 'Lattice', 'Culture Amp', 'Custom Dashboards']
    },
    {
      icon: Users,
      name: 'Employee Communication Hub',
      description: 'Centralize employee communications, announcements, and feedback collection with automated distribution.',
      features: [
        'Multi-channel communication automation',
        'Targeted message distribution',
        'Employee survey automation',
        'Feedback collection and analysis',
        'Policy update notifications',
        'Anonymous reporting systems'
      ],
      benefits: [
        'Improve communication reach by 90%',
        'Increase employee engagement',
        'Streamline policy updates',
        'Gather actionable employee feedback'
      ],
      platforms: ['Slack', 'Microsoft Teams', 'Email', 'SMS']
    },
    {
      icon: TrendingUp,
      name: 'HR Analytics & Reporting',
      description: 'Generate automated HR reports and insights to track key metrics and make data-driven decisions.',
      features: [
        'Automated HR dashboard updates',
        'Turnover and retention analytics',
        'Hiring funnel performance tracking',
        'Employee satisfaction scoring',
        'Compensation analysis automation',
        'Compliance reporting'
      ],
      benefits: [
        'Save 20+ hours monthly on reporting',
        'Identify trends and issues early',
        'Make data-driven HR decisions',
        'Improve strategic planning'
      ],
      platforms: ['Power BI', 'Tableau', 'Google Analytics', 'Custom Reports']
    }
  ];

  const industries = [
    { name: 'Technology', description: 'Scale technical hiring and remote onboarding' },
    { name: 'Healthcare', description: 'Manage compliance and certification tracking' },
    { name: 'Manufacturing', description: 'Streamline safety training and skill assessments' },
    { name: 'Financial Services', description: 'Automate background checks and compliance' },
    { name: 'Retail', description: 'Handle seasonal hiring and staff scheduling' },
    { name: 'Professional Services', description: 'Manage consultant onboarding and projects' }
  ];

  return (
    <div className="pt-16 bg-euphoric-surface min-h-screen">
      {/* SEO-Optimized Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="icon-badge-lg mx-auto mb-6"
            >
              <Users className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-gray-900">Recruitment & HR</span><br />
              <span className="text-euphoric-gradient">Workflow Automation</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8"
            >
              Streamline your entire HR process from candidate screening to employee performance management. Reduce administrative burden, improve candidate experience, and make data-driven HR decisions with intelligent automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center"
            >
              <a
                href="https://calendly.com/euphoricai-aivoiceagents-demo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center justify-center px-8 py-3 text-base font-medium"
              >
                Automate HR Workflows
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 h-64 md:h-80 flex items-center justify-center relative"
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative text-center z-10">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">HR Automation</h3>
                <p className="text-white/80 text-sm">Recruitment Intelligence & Workflow</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Automations Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete HR Automation Suite
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From recruitment to performance management, automate every aspect of your HR processes with our intelligent workflow solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {automations.map((automation, index) => (
              <motion.div
                key={automation.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center mb-6">
                  <div className="icon-badge mr-4">
                    <automation.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{automation.name}</h3>
                </div>

                <p className="text-gray-600 mb-6">{automation.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {automation.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-brand-teal mr-2 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">HR Benefits:</h4>
                  <ul className="space-y-2">
                    {automation.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm text-brand-teal font-medium">
                        <TrendingUp className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {automation.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {platform}
                    </span>
                  ))}
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific HR Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored HR automation solutions designed for the unique challenges of different industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transform Your HR Operations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proven results that improve efficiency and employee satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="card text-center"
            >
              <div className="icon-badge mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">80% Less Screening Time</h3>
              <p className="text-gray-600">
                AI-powered resume screening processes more candidates in less time with better accuracy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card text-center"
            >
              <div className="icon-badge mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">75% Better Onboarding</h3>
              <p className="text-gray-600">
                Structured onboarding workflows improve new hire satisfaction and reduce turnover.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card text-center"
            >
              <div className="icon-badge mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">40% Faster Hiring</h3>
              <p className="text-gray-600">
                Automated scheduling and workflow management accelerates your entire hiring process.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-teal to-gold">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Automate Your HR Processes?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Transform your recruitment and HR operations with intelligent automation. Reduce administrative burden while improving employee experience.
            </p>
            <div className="flex justify-center">
              <a
                href="https://calendly.com/euphoricai-aivoiceagents-demo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-teal hover:bg-gray-100 inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Automate HR Workflows
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecruitmentHRWorkflows;