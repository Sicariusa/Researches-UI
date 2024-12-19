import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Button from '../ui/Button';
import type { Research } from '../../types/coordinator';

interface AssignPreparerDialogProps {
  research: Research;
  onClose: () => void;
  onAssign: (preparerId: string) => void;
}

const preparers = [
  { id: 'prep1', name: 'أحمد محمد' },
  { id: 'prep2', name: 'فاطمة علي' },
  { id: 'prep3', name: 'محمد أحمد' },
];

export default function AssignPreparerDialog({
  research,
  onClose,
  onAssign
}: AssignPreparerDialogProps) {
  const [selectedPreparerId, setSelectedPreparerId] = useState('');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg w-full max-w-md"
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-medium">تعيين مُحضر للبحث</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4">
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-1">عنوان البحث</p>
            <p className="font-medium">{research.title}</p>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              اختر المُحضر
            </label>
            <select
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-teal focus:border-brand-teal"
              value={selectedPreparerId}
              onChange={(e) => setSelectedPreparerId(e.target.value)}
            >
              <option value="">اختر مُحضر...</option>
              {preparers.map((preparer) => (
                <option key={preparer.id} value={preparer.id}>
                  {preparer.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end space-x-2 rtl:space-x-reverse">
            <Button variant="outline" onClick={onClose}>
              إلغاء
            </Button>
            <Button
              variant="primary"
              disabled={!selectedPreparerId}
              onClick={() => onAssign(selectedPreparerId)}
            >
              تعيين
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}