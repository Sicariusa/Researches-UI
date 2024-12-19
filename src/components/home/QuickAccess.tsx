import React from 'react';
import { FileText, HelpCircle, BookOpen } from 'lucide-react';
import Button from '../common/Button';

export default function QuickAccess() {
  const quickLinks = [
    {
      icon: <FileText className="h-5 w-5" />,
      title: 'طلب جديد',
      description: 'تقديم طلب معامل تأثير جديد',
      action: 'تقديم طلب'
    },
    {
      icon: <HelpCircle className="h-5 w-5" />,
      title: 'الدعم الفني',
      description: 'الأسئلة الشائعة والمساعدة',
      action: 'استكشاف'
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: 'دليل الاستخدام',
      description: 'تعرف على كيفية استخدام النظام',
      action: 'قراءة الدليل'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {quickLinks.map((link, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
            {link.icon}
            <h3 className="text-lg font-medium text-gray-900">{link.title}</h3>
          </div>
          <p className="text-gray-500 mb-4">{link.description}</p>
          <Button variant="outline" size="sm" icon={link.icon}>
            {link.action}
          </Button>
        </div>
      ))}
    </div>
  );
}