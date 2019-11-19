import React, { memo } from 'react';
import { Question } from '../../../../types/question';
import * as S from './QuestionText.style';

const QuestionText: React.FC<Props> = ({ answer, onAnswer }) => {
  return (
    <S.Container>
      <S.TextArea
        defaultValue={answer || ''}
        onBlur={e => onAnswer(e.currentTarget.value)}
      />
    </S.Container>
  );
};

type Props = {
  answer?: string;
  question: Question;
  onAnswer: (answer: string) => void;
};

export default memo(QuestionText);
