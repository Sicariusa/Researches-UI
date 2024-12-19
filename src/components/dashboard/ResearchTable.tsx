import React from 'react';
import { motion } from 'framer-motion';
import { Eye, History, CheckCircle, XCircle, Clock } from 'lucide-react';
import Button from '../ui/Button';
import type { ResearchRequest } from '../../types/dashboard';

interface ResearchTableProps {
  requests: ResearchRequest[];
  onViewDetails: (id: string) => void;
  onViewHistory: (id: string) => void;
}

export default function ResearchTable({ requests, onViewDetails, onViewHistory }: ResearchTableProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            <CheckCircle className="h-4 w-4 mr-1" />
            تمت الموافقة
          </span>
        );
      case 'rejected':
        return (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            <XCircle className="h-4 w-4 mr-1" />
            مرفوض
          </span>
        );
      default:
        return (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
            <Clock className="h-4 w-4 mr-1" />
            قيد المراجعة
          </span>
        );
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
              رقم الطلب
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
              مقدم الطلب
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
              الجامعة
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
              نوع الطلب
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
          {requests.map((request) => (
            <motion.tr
              key={request.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="hover:bg-gray-50"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {request.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{request.name}</div>
                <div className="text-sm text-gray-500">{request.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {request.university}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {request.requestType}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {getStatusBadge(request.status)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2 rtl:space-x-reverse">
                <Button
                  variant="outline"
                  size="sm"
                  icon={<Eye className="h-4 w-4" />}
                  onClick={() => onViewDetails(request.id)}
                >
                  عرض التفاصيل
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  icon={<History className="h-4 w-4" />}
                  onClick={() => onViewHistory(request.id)}
                >
                  السجل
                </Button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}