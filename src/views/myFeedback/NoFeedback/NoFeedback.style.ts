import styled from 'styled-components';
import { Typography } from '../../../components';

export const Container = styled.div`
  border: 1px solid rgba(172, 177, 182, 0.33);
  padding: 54px 29px;
  margin-top: 70px;
`;

export const Headline = styled(Typography.H1)`
  font-size: 31px;
  line-height: 36px;
`;

export const TagLine = styled(Typography.Body)`
  color: ${({ theme }) => theme.colours.darkGrey};
  font-size: 16px;
  line-height: 19px;
  margin-top: 6px;
`;
