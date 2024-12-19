export interface Research {
  id: string;
  title: string;
  researcher: string;
  email: string;
  status: 'new' | 'prepared' | 'revised';
  preparer?: string;
}