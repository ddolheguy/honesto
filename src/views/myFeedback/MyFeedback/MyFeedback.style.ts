import Select from 'react-select';
import styled from 'styled-components';
import { Button } from '../../../components';
import { Typography } from '../../../components';

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 50px;
  width: 100%;
`;

export const SplitRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledPrimary = styled(Button.Primary)`
  align-self: flex-end;
`;

export const FeedbackPeriod = styled.div`
  margin-right: 20px;
`;

export const Headline = styled(Typography.H1)`
  font-size: 31px;
  line-height: 36px;
`;

export const FieldLabel = styled(Typography.FieldLabel)``;

export const StyledSelect = styled(Select)`
  width: 340px;
`;

export const Content = styled.div`
  border: 1px solid rgba(172, 177, 182, 0.33);
  margin-top: 21px;
`;

export const FeedbackTitle = styled(Typography.Body)`
  padding: 14px 0 0 13px;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

export const EmployeeList = styled.div`
  border-top: 1px solid rgba(172, 177, 182, 0.33);
  border-right: 1px solid rgba(172, 177, 182, 0.33);
  margin-top: 14px;
`;
