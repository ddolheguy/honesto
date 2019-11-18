import React, { memo } from 'react';
import { Employee } from '../../../../types/employee';
import { Button } from '../../../components';
import { DeepReadonlyObject } from '../../../utils';
import * as S from './EmployeeRow.style';

const EmployeeRow: React.FC<Props> = ({ employee, onClickEmployee }) => {
  return (
    <S.Container>
      <S.Group>
        <S.StyledAvatar src={employee.avatarUrl} />
        <S.Name>{`${employee.firstName} ${employee.lastName}`}</S.Name>
      </S.Group>
      {employee.completed ? (
        <Button.Secondary onClick={onClickEmployee}>
          View Submission
        </Button.Secondary>
      ) : (
        <Button.Primary onClick={onClickEmployee}>Fill Out</Button.Primary>
      )}
    </S.Container>
  );
};

type Props = {
  employee: DeepReadonlyObject<Employee>;
  onClickEmployee: () => void;
};

export default memo(EmployeeRow);
