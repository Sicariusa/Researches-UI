import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import DashboardStats from '../components/dashboard/DashboardStats';
import ResearchTable from '../components/dashboard/ResearchTable';
import RequestDetails from '../components/dashboard/RequestDetails';
import ResearchHistory from '../components/dashboard/ResearchHistory';
import { useResearchRequests } from '../hooks/useResearchRequests';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const initialRequests = [
  {
    id: '3748',
    name: 'شيماء محمود عبدالمجيد خليفة',
    email: 'shaimaa.scu@gmail.com',
    phone: '01119304365',
    university: 'جامعة المنصورة',
    faculty: 'الحاسبات والمعلومات',
    department: 'حاسبات ونظم',
    requestType: 'ترقية للمرة الأولى-تميز علمي',
    status: 'pending',
    submissionDate: '2024-03-15'
  },
  {
  id: '3768',
  name: 'فاطمة أحمد محمد علي',
  email: 'fatma_zahraa@mis.scu.eg',
  phone: '201009717292',
  university: 'جامعة الأقصر',
  faculty: 'الآثار',
  department: 'الآثار المصرية',
  requestType: 'ترقية إعادة تقديم',
  status: 'pending',
  submissionDate: '2024-03-14'
},
{
  id: '3769',
  name: 'فاطمة أحمد محمد علي',
  email: 'fatma_zahraa@mis.scu.eg',
  phone: '201009717292',
  university: 'جامعة الأقصر',
  faculty: 'الآثار',
  department: 'الآثار المصرية',
  requestType: 'ترقية إعادة تقديم',
  status: 'pending',
  submissionDate: '2024-03-14'
},
{
  id: '3770',
  name: 'فاطمة أحمد محمد علي',
  email: 'fatma_zahraa@mis.scu.eg',
  phone: '201009717292',
  university: 'جامعة الأقصر',
  faculty: 'الآثار',
  department: 'الآثار المصرية',
  requestType: 'ترقية إعادة تقديم',
  status: 'pending',
  submissionDate: '2024-03-14'
},
{
  id: '3771',
  name: 'فاطمة أحمد محمد علي',
  email: 'fatma_zahraa@mis.scu.eg',
  phone: '201009717292',
  university: 'جامعة الأقصر',
  faculty: 'الآثار',
  department: 'الآثار المصرية',
  requestType: 'ترقية إعادة تقديم',
  status: 'pending',
  submissionDate: '2024-03-14'
},
{
  id: '3772',
  name: 'فاطمة أحمد محمد علي',
  email: 'fatma_zahraa@mis.scu.eg',
  phone: '201009717292',
  university: 'جامعة الأقصر',
  faculty: 'الآثار',
  department: 'الآثار المصرية',
  requestType: 'ترقية إعادة تقديم',
  status: 'pending',
  submissionDate: '2024-03-14'
},
{
  id: '3773',
  name: 'فاطمة أحمد محمد علي',
  email: 'fatma_zahraa@mis.scu.eg',
  phone: '201009717292',
  university: 'جامعة الأقصر',
  faculty: 'الآثار',
  department: 'الآثار المصرية',
  requestType: 'ترقية إعادة تقديم',
  status: 'pending',
  submissionDate: '2024-03-14'
},
{
  id: '3774',
  name: 'فاطمة أحمد محمد علي',
  email: 'fatma_zahraa@mis.scu.eg',
  phone: '201009717292',
  university: 'جامعة الأقصر',
  faculty: 'الآثار',
  department: 'الآثار المصرية',
  requestType: 'ترقية إعادة تقديم',
  status: 'pending',
  submissionDate: '2024-03-14'
},
{
  id: '3775',
  name: 'فاطمة أحمد محمد علي',
  email: 'fatma_zahraa@mis.scu.eg',
  phone: '201009717292',
  university: 'جامعة الأقصر',
  faculty: 'الآثار',
  department: 'الآثار المصرية',
  requestType: 'ترقية إعادة تقديم',
  status: 'pending',
  submissionDate: '2024-03-14'
}

  // ... add more initial requests
];

export default function DashboardPage() {
  const [selectedRequestId, setSelectedRequestId] = useState<string | null>(null);
  const [showHistory, setShowHistory] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const { requests, stats, updateRequestStatus } = useResearchRequests(initialRequests);

  const selectedRequest = requests.find(r => r.id === selectedRequestId);

  const handleApprove = (id: string) => {
    updateRequestStatus(id, 'approved');
    setSelectedRequestId(null);
  };

  const handleReject = (id: string, reason: string) => {
    updateRequestStatus(id, 'rejected', reason);
    setSelectedRequestId(null);
  };

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">لوحة التحكم</h1>
        <p className="text-gray-600">مراجعة وتحقق من طلبات البحث العلمي</p>
      </div>

      <DashboardStats {...stats} />

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="البحث في الطلبات..."
            className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-brand-teal"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button
          variant="outline"
          icon={<Filter className="h-5 w-5" />}
        >
          تصفية النتائج
        </Button>
      </div>

      <Card>
        <div className="p-4 border-b">
          <h2 className="text-lg font-medium">قائمة الطلبات</h2>
          <p className="text-sm text-gray-500">عرض وإدارة طلبات البحث العلمي</p>
        </div>
        <ResearchTable 
          requests={requests}
          onViewDetails={setSelectedRequestId}
          onViewHistory={() => setShowHistory(true)}
        />
      </Card>

      {selectedRequest && (
        <RequestDetails
          isOpen={true}
          onClose={() => setSelectedRequestId(null)}
          request={selectedRequest}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      )}

      {showHistory && (
        <ResearchHistory
          researcherId="123"
          history={[
            {
              id: '1',
              date: '2024-02-15',
              status: 'approved',
              type: 'ترقية للمرة الأولى'
            },
            {
              id: '2',
              date: '2024-01-20',
              status: 'rejected',
              type: 'معامل تأثير',
              reason: 'عدم اكتمال المستندات المطلوبة'
            }
          ]}
          onClose={() => setShowHistory(false)}
        />
      )}
    </div>
  );
}