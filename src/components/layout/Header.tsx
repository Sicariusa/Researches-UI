import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const pageHeaders: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'نظام إدارة تقارير معامل التأثير',
    description: 'قم بإدارة وتتبع طلبات معامل التأثير الخاصة بك'
  },
  '/profile': {
    title: 'الملف الشخصي',
    description: 'إدارة معلوماتك الشخصية وتتبع نشاطاتك'
  },
  '/tutorial': {
    title: 'دليل المستخدم',
    description: 'تعرف على كيفية استخدام النظام خطوة بخطوة'
  },
  '/faq': {
    title: 'الأسئلة الشائعة',
    description: 'إجابات على الأسئلة المتكررة'
  }
};

export default function Header() {
  const location = useLocation();
  const pageInfo = pageHeaders[location.pathname];

  if (!pageInfo) return null;

  return (
    <div className="bg-gradient-to-r from-brand-navy to-brand-teal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4 text-brand-sky">{pageInfo.title}</h1>
          <p className="text-lg text-brand-aqua/90 max-w-2xl mx-auto">
            {pageInfo.description}
          </p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-aqua via-brand-sky to-brand-aqua opacity-30" />
    </div>
  );
}