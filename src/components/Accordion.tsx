import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
  icon?: React.ComponentType<any>;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
  variant?: 'default' | 'benefits' | 'features';
  defaultOpenItems?: number[];
}

const Accordion: React.FC<AccordionProps> = ({ 
  items, 
  allowMultiple = false, 
  className = '',
  variant = 'default',
  defaultOpenItems = []
}) => {
  const [openItems, setOpenItems] = useState<number[]>(defaultOpenItems);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenItems(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenItems(prev => 
        prev.includes(index) ? [] : [index]
      );
    }
  };

  const getVariantStyles = (isOpen: boolean) => {
    switch (variant) {
      case 'benefits':
        return {
          button: `${isOpen ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'} hover:bg-green-50 hover:border-green-200`,
          content: 'bg-green-50 border-l-4 border-green-400'
        };
      case 'features':
        return {
          button: `${isOpen ? 'bg-brand-teal/5 border-brand-teal/20' : 'bg-white border-gray-200'} hover:bg-brand-teal/5 hover:border-brand-teal/20`,
          content: 'bg-brand-teal/5'
        };
      default:
        return {
          button: `${isOpen ? 'bg-gray-50 border-gray-300' : 'bg-white border-gray-200'} hover:bg-gray-50 hover:border-gray-300`,
          content: 'bg-gray-50'
        };
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openItems.includes(index);
        const styles = getVariantStyles(isOpen);
        const Icon = item.icon;
        
        return (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleItem(index)}
              className={`w-full px-4 py-4 text-left flex items-center justify-between transition-all duration-200 ${styles.button}`}
            >
              <div className="flex items-center gap-3">
                {Icon && <Icon className="w-5 h-5 text-brand-teal flex-shrink-0" />}
                <span className="font-semibold text-gray-900">{item.title}</span>
              </div>
              <div className="flex-shrink-0">
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </div>
            </button>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className={`overflow-hidden ${styles.content}`}
                >
                  <div className="px-4 py-4">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;