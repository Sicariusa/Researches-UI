import React from 'react';
import { Check, X, FileText } from 'lucide-react';
import Button from '../ui/Button';

interface Document {
  id: string;
  name: string;
  type: string;
  status: 'pending' | 'approved' | 'rejected';
}

interface DocumentValidatorProps {
  documents: Document[];
  onValidate: (documentId: string, status: 'approved' | 'rejected', reason?: string) => void;
}

export default function DocumentValidator({ documents, onValidate }: DocumentValidatorProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-medium text-gray-900">المستندات المطلوبة</h3>
      
      <div className="space-y-2">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <FileText className="h-5 w-5 text-gray-400" />
              <div>
                <p className="font-medium text-gray-900">{doc.name}</p>
                <p className="text-sm text-gray-500">{doc.type}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Button
                variant="outline"
                size="sm"
                className="text-green-600 hover:bg-green-50"
                onClick={() => onValidate(doc.id, 'approved')}
              >
                <Check className="h-4 w-4" />
                قبول
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-red-600 hover:bg-red-50"
                onClick={() => onValidate(doc.id, 'rejected')}
              >
                <X className="h-4 w-4" />
                رفض
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}