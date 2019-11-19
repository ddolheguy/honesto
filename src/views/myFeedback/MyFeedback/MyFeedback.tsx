import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import EmployeeRow from '../../../components/EmployeeRow/EmployeeRow';
import { RootState } from '../../../redux/reducers/rootReducer';
import { completedEmployeeListSelector } from '../../../redux/selectors/employee';
import * as S from './MyFeedback.style';

const periods = [{ value: '1', label: 'November 2019' }];

const MyFeedback: React.FC<Props> = ({ employees, match }) => {
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<
    string | undefined
  >(match.params.employeeId);

  useEffect(() => {
    if (!match.params.employeeId && employees && employees.length > 0) {
      setSelectedEmployeeId(employees[0].id);
    }
  }, [employees, match]);
  return (
    <S.Container>
      <S.SplitRow>
        <S.Headline>My Feedback</S.Headline>
        <S.Row>
          <S.FeedbackPeriod>
            <S.FieldLabel>FEEDBACK PERIOD</S.FieldLabel>
            <S.StyledSelect value={periods[0]} options={periods} />
          </S.FeedbackPeriod>
          <S.StyledPrimary>Publish Feedback</S.StyledPrimary>
        </S.Row>
      </S.SplitRow>
      <S.Content>
        <S.FeedbackTitle>Feedback Received</S.FeedbackTitle>
        <S.EmployeeList>
          {employees.map((employee, index) => (
            <EmployeeRow
              key={index}
              isSelected={employee.id === selectedEmployeeId}
              employee={employee}
              showSubmission={false}
              onClickEmployee={() => setSelectedEmployeeId(employee.id)}
            />
          ))}
        </S.EmployeeList>
      </S.Content>
    </S.Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  employees: completedEmployeeListSelector(state)
});

type NavProps = { employeeId: string };
type Props = RouteComponentProps<NavProps> & ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(memo(withRouter(MyFeedback)));
