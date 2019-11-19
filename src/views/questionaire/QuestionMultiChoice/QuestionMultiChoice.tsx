import React, { memo } from 'react';
import { Question } from '../../../../types/question';
import { DeepReadonlyObject } from '../../../utils';
import * as S from './QuestionMultiChoice.style';

const QuestionMultiChoice: React.FC<Props> = ({
  answer,
  question,
  onAnswer
}) => {
  return (
    <S.Container>
      {question.options &&
        question.options.map((option, index) => (
          <S.Option
            key={index}
            answered={answer === index}
            dangerouslySetInnerHTML={{ __html: option }}
            onClick={() => onAnswer(index + 1)}
          />
        ))}
    </S.Container>
  );
};

type Props = {
  answer?: number;
  question: DeepReadonlyObject<Question>;
  onAnswer: (answer: number) => void;
};

export default memo(QuestionMultiChoice);
