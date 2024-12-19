import React from 'react';
import { motion } from 'framer-motion';
import { X, Download, FileText } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import RequestActions from './RequestActions';
import type { ResearchRequest } from '../../types/dashboard';

interface RequestDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  request: ResearchRequest;
  onApprove: (id: string) => void;
  onReject: (id: string, reason: string) => void;
}

export default function RequestDetails({
  isOpen,
  onClose,
  request,
  onApprove,
  onReject
}: RequestDetailsProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto"
      >
        <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">تفاصيل الطلب #{request.id}</h2>
            <p className="text-sm text-gray-500 mt-1">{request.requestType}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Applicant Information */}
          <Card className="p-4">
            <h3 className="font-medium text-gray-900 mb-4">معلومات المتقدم</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">الاسم</p>
                <p className="font-medium">{request.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">البريد الإلكتروني</p>
                <p className="font-medium">{request.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">الجامعة</p>
                <p className="font-medium">{request.university}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">الكلية</p>
                <p className="font-medium">{request.faculty}</p>
              </div>
            </div>
          </Card>

          {/* Documents */}
          <Card className="p-4">
            <h3 className="font-medium text-gray-900 mb-4">المستندات المطلوبة</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <FileText className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium">خطاب العميد</p>
                    <p className="text-sm text-gray-500">PDF - 2.3MB</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  icon={<Download className="h-4 w-4" />}
                >
                  تحميل
                </Button>
              </div>
            </div>
          </Card>

          {/* Actions */}
          <div className="flex justify-end space-x-4 rtl:space-x-reverse">
            <RequestActions
              onApprove={() => onApprove(request.id)}
              onReject={(reason) => onReject(request.id, reason)}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}