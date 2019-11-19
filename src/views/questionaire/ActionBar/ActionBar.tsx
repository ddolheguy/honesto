import React, { memo } from 'react';
import { Button } from '../../../components';
import * as S from './ActionBar.style';

const ActionBar: React.FC<Props> = ({
  canSkip = true,
  currentQuestion,
  noOfQuestions,
  onPrevious,
  onSkip,
  onNext
}) => {
  // TODO: Link up the rating, hard coded for demo
  const rating = 3;
  const progress =
    noOfQuestions > 0 ? (currentQuestion / noOfQuestions) * 100 : 0;
  return (
    <>
      <S.Container>
        <Button.Secondary disabled={currentQuestion === 0} onClick={onPrevious}>
          Previous
        </Button.Secondary>
        {canSkip ? (
          <Button.Secondary onClick={onSkip}>Skip</Button.Secondary>
        ) : null}
        <Button.Primary
          disabled={currentQuestion === noOfQuestions}
          onClick={onNext}
        >
          Next
        </Button.Primary>
      </S.Container>

      <S.ProgressBar progress={progress}>
        <div />
      </S.ProgressBar>

      <S.Footer>
        <S.QuestionsCompleted>
          QUESTIONS COMPLETED
          <div>{`${currentQuestion}/${noOfQuestions}`}</div>
        </S.QuestionsCompleted>
        <div>
          {new Array(5).fill({}).map((_, index) => (
            <S.StarButton key={index} active={rating > index} />
          ))}
          <S.FlagButton />
        </div>
      </S.Footer>
    </>
  );
};

type Props = {
  noOfQuestions: number;
  currentQuestion: number;
  canSkip?: boolean;
  onPrevious: () => void;
  onSkip: () => void;
  onNext: () => void;
};

export default memo(ActionBar);
