import React from 'react';
import { motion } from 'framer-motion';
import { FileText, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const features = [
  {
    icon: <FileText className="h-8 w-8 text-brand-aqua" />,
    title: 'تقديم الطلبات',
    description: 'قم بتقديم طلبات معامل التأثير بسهولة وسرعة من خلال نظامنا المتطور'
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-brand-aqua" />,
    title: 'تحليل الأداء',
    description: 'تتبع وحلل أداء أبحاثك ومعاملات التأثير الخاصة بك'
  },
  {
    icon: <Clock className="h-8 w-8 text-brand-aqua" />,
    title: 'متابعة الحالة',
    description: 'تابع حالة طلباتك في الوقت الفعلي مع تحديثات فورية'
  }
];

const stats = [
  { label: 'إجمالي الطلبات', value: '12' },
  { label: 'الطلبات المكتملة', value: '8' },
  { label: 'قيد المراجعة', value: '3' },
  { label: 'طلبات جديدة', value: '1' }
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            نظام إدارة تقارير معامل التأثير
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            منصة متكاملة لإدارة وتقديم طلبات معامل التأثير للأبحاث العلمية
          </p>
          <Button
            size="lg"
            variant="primary"
            icon={<FileText className="h-5 w-5" />}
          >
            تقديم طلب جديد
          </Button>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center p-6">
                <p className="text-3xl font-bold text-brand-teal mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card hover className="p-6 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-brand-sky/10 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <Card className="bg-gradient-to-r from-brand-navy to-brand-teal p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            هل تحتاج إلى مساعدة؟
          </h2>
          <p className="text-brand-sky mb-6 max-w-2xl mx-auto">
            فريق الدعم الفني متاح لمساعدتك في أي وقت. تواصل معنا للحصول على المساعدة اللازمة.
          </p>
          <Button
            variant="secondary"
            size="lg"
            icon={<CheckCircle className="h-5 w-5" />}
          >
            تواصل مع الدعم الفني
          </Button>
        </Card>
      </section>
    </div>
  );
}