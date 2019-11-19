import React, { memo } from 'react';
import { Question } from '../../../../types/question';
import { DeepReadonlyObject } from '../../../utils';
import * as S from './QuestionText.style';

const QuestionText: React.FC<Props> = ({ answer, onAnswer }) => {
  return (
    <S.Container>
      <S.TextArea
        onBlur={e => onAnswer(e.currentTarget.value)}
        value={answer || ''}
      />
    </S.Container>
  );
};

type Props = {
  answer?: string;
  question: DeepReadonlyObject<Question>;
  onAnswer: (answer: string) => void;
};

export default memo(QuestionText);
