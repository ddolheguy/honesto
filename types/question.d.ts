export interface Question {
  id: string;
  title: string;
  type: 'multipleChoice' | 'rating' | 'text';
  options?: string[];
  description?: string;
}
