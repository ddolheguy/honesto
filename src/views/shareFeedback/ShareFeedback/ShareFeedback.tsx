import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as Action from '../../../redux/actions/employeeActions';
import { RootState } from '../../../redux/reducers/rootReducer';
import {
  employeeListSelector,
  isLoadingSelector
} from '../../../redux/selectors/employee';
import EmployeeRow from '../EmployeeRow/EmployeeRow';
import * as S from './ShareFeedback.style';

const periods = [{ value: '1', label: 'November 2019' }];

const ShareFeedback: React.FC<Props> = ({
  isLoading,
  employees,
  onFetchEmplpyees
}) => {
  useEffect(() => {
    onFetchEmplpyees();
  }, [onFetchEmplpyees]);
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
            onClickEmployee={() => {}}
          />
        ))}
      </S.EmployeeList>
    </S.Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  isLoading: isLoadingSelector(state),
  employees: employeeListSelector(state)
});

const dispatchToProps = {
  onFetchEmplpyees: Action.onFetchEmplpyees.request
};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchToProps;

export default connect(mapStateToProps, dispatchToProps)(ShareFeedback);
