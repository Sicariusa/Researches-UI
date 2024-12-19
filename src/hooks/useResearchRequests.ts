import { useState, useCallback, useMemo } from 'react';
import type { ResearchRequest, ResearchStats } from '../types/dashboard';

export function useResearchRequests(initialRequests: ResearchRequest[]) {
  const [requests, setRequests] = useState<ResearchRequest[]>(initialRequests);

  const updateRequestStatus = useCallback((
    requestId: string,
    status: 'approved' | 'rejected',
    reason?: string
  ) => {
    setRequests(prev => prev.map(request => 
      request.id === requestId
        ? { ...request, status, rejectionReason: reason }
        : request
    ));
  }, []);

  const stats: ResearchStats = useMemo(() => ({
    pending: requests.filter(r => r.status === 'pending').length,
    approved: requests.filter(r => r.status === 'approved').length,
    rejected: requests.filter(r => r.status === 'rejected').length
  }), [requests]);

  return {
    requests,
    stats,
    updateRequestStatus
  };
}