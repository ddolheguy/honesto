import styled from 'styled-components';
import { Typography } from '../../../components';

export const Container = styled.div`
  border-left: 1px solid rgba(172, 177, 182, 0.33);
`;

export const Headline = styled(Typography.H1)`
  font-size: 22px;
  line-height: 26px;
  padding: 18px;
  border-bottom: 1px solid rgba(172, 177, 182, 0.33);
`;
