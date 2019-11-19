export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
  answers?: Answer[];
  completed: boolean;
}

export interface Answer {
  questionId: string;
  answer: string;
}
