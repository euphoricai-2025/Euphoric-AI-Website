import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BarChart3, PieChart, LineChart, AlertTriangle, FileText, Calendar, ArrowRight, CheckCircle, TrendingUp, Shield, Zap } from 'lucide-react';

const AnalyticsReporting = () => {
  const automations = [
    {
      icon: BarChart3,
      name: 'Real-Time Dashboard Automation',
      description: 'Create dynamic dashboards that automatically update with your latest business metrics and KPIs in real-time.',
      features: [
        'Live data visualization and updates',
        'Custom KPI tracking and alerts',
        'Multi-source data integration',
        'Mobile-responsive dashboard design',
        'Drill-down analysis capabilities',
        'Role-based access controls'
      ],
      benefits: [
        'Access insights 24/7 from anywhere',
        'Reduce reporting delays by 100%',
        'Improve decision-making speed by 80%',
        'Eliminate manual data compilation'
      ],
      platforms: ['Power BI', 'Tableau', 'Google Analytics', 'Looker']
    },
    {
      icon: FileText,
      name: 'Automated Report Generation',
      description: 'Generate comprehensive reports automatically on schedules that fit your business needs with smart formatting.',
      features: [
        'Scheduled report generation',
        'Multi-format output (PDF, Excel, PowerPoint)',
        'Custom branding and formatting',
        'Automated distribution to stakeholders',
        'Interactive report elements',
        'Version control and archiving'
      ],
      benefits: [
        'Save 30+ hours monthly on reporting',
        'Ensure consistent report quality',
        'Never miss a reporting deadline',
        'Improve stakeholder communication'
      ],
      platforms: ['Microsoft Power Platform', 'Google Workspace', 'Zapier', 'n8n']
    },
    {
      icon: PieChart,
      name: 'Performance Analytics Engine',
      description: 'Track and analyze business performance across all departments with automated metric calculation and trending.',
      features: [
        'Cross-departmental performance tracking',
        'Automated metric calculations',
        'Trend analysis and forecasting',
        'Goal tracking and achievement monitoring',
        'Comparative analysis tools',
        'Historical data preservation'
      ],
      benefits: [
        'Identify performance trends 90% faster',
        'Improve goal achievement by 65%',
        'Reduce analysis time by 75%',
        'Make data-driven decisions confidently'
      ],
      platforms: ['Google Analytics', 'Adobe Analytics', 'Mixpanel', 'Amplitude']
    },
    {
      icon: AlertTriangle,
      name: 'Smart Alert & Notification System',
      description: 'Get instant notifications when key metrics hit thresholds or unusual patterns are detected in your data.',
      features: [
        'Intelligent threshold monitoring',
        'Anomaly detection algorithms',
        'Multi-channel alert delivery',
        'Escalation workflow management',
        'Custom alert condition building',
        'Alert fatigue prevention'
      ],
      benefits: [
        'Catch issues before they impact business',
        'Reduce response time by 95%',
        'Prevent revenue loss through early warning',
        'Improve operational efficiency'
      ],
      platforms: ['PagerDuty', 'Slack', 'Microsoft Teams', 'Custom Webhooks']
    },
    {
      icon: LineChart,
      name: 'Predictive Analytics Automation',
      description: 'Leverage machine learning to automatically generate forecasts and predictive insights from your business data.',
      features: [
        'ML-powered forecasting models',
        'Predictive trend identification',
        'Scenario planning and modeling',
        'Risk assessment automation',
        'Customer behavior prediction',
        'Revenue forecasting optimization'
      ],
      benefits: [
        'Improve forecast accuracy by 85%',
        'Identify opportunities 6 months earlier',
        'Reduce planning time by 60%',
        'Enhance strategic decision making'
      ],
      platforms: ['Azure ML', 'AWS SageMaker', 'Google Cloud AI', 'DataRobot']
    },
    {
      icon: Calendar,
      name: 'Scheduled Analytics Workflows',
      description: 'Automate complex analytical processes to run on schedules, ensuring fresh insights are always available.',
      features: [
        'Automated data processing pipelines',
        'Scheduled analysis execution',
        'Data quality monitoring',
        'Error handling and recovery',
        'Workflow dependency management',
        'Performance optimization'
      ],
      benefits: [
        'Ensure data freshness 100% of the time',
        'Reduce manual processing by 90%',
        'Improve data reliability',
        'Scale analytics operations efficiently'
      ],
      platforms: ['Apache Airflow', 'Azure Data Factory', 'AWS Glue', 'Zapier']
    }
  ];

  const industries = [
    { name: 'E-commerce', description: 'Track sales, inventory, and customer behavior analytics' },
    { name: 'SaaS', description: 'Monitor user engagement, churn, and product metrics' },
    { name: 'Financial Services', description: 'Analyze portfolio performance and risk metrics' },
    { name: 'Healthcare', description: 'Track patient outcomes and operational efficiency' },
    { name: 'Manufacturing', description: 'Monitor production efficiency and quality metrics' },
    { name: 'Marketing Agencies', description: 'Report campaign performance across clients' }
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
              <BarChart3 className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-gray-900">Analytics & Reporting</span><br />
              <span className="text-euphoric-gradient">Automation Solutions</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8"
            >
              Transform your data into actionable insights with intelligent analytics automation. Generate reports automatically, monitor KPIs in real-time, and get predictive insights that drive better business decisions.
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
                Automate Your Analytics
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
              className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 h-64 md:h-80 flex items-center justify-center relative"
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative text-center z-10">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Analytics & Reporting</h3>
                <p className="text-white/80 text-sm">Predictive Intelligence & Insights</p>
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
              Complete Analytics Automation Suite
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From real-time dashboards to predictive analytics, automate every aspect of your data analysis and reporting workflow.
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
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Analytics Benefits:</h4>
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
              Industry-Specific Analytics Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our analytics automation solutions are tailored to track the metrics that matter most in your industry.
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
              Why Choose Our Analytics Automation?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proven results that transform how you understand and use your business data
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">85% More Accurate Forecasts</h3>
              <p className="text-gray-600">
                Machine learning algorithms provide significantly more accurate predictions than traditional methods.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">30+ Hours Saved Monthly</h3>
              <p className="text-gray-600">
                Eliminate manual report creation and data compilation with fully automated analytics workflows.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">80% Faster Decisions</h3>
              <p className="text-gray-600">
                Real-time dashboards and instant alerts enable rapid decision-making based on current data.
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
              Ready to Automate Your Analytics?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Turn your data into your competitive advantage with intelligent analytics automation. Get insights that drive better decisions and business growth.
            </p>
            <div className="flex justify-center">
              <a
                href="https://calendly.com/euphoricai-aivoiceagents-demo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-teal hover:bg-gray-100 inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Automate Your Analytics
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnalyticsReporting;