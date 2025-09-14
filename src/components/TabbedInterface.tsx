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
          container: 'overflow-x-auto scrollbar-hide border-b-2 border-gray-100',
          button: (isActive: boolean) => 
            `px-4 md:px-6 py-3 text-sm md:text-base font-medium transition-all duration-200 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 whitespace-nowrap flex-shrink-0 ${
              isActive 
                ? 'text-brand-teal border-b-2 border-brand-teal -mb-0.5' 
                : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-200 -mb-0.5'
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
      <div className={styles.container}>
        <div className="flex w-full min-w-max">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={styles.button(isActive)}
                style={{ outline: 'none' }}
              >
                <div className="flex items-center gap-2">
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{tab.label}</span>
                </div>
              </button>
            );
          })}
        </div>
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