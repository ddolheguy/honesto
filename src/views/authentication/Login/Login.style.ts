import styled from 'styled-components';
import { logo } from '../../../assets/images';
import { Typography } from '../../../components';

export const Container = styled.div`
  background: url('/images/background.png') no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const OverlayBackground1 = styled.div`
  position: absolute;
  left: -86.27px;
  top: 114.65px;
  border-radius: 2000px;
  background: linear-gradient(180deg, #d5b0f2 0%, rgba(213, 176, 242, 0) 100%);
  mix-blend-mode: multiply;
  height: 2081.85px;
  width: 2081.68px;
  z-index: -30;
`;

export const OverlayBackground2 = styled.div`
  position: absolute;
  left: -1381.4px;
  top: -1429px;
  width: 3087.03px;
  height: 3087.3px;
  border-radius: 2000px;
  background: linear-gradient(180deg, #1ddebb 0%, rgba(29, 222, 187, 0) 100%);
  mix-blend-mode: multiply;
  z-index: -20;
`;

export const OverlayBackground3 = styled.div`
  position: absolute;
  left: -2576px;
  top: -748.85px;
  width: 3808.52px;
  height: 3808.85px;
  border-radius: 2000px;
  background: linear-gradient(180deg, #d5b0f2 0%, rgba(213, 176, 242, 0) 100%);
  mix-blend-mode: multiply;
  z-index: -10;
`;

export const OverlayBackground4 = styled.div`
  position: absolute;
  left: -576px;
  top: -683px;
  width: 2578.44px;
  height: 2578.66px;
  border-radius: 2000px;
  background: linear-gradient(180deg, #d5b0f2 0%, rgba(213, 176, 242, 0) 100%);
  mix-blend-mode: multiply;
  z-index: -5;
`;

export const LoginContent = styled.div`
  background-color: ${({ theme }) => theme.colours.white};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 382px;
  width: 380px;
`;

export const Logo = styled.img.attrs({
  src: logo
})`
  height: 70px;
  margin-bottom: 34px;
  width: 69px;
`;

export const Line = styled.div`
  align-self: center;
  border-top: 1px solid ${({ theme }) => theme.colours.lightGrey};
  margin-bottom: 34px;
  width: 190px;
`;

export const Title = styled(Typography.H1)`
  margin-bottom: 40px;
`;
