import React, { memo } from 'react';
import { Button } from '..';
import * as S from './ActionBar.style';

const ActionBar: React.FC<Props> = ({
  canSkip = true,
  canNext,
  currentQuestion,
  noOfQuestions,
  onPrevious,
  onSkip,
  onNext
}) => {
  // TODO: Link up the rating, hard coded for demo
  const rating = 3;
  const progress =
    noOfQuestions > 0 ? ((currentQuestion + 1) / noOfQuestions) * 100 : 0;
  const previousDisabled = currentQuestion === 0;
  return (
    <div>
      <S.Container>
        <Button.Secondary
          disabled={previousDisabled}
          onClick={!previousDisabled ? onPrevious : undefined}
        >
          Previous
        </Button.Secondary>
        {canSkip ? (
          <Button.Secondary onClick={onSkip}>Skip</Button.Secondary>
        ) : null}
        <Button.FormAction
          disabled={!canNext || currentQuestion === noOfQuestions}
          onClick={() => (canNext ? onNext() : undefined)}
        >
          {noOfQuestions === currentQuestion + 1 ? 'Finish' : 'Next'}
        </Button.FormAction>
      </S.Container>

      <S.ProgressBar progress={progress}>
        <div />
      </S.ProgressBar>

      <S.Footer>
        <S.QuestionsCompleted>
          QUESTIONS COMPLETED
          <div>{`${currentQuestion + 1}/${noOfQuestions}`}</div>
        </S.QuestionsCompleted>
        <div>
          {new Array(5).fill({}).map((_, index) => (
            <S.StarButton key={index} active={rating > index} />
          ))}
          <S.FlagButton />
        </div>
      </S.Footer>
    </div>
  );
};

type Props = {
  noOfQuestions: number;
  currentQuestion: number;
  canSkip?: boolean;
  canNext: boolean;
  onPrevious: () => void;
  onSkip: () => void;
  onNext: () => void;
};

export default memo(ActionBar);
