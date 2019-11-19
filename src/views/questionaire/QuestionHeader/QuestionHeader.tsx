import React, { memo } from 'react';
import { Employee } from '../../../../types/employee';
import * as S from './QuestionHeader.style';

const QuestionHeader: React.FC<Props> = ({ employee, title }) => {
  return (
    <S.Container>
      <div>
        <S.Headline>{title}</S.Headline>
        <S.TagLine>{`share your feedback for ${employee.firstName} ${employee.lastName}`}</S.TagLine>
      </div>
      <S.Avatar src={employee.avatarUrl} />
    </S.Container>
  );
};

type Props = {
  employee: Employee;
  title: string;
};

export default memo(QuestionHeader);
