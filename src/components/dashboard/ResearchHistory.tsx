import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import Card from '../ui/Card';

interface HistoryItem {
  id: string;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
  type: string;
  reason?: string;
}

interface ResearchHistoryProps {
  researcherId: string;
  history: HistoryItem[];
  onClose: () => void;
}

export default function ResearchHistory({ history, onClose }: ResearchHistoryProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'rejected':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-yellow-500" />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg w-full max-w-2xl max-h-[80vh] overflow-auto"
      >
        <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">سجل الطلبات السابقة</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <XCircle className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          {history.map((item) => (
            <Card key={item.id} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  {getStatusIcon(item.status)}
                  <div>
                    <p className="font-medium">{item.type}</p>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                </div>
                <div className={`text-sm ${
                  item.status === 'approved' ? 'text-green-600' :
                  item.status === 'rejected' ? 'text-red-600' : 'text-yellow-600'
                }`}>
                  {item.status === 'approved' ? 'تمت الموافقة' :
                   item.status === 'rejected' ? 'مرفوض' : 'قيد المراجعة'}
                </div>
              </div>
              {item.reason && (
                <p className="mt-2 text-sm text-gray-600 bg-gray-50 p-2 rounded">
                  سبب الرفض: {item.reason}
                </p>
              )}
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  );
}