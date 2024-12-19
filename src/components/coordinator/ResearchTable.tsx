import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, UserPlus, Clock, CheckCircle, XCircle } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import AssignPreparerDialog from './AssignPreparerDialog';
import { useResearch } from '../../contexts/ResearchContext';
import type { Research } from '../../types/coordinator';

interface ResearchTableProps {
  researches: Research[];
  status: string;
}

export default function ResearchTable({ researches, status }: ResearchTableProps) {
  const [selectedResearch, setSelectedResearch] = useState<Research | null>(null);
  const { updateResearchStatus } = useResearch();

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
            <Clock className="h-4 w-4 mr-1" />
            جديد
          </span>
        );
      case 'prepared':
        return (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
            <Clock className="h-4 w-4 mr-1" />
            قيد التحضير
          </span>
        );
      case 'revised':
        return (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            <CheckCircle className="h-4 w-4 mr-1" />
            تمت المراجعة
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                  رقم البحث
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                  عنوان البحث
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                  الباحث
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                  المُحضر
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                  الحالة
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {researches.map((research) => (
                <motion.tr
                  key={research.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {research.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{research.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{research.researcher}</div>
                    <div className="text-sm text-gray-500">{research.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {research.preparer || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(research.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2 rtl:space-x-reverse">
                    <Button
                      variant="outline"
                      size="sm"
                      icon={<Eye className="h-4 w-4" />}
                      onClick={() => {/* Handle view details */}}
                    >
                      عرض التفاصيل
                    </Button>
                    {status === 'new' && (
                      <Button
                        variant="outline"
                        size="sm"
                        icon={<UserPlus className="h-4 w-4" />}
                        onClick={() => setSelectedResearch(research)}
                      >
                        تعيين مُحضر
                      </Button>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {selectedResearch && (
        <AssignPreparerDialog
          research={selectedResearch}
          onClose={() => setSelectedResearch(null)}
          onAssign={(preparerId) => {
            updateResearchStatus(selectedResearch.id, 'prepared', preparerId);
            setSelectedResearch(null);
          }}
        />
      )}
    </>
  );
}