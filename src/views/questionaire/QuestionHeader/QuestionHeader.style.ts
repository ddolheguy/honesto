import styled from 'styled-components';
import { Typography } from '../../../components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Headline = styled(Typography.H1)`
  font-size: 31px;
  line-height: 36px;
  margin-bottom: 12px;
`;

export const TagLine = styled(Typography.H1)`
  color: ${({ theme }) => theme.colours.disabled};
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

export const Avatar = styled.img`
  height: 58px;
  width: 58px;
`;
