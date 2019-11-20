import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import * as Action from '../../../redux/actions/questionActions';
import { RootState } from '../../../redux/reducers/rootReducer';
import { employeeSelector } from '../../../redux/selectors/employee';
import { answerSelector } from '../../../redux/selectors/employeeAnswers';
import { questionsListSelector } from '../../../redux/selectors/questions';
import QuestionAnswer from '../QuestionAnswer/QuestionAnswer';
import * as S from './QuestionResults.style';

const QuestionResults: React.FC<Props> = ({
  employee,
  employeeId,
  questions,
  answers,
  onFetchQuestions
}) => {
  useEffect(() => {
    onFetchQuestions(employeeId);
  }, [employeeId, onFetchQuestions]);

  if (!employee) {
    return null;
  }
  return (
    <S.Container>
      <S.Headline>
        {`${employee.firstName} ${employee.lastName}'s Feedback`}
      </S.Headline>
      {questions &&
        questions.map(question => (
          <QuestionAnswer
            key={question.id}
            answer={answers.find(a => a.questionId === question.id)}
            question={question}
          />
        ))}
    </S.Container>
  );
};

const mapStateToProps = (state: RootState, { employeeId }: OwnPwops) => ({
  employee: employeeSelector(state, {
    employeeId
  }),
  questions: questionsListSelector(state),
  answers: answerSelector(state)
});

const dispatchToProps = {
  onFetchQuestions: Action.onFetchQuestions.request
};

type OwnPwops = { employeeId: string };
type Props = ReturnType<typeof mapStateToProps> &
  typeof dispatchToProps & {
    employeeId: string;
  };

export default connect(mapStateToProps, dispatchToProps)(memo(QuestionResults));
