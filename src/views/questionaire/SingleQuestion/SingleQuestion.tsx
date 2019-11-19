import React, { memo } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Employee } from '../../../../types/employee';
import { Question } from '../../../../types/question';
import { BackButton } from '../../../components';
import { DeepReadonlyObject } from '../../../utils';
import ActionBar from '../ActionBar/ActionBar';
import QuestionHeader from '../QuestionHeader/QuestionHeader';
import QuestionMultiChoice from '../QuestionMultiChoice/QuestionMultiChoice';
import QuestionRating from '../QuestionRating/QuestionRating';
import QuestionText from '../QuestionText/QuestionText';
import * as S from './SingleQuestion.style';

const SingleQuestion: React.FC<Props> = ({
  employee,
  history,
  question,
  noOfQuestions,
  currentQuestion
}) => {
  return (
    <S.Container>
      <BackButton onBackClick={() => history.goBack()} />
      <QuestionHeader employee={employee} title={question.title} />
      <S.Content>
        {question.type === 'multipleChoice' ? (
          <QuestionMultiChoice
            answer={0}
            question={question}
            onAnswer={answer => {
              console.log(answer);
            }}
          />
        ) : null}
        {question.type === 'rating' ? (
          <QuestionRating
            answer={6}
            question={question}
            onAnswer={answer => {
              console.log(answer);
            }}
          />
        ) : null}
        {question.type === 'rating' ? (
          <QuestionText
            answer={''}
            question={question}
            onAnswer={answer => {
              console.log(answer);
            }}
          />
        ) : null}
        <ActionBar
          noOfQuestions={noOfQuestions}
          currentQuestion={currentQuestion}
          onPrevious={() => {
            console.log('ss');
          }}
          onSkip={() => {
            console.log('ss');
          }}
          onNext={() => {
            console.log('ss');
          }}
        />
      </S.Content>
    </S.Container>
  );
};

type Props = RouteComponentProps & {
  noOfQuestions: number;
  currentQuestion: number;
  employee: DeepReadonlyObject<Employee>;
  question: DeepReadonlyObject<Question>;
};

export default memo(withRouter(SingleQuestion));
