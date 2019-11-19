import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { match, RouteComponentProps, withRouter } from 'react-router';
import * as EmployeeAction from '../../../redux/actions/employeeActions';
import * as QuestionAction from '../../../redux/actions/questionActions';
import { RootState } from '../../../redux/reducers/rootReducer';
import { employeeSelector } from '../../../redux/selectors/employee';
import { answerSelector } from '../../../redux/selectors/employeeAnswers';
import {
  isLoadingSelector,
  questionsListSelector
} from '../../../redux/selectors/questions';
import SingleQuestion from '../SingleQuestion/SingleQuestion';
import * as S from './Questionaire.style';

const Questionaire: React.FC<Props> = ({
  answers,
  employee,
  isLoading,
  questions,
  match,
  onEmployeeQuestionsComplete,
  onFetchQuestions,
  onSaveAnswer
}) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  useEffect(() => {
    onFetchQuestions(match.params.employeeId);
  }, [match, onFetchQuestions]);
  return (
    <S.Container>
      {employee && questions && questions[questionIndex] ? (
        <>
          <SingleQuestion
            answer={answers.find(
              a => a.questionId === questions[questionIndex].id
            )}
            currentQuestion={questionIndex}
            noOfQuestions={questions.length}
            employee={employee}
            question={questions[questionIndex]}
            onSaveAnswer={onSaveAnswer}
            onPrevious={() => setQuestionIndex(questionIndex - 1)}
            onNext={() => {
              if (questionIndex + 1 < questions.length) {
                setQuestionIndex(questionIndex + 1);
              } else if (employee) {
                onEmployeeQuestionsComplete(employee);
              }
            }}
          />
        </>
      ) : null}
    </S.Container>
  );
};

const mapStateToProps = (state: RootState, { match }: OwnProps) => ({
  isLoading: isLoadingSelector(state),
  employee: employeeSelector(state, {
    employeeId: match.params.employeeId
  }),
  questions: questionsListSelector(state),
  answers: answerSelector(state)
});

const dispatchToProps = {
  onFetchQuestions: QuestionAction.onFetchQuestions.request,
  onSaveAnswer: QuestionAction.onSaveAnswer.request,
  onEmployeeQuestionsComplete:
    EmployeeAction.onEmployeeQuestionsComplete.request
};

type QuestionNavigationProps = { employeeId: string };
type OwnProps = { match: match<QuestionNavigationProps> };
type Props = RouteComponentProps<QuestionNavigationProps> &
  ReturnType<typeof mapStateToProps> &
  typeof dispatchToProps & {};

export default connect(
  mapStateToProps,
  dispatchToProps
)(memo(withRouter(Questionaire)));
