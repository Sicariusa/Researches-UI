import React from 'react';
import { motion } from 'framer-motion';
import { Download, X } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import DocumentValidator from './DocumentValidator';
import { useVoucherContext } from '../../contexts/VoucherContext';

export default function ApplicationDetails() {
  const { selectedApplication, closeApplication, validateDocument } = useVoucherContext();

  if (!selectedApplication) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto"
      >
        <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            تفاصيل الطلب: {selectedApplication.id}
          </h2>
          <button
            onClick={closeApplication}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Applicant Information */}
          <Card className="p-4">
            <h3 className="font-medium text-gray-900 mb-4">معلومات المتقدم</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">الجامعة</p>
                <p className="font-medium">{selectedApplication.university}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">الكلية</p>
                <p className="font-medium">{selectedApplication.faculty}</p>
              </div>
            </div>
          </Card>

          {/* Document Validation */}
          <DocumentValidator
            documents={selectedApplication.documents}
            onValidate={validateDocument}
          />

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 rtl:space-x-reverse">
            <Button variant="outline" onClick={closeApplication}>
              إغلاق
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                // Handle final approval
              }}
            >
              اعتماد الطلب
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}