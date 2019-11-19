import styled from 'styled-components';
import { Body } from '../Typography/Typography';

export const BackButton = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 21px;
`;

export const BackArrow = styled.img.attrs({
  src: '/images/back-arrow.png'
})`
  height: 13px;
  margin-right: 9px;
  width: 8px;
`;

export const BackText = styled(Body)`
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;
