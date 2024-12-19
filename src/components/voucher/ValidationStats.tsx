import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, Clock, AlertTriangle } from 'lucide-react';
import Card from '../ui/Card';

interface Stats {
  pending: number;
  approved: number;
  rejected: number;
}

interface ValidationStatsProps {
  stats: Stats;
}

export default function ValidationStats({ stats }: ValidationStatsProps) {
  const statItems = [
    {
      label: 'قيد المراجعة',
      value: stats.pending,
      icon: <Clock className="h-5 w-5 text-yellow-500" />,
      bgColor: 'bg-yellow-50'
    },
    {
      label: 'تم الموافقة',
      value: stats.approved,
      icon: <FileCheck className="h-5 w-5 text-green-500" />,
      bgColor: 'bg-green-50'
    },
    {
      label: 'مرفوض',
      value: stats.rejected,
      icon: <AlertTriangle className="h-5 w-5 text-red-500" />,
      bgColor: 'bg-red-50'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {statItems.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className={`p-4 ${item.bgColor}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{item.label}</p>
                <p className="text-2xl font-bold text-gray-900">{item.value}</p>
              </div>
              {item.icon}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}