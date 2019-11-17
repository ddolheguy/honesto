import React, { memo } from 'react';
import { connect } from 'react-redux';
import { Button } from '../../../components';
import * as Actions from '../../../redux/actions/authenticationActions';
import * as S from './Login.style';

const Login: React.FC<Props> = ({ onAuthenticate }) => {
  return (
    <S.Container>
      <S.LoginContent>
        <S.Logo />
        <S.Title>Honesto</S.Title>
        <S.Line />
        <Button.Primary onClick={() => onAuthenticate()}>
          Login with Google
        </Button.Primary>
      </S.LoginContent>
    </S.Container>
  );
};

const mapDispatch = {
  onAuthenticate: Actions.onAuthenticate.request
};

type Props = typeof mapDispatch & {};

export default connect(null, mapDispatch)(memo(Login));
