import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import Card from '../components/common/Card';

const faqs = [
  {
    question: 'كيف يمكنني تقديم طلب جديد؟',
    answer: 'يمكنك تقديم طلب جديد من خلال الصفحة الرئيسية والضغط على زر "طلب جديد". قم بتعبئة النموذج المطلوب وإرفاق المستندات اللازمة.',
    category: 'التقديم'
  },
  {
    question: 'ما هي المستندات المطلوبة؟',
    answer: 'المستندات المطلوبة تشمل نسخة PDF من البحث، وإثبات النشر في المجلة العلمية، وأي مستندات داعمة أخرى.',
    category: 'المستندات'
  },
  {
    question: 'كم تستغرق عملية المراجعة؟',
    answer: 'تستغرق عملية المراجعة عادةً من 5 إلى 7 أيام عمل، وقد تختلف المدة حسب حجم الطلبات.',
    category: 'المراجعة'
  }
];

export default function FaqPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">الأسئلة الشائعة</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          اعثر على إجابات لأكثر الأسئلة شيوعاً حول نظام إدارة تقارير معامل التأثير
        </p>
      </div>

      <div className="relative max-w-xl mx-auto mb-8">
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="ابحث في الأسئلة الشائعة..."
          className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-4">
        {filteredFaqs.map((faq, index) => (
          <Card key={index} className="cursor-pointer" onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
              {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
            </div>
            {activeIndex === index && (
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}