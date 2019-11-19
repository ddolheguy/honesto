import styled from 'styled-components';
import { Typography } from '../../../components';

export const Container = styled.div``;

type OptionProps = {
  answered: boolean;
};

export const Option = styled(Typography.Body)<OptionProps>`
  background-color: ${({ answered, theme }) =>
    answered ? theme.colours.darkGrey : theme.colours.lightGrey};
  color: ${({ answered, theme }) =>
    answered ? theme.colours.white : theme.colours.black};
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  margin-bottom: 10px;
  padding: 19px 31px;
`;
