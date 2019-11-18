import React from 'react';
import * as S from './Footer.style';

const Footer: React.FC<Props> = props => {
  return (
    <S.Container>
      <S.TheoremLogo />
      <S.CopyrightText>
        Copyright © 2018 <span>Theorem</span>, LLC. All Rrights Reserved.
      </S.CopyrightText>
    </S.Container>
  );
};

type Props = {};

export default Footer;
