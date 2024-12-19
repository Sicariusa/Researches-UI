import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ClipboardList, CheckCircle } from 'lucide-react';
import ResearchTable from './ResearchTable';
import { useResearch } from '../../contexts/ResearchContext';
import { cn } from '../../utils/cn';

const tabs = [
  {
    id: 'new',
    label: 'البحوث الجديدة',
    icon: <FileText className="h-5 w-5" />,
    color: 'text-blue-600'
  },
  {
    id: 'prepared',
    label: 'البحوث قيد التحضير',
    icon: <ClipboardList className="h-5 w-5" />,
    color: 'text-yellow-600'
  },
  {
    id: 'revised',
    label: 'البحوث المراجعة',
    icon: <CheckCircle className="h-5 w-5" />,
    color: 'text-green-600'
  }
];

export default function ResearchTabs() {
  const [activeTab, setActiveTab] = useState('new');
  const { getResearchByStatus } = useResearch();

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8 rtl:space-x-reverse" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm',
                activeTab === tab.id
                  ? `border-brand-teal ${tab.color}`
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              )}
            >
              <span className="inline-flex items-center space-x-2 rtl:space-x-reverse">
                {tab.icon}
                <span>{tab.label}</span>
              </span>
            </button>
          ))}
        </nav>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <ResearchTable researches={getResearchByStatus(activeTab)} status={activeTab} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}