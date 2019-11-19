import styled from 'styled-components';
import { Typography } from '../../../components';

export const Container = styled.div``;

export const SplitRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Headline = styled(Typography.H1)`
  font-size: 31px;
  line-height: 36px;
`;

export const SubHeadline = styled(Typography.H1)`
  color: ${({ theme }) => theme.colours.darkGrey};
  font-size: 16px;
  line-height: 19px;
  margin-top: 10px;
`;

export const EmployeeList = styled.div`
  border-top: 1px solid rgba(172, 177, 182, 0.33);
  border-left: 1px solid rgba(172, 177, 182, 0.33);
  border-right: 1px solid rgba(172, 177, 182, 0.33);
  margin-top: 17px;
`;
