import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { match, RouteComponentProps, withRouter } from 'react-router';
import * as Action from '../../../redux/actions/questionActions';
import { RootState } from '../../../redux/reducers/rootReducer';
import { employeeSelector } from '../../../redux/selectors/employee';
import {
  isLoadingSelector,
  questionsListSelector
} from '../../../redux/selectors/questions';
import SingleQuestion from '../SingleQuestion/SingleQuestion';
import * as S from './Questionaire.style';

const Questionaire: React.FC<Props> = ({
  employee,
  isLoading,
  questions,
  onFetchQuestions
}) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  useEffect(() => {
    onFetchQuestions();
  }, [onFetchQuestions]);
  return (
    <S.Container>
      {employee && questions ? (
        <>
          <SingleQuestion
            currentQuestion={questionIndex}
            noOfQuestions={questions.length}
            employee={employee}
            question={questions[questionIndex]}
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
  questions: questionsListSelector(state)
});

const dispatchToProps = {
  onFetchQuestions: Action.onFetchQuestions.request
};

type QuestionNavigationProps = { employeeId: string };
type OwnProps = { match: match<QuestionNavigationProps> };
type Props = RouteComponentProps &
  ReturnType<typeof mapStateToProps> &
  typeof dispatchToProps & {};

export default connect(
  mapStateToProps,
  dispatchToProps
)(memo(withRouter(Questionaire)));
