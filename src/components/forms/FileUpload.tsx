import React from 'react';
import { Upload } from 'lucide-react';
import { cn } from '../../utils/cn';

interface FileUploadProps {
  onFileSelect: (files: FileList) => void;
  accept?: string;
  maxSize?: number;
  className?: string;
}

export default function FileUpload({
  onFileSelect,
  accept = '.pdf',
  maxSize = 10485760, // 10MB
  className
}: FileUploadProps) {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      onFileSelect(files);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onFileSelect(files);
    }
  };

  return (
    <div
      className={cn(
        'border-2 border-dashed border-gray-300 rounded-lg p-6 text-center',
        'hover:border-blue-500 hover:bg-blue-50/50 transition-colors',
        className
      )}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <div className="mt-4">
        <p className="text-sm text-gray-600">قم بسحب وإفلات الملفات هنا أو</p>
        <label className="mt-2 cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
          اختر الملفات
          <input
            type="file"
            className="hidden"
            accept={accept}
            onChange={handleChange}
          />
        </label>
      </div>
      <p className="mt-2 text-xs text-gray-500">
        PDF فقط (الحد الأقصى {Math.round(maxSize / 1048576)} ميجابايت)
      </p>
    </div>
  );
}