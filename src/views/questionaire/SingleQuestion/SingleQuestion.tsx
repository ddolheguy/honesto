import React, { memo } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Employee } from '../../../../types/employee';
import {
  Answer,
  Question,
  SaveAnswerRequest
} from '../../../../types/question';
import { BackButton } from '../../../components';
import ActionBar from '../../../components/ActionBar/ActionBar';
import QuestionHeader from '../QuestionHeader/QuestionHeader';
import QuestionMultiChoice from '../QuestionMultiChoice/QuestionMultiChoice';
import QuestionRating from '../QuestionRating/QuestionRating';
import QuestionText from '../QuestionText/QuestionText';
import * as S from './SingleQuestion.style';

export const SingleQuestion: React.FC<Props> = ({
  answer,
  employee,
  history,
  question,
  noOfQuestions,
  currentQuestion,
  onSaveAnswer,
  onPrevious,
  onNext
}) => {
  const saveAnswer = (skipped: boolean, answer?: string) => {
    onSaveAnswer({
      employeeId: employee.id,
      answer: {
        questionId: question.id,
        skipped,
        answer
      }
    });
  };

  const skipAnswer = () => {
    saveAnswer(true, undefined);
    onNext();
  };

  return (
    <S.Container>
      <BackButton onBackClick={() => history.goBack()} />
      <QuestionHeader employee={employee} title={question.title} />
      <S.Content>
        {question.type === 'multipleChoice' ? (
          <QuestionMultiChoice
            answer={answer ? answer.answer : undefined}
            question={question}
            onAnswer={answer => saveAnswer(false, answer)}
          />
        ) : null}
        {question.type === 'rating' ? (
          <QuestionRating
            answer={answer ? answer.answer : undefined}
            question={question}
            onAnswer={answer => saveAnswer(false, answer)}
          />
        ) : null}
        {question.type === 'text' ? (
          <QuestionText
            answer={answer ? answer.answer : undefined}
            question={question}
            onAnswer={answer => saveAnswer(false, answer)}
          />
        ) : null}
        <ActionBar
          canSkip={question.type !== 'text'}
          canNext={answer !== undefined}
          noOfQuestions={noOfQuestions}
          currentQuestion={currentQuestion}
          onPrevious={onPrevious}
          onSkip={() => skipAnswer()}
          onNext={onNext}
        />
      </S.Content>
    </S.Container>
  );
};

type Props = RouteComponentProps & {
  answer?: Answer;
  noOfQuestions: number;
  currentQuestion: number;
  employee: Employee;
  question: Question;
  onSaveAnswer: (request: SaveAnswerRequest) => void;
  onPrevious: () => void;
  onNext: () => void;
};

export default memo(withRouter(SingleQuestion));
