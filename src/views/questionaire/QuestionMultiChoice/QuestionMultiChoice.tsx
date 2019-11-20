import React, { memo, useMemo } from 'react';
import { Question } from '../../../../types/question';
import * as S from './QuestionMultiChoice.style';

const QuestionMultiChoice: React.FC<Props> = ({
  answer,
  question,
  onAnswer
}) => {
  const answerValue = useMemo(
    () => (answer ? parseInt(answer, 10) : undefined),
    [answer]
  );
  return (
    <S.Container>
      {question.options &&
        question.options.map((option, index) => (
          <S.Option
            key={index}
            answered={answerValue === index + 1}
            dangerouslySetInnerHTML={{ __html: option }}
            onClick={() => onAnswer(`${index + 1}`)}
          />
        ))}
    </S.Container>
  );
};

type Props = {
  answer?: string;
  question: Question;
  onAnswer: (answer: string) => void;
};

export default memo(QuestionMultiChoice);
