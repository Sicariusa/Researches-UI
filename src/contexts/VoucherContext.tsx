import React, { createContext, useContext, useState } from 'react';

interface Application {
  id: string;
  university: string;
  faculty: string;
  status: 'pending' | 'approved' | 'rejected';
  documents: Array<{
    id: string;
    name: string;
    type: string;
    status: 'pending' | 'approved' | 'rejected';
  }>;
}

interface VoucherContextType {
  applications: Application[];
  selectedApplication: Application | null;
  stats: {
    pending: number;
    approved: number;
    rejected: number;
  };
  openApplication: (id: string) => void;
  closeApplication: () => void;
  validateDocument: (documentId: string, status: 'approved' | 'rejected', reason?: string) => void;
}

// Sample data
const initialApplications: Application[] = [
  {
    id: 'APP001',
    university: 'جامعة المنصورة',
    faculty: 'كلية الهندسة',
    status: 'pending',
    documents: [
      {
        id: 'DOC001',
        name: 'خطاب العميد',
        type: 'PDF',
        status: 'pending'
      },
      {
        id: 'DOC002',
        name: 'البحث العلمي',
        type: 'PDF',
        status: 'pending'
      }
    ]
  },
  {
    id: 'APP002',
    university: 'جامعة القاهرة',
    faculty: 'كلية العلوم',
    status: 'pending',
    documents: [
      {
        id: 'DOC003',
        name: 'خطاب العميد',
        type: 'PDF',
        status: 'pending'
      },
      {
        id: 'DOC004',
        name: 'البحث العلمي',
        type: 'PDF',
        status: 'pending'
      }
    ]
  },
  {
    id: 'APP003',
    university: 'جامعة عين شمس',
    faculty: 'كلية الطب',
    status: 'approved',
    documents: [
      {
        id: 'DOC005',
        name: 'خطاب العميد',
        type: 'PDF',
        status: 'approved'
      },
      {
        id: 'DOC006',
        name: 'البحث العلمي',
        type: 'PDF',
        status: 'approved'
      }
    ]
  }
];

const VoucherContext = createContext<VoucherContextType | null>(null);

export function VoucherProvider({ children }: { children: React.ReactNode }) {
  const [applications, setApplications] = useState<Application[]>(initialApplications);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);

  const stats = {
    pending: applications.filter(app => app.status === 'pending').length,
    approved: applications.filter(app => app.status === 'approved').length,
    rejected: applications.filter(app => app.status === 'rejected').length
  };

  const openApplication = (id: string) => {
    const application = applications.find(app => app.id === id);
    if (application) {
      setSelectedApplication(application);
    }
  };

  const closeApplication = () => {
    setSelectedApplication(null);
  };

  const validateDocument = (documentId: string, status: 'approved' | 'rejected', reason?: string) => {
    if (!selectedApplication) return;

    const updatedDocuments = selectedApplication.documents.map(doc =>
      doc.id === documentId ? { ...doc, status, rejectionReason: reason } : doc
    );

    const updatedApplication = {
      ...selectedApplication,
      documents: updatedDocuments,
      status: updatedDocuments.every(doc => doc.status === 'approved') ? 'approved' :
              updatedDocuments.some(doc => doc.status === 'rejected') ? 'rejected' : 'pending'
    };

    setSelectedApplication(updatedApplication);
    setApplications(apps =>
      apps.map(app =>
        app.id === selectedApplication.id ? updatedApplication : app
      )
    );
  };

  return (
    <VoucherContext.Provider value={{
      applications,
      selectedApplication,
      stats,
      openApplication,
      closeApplication,
      validateDocument
    }}>
      {children}
    </VoucherContext.Provider>
  );
}

export function useVoucherContext() {
  const context = useContext(VoucherContext);
  if (!context) {
    throw new Error('useVoucherContext must be used within a VoucherProvider');
  }
  return context;
}