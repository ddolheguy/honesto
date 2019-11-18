export interface Employee {
  firstName: string;
  lastName: string;
  avatarUrl: string;
  answers?: Answer[];
}

export interface Answer {
  questionId: string;
  answer: string;
}
