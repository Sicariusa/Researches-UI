export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  coverPhoto?: string;
}

export interface MenuItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface Resource {
  title: string;
  description: string;
  type: 'documentation' | 'template' | 'case-study' | 'best-practice';
  url: string;
}