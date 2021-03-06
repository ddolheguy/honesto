import React, { memo } from 'react';
import * as S from './NoFeedback.style';

const NoFeedback: React.FC = () => {
  return (
    <S.Container>
      <S.Headline>
        No feedback to display{' '}
        <span role='img' aria-label='thinking'>
          🔮
        </span>
      </S.Headline>
      <S.TagLine>
        There is no feedback to display at this time – check back in a bit!
      </S.TagLine>
    </S.Container>
  );
};

export default memo(NoFeedback);
