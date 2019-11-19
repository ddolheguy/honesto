import React, { memo, useMemo } from 'react';
import { Question } from '../../../../types/question';
import * as S from './QuestionRating.style';

const QuestionRating: React.FC<Props> = ({ answer, question, onAnswer }) => {
  const answerValue = useMemo(
    () => (answer ? parseInt(answer, 10) : undefined),
    [answer]
  );
  return (
    <S.Container>
      {question.description ? (
        <S.Description>{question.description}</S.Description>
      ) : null}
      <S.RatingBar>
        {new Array(10).fill({}).map((_, index) => (
          <S.Tile
            key={index}
            active={answerValue !== undefined && answerValue > index}
            onClick={() => onAnswer(`${index + 1}`)}
          />
        ))}
      </S.RatingBar>
      <S.RatingValue>{`${answer || 0}/10`}</S.RatingValue>
    </S.Container>
  );
};

type Props = {
  answer?: string;
  question: Question;
  onAnswer: (answer: string) => void;
};

export default memo(QuestionRating);
