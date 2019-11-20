import styled from 'styled-components';
import { Body } from '../Typography/Typography';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colours.black};
  padding: 0 11px 0 132px;
  height: 54px;
`;

export const TheoremLogo = styled.img.attrs({
  src: '/images/theorem.png'
})`
  height: 16px;
  width: 98px;
`;

export const CopyrightText = styled(Body)`
  color: ${({ theme }) => theme.colours.white};
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;

  span {
    font-weight: 500;
  }
`;
