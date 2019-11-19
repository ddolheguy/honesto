import React, { memo } from 'react';
import { Question } from '../../../../types/question';
import { DeepReadonlyObject } from '../../../utils';
import * as S from './QuestionRating.style';

const QuestionRating: React.FC<Props> = ({ answer, onAnswer }) => {
  return (
    <S.Container>
      <S.RatingBar>
        {new Array(10).fill({}).map((_, index) => (
          <S.Tile
            key={index}
            active={answer !== undefined && answer > index}
            onClick={() => onAnswer(index + 1)}
          />
        ))}
      </S.RatingBar>
      <S.RatingValue>{`${answer}/10`}</S.RatingValue>
    </S.Container>
  );
};

type Props = {
  answer?: number;
  question: DeepReadonlyObject<Question>;
  onAnswer: (answer: number) => void;
};

export default memo(QuestionRating);
