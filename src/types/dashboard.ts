export interface ResearchRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  university: string;
  faculty: string;
  department: string;
  requestType: string;
  status: 'pending' | 'approved' | 'rejected';
  submissionDate: string;
  rejectionReason?: string;
}

export interface ResearchStats {
  pending: number;
  approved: number;
  rejected: number;
}