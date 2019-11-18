export interface Question {
  id: string;
  title: string;
  type: string;
  options?: Option[];
  description?: string;
}

interface Option {
  title: string;
  message: string;
}
