import React from 'react';
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import Card from '../ui/Card';

interface StatsProps {
  pending: number;
  approved: number;
  rejected: number;
}

export default function DashboardStats({ pending, approved, rejected }: StatsProps) {
  const stats = [
    {
      label: 'قيد المراجعة',
      value: pending,
      icon: <Clock className="h-6 w-6 text-yellow-500" />,
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-700'
    },
    {
      label: 'تم الموافقة',
      value: approved,
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      bgColor: 'bg-green-50',
      textColor: 'text-green-700'
    },
    {
      label: 'مرفوض',
      value: rejected,
      icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
      bgColor: 'bg-red-50',
      textColor: 'text-red-700'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className={`${stat.bgColor} border-none`}>
          <div className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
              <p className={`text-3xl font-bold ${stat.textColor}`}>{stat.value}</p>
            </div>
            {stat.icon}
          </div>
        </Card>
      ))}
    </div>
  );
}