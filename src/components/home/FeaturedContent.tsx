import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Clock, CheckCircle } from 'lucide-react';
import Card from '../common/Card';

export default function FeaturedContent() {
  const features = [
    {
      icon: <FileText className="h-6 w-6 text-blue-500" />,
      title: 'تقديم الطلبات',
      description: 'قم بتقديم طلبات معامل التأثير بسهولة وسرعة'
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: 'متابعة الحالة',
      description: 'تابع حالة طلباتك في الوقت الفعلي'
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-blue-500" />,
      title: 'استلام التقارير',
      description: 'احصل على تقارير معامل التأثير فور اعتمادها'
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card hover className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}