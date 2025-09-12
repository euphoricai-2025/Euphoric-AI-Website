import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Tab {
  id: string;
  label: string;
  icon?: React.ComponentType<any>;
  content: React.ReactNode;
}

interface TabbedInterfaceProps {
  tabs: Tab[];
  className?: string;
  variant?: 'default' | 'pills' | 'underline';
}

const TabbedInterface: React.FC<TabbedInterfaceProps> = ({ 
  tabs, 
  className = '',
  variant = 'default'
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');

  const getVariantStyles = () => {
    switch (variant) {
      case 'pills':
        return {
          container: 'bg-gray-100 rounded-lg p-1',
          button: (isActive: boolean) => 
            `px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              isActive 
                ? 'bg-white text-brand-teal shadow-sm' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
            }`,
          content: 'mt-6'
        };
      case 'underline':
        return {
          container: 'border-b border-gray-200',
          button: (isActive: boolean) => 
            `px-4 py-3 text-lg font-semibold border-b-2 transition-all duration-200 flex-1 text-center ${
              isActive 
                ? 'border-brand-teal text-brand-teal' 
                : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
            }`,
          content: 'mt-6'
        };
      default:
        return {
          container: 'bg-white rounded-lg border border-gray-200',
          button: (isActive: boolean) => 
            `px-6 py-3 text-sm font-medium transition-all duration-200 ${
              isActive 
                ? 'bg-brand-teal text-white' 
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`,
          content: 'p-6'
        };
    }
  };

  const styles = getVariantStyles();
  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <div className={className}>
      {/* Tab Navigation */}
      <div className={`flex w-full ${styles.container}`}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={styles.button(isActive)}
            >
              <div className="flex items-center gap-2">
                {Icon && <Icon className="w-4 h-4" />}
                <span>{tab.label}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className={styles.content}>
        {activeTabData && (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {activeTabData.content}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TabbedInterface;