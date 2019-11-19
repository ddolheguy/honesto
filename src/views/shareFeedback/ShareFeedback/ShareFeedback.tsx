import React, { memo } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import EmployeeRow from '../../../components/EmployeeRow/EmployeeRow';
import { RootState } from '../../../redux/reducers/rootReducer';
import { employeeListSelector } from '../../../redux/selectors/employee';
import * as S from './ShareFeedback.style';

const periods = [{ value: '1', label: 'November 2019' }];

const ShareFeedback: React.FC<Props> = ({ employees, history }) => {
  return (
    <S.Container>
      <S.SplitRow>
        <S.Headline>Share Feedback</S.Headline>
        <div>
          <S.FieldLabel>FEEDBACK PERIOD</S.FieldLabel>
          <S.StyledSelect value={periods[0]} options={periods} />
        </div>
      </S.SplitRow>
      <S.EmployeeList>
        {employees.map((employee, index) => (
          <EmployeeRow
            key={index}
            employee={employee}
            onClickEmployee={() =>
              history.push(
                employee.completed
                  ? `/my-feedback/${employee.id}`
                  : `/questions/${employee.id}`
              )
            }
          />
        ))}
      </S.EmployeeList>
    </S.Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  employees: employeeListSelector(state, { isTeam: false })
});

type Props = RouteComponentProps & ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(memo(withRouter(ShareFeedback)));
