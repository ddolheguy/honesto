export interface Question {
  readonly id: string;
  readonly title: string;
  readonly type: 'multipleChoice' | 'rating' | 'text';
  readonly options?: string[];
  readonly description?: string;
}

export interface EmployeeAnswers {
  employeeId: string;
  answers: Answer[];
  completed: boolean;
  lastUpdated: string;
}

export interface SaveAnswerRequest {
  employeeId: string;
  answer: Answer;
}

export interface Answer {
  questionId: string;
  skipped: boolean;
  answer?: string;
}
