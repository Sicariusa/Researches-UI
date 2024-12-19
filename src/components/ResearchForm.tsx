import React, { useState } from 'react';
import FormField from './forms/FormField';
import Input from './forms/Input';
import Select from './forms/Select';
import FileUpload from './forms/FileUpload';
import Button from './common/Button';

export default function ResearchForm() {
  const [formData, setFormData] = useState({
    universityType: '',
    university: '',
    researchTitle: '',
    abstract: '',
    generalSpecialization: '',
    specificSpecialization: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleFileSelect = (files: FileList) => {
    // Handle file upload
    console.log(files);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">تقديم طلب جديد</h2>
      
      {/* Personal Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">المعلومات الشخصية</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField label="نوع جامعة المتقدم" required>
            <Select
              options={[
                { value: 'government', label: 'جامعة حكومية' },
                { value: 'private', label: 'جامعة خاصة' }
              ]}
              value={formData.universityType}
              onChange={(e) => setFormData({ ...formData, universityType: e.target.value })}
            />
          </FormField>
          <FormField label="الجامعة التي يعمل بها المتقدم" required>
            <Input
              type="text"
              value={formData.university}
              onChange={(e) => setFormData({ ...formData, university: e.target.value })}
            />
          </FormField>
        </div>
      </div>

      {/* Research Details */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">تفاصيل البحث</h3>
        <FormField label="عنوان البحث" required>
          <Input
            type="text"
            value={formData.researchTitle}
            onChange={(e) => setFormData({ ...formData, researchTitle: e.target.value })}
          />
        </FormField>
        <FormField label="الملخص" required>
          <textarea
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={4}
            value={formData.abstract}
            onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
          />
        </FormField>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField label="التخصص العام" required>
            <Input
              type="text"
              value={formData.generalSpecialization}
              onChange={(e) => setFormData({ ...formData, generalSpecialization: e.target.value })}
            />
          </FormField>
          <FormField label="التخصص الدقيق" required>
            <Input
              type="text"
              value={formData.specificSpecialization}
              onChange={(e) => setFormData({ ...formData, specificSpecialization: e.target.value })}
            />
          </FormField>
        </div>
      </div>

      {/* File Upload */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">المرفقات</h3>
        <FileUpload onFileSelect={handleFileSelect} />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button type="submit" variant="primary" size="lg">
          تقديم الطلب
        </Button>
      </div>
    </form>
  );
}