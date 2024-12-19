import React from 'react';
import ResearchTabs from '../components/coordinator/ResearchTabs';
import { ResearchProvider } from '../contexts/ResearchContext';

export default function CoordinatorPage() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">لوحة تحكم المنسق</h1>
        <p className="text-gray-600">إدارة وتنسيق طلبات البحث العلمي</p>
      </div>

      <ResearchProvider>
        <ResearchTabs />
      </ResearchProvider>
    </div>
  );
}