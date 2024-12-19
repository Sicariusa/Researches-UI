import React from 'react';
import Card from '../components/common/Card';

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">الملف الشخصي</h1>
      
      <Card className="space-y-6">
        <div className="border-b pb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">المعلومات الشخصية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">الاسم</label>
              <p className="text-gray-900">د. محمد أحمد</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
              <p className="text-gray-900">mohammed.ahmed@example.com</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">الجامعة</label>
              <p className="text-gray-900">جامعة المنصورة</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">الكلية</label>
              <p className="text-gray-900">كلية الهندسة</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">إحصائيات الطلبات</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard title="إجمالي الطلبات" value="12" />
            <StatCard title="الطلبات المكتملة" value="8" />
            <StatCard title="قيد المراجعة" value="3" />
            <StatCard title="طلبات جديدة" value="1" />
          </div>
        </div>
      </Card>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <p className="text-sm text-gray-600 mb-1">{title}</p>
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
    </div>
  );
}