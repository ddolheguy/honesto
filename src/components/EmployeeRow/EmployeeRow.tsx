import React, { memo } from 'react';
import { Employee } from '../../../types/employee';
import { DeepReadonlyObject } from '../../utils';
import { Primary, Secondary } from '../Button/Button';
import * as S from './EmployeeRow.style';

const EmployeeRow: React.FC<Props> = ({ employee, onClickEmployee }) => {
  return (
    <S.Container>
      <S.Group>
        <S.StyledAvatar src={employee.avatarUrl} />
        <S.Name>{`${employee.firstName} ${employee.lastName}`}</S.Name>
      </S.Group>
      {employee.completed ? (
        <Secondary onClick={onClickEmployee}>View Submission</Secondary>
      ) : (
        <Primary onClick={onClickEmployee}>Fill Out</Primary>
      )}
    </S.Container>
  );
};

type Props = {
  employee: DeepReadonlyObject<Employee>;
  onClickEmployee: () => void;
};

export default memo(EmployeeRow);
