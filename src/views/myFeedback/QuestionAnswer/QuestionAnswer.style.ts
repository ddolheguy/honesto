import styled from 'styled-components';
import { Typography } from '../../../components';

type ContainerProps = {
  isVertical: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: ${({ isVertical }) => (isVertical ? 'flex-start' : 'center')};
  flex-direction: ${({ isVertical }) => (isVertical ? 'column' : 'row')};
  justify-content: space-between;
  padding: 22px;
  border-bottom: 1px solid rgba(172, 177, 182, 0.33);
`;

type QuestionTextProps = {
  isSkipped: boolean;
};

export const QuestionText = styled(Typography.Body)<QuestionTextProps>`
  color: ${({ isSkipped, theme }) =>
    isSkipped ? theme.colours.midGrey : theme.colours.black};
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  width: 50%;
`;

export const SkippedPanel = styled.div`
  color: ${({ theme }) => theme.colours.white};
  background-color: ${({ theme }) => theme.colours.midGrey};
  border-radius: 3px;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.15em;
  padding: 3px 0;
  margin: 3px 0;
  text-transform: uppercase;
  text-align: center;
  width: 90px;
`;

export const AnswerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

const Tile = styled.div`
  background-color: ${({ theme }) => theme.colours.lightGrey};
  height: 28px;
  margin-right: 3px;
`;

export const SmallTile = styled(Tile)`
  background-color: ${({ color }) => color};
  width: 38px;
`;

export const LargeTile = styled(Tile)`
  background-color: ${({ color }) => color};
  width: 160px;
`;

export const Text = styled(Typography.Body)`
  margin-top: 15px;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
`;
