import React from 'react';
import { Play, FileText, CheckCircle } from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const tutorials = [
  {
    title: 'تقديم طلب جديد',
    description: 'تعلم كيفية تقديم طلب معامل تأثير جديد خطوة بخطوة',
    duration: '5 دقائق',
    icon: <FileText className="h-6 w-6 text-blue-500" />
  },
  {
    title: 'متابعة حالة الطلب',
    description: 'كيفية متابعة حالة طلبك والتحقق من التحديثات',
    duration: '3 دقائق',
    icon: <CheckCircle className="h-6 w-6 text-blue-500" />
  },
  {
    title: 'تحميل التقارير',
    description: 'طريقة الوصول إلى وتحميل تقارير معامل التأثير',
    duration: '4 دقائق',
    icon: <Play className="h-6 w-6 text-blue-500" />
  }
];

export default function TutorialPage() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">دليل الاستخدام</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          تعرف على كيفية استخدام نظام إدارة تقارير معامل التأثير من خلال الدروس التوضيحية
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((tutorial, index) => (
          <Card key={index} className="flex flex-col">
            <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
              {tutorial.icon}
              <div>
                <h3 className="text-lg font-medium text-gray-900">{tutorial.title}</h3>
                <p className="text-sm text-gray-500">{tutorial.duration}</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4 flex-grow">{tutorial.description}</p>
            <Button variant="outline" size="sm" icon={<Play className="h-4 w-4" />}>
              بدء الدرس
            </Button>
          </Card>
        ))}
      </div>

      <Card className="mt-8 bg-blue-50 border border-blue-100">
        <div className="flex items-start space-x-4 rtl:space-x-reverse">
          <div className="flex-shrink-0">
            <CheckCircle className="h-6 w-6 text-blue-500" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">هل تحتاج إلى مساعدة إضافية؟</h3>
            <p className="text-gray-600 mb-4">
              إذا كنت بحاجة إلى مزيد من المساعدة، يمكنك التواصل مع فريق الدعم الفني
            </p>
            <Button variant="primary" size="sm">
              تواصل مع الدعم الفني
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}