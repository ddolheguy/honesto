import React, { memo } from 'react';
import { Employee } from '../../../types/employee';
import { DeepReadonlyObject } from '../../utils';
import { Primary, Secondary } from '../Button/Button';
import * as S from './EmployeeRow.style';

const EmployeeRow: React.FC<Props> = ({
  employee,
  isSelected = false,
  onClickEmployee,
  showSubmission = true
}) => {
  return (
    <S.Container
      isSelected={isSelected}
      showSubmission={showSubmission}
      onClick={() => (!showSubmission ? onClickEmployee() : undefined)}
    >
      <S.Group>
        <S.StyledAvatar src={employee.avatarUrl} />
        <S.Name>{`${employee.firstName} ${employee.lastName}`}</S.Name>
      </S.Group>
      {showSubmission ? (
        <>
          {employee.completed ? (
            <Secondary onClick={onClickEmployee}>View Submission</Secondary>
          ) : (
            <Primary onClick={onClickEmployee}>Fill Out</Primary>
          )}
        </>
      ) : null}
    </S.Container>
  );
};

type Props = {
  employee: DeepReadonlyObject<Employee>;
  isSelected?: boolean;
  onClickEmployee: () => void;
  showSubmission?: boolean;
};

export default memo(EmployeeRow);
