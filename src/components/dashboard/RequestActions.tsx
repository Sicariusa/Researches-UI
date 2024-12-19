import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import Button from '../ui/Button';

interface RequestActionsProps {
  onApprove: () => void;
  onReject: (reason: string) => void;
}

export default function RequestActions({ onApprove, onReject }: RequestActionsProps) {
  const [showRejectDialog, setShowRejectDialog] = useState(false);
  const [rejectReason, setRejectReason] = useState('');

  const handleReject = () => {
    if (rejectReason.trim()) {
      onReject(rejectReason);
      setRejectReason('');
      setShowRejectDialog(false);
    }
  };

  return (
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      <Button
        variant="outline"
        size="sm"
        onClick={onApprove}
        className="text-green-600 hover:bg-green-50 hover:border-green-600"
        icon={<CheckCircle className="h-4 w-4" />}
      >
        قبول
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setShowRejectDialog(true)}
        className="text-red-600 hover:bg-red-50 hover:border-red-600"
        icon={<XCircle className="h-4 w-4" />}
      >
        رفض
      </Button>

      {showRejectDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-medium mb-4">سبب الرفض</h3>
            <textarea
              className="w-full border rounded-md p-2 mb-4"
              rows={4}
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              placeholder="اكتب سبب الرفض هنا..."
            />
            <div className="flex justify-end space-x-2 rtl:space-x-reverse">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowRejectDialog(false)}
              >
                إلغاء
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={handleReject}
                disabled={!rejectReason.trim()}
              >
                تأكيد الرفض
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}