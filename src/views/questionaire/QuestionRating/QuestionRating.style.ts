import styled from 'styled-components';
import { Typography } from '../../../components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 55px;
`;

export const Description = styled(Typography.Body)`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  margin-bottom: 32px;
`;

export const RatingBar = styled.div`
  display: flex;
  align-items: center;
`;

type TileProps = {
  active: boolean;
};

export const Tile = styled.div<TileProps>`
  background-color: ${({ active, theme }) =>
    active ? theme.colours.darkPurple : theme.colours.lightGrey};
  margin: 1px;
  height: 73px;
  width: 73px;
`;

export const RatingValue = styled(Typography.Body)`
  font-size: 16px;
  line-height: 19px;
  padding-top: 7px;
  text-align: right;
`;
