import React, { memo } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import EmployeeRow from '../../../components/EmployeeRow/EmployeeRow';
import { RootState } from '../../../redux/reducers/rootReducer';
import { employeeListSelector } from '../../../redux/selectors/employee';
import * as S from './TeamFeedback.style';

const TeamFeedback: React.FC<Props> = ({ employees, history }) => {
  return (
    <S.Container>
      <S.Headline>Thank you for sharing your feedback!</S.Headline>
      <S.SubHeadline>
        Continue to give feedback to other team members.
      </S.SubHeadline>
      <S.EmployeeList>
        {employees.map((employee, index) => (
          <EmployeeRow
            key={index}
            employee={employee}
            onClickEmployee={() => history.push(`/questions/${employee.id}`)}
          />
        ))}
      </S.EmployeeList>
    </S.Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  employees: employeeListSelector(state, { isTeam: true })
});

type Props = RouteComponentProps & ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(memo(withRouter(TeamFeedback)));
