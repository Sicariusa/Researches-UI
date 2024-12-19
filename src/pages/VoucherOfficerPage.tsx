import React from 'react';
import { motion } from 'framer-motion';
import ApplicationList from '../components/voucher/ApplicationList';
import ValidationStats from '../components/voucher/ValidationStats';
import ApplicationDetails from '../components/voucher/ApplicationDetails';
import { useVoucherContext } from '../contexts/VoucherContext';

export default function VoucherOfficerPage() {
  const { stats, selectedApplication } = useVoucherContext();

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-right"
      >
        <h1 className="text-2xl font-bold text-gray-900 mb-2">لوحة تحكم مسؤول التحقق</h1>
        <p className="text-gray-600">مراجعة وتحقق من طلبات البحث العلمي</p>
      </motion.div>

      <ValidationStats stats={stats} />
      <ApplicationList />
      {selectedApplication && <ApplicationDetails />}
    </div>
  );
}