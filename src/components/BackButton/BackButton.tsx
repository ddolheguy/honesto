import React, { memo } from 'react';
import * as S from './BackButton.style';

const BackButton: React.FC<Props> = ({ onBackClick }) => {
  return (
    <S.BackButton onClick={onBackClick}>
      <S.BackArrow />
      <S.BackText>Back</S.BackText>
    </S.BackButton>
  );
};

type Props = {
  onBackClick: () => void;
};

export default memo(BackButton);
