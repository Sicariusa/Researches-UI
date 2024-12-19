import React, { createContext, useContext, useState } from 'react';
import type { Research } from '../types/coordinator';

interface ResearchContextType {
  researches: Research[];
  getResearchByStatus: (status: string) => Research[];
  updateResearchStatus: (id: string, status: string, preparerId?: string) => void;
}

const ResearchContext = createContext<ResearchContextType | null>(null);

const preparers = [
  { id: 'prep1', name: 'أحمد محمد' },
  { id: 'prep2', name: 'فاطمة علي' },
  { id: 'prep3', name: 'محمد أحمد' },
];

const initialResearches: Research[] = [
  {
    id: 'R001',
    title: 'دراسة تحليلية في علم النفس التربوي',
    researcher: 'د. محمد أحمد',
    email: 'mohamed.ahmed@example.com',
    status: 'new'
  },
  {
    id: 'R002',
    title: 'تطبيقات الذكاء الاصطناعي في التعليم',
    researcher: 'د. فاطمة علي',
    email: 'fatma.ali@example.com',
    status: 'prepared',
    preparer: 'أحمد محمد'
  },
  {
    id: 'R003',
    title: 'أثر التعلم عن بعد على التحصيل الدراسي',
    researcher: 'د. أحمد محمود',
    email: 'ahmed.mahmoud@example.com',
    status: 'revised',
    preparer: 'محمد علي'
  }
];

export function ResearchProvider({ children }: { children: React.ReactNode }) {
  const [researches, setResearches] = useState<Research[]>(initialResearches);

  const getResearchByStatus = (status: string) => {
    return researches.filter(research => research.status === status);
  };

  const updateResearchStatus = (id: string, status: string, preparerId?: string) => {
    setResearches(prev => prev.map(research => {
      if (research.id === id) {
        return {
          ...research,
          status,
          preparer: preparerId ? preparers.find(p => p.id === preparerId)?.name : research.preparer
        };
      }
      return research;
    }));
  };

  return (
    <ResearchContext.Provider value={{
      researches,
      getResearchByStatus,
      updateResearchStatus
    }}>
      {children}
    </ResearchContext.Provider>
  );
}

export function useResearch() {
  const context = useContext(ResearchContext);
  if (!context) {
    throw new Error('useResearch must be used within a ResearchProvider');
  }
  return context;
}