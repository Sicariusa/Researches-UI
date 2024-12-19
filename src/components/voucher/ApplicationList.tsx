import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertCircle, CheckCircle } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useVoucherContext } from '../../contexts/VoucherContext';
import ApplicationDetails from './ApplicationDetails';

export default function ApplicationList() {
  const { applications, openApplication } = useVoucherContext();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900">الطلبات الجديدة</h2>
      
      <div className="grid gap-4">
        {applications.map((application, index) => (
          <motion.div
            key={application.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className={`p-2 rounded-full ${
                    application.status === 'pending' ? 'bg-yellow-100' :
                    application.status === 'approved' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    {application.status === 'pending' ? <FileText className="h-5 w-5 text-yellow-600" /> :
                     application.status === 'approved' ? <CheckCircle className="h-5 w-5 text-green-600" /> :
                     <AlertCircle className="h-5 w-5 text-red-600" />}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      طلب رقم: {application.id}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {application.university} - {application.faculty}
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => openApplication(application.id)}
                >
                  عرض التفاصيل
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}